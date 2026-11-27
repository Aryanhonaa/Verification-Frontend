/** Verify details checkbox. A saved "no" stays off; an empty answer follows the title rule. */
export function engineeringCheckboxChecked(
  stored: boolean | null,
  titleNamesEngineering: boolean,
): boolean {
  return stored === true || (stored == null && titleNamesEngineering);
}
