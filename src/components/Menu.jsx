import UserInfo from "./UserInfo"

function Menu({ isOpen }) {
    return (
      <div
        className={`fixed top-0 left-0 w-80 h-full bg-slate-600 transform transition-transform duration-300 ease-in-out z-30 shadow-lg shadow-gray-500/50  ${
        isOpen ? 'translate-x-0' : '-translate-x-full'}`}>  
        <div className="p-4">
          <div  className="w-6 h-6 flex flex-col">
            <UserInfo/>
          </div>

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