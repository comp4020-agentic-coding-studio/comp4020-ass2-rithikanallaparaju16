/**
 * Escape closes the mobile nav menu.
 *
 * The theme's Nav toggles `aria-expanded` and the links wrapper's `inert` on
 * click, but binds no keyboard dismissal — so a keyboard user who opens the
 * menu at a phone width has no way to back out of it. This is the fix, kept
 * at the site level rather than patched into the theme.
 *
 * It deliberately calls `.click()` on the theme's own toggle instead of
 * setting the attributes here: the theme owns the `inert` bookkeeping, and
 * duplicating it is how the two would drift apart.
 */
const CLOSE_KEY = "Escape";

function closeOpenNavMenu(): void {
  // A native <dialog> (the search modal) dismisses itself on Escape. Bail so
  // one keypress never closes two things at once.
  if (document.querySelector("dialog[open]")) return;

  const toggles = document.querySelectorAll<HTMLElement>(
    '.at-nav-toggle[aria-expanded="true"]',
  );

  for (const toggle of toggles) {
    // Above the nav breakpoint the toggle is display:none and the menu is not
    // a menu, so there is nothing to dismiss.
    if (getComputedStyle(toggle).display === "none") continue;
    toggle.click();
    // Send focus back to the control that opened it, which is where a
    // keyboard user expects to land.
    toggle.focus();
  }
}

document.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.key !== CLOSE_KEY || event.defaultPrevented) return;
  closeOpenNavMenu();
});
