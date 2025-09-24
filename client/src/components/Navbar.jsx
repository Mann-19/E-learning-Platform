import { NavLink } from "react-router";
import { useAuthContext } from "../hooks/useAuthContext";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const { state } = useAuthContext();
  const { logout } = useLogout();

  return (
    <nav className="px-12 py-2 bg-white flex justify-between items-center font-league shadow-sm">
      {/* Brand */}
      <NavLink
        to="/"
        className="text-2xl font-extrabold text-black tracking-wider mt-1"
      >
        Gradia
      </NavLink>

      {/* Links */}
      <div className="flex items-center gap-6 mt-1">
        <NavLink
          to="/profile"
          className="px-4 py-2 text-lg font-semibold text-gray-600 hover:text-yellow-500 transition"
        >
          Profile
        </NavLink>

        <NavLink
          to="/community"
          className="px-4 py-2 text-lg font-semibold text-gray-600 hover:text-yellow-500 transition"
        >
          Community
        </NavLink>

        <NavLink
          to="/marketplace"
          className="px-4 py-2 text-lg font-semibold text-gray-600 hover:text-yellow-500 transition"
        >
          Marketplace
        </NavLink>

        <NavLink
          to="/settings"
          className="px-4 py-2 text-lg font-semibold text-gray-600 hover:text-yellow-500 transition"
        >
          Settings
        </NavLink>

        {state?.user ? (
          <button
            onClick={logout}
            className="px-4 py-2 text-lg font-semibold text-yellow-400 rounded-lg transition"
          >
            Log Out
          </button>
        ) : (
          <NavLink
            to="/login"
            className="px-4 py-2 text-lg font-semibold text-gray-600 hover:text-yellow-500 transition"
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
