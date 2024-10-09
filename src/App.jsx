
import './style.css'
import ChatDetails from './components/ChatDetails'
import Chat from './components/Chat'
import ChatsList from './components/ChatsList'
import Menu from './components/Menu'
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react'
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[url('../src/assets/bg.jpg')] bg-cover bg-center h-screen ">
      <div className="relative mx-auto h-full flex items-center justify-center flex-1 p-2 rounded-xl backdrop-blur-md backdrop-saturate-150  ">
        {/* Menu Toggle Button */}
        <button onClick={toggleMenu} className='p-2 text-2xl self-start z-20'>
          {!isOpen && <IoMdMenu /> } 
        </button>
        {/* Hidden Menu */}
        <Menu isOpen={isOpen} />
        {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleMenu} />}
        {/* Main content */}
        <div className="flex w-full h-full">
          <ChatsList />
          <Chat />
          <ChatDetails />
        </div>
      </div>
    </div>
  );
}

export default App
