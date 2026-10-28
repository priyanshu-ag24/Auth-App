// import { Button } from "@base-ui/react"
// import { Button } from "@base-ui/react"
import { NavLink } from 'react-router'
import { Button  } from './button'


export const Navbar = () => {
    return(
        <nav className='py-5 md:py-0  dark:border-b border-gray-700 flex md:flex-row gap-4 md:gap-0 flex-col h-14 justify-around item-center dark:bg-gray-900'>

            {/* Brand */}
           <div className='flex h-14 items-center font-semibold gap-2'>
                <span className='inline-block text-center h-6 w-6 rounded-md bg-linear-to-r form-primary to-primary/40 '>A</span>
                <span className='text-base tracking-tight'>Auth App</span>
           </div> 

           <div className='flex gap-4 items-center'>
                
                <NavLink to={'/'}>
                    <a href="#!">Home</a>
                </NavLink>

                <NavLink to={'/login'}>
                    <Button size={'sm'} className={'cursor-pointer'} variant={'outline'}>Login</Button>
                </NavLink>
                <NavLink to={'/signup'}>
                    <Button size={'sm'} className={'cursor-pointer'} variant={'outline'}>Signup</Button>
                </NavLink>
           </div>
        </nav>
    )
}