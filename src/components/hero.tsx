import Link from "next/link";
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
                <h1 className="mt-20 pt-20 md:mt-0 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Your vision, Our code</h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-2xl mx-auto">At    <span className="text-blue-500">Nodepipe</span>, we specialize in turning your ideas into dynamic, user-friendly websites that captivate and engage. Our expert team combines creativity with cutting-edge technology to deliver custom solutions tailored to your unique needs. Whether you are looking to launch a new site or revamp an existing one, we are here to help you make a lasting impact in the digital world. Let us build something amazing together!</p>
                <div className="mt-4">
                    <Link href={"/services"}>
                    <Button borderRadius="1.75rem" className="p-4 bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">Explore services</Button>
                    
                    </Link>
                </div>
            </div>
        </div>
    )
}