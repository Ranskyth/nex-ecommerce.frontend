
import { ModeToggle } from "./button-theme"

import { ButtonCart } from "./button-cart"


export const Header = () => {
    return(
        <header className="border-b-2 p-5">
            <nav>
                <ul className="flex justify-between items-center">
                    <div>

                    <img src={"./next.svg"} height={85} width={85} alt="logo"/>
                    </div>
                    <div className="flex gap-3 items-center">

                    <li><ModeToggle/></li>
                    <li><ButtonCart/></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}
