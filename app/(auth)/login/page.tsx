import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center section-padding">
      <div className="w-full max-w-md p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-text-primary">
          Login to ByteSpace
        </h1>
        <p className="mt-2 text-center text-text-secondary text-sm">
          আপনার অ্যাকাউন্টে লগইন করুন
        </p>
        {/* Login form will be built when design is provided */}
      </div>
    </div>
  );
}
