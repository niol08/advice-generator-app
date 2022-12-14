import { useState, useEffect, useCallback } from "react"

const useFetch = (url) => {
  const [loading, setLoading] = useState(true)
  const [quote, setQuote] = useState([])

  const getQuote = useCallback(async () => {
    try {
      const response = await fetch(url)
      const quote = await response.json()
      setQuote(quote)
      setLoading(false)
    } catch (error) {
      return error
    }
  }, [url])
  useEffect(() => {
    getQuote()
  }, [getQuote])

  useEffect(() => {
    const interval = setInterval(() => {
      getQuote()
    }, 30000)
    return () => {
      clearInterval(interval)
    }
  }, [url, getQuote, quote])

  return { loading, quote, getQuote }
}

export default useFetch
