import { useEffect, useState } from "react";
import { register } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { status, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (status === "successeded") {
      navigate("/login");
    }
  }, [status, navigate]);

  const { email, password, confirmPassword } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match!");
      return;
    }

    dispatch(register({ email, password }));
  };

  return (
    <div>
      <h2>Registation Form</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "360px",
          gap: "16px",
        }}
      >
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <input type="submit" value="Register" disabled={status === "loading"} />
      </form>
      {status === "successeded" && <p>You successfully register!</p>}
      {status === "failed" && <p>{error.message}</p>}
    </div>
  );
}
export default Register;
