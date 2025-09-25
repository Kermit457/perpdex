import { useState, useEffect } from 'react'

export function usePythPriceHTTP() {
  const [price, setPrice] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Mock SOL price for now - in real implementation this would fetch from Pyth
    setIsLoading(false)
    setPrice(145.67)
    setError(null)
  }, [])

  return { price, isLoading, error }
}
