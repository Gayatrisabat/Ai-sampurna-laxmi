import { NavLink } from 'react-router-dom'
import { FaHome, FaBook, FaGamepad, FaTrophy, FaComments, FaUser } from 'react-icons/fa'

const linkBase = 'flex flex-col items-center justify-center text-xs md:text-sm'
const active = 'text-indigo-700'
const inactive = 'text-slate-500'

function Navbar() {
  return (
    <nav className="fixed bottom-0 inset-x-0 bg-white/90 backdrop-blur border-t border-slate-200 px-2 py-2 md:py-3">
      <div className="max-w-3xl mx-auto grid grid-cols-6 gap-1">
        <NavLink to="/" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
          <FaHome className="text-2xl" />
          <span>Home</span>
        </NavLink>
        <NavLink to="/modules" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
          <FaBook className="text-2xl" />
          <span>Modules</span>
        </NavLink>
        <NavLink to="/games" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
          <FaGamepad className="text-2xl" />
          <span>Games</span>
        </NavLink>
        <NavLink to="/leaderboard" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
          <FaTrophy className="text-2xl" />
          <span>Top</span>
        </NavLink>
        <NavLink to="/forum" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
          <FaComments className="text-2xl" />
          <span>Forum</span>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
          <FaUser className="text-2xl" />
          <span>Me</span>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar