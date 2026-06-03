'use client'

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import Link from 'next/link';
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

import { Card, CardContent } from '@/components/ui/card'
import { Field, FieldLabel, FieldError } from "@/components/ui/field"
import { Input } from '@/components/ui/input';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { OctagonAlertIcon } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string().min(1, { message: "Please confirm your password" }),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

type FormSchema = z.infer<typeof formSchema>

const SignUpView = () => {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    });

    const onSubmit = async (data: FormSchema) => {
        setError(null);
        setLoading(true);
        try {
            await authClient.signUp.email(
                { name: data.name, email: data.email, password: data.password },
                {
                    onSuccess: () => { router.push("/dashboard"); },
                    onError: (ctx) => { setError(ctx.error.message); }
                }
            );
        } catch (e) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const onGoogleSignUp = async () => {
        setError(null);
        await authClient.signIn.social(
            { provider: "google", callbackURL: "/dashboard" },
            { onError: (ctx) => setError(ctx.error.message) }
        );
    };

    const onGithubSignUp = async () => {
        setError(null);
        await authClient.signIn.social(
            { provider: "github", callbackURL: "/dashboard" },
            { onError: (ctx) => setError(ctx.error.message) }
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Card className="w-full max-w-4xl overflow-hidden bg-[#243d2e] border-emerald-700/50 shadow-2xl shadow-emerald-900/10">
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-0 !p-0 items-stretch">

                    {/* Left — Image Side */}
                    <div className="hidden md:flex flex-col items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600 self-stretch">
                        <img src="/logo.svg" alt="Meet.AI Logo" className="w-24 h-24 mb-4 brightness-0 invert" />
                        <p className="text-xl font-semibold text-white">Meet.AI</p>
                        <p className="text-sm text-emerald-100 mt-2 text-center px-8">
                            Your intelligent meeting companion
                        </p>
                    </div>

                    {/* Right — Form Side */}
                    <div className="p-8 flex flex-col justify-center bg-[#243d2e]">
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold text-white">Create an account</h1>
                            <p className="text-emerald-600 text-sm mt-1">
                                Sign up to get started
                            </p>
                        </div>

                        {/* Error Alert */}
                        {error && (
                            <Alert className="mb-4 bg-red-950 border-red-800 text-red-300">
                                <OctagonAlertIcon className="h-4 w-4" />
                                <AlertTitle>{error}</AlertTitle>
                            </Alert>
                        )}

                        {/* Form */}
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

                            {/* Name Field */}
                            <Controller
                                control={form.control}
                                name="name"
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel className="text-emerald-300">Full Name</FieldLabel>
                                        <Input
                                            type="text"
                                            placeholder="John Doe"
                                            className="bg-[#243d2e] border-emerald-700 text-white placeholder:text-emerald-700"
                                            aria-invalid={fieldState.invalid}
                                            {...field}
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                            {/* Email Field */}
                            <Controller
                                control={form.control}
                                name="email"
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel className="text-emerald-300">Email</FieldLabel>
                                        <Input
                                            type="email"
                                            placeholder="m@example.com"
                                            className="bg-[#243d2e] border-emerald-700 text-white placeholder:text-emerald-700"
                                            aria-invalid={fieldState.invalid}
                                            {...field}
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                            {/* Password Field */}
                            <Controller
                                control={form.control}
                                name="password"
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel className="text-emerald-300">Password</FieldLabel>
                                        <Input
                                            type="password"
                                            placeholder="••••••••"
                                            className="bg-[#243d2e] border-emerald-700 text-white placeholder:text-emerald-700"
                                            aria-invalid={fieldState.invalid}
                                            {...field}
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                            {/* Confirm Password Field */}
                            <Controller
                                control={form.control}
                                name="confirmPassword"
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel className="text-emerald-300">Confirm Password</FieldLabel>
                                        <Input
                                            type="password"
                                            placeholder="••••••••"
                                            className="bg-[#243d2e] border-emerald-700 text-white placeholder:text-emerald-700"
                                            aria-invalid={fieldState.invalid}
                                            {...field}
                                        />
                                        {fieldState.invalid && (
                                            <FieldError errors={[fieldState.error]} />
                                        )}
                                    </Field>
                                )}
                            />

                            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white" disabled={loading}>
                                {loading ? "Creating account..." : "Create account"}
                            </Button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-4">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-emerald-700" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-[#243d2e] px-2 text-emerald-600">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        {/* Social Buttons */}
                        <div className="grid grid-cols-2 gap-3">
                            <Button type="button" variant="outline" className="border-emerald-700 text-emerald-300 hover:bg-emerald-900/30 hover:text-white bg-transparent" onClick={onGoogleSignUp} disabled={loading}>
                                Google
                            </Button>
                            <Button type="button" variant="outline" className="border-emerald-700 text-emerald-300 hover:bg-emerald-900/30 hover:text-white bg-transparent" onClick={onGithubSignUp} disabled={loading}>
                                Github
                            </Button>
                        </div>

                        <p className="text-center text-sm mt-4 text-emerald-600">
                            Already have an account?{" "}
                            <Link href="/sign-in" className="text-emerald-400 font-medium hover:underline">
                                Sign in
                            </Link>
                        </p>
                    </div>

                </CardContent>
            </Card>

            {/* Terms */}
            <p className="text-center text-xs text-emerald-600 mt-4 absolute bottom-4">
                By clicking continue, you agree to our{" "}
                <a href="#" className="underline hover:text-emerald-400">Terms of Service</a>
                {" "}& Policy
            </p>
        </div>
    )
}

export default SignUpView