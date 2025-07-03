"use client";

import { useState } from "react";
import { Button } from "@workspace/ui/components/button";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@workspace/ui/components/card";
import { 
  MotionWrapper, 
  MotionHeader, 
  MotionContent, 
  MotionForm, 
  MotionButton, 
  MotionDivider, 
  MotionSocial, 
  MotionFooter 
} from "@workspace/ui/components/motion";
import { Eye, EyeOff, Mail, Lock,  QrCode, KeyRound } from "lucide-react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <MotionWrapper animation="slideUp" className="w-full max-w-md">
        <Card variant="frosted" className="relative">
          <CardHeader className="text-center pb-6">
            <MotionHeader>
              <CardTitle className="text-3xl font-bold mb-2">Sign In </CardTitle>
            </MotionHeader>
          </CardHeader>

          <CardContent className="space-y-6">
            <MotionForm>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/15 focus:border-white/30 backdrop-blur-sm h-12 rounded-xl"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      className="pl-10 pr-10 bg-white/10 border-white/20 text-white placeholder-white/50 focus:bg-white/15 focus:border-white/30 backdrop-blur-sm h-12 rounded-xl"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white/80 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <Link href="/forgot-password" className="text-white/70 hover:text-white text-sm transition-colors">
                    Forgot password?
                  </Link>
                </div>

                <MotionButton>
                  <Button
                    type="submit"
                    className="w-full h-12"
                  >
                    Sign In
                  </Button>
                </MotionButton>
              </form>
            </MotionForm>

            <MotionDivider>
              <div className="flex gap-2 items-center">
                <div className="flex flex-1 items-center h-[1px]">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex flex-1 justify-center text-sm min-w-max">
                  <span className="px-4  text-white/50">Or continue with</span>
                </div>
                <div className="flex flex-1 items-center h-[1px]">
                  <div className="w-full border-t border-white/20"></div>
                </div>
              </div>
            </MotionDivider>

            <MotionSocial>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full h-12 bg-white/10 border-white/20 text-white hover:bg-white/15 hover:border-white/30 backdrop-blur-sm rounded-xl"
                  type="button"
                  onClick={() => alert("Unimplemented")}
                >
                  <Icon icon="mdi:google" className="!w-5 !h-5 mr-1" />
                  Continue with Google
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-12 bg-white/10 border-white/20 text-white hover:bg-white/15 hover:border-white/30 backdrop-blur-sm rounded-xl"
                  type="button"
                  onClick={() => alert("Unimplemented")}
                >
                  <Icon icon="lucide:scan-qr-code" className="!w-5 !h-5 mr-1" />
                  Continue with QR code
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-12 bg-white/10 border-white/20 text-white hover:bg-white/15 hover:border-white/30 backdrop-blur-sm rounded-xl"
                  type="button"
                  onClick={() => alert("Unimplemented")}
                >
                  <Icon icon="mdi:key" className="!w-5 !h-5 mr-1" />
                  Continue with Token
                </Button>
              </div>
            </MotionSocial>

            
          </CardContent>
        </Card>
      </MotionWrapper>
    </div>
  );
}
