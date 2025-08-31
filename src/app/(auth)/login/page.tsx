"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { authClient } from "@/lib/auth/client";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function SignIn() {
  return (
    <div className="flex grow items-center justify-center p-4">
      <Card className="w-full max-w-sm rounded-2xl shadow-xl">
        <CardHeader>
          <Logo className="mx-auto my-4 h-10" />
          <CardTitle className="text-center text-xl font-semibold">
            Sign in to your account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            variant="outline"
            className="mt-4 w-full justify-center"
            onClick={async () => {
              await authClient.signIn.social({
                provider: "google",
                callbackURL: "/dashboard",
                newUserCallbackURL: "/role-selection",
              });
            }}
          >
            <FaGoogle className="mr-2 h-4 w-4" />
            Sign in with Google
          </Button>
          <div className="mt-4 text-center text-sm">
            <Link href="/register" className="text-primary hover:underline">
              Don&apos;t have an account? Register here.
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
