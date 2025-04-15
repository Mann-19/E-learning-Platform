import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className=" px-16 py-4 bg-transparent flex justify-between font-geologica">
        <h2 className=" text-xl text-yellow-400">Mentormap</h2>

        <div className="flex gap-8">
            <NavLink to="/marketplace" end className="text-yellow-400 text-xl">Marketplace</NavLink>
            <NavLink to="/login" end className={`text-yellow-400 text-xl`}>Login</NavLink>
        </div>
    </nav>
  )
}
export default Navbar;