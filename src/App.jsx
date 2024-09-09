
import './style.css'
import Menu from './components/Menu'
import ChatDetails from './components/ChatDetails'
import Chat from './components/Chat'
function App() {


  return (
    <div className="bg-[url('../src/assets/bg.jpg')] bg-cover bg-center h-screen p-14">
      <div className="container mx-auto h-full flex items-center justify-center flex-1 p-2 border-2 border-green-700 rounded-xl backdrop-blur-md backdrop-saturate-150">
        <Menu />
        <Chat />
        <ChatDetails/>
      </div>
    </div>
  )
}

export default App
