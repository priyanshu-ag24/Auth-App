import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.tsx'
import { BrowserRouter,Routes,Route } from "react-router";
import { Login } from './Pages/Login.tsx';
import { About } from './Pages/About.tsx';
import { Services } from './Pages/Services.tsx';
import { Singnup } from './Pages/Signup.tsx';
import { RootLayout } from './Pages/RootLayout.tsx';


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={ <App/>}/>
          <Route path="/login" element={ <Login/>}/>
          <Route path="/about" element={ <About/>}/>
          <Route path="/services" element={ <Services/>}/>
          <Route path="/signup" element={ <Singnup/>}/>
        </Route>

          
      </Routes>
    
    </BrowserRouter>

)
