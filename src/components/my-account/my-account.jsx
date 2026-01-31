import React, { useState, useEffect } from "react";
import HeroBackground from "../../../images/p1.jpg";
import LogoIcon from "../../../images/ecoo-removebg-preview.png";
import { useNavigate, useLocation } from "react-router-dom";


/* ================= Hero ================= */
const HeroSection = () => (
  <div className="w-full pt-20">
    <div className="relative h-72 flex items-center justify-center overflow-hidden">
      <img
        src={HeroBackground}
        className="absolute inset-0 w-full h-full object-cover blur-sm opacity-80"
        alt="bg"
      />
      <div className="relative z-10 text-center">
        <img src={LogoIcon} className="w-12 mx-auto mb-2" alt="logo" />
        <h1 className="text-4xl font-medium">My Account</h1>
        <p className="text-sm mt-1">Home &gt; My Account</p>
      </div>
    </div>
  </div>
);

/* ================= Features ================= */
const FeaturesSection = () => (
  <div className="bg-pink-50 py-20 px-6 sm:px-16 flex flex-col sm:flex-row justify-between gap-10 sm:gap-0">
    {["Free Delivery", "90 Days Return", "Secure Payment"].map((t) => (
      <div key={t} className="text-center max-w-xs mx-auto sm:mx-0">
        <h3 className="font-semibold mb-1">{t}</h3>
        <p className="text-sm text-gray-500">
          For all orders over $50, consectetur adipiscing elit.
        </p>
      </div>
    ))}
  </div>
);

/* ================= Page ================= */
export default function MyAccount() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ email: "", password: "" });
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState("");

  const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];
  const saveUsers = (users) => localStorage.setItem("users", JSON.stringify(users));

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) setCurrentUser(user);
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    if (!registerData.email || !registerData.password) {
      setError("All fields are required");
      setRegisterData({ email: "", password: "" });
      return;
    }

    const users = getUsers();
    if (users.find((u) => u.email === registerData.email)) {
      setError("Email already exists");
      setRegisterData({ email: "", password: "" });
      return;
    }

    users.push(registerData);
    saveUsers(users);
    setRegisterData({ email: "", password: "" });
    alert("Account created successfully");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const users = getUsers();
    const user = users.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );

    if (!user) {
      setError("Invalid email or password");
      setLoginData({ email: "", password: "" });
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    setCurrentUser(user);
    
    setLoginData({ email: "", password: "" });
    if (location.state?.from) {
        navigate(location.state.from);
  }

  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
  };

  return (
    <div>
      <HeroSection />

      <main className="py-20 px-6 sm:px-16">
        {currentUser ? (
          <div className="max-w-md mx-auto text-center bg-white p-6 shadow rounded">
            <h2 className="text-xl mb-4">Welcome {currentUser.email}</h2>
            <button
              onClick={logout}
              className="bg-gray-800 text-white px-6 py-2"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Login */}
            <form onSubmit={handleLogin} className="bg-white p-6 shadow rounded">
              <h2 className="text-2xl mb-6">Log In</h2>
              <label>Email</label>
              <input
                type="email"
                className="border p-3 w-full mb-4"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
              <label>Password</label>
              <input
                type="password"
                className="border p-3 w-full mb-4"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
              <button className="border px-6 py-2">Log In</button>
            </form>

            {/* Register */}
            <form onSubmit={handleRegister} className="bg-white p-6 shadow rounded">
              <h2 className="text-2xl mb-6">Register</h2>
              <label>Email</label>
              <input
                type="email"
                className="border p-3 w-full mb-4"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({ ...registerData, email: e.target.value })
                }
              />
              <label>Password</label>
              <input
                type="password"
                className="border p-3 w-full mb-4"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({ ...registerData, password: e.target.value })
                }
              />
              <button className="bg-gray-800 text-white px-6 py-2">Register</button>
            </form>
          </div>
        )}

        {error && (
          <p className="text-center text-red-600 mt-6">{error}</p>
        )}
      </main>

      <FeaturesSection />
    </div>
  );
}
