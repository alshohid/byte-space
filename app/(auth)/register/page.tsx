import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center section-padding">
      <div className="w-full max-w-md p-6 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-text-primary">
          Join ByteSpace
        </h1>
        <p className="mt-2 text-center text-text-secondary text-sm">
          আজই আপনার অ্যাকাউন্ট তৈরি করুন
        </p>
        {/* Register form will be built when design is provided */}
      </div>
    </div>
  );
}
