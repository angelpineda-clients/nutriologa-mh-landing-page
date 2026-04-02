import { readdirSync } from "node:fs";
import { extname } from "node:path";
import { fileURLToPath } from "node:url";

import type { CredentialDocument } from "../data/landing-content";

const credentialsDirectory = fileURLToPath(
  new URL("../../public/images/credentials", import.meta.url)
);

const supportedExtensions = new Set([".png", ".jpg", ".jpeg", ".pdf", ".webp"]);
const portraitPattern = /^portrait\.(png|jpe?g|webp)$/i;
const previewSuffixPattern = /-preview$/i;

const toPublicPath = (fileName: string) =>
  `/images/credentials/${encodeURIComponent(fileName)}`;

const withoutExtension = (fileName: string) => fileName.replace(/\.[^.]+$/, "");

const toDisplayExtension = (extension: string) => {
  const normalized = extension.replace(/^\./, "").toLowerCase();

  if (normalized === "jpeg") {
    return "JPG";
  }

  return normalized.toUpperCase();
};

const formatCredentialTitle = (fileName: string) => {
  const baseName = fileName.replace(/\.[^.]+$/, "");

  const cleaned = baseName
    .replace(/(^|[-_\s])credencial(?:es)?(?=$|[-_\s])/gi, " ")
    .replace(/[-_]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();

  return cleaned || "Documento";
};

export const getCredentialsMedia = () => {
  const files = readdirSync(credentialsDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((fileName) => !fileName.startsWith("."))
    .filter((fileName) => supportedExtensions.has(extname(fileName).toLowerCase()));

  const previewMap = new Map(
    files
      .filter((fileName) => previewSuffixPattern.test(withoutExtension(fileName)))
      .map((fileName) => [
        withoutExtension(fileName).replace(previewSuffixPattern, ""),
        toPublicPath(fileName)
      ])
  );

  const portraitFile = files.find((fileName) => portraitPattern.test(fileName));
  const portraitImage = portraitFile
    ? toPublicPath(portraitFile)
    : "/images/credentials/portrait.webp";

  const documents: CredentialDocument[] = files
    .filter((fileName) => !portraitPattern.test(fileName))
    .filter((fileName) => !previewSuffixPattern.test(withoutExtension(fileName)))
    .sort((left, right) => left.localeCompare(right, "es", { numeric: true }))
    .map((fileName) => {
      const extension = extname(fileName).toLowerCase();
      const kind = extension === ".pdf" ? "pdf" : "image";
      const title = formatCredentialTitle(fileName);
      const extensionLabel = toDisplayExtension(extension);
      const sourcePath = toPublicPath(fileName);
      const previewImage = kind === "pdf" ? previewMap.get(withoutExtension(fileName)) : undefined;

      return {
        title,
        image: previewImage ?? sourcePath,
        alt:
          kind === "pdf" && previewImage
            ? `Vista previa del documento ${title}`
            : kind === "pdf"
              ? `Archivo PDF de ${title}`
            : `Vista previa del documento ${title}`,
        kind,
        extension: extensionLabel,
        note: kind === "pdf" ? "Archivo PDF" : undefined,
        document: kind === "pdf" ? sourcePath : undefined
      };
    });

  return {
    portraitImage,
    documents
  };
};
