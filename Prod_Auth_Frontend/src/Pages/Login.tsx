import { Button  } from "@base-ui/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc"; // Flat Color Google Icon
import { FaGithub } from "react-icons/fa"; // FontAwesome Github Icon

export const Login = () => {
    return(
        
      <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md p-8 bg-neutral-900/50 border border-neutral-800 rounded-2xl backdrop-blur-xl"
             >
            <div className="text-center mb-8">
                 <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
                <p className="text-neutral-400">Sign in to your account to continue</p>
             </div>

            <form className="space-y-6">
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
                 Log In
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
          <Button   className="w-full border border-neutral-700 bg-transparent text-white hover:bg-neutral-800 flex items-center justify-center gap-2">
            <FcGoogle className="text-xl" />
            Continue with Google
          </Button>
          <Button className="w-full border border-neutral-700 bg-transparent text-white hover:bg-neutral-800 flex items-center justify-center gap-2">
            <FaGithub className="text-xl" />
            Continue with GitHub
          </Button>
        </div>
      </motion.div>
    </div>
  
      
    )
}