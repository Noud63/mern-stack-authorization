import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {

    const { userInfo } = useSelector((state) => state.auth)

/* Outlet lets you use any route if you are logged in, if not logged in you wil be redirected to the login page */
  return (
    userInfo ? <Outlet/> : <Navigate to="/login" replace />
  )
}

export default PrivateRoute
