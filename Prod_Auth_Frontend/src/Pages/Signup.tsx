import { Button } from "@base-ui/react"; // Or from "@/components/ui/button" depending on your setup
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa"

export const Singnup = () => {
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

        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-neutral-300">Name</Label>
            <Input 
              id="name" 
              type="text" 
              placeholder="John Doe" 
              className="bg-neutral-800 border-neutral-700 text-white" 
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-neutral-300">Email ID</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="name@example.com" 
              className="bg-neutral-800 border-neutral-700 text-white" 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-neutral-300">Password</Label>
            <Input 
              id="password" 
              type="password" 
              placeholder="••••••••" 
              className="bg-neutral-800 border-neutral-700 text-white" 
            />
          </div>
          
          <Button className="w-full h-11 bg-transparent border border-neutral-700 text-white hover:bg-neutral-800 transition-colors">
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