import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Lock, Sparkles, Fingerprint } from "lucide-react";

export default function FuturisticAuthHome() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative py-28 px-6 text-center flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Secure. Fast. Futuristic.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 max-w-2xl text-xl md:text-2xl text-muted-foreground"
        >
          The next-generation authentication platform built for modern apps.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex gap-4"
        >
          <Button size="lg" className="rounded-2xl text-lg px-8">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="rounded-2xl text-lg px-8">
            Learn More
          </Button>
        </motion.div>
      </section>

      {/* Powerful Features Section */}
      <section className="py-20 px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Powerful Features</h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card/70 backdrop-blur-xl border-border shadow-2xl rounded-2xl p-6">
            <CardContent className="flex flex-col items-center text-center space-y-4 pt-6">
              <Fingerprint className="w-12 h-12 text-primary" />
              <h3 className="text-2xl font-semibold">Biometric Login</h3>
              <p className="text-muted-foreground">
                Next-level security with fingerprint and facial recognition.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/70 backdrop-blur-xl border-border shadow-2xl rounded-2xl p-6">
            <CardContent className="flex flex-col items-center text-center space-y-4 pt-6">
              <Shield className="w-12 h-12 text-primary" />
              <h3 className="text-2xl font-semibold">Multi-Layer Encryption</h3>
              <p className="text-muted-foreground">
                Industry-grade encrypted authentication for complete safety.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/70 backdrop-blur-xl border-border shadow-2xl rounded-2xl p-6">
            <CardContent className="flex flex-col items-center text-center space-y-4 pt-6">
              <Lock className="w-12 h-12 text-primary" />
              <h3 className="text-2xl font-semibold">Smart Access Control</h3>
              <p className="text-muted-foreground">
                AI-powered access system that adapts to real-time threats.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Extra Section: Why Choose Us */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Our Auth Platform?</h2>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center text-center p-6">
            <Sparkles className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">AI-Driven Security</h3>
            <p className="text-muted-foreground">Real-time monitoring detects suspicious activities and prevents unauthorized access.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
             <Shield className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Lightning-Fast Performance</h3>
            <p className="text-muted-foreground">Built for scale with instant response times for authentication flows.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
             <Lock className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Developer-Friendly API</h3>
            <p className="text-muted-foreground">Integrate in minutes with clean, powerful, well-structured APIs.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6">
             <Fingerprint className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Highly Customizable</h3>
            <p className="text-muted-foreground">Theme, workflow, and control options designed to match your app perfectly.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <Card className="max-w-4xl mx-auto bg-primary/10 border-primary/20 backdrop-blur-xl shadow-2xl rounded-3xl p-12">
          <h2 className="text-4xl font-bold mb-4">Start Securing Your App Today</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of developers already building with our authentication system.
          </p>
          <Button size="lg" className="rounded-2xl text-xl px-10 py-6">
            Create Account
          </Button>
        </Card>
      </section>
      
      {/* Footer */}
      <footer className="py-10 text-center text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Futuristic Auth. All rights reserved.</p>
      </footer>
      
    </div>
  );
}