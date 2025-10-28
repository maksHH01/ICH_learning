import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

import { selectAuthUser } from "../../redux/auth/auth-selectors";

import { logout } from "../../redux/auth/auth-thunks";

import styles from "./Header.module.css";

const Header = ()=> {
    const user = useSelector(selectAuthUser);
    const dispatch = useDispatch();

    const onLogout = ()=> dispatch(logout());

    if(!user) return null;

    return (
        <header className={styles.header}>
            <div>
            <p className={styles.userFullName}>{user.username}</p>
                <Link to="/contacts" className={styles.logo}>My contacts</Link>
            </div>
            
            <div className={styles.userInfo}>
                
                <Button onClick={onLogout} variant="contained">Logout</Button>
            </div>
        </header>
    )
}

export default Header;