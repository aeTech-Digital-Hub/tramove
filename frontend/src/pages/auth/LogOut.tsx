import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


const LogOut = () => {

  const navigate = useNavigate()

  useEffect(() => {
    navigate('/login')
  }, [])
  return (
    <div>LogOut</div>
  )
}

export default LogOut