
const UserInfo = () => {

    return(
        <div className="h-full flex-1">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <img src="../../public/avatar.jpg" alt="User avatar" className="w-12 h-12 rounded-full mr-3" />
                    <p className="text-xl ">User Name</p>
                </div>

                <img src="../../public/meatball-menu.svg" alt="menu button" className="w-8"/>
            </div>
        </div>
    )
}

export default UserInfo