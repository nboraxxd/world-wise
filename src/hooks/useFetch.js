import { useEffect, useState } from 'react'
import { CanceledError } from 'axios'
import { toast } from 'sonner'

export default function useFetch(promise, dependencies = [], options = {}) {
  const [data, setData] = useState([])
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    if (options.disable) return
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
          toast.error(err.message)
          setError(err.message)
        } else {
          toast.error('Something went wrong')
          setError('Something went wrong')
        }

        throw err
      }
    })()

    return () => {
      controller.abort()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencies])

  return { data, status, error }
}
