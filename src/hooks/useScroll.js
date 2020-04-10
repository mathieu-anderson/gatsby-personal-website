import { useState, useEffect } from "react"

const isBrowser = typeof window !== `undefined`

// Every time we need to read the document
// We check if we have access to the window object
// If we don't, we are at build time and we return a default value
// Or we crash

export const useScroll = () => {
  // Set a single object `{ x: ..., y: ..., direction: ... }` once on init
  const [scroll, setScroll] = useState({
    x: isBrowser ? document.body.getBoundingClientRect().left : 0,
    y: isBrowser ? document.body.getBoundingClientRect().top : 0,
    direction: "",
  })

  const listener = e => {
    // `prev` provides us the previous state: https://reactjs.org/docs/hooks-reference.html#functional-updates
    setScroll(prev => ({
      x: isBrowser ? document.body.getBoundingClientRect().left : 0,
      y: isBrowser ? -document.body.getBoundingClientRect().top : 0,
      // Here we’re comparing the previous state to the current state to get the scroll direction
      direction:
        prev.y > isBrowser
          ? -document.body.getBoundingClientRect().top
            ? "up"
            : "down"
          : "no up or down without browser",
    }))
  }

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener("scroll", listener)
      // cleanup function occurs on unmount
      return () => window.removeEventListener("scroll", listener)
      // Run `useEffect` only once on mount, so add `, []` after the closing curly brace }
    }
    return
  }, [])

  return scroll
}
