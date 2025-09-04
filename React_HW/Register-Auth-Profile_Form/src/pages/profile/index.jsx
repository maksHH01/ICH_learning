import { jwtDecode } from "jwt-decode";
import { logout } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile() {
  const token = localStorage.getItem("token");
  const tokenData = token ? jwtDecode(token) : null;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(tokenData);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <p>{tokenData ? tokenData.user.id : "Login in to account"}</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Profile;
