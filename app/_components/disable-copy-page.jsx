'use client'

import { useEffect } from 'react'

export default function DisableCopyPage() {
    return (
        <style dangerouslySetInnerHTML={{
            __html: `
/* Hide explicit Copy Page control variants (attributes if present) */
[aria-label="Copy page URL"],
[data-copy-page],
.nextra-copy-page {
  display: none !important;
}

/* Hide the entire control group when the Headless UI listbox trigger is present */
.nextra-border:has(> button[aria-haspopup="listbox"][id^="headlessui-listbox-button"]) {
  display: none !important;
}

/* Fallback: hide the control group if it contains the copy icon button (matches the SVG you shared) */
.nextra-border:has(> button:has(> svg rect[x="9"][y="9"][width="13"][height="13"])) {
  display: none !important;
}

/* Extra fallback: if the container class changes, hide the copy icon button itself */
button:has(> svg rect[x="9"][y="9"][width="13"][height="13"]) {
  display: none !important;
}

/* If Copy Page appears as a menu item, hide by label/title */
[role="menuitem"][aria-label*="copy page" i],
[role="menuitem"][title*="copy page" i] {
  display: none !important;
}
`
        }} />
    )
}