"use client";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { authClient } from "@/lib/auth/client";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { toast } from "sonner";

export default function SignUp() {
  return (
    <div className="flex grow items-center justify-center p-4">
      <Card className="w-full max-w-sm rounded-2xl shadow-xl">
        <CardHeader>
          <Logo className="mx-auto my-4 h-10" />
          <CardTitle className="text-center text-xl font-semibold">
            Create an account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            className="w-full justify-center"
            onClick={async () => {
              try {
                await authClient.signIn.social({
                  provider: "google",
                  callbackURL: "/dashboard",
                  newUserCallbackURL: "/role-selection",
                });
              } catch (error) {
                console.error("Google sign-in error:", error);
                toast.error("Failed to sign in with Google");
              }
            }}
          >
            <FaGoogle className="mr-2 h-4 w-4" />
            Sign up with Google
          </Button>
          <div className="mt-4 text-center text-sm">
            <Link href="/login" className="text-primary hover:underline">
              Already have an account? Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}