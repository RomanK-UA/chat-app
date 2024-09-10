
import './style.css'
import ChatDetails from './components/ChatDetails'
import Chat from './components/Chat'
import ChatLists from './components/ChatsList'
function App() {


  return (
    <div className="bg-[url('../src/assets/bg.jpg')] bg-cover bg-center h-screen py-5">
      <div className="container mx-auto h-full flex items-center justify-center flex-1 p-2 border-2 rounded-xl backdrop-blur-md backdrop-saturate-150">
        <ChatLists />
        <Chat />
        <ChatDetails/>
      </div>
    </div>
  )
}

export default App
