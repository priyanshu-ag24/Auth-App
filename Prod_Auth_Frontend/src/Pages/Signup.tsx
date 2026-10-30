import { Button } from "@base-ui/react"; // Or from "@/components/ui/button" depending on your setup
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa"
import { useState } from "react";
import toast from "react-hot-toast";
import type RegisterData from "@/models/RegisterData";
import { registerUser } from "@/services/AuthService";

export const Singnup = () => {

    const[data,setData] = useState<RegisterData>({
      name:'',
      email:'',
      password:"",
    });

    

    // const [loading, setLoading]=useState<boolean>(false);
    // const [error, setError] = useState(null);

    //text input, email, password, number, textarea
    //Handling form Change
    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
      // console.log(event.target.name)
      // console.log(event.target.value)
      setData(value => ({
        ...value,
        [event.target.name]:event.target.value,
      }));
    };

    //Handling form Submit
    const HandleFromSubmit = async(event:React.SubmitEvent<HTMLFormElement>) =>{
      event.preventDefault()
      console.log(data);

      //Validation
      //Using React Toaster for Validation 
      if(data.name.trim() === ''){
        toast.error("Name is required !")
        return;
      }

      if(data.email.trim() === ''){
        toast.error("Email is required !")
        return;
      }

      if(data.password.trim() === ''){
        toast.error("Password is required !")
        return;
      }

      //Form Submit for registrations
      try {
        const result = await registerUser(data);
        console.log(result);
        toast.success("User Register Sucessfully..!")
      } catch (error) {
        console.log(error);
        toast.success("Error in registering the user..!")
      }


    };

    return(
       <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-neutral-900/50 border border-neutral-800 rounded-2xl backdrop-blur-xl"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Create an Account</h2>
          <p className="text-neutral-400">Enter your details to get started</p>
        </div>

        <form onSubmit={HandleFromSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-neutral-300">Name</Label>
            <Input 
              id="name" 
              type="text" 
              placeholder="John Doe" 
              className="bg-neutral-800 border-neutral-700 text-white" 
              name="name"
              value={data.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-neutral-300">Email ID</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="name@example.com" 
              className="bg-neutral-800 border-neutral-700 text-white" 
              name="email"
              value={data.email}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-neutral-300">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="••••••••" 
              className="bg-neutral-800 border-neutral-700 text-white"
              name="password"
              value={data.password}
              onChange={handleInputChange} 
            />
          </div>
          
          <Button 
            type="submit"
            className="w-full h-11 bg-transparent border border-neutral-700 text-white hover:bg-neutral-800 transition-colors">
            Sign Up
          </Button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="grow border-t border-neutral-700"></div>
          <span className="mx-4 text-neutral-500 text-sm">or continue with</span>
          <div className="grow border-t border-neutral-700"></div>
        </div>

        {/* Auth Buttons */}
        <div className="space-y-4">
          <Button className="w-full flex items-center justify-center gap-2 border border-neutral-700 bg-transparent text-white hover:bg-neutral-800">
            <FcGoogle className="text-xl" />
            Continue with Google
          </Button>
          <Button className="w-full flex items-center justify-center gap-2 border border-neutral-700 bg-transparent text-white hover:bg-neutral-800">
            <FaGithub className="text-xl" />
            Continue with GitHub
          </Button>
        </div>
      </motion.div>
    </div>
  );
    
}