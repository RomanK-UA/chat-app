import "./style.css";
import ChatDetails from "./components/ChatDetails";
import Chat from "./components/Chat";
import ChatsList from "./components/ChatsList";
import Menu from "./components/Menu";
import LoginForm from "./components/LoginForm";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({name: "name"});
  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <>
      {user ? (
        <div className="bg-[url('../src/assets/bg.jpg')] bg-cover bg-center h-screen">
          <div className="relative mx-auto h-full flex items-center justify-center flex-1 p-2 rounded-xl backdrop-blur-md backdrop-saturate-150">
            <button onClick={toggleMenu} className="p-2 text-2xl self-start z-20">
              <IoMdMenu />
            </button>

            {isOpen && (
              <>
                <Menu isOpen={isOpen} />
                <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleMenu} />
              </>
            )}

            <div className="flex w-full h-full">
              <ChatsList />
              <Chat />
              <ChatDetails />
            </div>
          </div>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
}

export default App;
