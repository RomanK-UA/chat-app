

const Menu = ({isOpen, toggleMenu}) => {

    return(
        <section className={`${isOpen? 'block' : 'hidden'} h-full flex-1 border-2 border-red-600 p-2`}>
            <button onClick={toggleMenu} className="text-3xl">&#x2630</button>
            Menu
        </section>
    )
}

export default Menu