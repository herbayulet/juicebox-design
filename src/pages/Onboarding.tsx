import {useState, useRef} from "react"
import {useNavigate} from "react-router-dom"
import {ArrowLeft, RefreshCcw} from "lucide-react"
import {calculateActiveIndex, scrollToSlide} from "../utils/helper"

const steps = [
    {
        text: (
            <p className="text-white">
                Professionals around the world shared how they feel abo
                <span className="text-[#FAFAFA80]">ut technology and I've listened. Now it's your turn.</span>
            </p>
        ),
        button: "Continue",
    },
    {
        text: (
            <p className="text-white">
                I'll ask you a handful of meaningful questions{" "}
                <span className="text-[#FAFAFA80]">and compare your responses with people in your industry.</span>
            </p>
        ),
        button: "Continue",
    },
    {
        text: (
            <p className="text-white">
                You'll get insights into current industry sentiments an
                <span className="text-[#FAFAFA80]">
                    d a reality check about technology in a few minutes. Deal? Great!
                </span>
            </p>
        ),
        button: "Get started",
    },
]

const Onboarding = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const scrollRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()

    const handleScroll = () => {
        if (scrollRef.current) {
            const index = calculateActiveIndex(scrollRef.current.scrollLeft, scrollRef.current.offsetWidth)
            if (index !== activeIndex) setActiveIndex(index)
        }
    }

    const goToNext = () => {
        if (activeIndex < steps.length - 1) {
            scrollToSlide(scrollRef, activeIndex + 1)
        } else {
            navigate("/register")
        }
    }

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row items-center justify-between mb-10">
                <button
                    onClick={() =>
                        activeIndex === 0
                            ? navigate("/")
                            : scrollRef.current?.scrollTo({
                                  left: scrollRef.current.offsetWidth * (activeIndex - 1),
                                  behavior: "smooth",
                              })
                    }
                    className="p-3.25 text-white rounded-full bg-white/5">
                    <ArrowLeft size={20} />
                </button>
                <img src="/images/png/logo.png" alt="logo" />
                <div className="p-3.25 rounded-full bg-white/5">
                    <RefreshCcw size={20} className="text-white" />
                </div>
            </div>
            {/* Slider Area */}
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar flex-1 items-center cursor-grab active:cursor-grabbing">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="min-w-full snap-center flex flex-col items-center justify-center text-center px-6">
                        <div className="relative mb-14 group">
                            <div className="absolute inset-0 bg-black/30 blur-[80px] rounded-full scale-125 transition-transform duration-1000 group-hover:scale-150"></div>

                            <img src="/images/png/logo-onboarding.png" alt="logo-onboarding" />
                        </div>

                        <div
                            className={`text-2xl font-semibold leading-snug transition-all duration-700 delay-100 ${activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            {step.text}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center gap-10 pb-4 mt-20">
                <div className="flex gap-2.5">
                    {steps.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                                i === activeIndex
                                    ? "w-8 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                                    : "w-1.5 bg-gray-800"
                            }`}
                        />
                    ))}
                </div>

                <button
                    onClick={goToNext}
                    className={`w-full py-4 rounded-2xl font-bold transition-all duration-500 transform active:scale-[0.98] ${
                        activeIndex === 2
                            ? "bg-white text-black shadow-lg shadow-white/10"
                            : "bg-transparent border border-white text-white hover:bg-white/25"
                    }`}>
                    {steps[activeIndex].button}
                </button>
            </div>
        </div>
    )
}

export default Onboarding
