import DefaultAvatar from "./DefaultAvatar"

const UserInfo = ( {userName, avatarUrl} ) => {

    return(
        <div className="h-full flex-1">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    {avatarUrl ? (
                        <img src="/avatar.jpg" alt="User avatar" className="w-12 h-12 rounded-full mr-3" />
                    ) : (
                        <DefaultAvatar username={userName} />
                    )}
                    
                    <p className="text-xl ">{userName}</p>
                </div>
            </div>
        </div>
    )
}

export default UserInfo
