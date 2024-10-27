import Link from "next/link";
import { cn } from "@/lib/utils";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "./ui/moving-border";


export default function HeroSection(){
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <div className="p-4 w-full relative z-10 text-center">
            <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
                <h1 className="mt-20 md:mt-0 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Your Vision, My Code</h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-xl mx-auto">Welcome! I, <span className="text-blue-400">Sayan Adhikary</span>, a freelance web developer dedicated to bringing your digital vision to life. With a passion for creating responsive, user-friendly websites, I combine innovative design with robust functionality to help businesses thrive online.</p>
                <div className="mt-4">
                    <Link href={"/services"}>
                    <Button borderRadius="1.75rem" className="p-4 bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">Explore services</Button>
                    
                    </Link>
                </div>
            </div>
        </div>
    )
}