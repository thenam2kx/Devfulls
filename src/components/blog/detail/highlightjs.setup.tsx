"use client"

import { useEffect } from "react"

// This component can be used to initialize highlight.js in your layout or page component
const HighlightJsSetup = () => {
  useEffect(() => {
    // Dynamically import highlight.js to avoid SSR issues
    const loadHighlightJs = async () => {
      const hljs = (await import("highlight.js")).default

      // Register languages you want to support
      const typescript = await import("highlight.js/lib/languages/typescript")
      const javascript = await import("highlight.js/lib/languages/javascript")
      const jsx = await import("highlight.js/lib/languages/javascript")
      const css = await import("highlight.js/lib/languages/css")
      const xml = await import("highlight.js/lib/languages/xml")

      hljs.registerLanguage("typescript", typescript.default)
      hljs.registerLanguage("javascript", javascript.default)
      hljs.registerLanguage("jsx", jsx.default)
      hljs.registerLanguage("css", css.default)
      hljs.registerLanguage("xml", xml.default)

      // Initialize highlighting
      hljs.highlightAll()

      // Re-highlight when content changes
      const observer = new MutationObserver(() => {
        hljs.highlightAll()
      })

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      })

      return () => observer.disconnect()
    }

    loadHighlightJs()
  }, [])

  return null
}

export default HighlightJsSetup