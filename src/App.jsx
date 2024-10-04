
import './style.css'
import ChatDetails from './components/ChatDetails'
import Chat from './components/Chat'
import ChatsList from './components/ChatsList'
import Menu from './components/Menu'
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
      setIsOpen(!isOpen);
  }

  return (
    <div className="bg-[url('../src/assets/bg.jpg')] bg-cover bg-center h-screen ">
      <div className="relative mx-auto h-full flex items-center justify-center flex-1 p-2 border-2 rounded-xl backdrop-blur-md backdrop-saturate-150 ">
        <button onClick={toggleMenu} className='p-2 text-2xl self-start z-20'>
          {!isOpen ? <IoMdMenu /> : <IoIosArrowBack />}
        </button>
        <Menu isOpen={isOpen} />
        <ChatsList />
        <Chat />
        <ChatDetails/>
      </div>
    </div>
  )
}

export default App
