import { useState, useEffect, useMemo, useContext } from "react";
import Cookies from "universal-cookie";
import { Link, useNavigate, NavLink } from "react-router-dom";
import UserContext from "../context/user/userContext";

const Navbar = () => {
  const navigate = useNavigate();
  const cookies = useMemo(() => new Cookies(), []);
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [isCookiePresent, setIsCookiePresent] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkCookie = () => {
      if (cookies.get("authtoken")) {
        setIsCookiePresent(true);
      } else {
        setIsCookiePresent(false);
      }
    };

    checkCookie();
    const interval = setInterval(checkCookie, 1000);
    return () => clearInterval(interval);
  }, [cookies]);

  const handleLogout = () => {
    cookies.remove("authtoken");
    setIsCookiePresent(false);
    setUserInfo(null);
    navigate('/');
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <nav className={`bg-white border-gray-200 ${isDarkMode ? 'dark:bg-gray-900' : ''} transition-transform duration-500 ease-in-out transform translate-y-0 hover:translate-y-[-2px]`}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              LizMotors
            </span>
          </NavLink>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            {isCookiePresent && userInfo && (
              <span className="text-sm text-gray-800 dark:text-white">
                Welcome, {userInfo.name}
              </span>
            )}
            {isCookiePresent ? (
              <div
                onClick={handleLogout}
                className="text-sm text-white hover:underline cursor-pointer transition-colors duration-300 ease-in-out hover:text-gray-400"
              >
                Log Out
              </div>
            ) : (
              <Link
                to="/login"
                className="text-sm text-white hover:underline transition-colors duration-300 ease-in-out hover:text-gray-400"
              >
                Login
              </Link>
            )}
            <button
              onClick={toggleDarkMode}
              className="text-sm text-white hover:underline cursor-pointer transition-colors duration-300 ease-in-out hover:text-gray-400"
            >
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </nav>
      <nav className={`bg-gray-50 ${isDarkMode ? 'dark:bg-gray-700' : ''} transition-transform duration-500 ease-in-out transform translate-y-0 hover:translate-y-[-2px]`}>
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 dark:text-blue-400 underline"
                      : "text-gray-900 dark:text-white hover:underline transition-colors duration-300 ease-in-out hover:text-blue-500"
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 dark:text-blue-400 underline"
                      : "text-gray-900 dark:text-white hover:underline transition-colors duration-300 ease-in-out hover:text-blue-500"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tutorials"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-500 dark:text-blue-400 underline"
                      : "text-gray-900 dark:text-white hover:underline transition-colors duration-300 ease-in-out hover:text-blue-500"
                  }
                >
                  Tutorials
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
