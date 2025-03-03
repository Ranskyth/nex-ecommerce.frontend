import { Footer } from "@/app/_components/footer"
import { Header } from "@/app/_components/header"
import { ReactNode } from "react"

const LayoutLayer = ({children}:{children:ReactNode}) => {
    return(
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default LayoutLayer