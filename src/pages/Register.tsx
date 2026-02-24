import {useState} from "react"
import {useForm, useWatch} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import * as z from "zod"
import {ArrowUp, ArrowLeft, RefreshCcw} from "lucide-react"
import {useNavigate} from "react-router-dom"

const formSchema = z.object({
    firstName: z.string().min(4, "Name must be 4 characters"),
    email: z.string().email("Invalid email address").or(z.literal("")),
})

type FormData = z.infer<typeof formSchema>

const Register = () => {
    const [step, setStep] = useState(1)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        control,
        trigger,
        formState: {errors},
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        mode: "onChange",
    })

    const nameValue = useWatch({control, name: "firstName", defaultValue: ""})
    const emailValue = useWatch({control, name: "email", defaultValue: ""})

    const handleNextStep = async (e: React.MouseEvent) => {
        e.preventDefault()
        if (step === 1) {
            const isValid = await trigger("firstName")
            if (isValid) setStep(2)
        } else if (step === 2) {
            const isValid = await trigger("email")
            if (isValid) setStep(3)
        }
    }

    const onSubmit = (data: FormData) => {
        if (step < 3) setStep(step + 1)
        else console.log("Final:", data)
    }

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex justify-between items-center mb-10">
                <button
                    onClick={() => (step === 1 ? navigate("/onboarding") : setStep(step - 1))}
                    className="p-3.25 text-white rounded-full bg-white/5">
                    <ArrowLeft size={20} />
                </button>
                <img src="/images/png/logo.png" alt="logo" />
                <button className="p-3.25 text-white rounded-full bg-white/5">
                    <RefreshCcw size={20} />
                </button>
            </div>

            <div className="flex-1 flex flex-col items-center">
                <img src="/images/svg/logo-input.svg" className="mb-8" alt="logo-input" />

                <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-8">
                    {step === 1 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h2 className="text-[22px] text-white text-center font-medium mb-12">
                                Let's start with the basics. Type in your first name.
                            </h2>
                            <div className="relative mt-96">
                                <input
                                    {...register("firstName")}
                                    autoFocus
                                    placeholder="First name"
                                    className="w-full bg-transparent text-white border border-white/10 rounded-2xl py-5 px-6 outline-none focus:border-purple-500 transition-all placeholder:text-white/20"
                                />
                                <button
                                    type="button"
                                    onClick={handleNextStep}
                                    className={`absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all ${
                                        nameValue.length >= 4
                                            ? "bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                                            : "bg-white/5 text-white/20"
                                    }`}>
                                    <ArrowUp size={20} />
                                </button>
                            </div>
                            {errors.firstName && (
                                <p className="text-red-400 text-xs mt-3 ml-2">{errors.firstName.message}</p>
                            )}
                        </div>
                    )}

                    {step === 2 && (
                        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                            <h2 className="text-[22px] text-white text-center font-medium mb-12">
                                How should we contact you? Type in your email address.
                            </h2>
                            <div className="relative mt-96">
                                <input
                                    {...register("email")}
                                    autoFocus
                                    placeholder="Email address"
                                    className="w-full bg-transparent text-white border border-white/10 rounded-2xl py-5 px-6 outline-none focus:border-purple-500 transition-all placeholder:text-white/20"
                                />
                                <button
                                    type="button"
                                    onClick={handleNextStep}
                                    className={`absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full transition-all ${
                                        emailValue.includes("@") && emailValue.includes(".")
                                            ? "bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                                            : "bg-white/5 text-white/20"
                                    }`}>
                                    <ArrowUp size={20} />
                                </button>
                            </div>
                            {errors.email && <p className="text-red-400 text-xs mt-3 ml-2">{errors.email.message}</p>}
                        </div>
                    )}

                    {step === 3 && (
                        <div className="text-center animate-in zoom-in-95 duration-500 pt-10">
                            <h2 className="text-[22px] text-white font-medium mb-4 px-4 leading-tight">
                                Thanks, {nameValue}! Now, it's time to get a reality check.
                            </h2>
                            <p className="text-white/40 text-lg mb-20">This will take 2-3 minutes.</p>
                            <button
                                type="submit"
                                className="w-full py-4 bg-white text-black font-bold rounded-2xl active:scale-95 transition-transform">
                                Continue
                            </button>
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Register
