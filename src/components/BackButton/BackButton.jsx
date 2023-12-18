import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/Button'
import { PATH } from '@/constants/path'

export default function BackButton() {
  const navigate = useNavigate()

  function handleBackBtn(ev) {
    ev.preventDefault()
    navigate(PATH.APP.CITIES)
  }

  return (
    <Button type="back" onClick={handleBackBtn}>
      &larr; Back
    </Button>
  )
}
