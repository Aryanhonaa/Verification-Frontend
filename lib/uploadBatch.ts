export type UploadCandidate = { name: string; size: number };

const EXT = /\.(pdf|png|jpe?g|docx)$/i;

/** Every selected file is uploaded. Oversized or unsupported files are reported, not dropped silently. */
export function partitionUploads<T extends UploadCandidate>(
  files: readonly T[],
  maxBytes: number,
): { accepted: T[]; errors: string[] } {
  const accepted: T[] = [];
  const errors: string[] = [];
  for (const file of files) {
    if (file.size > maxBytes) {
      errors.push(`${file.name}: File exceeds the 10 MB size limit`);
      continue;
    }
    if (!EXT.test(file.name)) {
      errors.push(`${file.name}: Accepted formats: PDF, PNG, JPG, DOCX`);
      continue;
    }
    accepted.push(file);
  }
  return { accepted, errors };
}
