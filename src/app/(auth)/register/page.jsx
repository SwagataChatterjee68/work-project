
"use client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
    const router=useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            setMessage("");

            const res = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok) {
                toast.success("Signup successful");
                reset();
                router.push("/login")
            } else {
                toast.error(result.message || "Signup failed");
            }
        } catch (error) {
            toast.error("Server error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white text-black font-poppins">

            <div className="flex  max-w-7xl mx-auto p-20">
                <div className="hidden md:flex w-1/2 relative ">
                    <img
                        src="/auth.png"
                        alt="Furniture"
                        className="w-[640px] h-[784px] object-cover"
                    />
                </div>

                <div className="flex flex-col  md:w-1/2 px-8 md:px-16 py-20">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold  mb-6 text-[48px]">Create an account</h1>
                    </div>

                    <button className="w-full py-4 shadow-md rounded-md flex items-center justify-center gap-2 mb-4">
                        <img src="/google.png" alt="Google" className="w-5 h-5" />
                        Sign up with Google
                    </button>

                    <div className="text-center text-gray-400 mb-6">or</div>

                    
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
                        {/* Name */}
                        <div>
                            <label className="block font-semibold text-gray-700 mb-2 ">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                {...register("name", { required: "Name is required" })}
                                className="w-full  rounded-2xl shadow px-4 py-4 outline-none mb-6"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                {...register("email", { required: "Email is required" })}
                                className="w-full  rounded-2xl shadow px-4 py-4 outline-none mb-6"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                {...register("password", { required: "Password is required" })}
                                className="w-full  rounded-2xl shadow px-4 py-4 outline-none mb-6"
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-[#FF8400] text-white py-2 rounded-md hover:bg-orange-500"
                        >
                            {loading ? "Signing up..." : "Create Account"}
                        </button>
                    </form>

                    <p className="mt-4 text-sm text-gray-600 text-center">
                        Already have an account?{" "}
                        <Link href="/login" className="text-orange-600 font-medium ">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

