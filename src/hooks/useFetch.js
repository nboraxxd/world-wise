import { CanceledError } from 'axios'
import { useEffect, useState } from 'react'

export default function useFetch(promise, dependencies = []) {
  const [data, setData] = useState([])
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    ;(async () => {
      try {
        setStatus('pending')

        const response = await promise(controller.signal, ...dependencies)

        setData(response)
        setStatus('successful')
      } catch (err) {
        if (err instanceof CanceledError) {
          setStatus('idle')
          return
        }

        setStatus('rejected')
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Something went wrong')
        }
      }
    })()

    return () => {
      controller.abort()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies])

  return { data, status, error }
}
