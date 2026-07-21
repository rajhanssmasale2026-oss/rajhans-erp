import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/userService";
import { AuthContext } from "../context/AuthContext";

function LoginForm() {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    if (!username || !password) {

      alert("Enter Username and Password");

      return;

    }

    try {

      const result = await loginUser(
        username,
        password
      );

      if (!result.success) {

        alert("Invalid Username or Password");

        return;

      }

      const user = result.user;

      login(user);

      if (user.role === "owner") {

        navigate("/dashboard");

      } else if (user.role === "sales") {

        navigate("/sales");

      } else if (user.role === "production") {

        navigate("/products");

      }

    } catch (error) {

      console.error(error);

      alert("Login Failed");

    }

  };

  return (

    <div className="bg-white shadow-lg rounded-lg p-8 w-[380px]">

      <h2 className="text-3xl font-bold text-center mb-6">
        Rajhans ERP Login
      </h2>

      <input
        type="text"
        placeholder="Username"
        className="w-full border p-3 rounded mb-4"
        value={username}
        onChange={(e) =>
          setUsername(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-3 rounded mb-6"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
        onClick={handleLogin}
        className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
      >
        Login
      </button>

    </div>

  );

}

export default LoginForm;