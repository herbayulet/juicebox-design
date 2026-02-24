import {useNavigate} from "react-router-dom"

import {RefreshCcw} from "lucide-react"

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="flex flex-col flex-1">
            <div className="relative flex items-center justify-center w-full mb-16">
                <img src="/images/png/logo.png" alt="logo" />
                <div className="absolute right-0 p-3.25 rounded-full bg-white/5">
                    <RefreshCcw size={20} className="text-white" />
                </div>
            </div>
            <div className="relative flex w-full items-center justify-center mb-10">
                <img src="/images/png/logo-1.png" alt="logo-1" />
                <p className="absolute top-4 left-0 text-white text-xs">
                    WA businesses feel confident about future growth
                </p>
                <p className="absolute top-16 right-0 text-white text-xs">AI cant replace creativity</p>
                <p className="absolute top-28 left-0 text-white text-xs">Sales measure true success</p>
                <p className="absolute bottom-28 right-0 text-white text-xs">Human connection drives WA business</p>
                <p className="absolute bottom-4 left-0 text-white text-xs">
                    The primary barrier to <br />
                    digital transformation is financial investment
                </p>
            </div>
            <h2 className="text-white text-2xl text-center mb-20">
                Compare your thoughts on{" "}
                <span className="bg-linear-to-l from-[#6DDDFF] via-[#B179FF] to-[#FABBFF] bg-clip-text text-transparent">
                    technology
                </span>{" "}
                with current industry opinions.
            </h2>
            <button className="py-4.75 bg-[#CDAAFF] text-center text-black rounded-2xl" onClick={() => navigate("/onboarding")}>Get a reality check</button>
        </div>
    )
}

export default Home
