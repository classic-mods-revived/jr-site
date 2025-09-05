'use client'

import { useEffect } from 'react'

export default function DisableCopyPage() {
    return (
        <style dangerouslySetInnerHTML={{
            __html: `
/* Hide explicit Copy Page control variants */
[aria-label="Copy page URL"],
[data-copy-page],
.nextra-copy-page {
  display: none !important;
}

/* Hide Headless UI listbox trigger next to the copy button */
button[aria-haspopup="listbox"][id^="headlessui-listbox-button"] {
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