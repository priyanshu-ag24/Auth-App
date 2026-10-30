import { Outlet } from "react-router"
import { Navbar } from "../components/ui/Navbar"
import {Toaster} from 'react-hot-toast';

export const RootLayout = () => {
    return(
        <div>
            <Toaster/>
            <Navbar/>
            <Outlet/>
        </div>
    )
}