import { NavLink } from "react-router";
import { useAuthContext } from "../hooks/useAuthContext";
import useLogout from '../hooks/useLogout';

const Sidebar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <div className="min-w-[20vw] max-w-[20vw] bg-primary-accent h-screen flex flex-col justify-between p-6 text-black font-league">
      <div>
        <h1 className="text-3xl font-extrabold text-center mt-4">EduMarg</h1>
        <span className="text-base text-center font-regular">{user?.email}</span>
      </div>

      <div className="flex flex-col gap-4">
        <NavLink
          to={"/profile"}
          className="text-xl text-gray-600 bg-[#FFF7B1] px-6 py-3 rounded-xl font-semibold"
        >
          Profile
        </NavLink>
        <NavLink
          to={"/community"}
          className="text-xl text-gray-600 bg-[#FFF7B1] px-6 py-3 rounded-xl font-semibold"
        >
          Community
        </NavLink>
        <NavLink
          to={"/marketplace"}
          className="text-xl text-gray-600 bg-[#FFF7B1] px-6 py-3 rounded-xl font-semibold"
        >
          Marketplace
        </NavLink>
      </div>
      <div className="flex flex-col">
        <NavLink
          to={"/marketplace"}
          className="text-xl text-black font-semibold px-6 py-2"
        >
          Settings
        </NavLink>
        <button
          onClick={logout}
          className="text-xl cursor-pointer text-black font-semibold px-6 py-2 text-left"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
