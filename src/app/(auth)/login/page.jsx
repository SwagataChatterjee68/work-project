// app/signup/page.js (Next.js App Router with JS)
"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            setMessage("");

            const res = await fetch(
                `http://localhost:5000/users?email=${data.email}&password=${data.password}`
            );

            const users = await res.json();

            if (users.length > 0) {
                toast.success("Login successful");
                router.push("/");
                localStorage.setItem("user", JSON.stringify(users[0]));
                reset();
            } else {
                toast.error("Invalid email or password");
            }
        } catch (error) {
            toast.error("Server error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white text-black font-poppins">
            {/* Left Side - Image with Text */}

            <div className="flex max-w-7xl mx-auto p-20">
                <div className="hidden md:flex w-1/2 relative ">
                    <img
                        src="/auth.png" // replace with your image in /public folder
                        alt="Furniture"
                        className="w-xl object-cover"
                    />
                </div>

                {/* Right Side - Signup Form */}
                <div className="flex flex-col  w-full md:w-1/2 px-8 md:px-16 py-20">
                    <div >
                        <h1 className="text-3xl font-bold mb-4">Log in to Exclusive</h1>
                    </div>
                    {/* Google Sign In (dummy button) */}
                    <button className="w-full flex  gap-2 mb-10">

                        Enter your details below
                    </button>



                    {/* React Hook Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                        {/* Email */}
                        <div>

                            <input
                                type="email"
                                placeholder="Email or Phone Number"
                                {...register("email", { required: "Email is required" })}
                                className="w-full py-2 border-b-2 outline-none border-b-[#27242442] mb-6"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div>

                            <input
                                type="password"
                                placeholder="Password"
                                {...register("password", { required: "Password is required" })}
                                className="w-full py-2 border-b-2 outline-none border-b-[#27242442] mb-6"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Submit */}
                        <div className="flex justify-between items-center">
                            <button
                                type="submit"
                                className="w-32 font-light bg-[#FF8400] py-4 rounded hover:bg-orange-500"
                            >
                                {loading ? "Logging..." : "Log in"}

                            </button>
                            <Link className="text-[#FFA500]" href="/">
                                Forget Password
                            </Link>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
