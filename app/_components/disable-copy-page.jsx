'use client'

import { useEffect } from 'react'

export default function DisableCopyPage() {
    useEffect(() => {
        const removeCopyPage = () => {
            // Try common selectors/labels first
            const selectors = [
                '[aria-label="Copy page URL"]',
                '[data-copy-page]',
                '.nextra-copy-page'
            ]
            selectors.forEach(sel => {
                document.querySelectorAll(sel).forEach(el => el.remove())
            })

            // Also remove the Headless UI listbox dropdown next to the copy button
            // (e.g., <button id="headlessui-listbox-button-..." aria-haspopup="listbox">)
            document
                .querySelectorAll('button[aria-haspopup="listbox"][id^="headlessui-listbox-button"]')
                .forEach(btn => {
                    const container =
                        btn.closest('div.nextra-border') ||
                        btn.closest('div[class*="nextra-border"]') ||
                        btn.parentElement
                    ;(container || btn).remove()
                })

            // Fallback: scan buttons/links and remove ones that look like Copy Page
            const candidates = document.querySelectorAll('button, a, [role="menuitem"]')
            candidates.forEach(el => {
                const label = (el.getAttribute('aria-label') || '').toLowerCase()
                const title = (el.getAttribute('title') || '').toLowerCase()
                const text = (el.textContent || '').toLowerCase().trim()
                if (
                    label.includes('copy page') ||
                    label.includes('copy page url') ||
                    title.includes('copy page') ||
                    text === 'copy page' ||
                    text === 'copy' ||
                    text.includes('copy page')
                ) {
                    el.remove()
                }
                // Remove generic Headless UI listbox triggers just in case
                if (
                    el.matches?.('button[aria-haspopup="listbox"]') ||
                    (el.id || '').startsWith('headlessui-listbox-button')
                ) {
                    const container =
                        el.closest?.('div.nextra-border') ||
                        el.closest?.('div[class*="nextra-border"]') ||
                        el.parentElement
                    ;(container || el).remove()
                }
            })
        }

        // Initial run
        removeCopyPage()

        // Observe DOM changes to handle client-side navigation/rerenders
        const obs = new MutationObserver(removeCopyPage)
        obs.observe(document.documentElement, { childList: true, subtree: true })
        return () => obs.disconnect()
    }, [])

    return null
}