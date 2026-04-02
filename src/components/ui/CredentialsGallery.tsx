import {
  startTransition,
  useEffect,
  useEffectEvent,
  useId,
  useRef,
  useState
} from "react";
import { createPortal } from "react-dom";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import { AnimatePresence, motion } from "motion/react";

import type {
  CredentialDocument,
  CredentialsGalleryLabels
} from "../../data/landing-content";

import "../../styles/ui/credentials-gallery.css";

type CredentialsGalleryProps = {
  items: CredentialDocument[];
  labels: CredentialsGalleryLabels;
};

export function CredentialsGallery({ items, labels }: CredentialsGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);

    return () => {
      mediaQuery.removeEventListener("change", syncPreference);
    };
  }, []);

  const openItem = useEffectEvent((index: number) => {
    startTransition(() => {
      setActiveIndex(index);
    });
  });

  const closeItem = useEffectEvent(() => {
    const currentIndex = activeIndex;

    startTransition(() => {
      setActiveIndex(null);
    });

    if (currentIndex === null) {
      return;
    }

    window.requestAnimationFrame(() => {
      triggerRefs.current[currentIndex]?.focus();
    });
  });

  const showPrevious = useEffectEvent(() => {
    startTransition(() => {
      setActiveIndex((currentIndex) => {
        if (currentIndex === null) {
          return 0;
        }

        return (currentIndex - 1 + items.length) % items.length;
      });
    });
  });

  const showNext = useEffectEvent(() => {
    startTransition(() => {
      setActiveIndex((currentIndex) => {
        if (currentIndex === null) {
          return 0;
        }

        return (currentIndex + 1) % items.length;
      });
    });
  });

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeItem();
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [activeIndex]);

  if (items.length === 0) {
    return null;
  }

  const activeItem = activeIndex === null ? null : items[activeIndex];
  const transition = prefersReducedMotion
    ? { duration: 0.16, ease: "easeOut" as const }
    : { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const };
  const portalTarget = typeof document !== "undefined" ? document.body : null;
  const dialog = activeItem ? (
    <motion.div
      className="credentials-gallery__dialog"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
    >
      <button
        type="button"
        className="credentials-gallery__backdrop"
        aria-label={labels.closeLabel}
        onClick={() => closeItem()}
      />

      <motion.div
        className="credentials-gallery__panel"
        role="dialog"
        aria-modal="true"
        aria-label={labels.dialogLabel}
        aria-labelledby={titleId}
        initial={
          prefersReducedMotion
            ? { opacity: 0.01 }
            : { opacity: 0, y: 24, scale: 0.98, filter: "blur(10px)" }
        }
        animate={
          prefersReducedMotion
            ? { opacity: 1 }
            : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
        }
        exit={
          prefersReducedMotion
            ? { opacity: 0.01 }
            : { opacity: 0, y: 16, scale: 0.99, filter: "blur(8px)" }
        }
        transition={transition}
      >
        <div className="credentials-gallery__panel-header">
          <p className="credentials-gallery__status">
            {`${labels.counterLabel} ${String(activeIndex + 1).padStart(2, "0")} / ${String(
              items.length
            ).padStart(2, "0")}`}
          </p>

          <button
            ref={closeButtonRef}
            type="button"
            className="credentials-gallery__close"
            aria-label={labels.closeLabel}
            onClick={() => closeItem()}
          >
            <CloseRoundedIcon />
          </button>
        </div>

        <div className="credentials-gallery__panel-body">
          <figure className="credentials-gallery__figure">
            <div className="credentials-gallery__figure-frame">
              {activeItem.kind === "pdf" ? (
                <iframe
                  className="credentials-gallery__figure-pdf"
                  src={`${activeItem.image}#view=FitH&toolbar=0&navpanes=0`}
                  title={activeItem.alt}
                />
              ) : (
                <img
                  className="credentials-gallery__figure-image"
                  src={activeItem.image}
                  alt={activeItem.alt}
                  width="600"
                  height="840"
                />
              )}
            </div>
          </figure>

          <div className="credentials-gallery__details">
            <h3 className="credentials-gallery__title" id={titleId}>
              {activeItem.title}
            </h3>

            <div className="credentials-gallery__controls">
              <button
                type="button"
                className="credentials-gallery__nav"
                aria-label={labels.previousLabel}
                onClick={() => showPrevious()}
              >
                <WestRoundedIcon />
                <span>Anterior</span>
              </button>

              <button
                type="button"
                className="credentials-gallery__nav"
                aria-label={labels.nextLabel}
                onClick={() => showNext()}
              >
                <span>Siguiente</span>
                <EastRoundedIcon />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  ) : null;

  return (
    <div className="credentials-gallery">
      <ul className="credentials-gallery__grid" aria-label={labels.gridLabel}>
        {items.map((item, index) => (
          <li className="credentials-gallery__item" key={`${item.title}-${index}`}>
            <button
              ref={(element) => {
                triggerRefs.current[index] = element;
              }}
              type="button"
              className="credential-card"
              aria-haspopup="dialog"
              aria-label={`${labels.openItemPrefix} ${item.title}`}
              onClick={() => openItem(index)}
            >
              <span className="credential-card__art">
                {item.kind === "pdf" ? (
                  <span className="credential-card__paper credential-card__paper--pdf" aria-hidden="true">
                    <span className="credential-card__pdf-title">{item.title}</span>
                    <span className="credential-card__pdf-lines">
                      <span className="credential-card__pdf-line" />
                      <span className="credential-card__pdf-line" />
                      <span className="credential-card__pdf-line credential-card__pdf-line--short" />
                    </span>
                  </span>
                ) : (
                  <span className="credential-card__paper">
                    <img
                      className="credential-card__image"
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="840"
                    />
                  </span>
                )}
              </span>

              <span className="credential-card__meta">
                <span className="credential-card__kicker">
                  {`${labels.counterLabel} ${String(index + 1).padStart(2, "0")}`}
                </span>
                <span className="credential-card__title">{item.title}</span>
                <span className="credential-card__hint">{labels.previewHint}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {portalTarget ? createPortal(<AnimatePresence>{dialog}</AnimatePresence>, portalTarget) : null}
    </div>
  );
}
