import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/Button'

export default function BackButton() {
  const navigate = useNavigate()

  function handleBackBtn(ev) {
    ev.preventDefault()
    navigate(-1)
  }

  return (
    <Button type="back" onClick={handleBackBtn}>
      &larr; Back
    </Button>
  )
}
