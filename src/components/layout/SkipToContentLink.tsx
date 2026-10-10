/**
 * Skip to main content link for keyboard accessibility
 * Hidden by default, visible on focus
 */
export default function SkipToContentLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 bg-espresso text-white px-4 py-2"
    >
      Skip to main content
    </a>
  );
}
