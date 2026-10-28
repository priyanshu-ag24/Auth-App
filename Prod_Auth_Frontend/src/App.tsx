import { Button  } from './components/ui/button'
import { Calendar } from './components/ui/calendar'

export const App = () =>{
  return (
    <div className='p-10'>
      <h1 className="text-3xl font-bold">Hello Autentication Forntend!</h1>
      <Button variant={'outline'}>Click me </Button>
      <Calendar/>
    </div>
  )
}
