import Menu from "./Menu.png"
export default function Header(){
    return(
        <header>
            <h1 className="logo">Gadget</h1>
            <nav>
                <a href="">Home</a>
                <a href="">Create Account</a>
                <a href="">Our Product</a>
                <a href="">About us</a>
                <a href="">Contact us</a>
                <img src={Menu} width={35}/>
            </nav>
        </header>
    )
}