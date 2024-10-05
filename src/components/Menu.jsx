import UserInfo from "./UserInfo"
function Menu({ isOpen }) {
    return (
      <div
        className={`fixed top-0 left-0 w-96 h-full bg-slate-600 shadow-lg transform transition-transform duration-300 ease-in-out z-30 shadow-lg shadow-gray-500/50  ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <h2 className="text-lg font-bold mb-4">User Info</h2>
          <ul>
            <li className="mb-2">Settings</li>
            <li className="mb-2">Profile</li>
            <li className="mb-2">Logout</li>
          </ul>
        </div>
      </div>
    );
  }

export default Menu