import {
  startTransition,
  useEffect,
  useEffectEvent,
  useId,
  useRef,
  useState
} from "react";
import type { CSSProperties, KeyboardEvent, TouchEvent } from "react";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import WestRoundedIcon from "@mui/icons-material/WestRounded";
import { AnimatePresence, motion } from "motion/react";

import type { Testimonial } from "../../data/landing-content";

type TestimonialCarouselProps = {
  items: Testimonial[];
};

const AUTO_ADVANCE_MS = 7000;

export function TestimonialCarousel({ items }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const carouselId = useId();
  const touchStartX = useRef<number | null>(null);

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

  const goToIndex = (nextIndex: number) => {
    startTransition(() => {
      setActiveIndex((nextIndex + items.length) % items.length);
    });
  };

  const showNext = useEffectEvent(() => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % items.length);
  });

  const showPrevious = useEffectEvent(() => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + items.length) % items.length);
  });

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
    setIsPaused(true);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    const endX = event.changedTouches[0]?.clientX ?? null;
    const startX = touchStartX.current;

    touchStartX.current = null;
    setIsPaused(false);

    if (startX === null || endX === null) {
      return;
    }

    const swipeDistance = endX - startX;

    if (Math.abs(swipeDistance) < 48) {
      return;
    }

    if (swipeDistance > 0) {
      showPrevious();
      return;
    }

    showNext();
  };

  useEffect(() => {
    if (items.length < 2 || isPaused || prefersReducedMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      showNext();
    }, AUTO_ADVANCE_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [items.length, isPaused, prefersReducedMotion]);

  if (items.length === 0) {
    return null;
  }

  const activeItem = items[activeIndex];
  const progress = `${((activeIndex + 1) / items.length) * 100}%`;

  return (
    <div
      className="testimonials-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonios de pacientes"
      aria-describedby={items.length > 1 ? `${carouselId}-instructions` : undefined}
      tabIndex={0}
      style={{ "--testimonial-progress": progress } as CSSProperties}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          showPrevious();
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();
          showNext();
        }
      }}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        const nextFocusedElement = event.relatedTarget;

        if (
          nextFocusedElement instanceof Node &&
          event.currentTarget.contains(nextFocusedElement)
        ) {
          return;
        }

        setIsPaused(false);
      }}
    >
      <p className="sr-only" aria-live="polite">
        {`Mostrando testimonio ${activeIndex + 1} de ${items.length}: ${activeItem.author}`}
      </p>
      {items.length > 1 ? (
        <p className="sr-only" id={`${carouselId}-instructions`}>
          Desliza horizontalmente o usa las flechas izquierda y derecha para cambiar
          el testimonio.
        </p>
      ) : null}

      <div className="testimonials-carousel__frame">
        <div className="testimonials-carousel__header">
          <div>
            <p className="section-label testimonials-carousel__label">Testimonios</p>
            <h2 className="testimonials-carousel__eyebrow">
              Historias reales de acompañamiento nutricional
            </h2>
          </div>

          <div className="testimonials-carousel__status" aria-hidden="true">
            <span className="testimonials-carousel__count">
              {String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
            <span className="testimonials-carousel__progress">
              <span className="testimonials-carousel__progress-bar" />
            </span>
          </div>
        </div>

        <div className="testimonials-carousel__viewport">
          <AnimatePresence initial={false} mode="wait">
            <motion.figure
              key={`${activeItem.author}-${activeIndex}`}
              id={`${carouselId}-slide`}
              className="testimonial-card"
              initial={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 22, filter: "blur(10px)" }
              }
              animate={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, filter: "blur(0px)" }
              }
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -16, filter: "blur(8px)" }
              }
              transition={{
                duration: prefersReducedMotion ? 0.2 : 0.55,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <span className="testimonial-card__quote-mark" aria-hidden="true">
                “
              </span>

              <blockquote className="testimonial-card__quote">{activeItem.quote}</blockquote>

              <figcaption className="testimonial-card__meta">
                <span className="testimonial-card__author">{activeItem.author}</span>
                {activeItem.age ? (
                  <span className="testimonial-card__details">{`${activeItem.age} años`}</span>
                ) : null}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {items.length > 1 ? (
          <div className="testimonials-carousel__footer">
            <div
              className="testimonials-carousel__dots"
              role="tablist"
              aria-label="Seleccionar testimonio"
            >
              {items.map((item, index) => (
                <button
                  key={`${item.author}-${index}`}
                  type="button"
                  role="tab"
                  className={[
                    "testimonials-carousel__dot",
                    index === activeIndex ? "testimonials-carousel__dot--active" : ""
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-selected={index === activeIndex}
                  aria-controls={`${carouselId}-slide`}
                  aria-label={`Ver testimonio ${index + 1} de ${items.length}`}
                  onClick={() => goToIndex(index)}
                />
              ))}
            </div>

            <div className="testimonials-carousel__controls">
              <button
                type="button"
                className="testimonials-carousel__arrow"
                aria-label="Mostrar testimonio anterior"
                onClick={() => showPrevious()}
              >
                <WestRoundedIcon />
              </button>
              <button
                type="button"
                className="testimonials-carousel__arrow"
                aria-label="Mostrar siguiente testimonio"
                onClick={() => showNext()}
              >
                <EastRoundedIcon />
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
