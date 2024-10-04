import UserInfo from "./UserInfo"
const Menu = ({isOpen}) => {

    return(
            <div className={`${isOpen? 'block' : 'hidden'} h-full border-2 border-red-600 p-4 absolute left-0 top-0 w-80`}>
            <UserInfo />
            HIIII
            </div>
    )
}

export default Menu