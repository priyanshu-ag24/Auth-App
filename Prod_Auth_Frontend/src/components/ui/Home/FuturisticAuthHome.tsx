import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  Shield,
  ShieldCheck,
  Sparkles,
  Terminal,
  Users,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure authentication",
    description:
      "Protect user accounts with a secure authentication flow built with modern security practices.",
    tag: "CORE SECURITY",
  },
  {
    icon: Fingerprint,
    title: "Effortless access",
    description:
      "Give your users a smooth sign-in experience with clean, intuitive authentication screens.",
    tag: "USER EXPERIENCE",
  },
  {
    icon: KeyRound,
    title: "Session management",
    description:
      "Design reliable session handling, protected routes, and controlled access to your application.",
    tag: "ACCESS CONTROL",
  },
  {
    icon: Users,
    title: "Role-based access",
    description:
      "Organize permissions and build experiences tailored to different types of users.",
    tag: "PERMISSIONS",
  },
  {
    icon: Code2,
    title: "Developer-first APIs",
    description:
      "Integrate authentication into your existing stack with a straightforward developer workflow.",
    tag: "INTEGRATION",
  },
  {
    icon: Zap,
    title: "Built for speed",
    description:
      "Keep your authentication experience responsive, lightweight, and easy to navigate.",
    tag: "PERFORMANCE",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect your app",
    description:
      "Set up your application and configure the authentication flow.",
  },
  {
    number: "02",
    title: "Secure your routes",
    description:
      "Protect private pages and control access to sensitive resources.",
  },
  {
    number: "03",
    title: "Launch with confidence",
    description:
      "Give users a seamless experience from sign-in to sign-out.",
  },
];

export const FuturisticAuthHome = () => {

    return(
        <>
            <div className="relative mx-auto w-full max-w-xl">
            {/* Ambient glow */}
             <div className="absolute -inset-8 rounded-full bg-violet-600/15 blur-[90px]" />

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b12]/95 shadow-2xl shadow-violet-950/40">
        {/* Window header */}
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Security overview
              </p>
              <p className="text-xs text-zinc-500">
                Authentication console
              </p>
            </div>
          </div>

          <Badge className="border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 hover:bg-emerald-400/10">
            <span className="mr-1.5 size-1.5 rounded-full bg-emerald-400" />
            System healthy
          </Badge>
        </div>

        <div className="space-y-5 p-5 sm:p-6">
          {/* Security status */}
          <div className="relative overflow-hidden rounded-xl border border-violet-400/20 bg-gradient-to-r from-violet-500/15 via-violet-500/5 to-transparent p-5">
            <div className="absolute -right-8 -top-10 size-36 rounded-full border border-violet-400/10" />
            <div className="absolute -right-2 -top-4 size-24 rounded-full border border-violet-400/10" />

            <div className="relative flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-300">
                  Security status
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                  Protected
                </h3>
                <p className="mt-1 text-xs text-zinc-400">
                  Your authentication layer at a glance
                </p>
              </div>

              <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-400/10">
                <Shield className="size-8 text-violet-300" />
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/8 bg-white/2.5 p-4">
              <div className="flex items-center gap-2 text-zinc-400">
                <Users className="size-4" />
                <span className="text-xs">Active sessions</span>
              </div>
              <p className="mt-3 text-2xl font-semibold text-white">128</p>
              <p className="mt-1 text-xs text-emerald-400">
                <ArrowUpRight className="mr-1 inline size-3" />
                Demo metric
              </p>
            </div>

            <div className="rounded-xl border border-white/8 bg-white/2.5 p-4">
              <div className="flex items-center gap-2 text-zinc-400">
                <LockKeyhole className="size-4" />
                <span className="text-xs">Protected routes</span>
              </div>
              <p className="mt-3 text-2xl font-semibold text-white">24</p>
              <p className="mt-1 text-xs text-violet-300">
                <ShieldCheck className="mr-1 inline size-3" />
                Demo metric
              </p>
            </div>
          </div>

          {/* Recent activity */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-medium text-white">
                Recent activity
              </p>
              <span className="text-xs text-zinc-500">Preview only</span>
            </div>

            <div className="space-y-3">
              {[
                {
                  icon: Check,
                  title: "Authentication successful",
                  subtitle: "demo@yourapp.dev",
                  color: "text-emerald-400",
                },
                {
                  icon: KeyRound,
                  title: "Session created",
                  subtitle: "Secure session workflow",
                  color: "text-violet-300",
                },
              ].map((activity) => {
                const Icon = activity.icon;

                return (
                  <div
                    key={activity.title}
                    className="flex items-center gap-3 rounded-lg border border-white/6 bg-white/2 p-3"
                  >
                    <div className="flex size-9 items-center justify-center rounded-lg bg-white/4">
                      <Icon className={`size-4 ${activity.color}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-zinc-200">
                        {activity.title}
                      </p>
                      <p className="mt-0.5 truncate text-xs text-zinc-500">
                        {activity.subtitle}
                      </p>
                    </div>
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Terminal strip */}
          <div className="flex items-center gap-2 rounded-lg border border-white/[0.07] bg-black/40 px-3 py-2.5">
            <Terminal className="size-4 shrink-0 text-violet-300" />
            <code className="truncate text-xs text-zinc-400">
              auth.initialize() <span className="text-violet-300">→</span>{" "}
              <span className="text-emerald-400">ready</span>
            </code>
          </div>
        </div>
      </div>

      {/* Floating label */}
      <div className="absolute -bottom-5 -left-3 hidden items-center gap-2 rounded-xl border border-white/10 bg-[#111019] px-4 py-3 shadow-xl sm:flex lg:-left-8">
        <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-400/10">
          <LockKeyhole className="size-4 text-emerald-400" />
        </div>
        <div>
          <p className="text-xs font-semibold text-white">
            Security first
          </p>
          <p className="text-[10px] text-zinc-500">
            Built for developers
          </p>
        </div>
      </div>
    </div>
  
    </>
    )
}


export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08080d] text-white selection:bg-violet-500/30">
      {/* HERO */}
      <section className="relative isolate px-5 pb-24 pt-16 sm:px-8 sm:pt-24 lg:pb-32 lg:pt-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(124,58,237,0.15),transparent_55%)]" />

        {/* Subtle grid */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[56px_56px] mask-[linear-gradient(to_bottom,black,transparent_85%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-12">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="mb-7 gap-2 rounded-full border-violet-400/20 bg-violet-400/[0.07] px-3 py-1.5 text-violet-200"
            >
              <Sparkles className="size-3.5" />
              Authentication, reimagined
              <ChevronRight className="size-3.5" />
            </Badge>

            <h1 className="text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Your app.
              <br />
              Your users.
              <br />
              <span className="bg-linear-to-r from-violet-300 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                Your security.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
              Authentication that just works. Build secure sign-in
              experiences, protect your routes, and give your users
              the confidence to connect.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                render={<a href="/signup" />}
                nativeButton={false}
                size="lg"
                className="h-12 rounded-xl bg-violet-600 px-6 text-white shadow-lg shadow-violet-900/25 hover:bg-violet-500"
              >
                Get started free
                <ArrowRight className="ml-2 size-4" />
              </Button>

              <Button
                render={<a href="#features" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-white/10 bg-white/3 px-6 text-zinc-200 hover:bg-white/[0.07] hover:text-white"
              >
                Explore features
                <ArrowDownRight className="ml-2 size-4" />
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-zinc-500 sm:text-sm">
              <span className="flex items-center gap-2">
                <Check className="size-4 text-violet-400" />
                Developer-friendly
              </span>
              <span className="flex items-center gap-2">
                <Check className="size-4 text-violet-400" />
                Modern UI
              </span>
              <span className="flex items-center gap-2">
                <Check className="size-4 text-violet-400" />
                Security-focused
              </span>
            </div>
          </div>

          <div className="px-1 py-5 sm:px-5 lg:px-0 lg:py-0">
            <FuturisticAuthHome />
          </div>
        </div>
      </section>

      {/* TRUST / VALUE STRIP */}
      <section className="border-y border-white/[0.07] bg-white/1.5 px-5 py-7 sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-4 text-center text-sm text-zinc-400 sm:gap-x-12">
          <span className="font-medium text-zinc-300">
            Everything you need to get started
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-violet-400" />
            Security-focused
          </span>
          <span className="flex items-center gap-2">
            <Code2 className="size-4 text-violet-400" />
            Developer-first
          </span>
          <span className="flex items-center gap-2">
            <Zap className="size-4 text-violet-400" />
            Lightweight UI
          </span>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Badge
              variant="outline"
              className="border-white/10 bg-white/3 text-violet-300"
            >
              WHAT YOU GET
            </Badge>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Everything starts with
              <span className="text-violet-400"> trust.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-400 sm:text-lg">
              The essential building blocks for a secure, polished,
              and developer-friendly authentication experience.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <Card
                  key={feature.title}
                  className="group relative overflow-hidden rounded-2xl border-white/8 bg-white/2.5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/4.5"
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex items-start justify-between">
                      <div className="flex size-12 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/10 text-violet-300 transition-colors group-hover:bg-violet-500/20">
                        <Icon className="size-5" />
                      </div>

                      <span className="text-xs font-medium text-zinc-600">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-7 text-[10px] font-semibold tracking-[0.16em] text-violet-300/80">
                      {feature.tag}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                      {feature.description}
                    </p>

                    <div className="mt-6 flex items-center text-xs font-medium text-zinc-500 transition-colors group-hover:text-violet-300">
                      Explore capability
                      <ArrowUpRight className="ml-1.5 size-3.5" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="border-y border-white/[0.07] bg-white/1.5 px-5 py-24 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <Badge
                variant="outline"
                className="border-white/10 bg-white/3 text-violet-300"
              >
                SIMPLE WORKFLOW
              </Badge>

              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Less complexity.
                <br />
                <span className="text-zinc-500">
                  More building.
                </span>
              </h2>

              <p className="mt-5 max-w-md leading-7 text-zinc-400">
                Spend more time creating great products and less time
                wrestling with your authentication interface.
              </p>

              <Button
                render={<a href="/signup" />}
                nativeButton={false}
                className="mt-7 rounded-xl bg-white text-black hover:bg-zinc-200"
              >
                Start building
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>

            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="group flex gap-5 rounded-2xl border border-white/[0.07] bg-[#0b0b12] p-5 transition-colors hover:border-violet-400/25 sm:gap-6 sm:p-6"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/15 bg-violet-500/10 font-mono text-sm text-violet-300">
                    {step.number}
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {step.description}
                    </p>
                  </div>

                  <ArrowUpRight className="mt-1 size-4 shrink-0 text-zinc-600 transition-colors group-hover:text-violet-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-violet-400/20 bg-[#100d1c] px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.22),transparent_65%)]" />
          <div className="pointer-events-none absolute -left-24 top-1/2 size-64 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[90px]" />
          <div className="pointer-events-none absolute -right-24 top-1/2 size-64 -translate-y-1/2 rounded-full bg-fuchsia-600/10 blur-[90px]" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
              <ShieldCheck className="size-7" />
            </div>

            <h2 className="mt-7 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Ready to secure
              <br className="hidden sm:block" /> what you build?
            </h2>

            <p className="mx-auto mt-5 max-w-lg leading-7 text-zinc-400">
              Create your account and take the first step toward a
              cleaner, more secure authentication experience.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                render={<a href="/signup" />}
                nativeButton={false}
                size="lg"
                className="h-12 rounded-xl bg-violet-600 px-7 hover:bg-violet-500"
              >
                Create your account
                <ArrowRight className="ml-2 size-4" />
              </Button>

              <Button
                render={<a href="/login" />}
                nativeButton={false}
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-white/10 bg-white/3 px-7 text-white hover:bg-white/8 hover:text-white"
              >
                I already have an account
              </Button>
            </div>

            <p className="mt-6 text-xs text-zinc-500">
              Simple to get started. Designed with security in mind.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.07] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <a href="/" className="flex items-center gap-2.5">
            <div className="flex size-8 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
              <ShieldCheck className="size-4" />
            </div>
            <span className="font-semibold tracking-tight text-white">
              NexAuth
            </span>
          </a>

          <p className="text-center text-xs text-zinc-500">
            © {new Date().getFullYear()} NexAuth. Built for a more secure web.
          </p>

          <div className="flex items-center gap-5 text-xs text-zinc-400">
            <a href="#features" className="transition-colors hover:text-white">
              Features
            </a>
            <a href="/login" className="transition-colors hover:text-white">
              Sign in
            </a>
            <a href="/signup" className="transition-colors hover:text-white">
              Sign up
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}