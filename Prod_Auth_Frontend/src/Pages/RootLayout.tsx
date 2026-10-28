import { Outlet } from "react-router"
import { Navbar } from "../components/ui/Navbar"

export const RootLayout = () => {
    return(
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )
}