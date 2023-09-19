import { useNavigate } from 'react-router-dom';

const LogOut = () => {
    const navigation = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigation('/sign_in')
    }
    return { logout } ;
}
 
export default LogOut;