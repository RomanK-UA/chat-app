const getFirstLetter = (str) => {
    // Ensure the string is valid and trimmed
    return str && str.trim() ? str.trim().split(' ')[0][0] : '?';
}

function DefaultAvatar({ username }) {
    return (
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-800 text-white">
            <span className="text-xl font-bold">
                {getFirstLetter(username).toUpperCase()}
            </span>
        </div>
    );
}

export default DefaultAvatar;