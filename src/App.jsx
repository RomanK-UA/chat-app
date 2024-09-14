
import './style.css'
import ChatDetails from './components/ChatDetails'
import Chat from './components/Chat'
import ChatLists from './components/ChatsList'
import Menu from './components/Menu'
import { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
function App() {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
      setIsOpen(!isOpen);
  }
  
  return (
    <div className="bg-[url('../src/assets/bg.jpg')] bg-cover bg-center h-screen ">
      <div className="relative mx-auto h-full flex items-center justify-center flex-1 p-2 border-2 rounded-xl backdrop-blur-md backdrop-saturate-150 ">
        <button isOpen={isOpen} onClick={toggleMenu} className='text-3xl self-start z-20'><IoMdMenu /></button>
        <Menu isOpen = {isOpen}/>
        <ChatLists />
        <Chat />
        <ChatDetails/>
      </div>
    </div>
  )
}

export default App
