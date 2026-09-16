/**
 * Puts the colour-scheme toggle in the nav bar, immediately left of search.
 *
 * The theme renders the toggle in the footer's legal row and the search
 * button at the end of the nav. Both are site-wide controls, so both belong
 * in the same place, and the end of the nav is where people look for them.
 *
 * This moves the theme's own button rather than rendering a second one: the
 * click handler, the `at-theme` storage key and the head script that reads it
 * all address `.at-footer-theme-toggle`, and a duplicate would be a second
 * source of truth for the same setting. Moving a node keeps its listeners, so
 * nothing has to be re-bound.
 *
 * With no JavaScript the toggle stays in the footer, which is where the theme
 * put it and where it still works.
 */
const CONTROLS_CLASS = "site-nav-controls";

function isSeparator(node: Element | null): boolean {
  return node?.tagName === "SPAN" && node.getAttribute("aria-hidden") === "true";
}

/** The head script sets this on first paint, before the button is parsed. */
function syncToggleLabel(toggle: HTMLElement): void {
  const label =
    document.documentElement.dataset.theme === "dark"
      ? "Switch to light theme"
      : "Switch to dark theme";
  toggle.setAttribute("aria-label", label);
  toggle.setAttribute("title", label);
}

function moveThemeToggle(): void {
  const bar = document.querySelector<HTMLElement>(".at-nav-inner");
  const toggle = document.querySelector<HTMLElement>(".at-footer-theme-toggle");
  if (!bar || !toggle || bar.contains(toggle)) return;

  const legalRow = toggle.closest(".at-footer-legal");
  // The footer draws a "|" before the toggle to separate it from the legal
  // links. It separates nothing once the toggle has gone.
  if (isSeparator(toggle.previousElementSibling)) toggle.previousElementSibling?.remove();

  const search = bar.querySelector(".at-search-trigger");
  const controls = document.createElement("div");
  controls.className = CONTROLS_CLASS;
  bar.insertBefore(controls, search);
  // Toggle first, so it reads to the left of search.
  controls.append(toggle);
  if (search) controls.append(search);
  syncToggleLabel(toggle);

  // This site carries no legal links, so the row the toggle came from is now
  // empty — and an empty row still draws its rule above itself.
  if (legalRow && legalRow.children.length === 0) {
    const rule = legalRow.previousElementSibling;
    if (rule?.tagName === "HR") rule.remove();
    legalRow.remove();
  }
}

moveThemeToggle();
document.addEventListener("astro:page-load", moveThemeToggle);
