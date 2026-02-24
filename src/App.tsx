import {BrowserRouter, Route, Routes} from "react-router-dom"
import "./App.css"

/* Page */
import Home from "./pages/Home"
import Onboarding from "./pages/Onboarding"
import Register from "./pages/Register"

/* Components */
import Layout from "./components/Layout"

function App() {
    return (
        <div className="relative min-h-screen bg-[#0C0D10] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[20vh] backdrop-blur-2xl bg-linear-to-b from-white/10 to-transparent pointer-events-none z-0" />

            <div className="relative z-10">
                <BrowserRouter>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/onboarding" element={<Onboarding />} />
                            <Route path="/register" element={<Register />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App
