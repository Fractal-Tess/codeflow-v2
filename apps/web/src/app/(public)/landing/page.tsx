'use client';

import { Button } from '@workspace/ui/components/button';
import {
  MotionButton,
  MotionHeader,
  MotionWrapper
} from '@workspace/ui/components/motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();
  const title = 'Welcome to CodeFlow';
  const words = title.split(' ');

  const handleSignIn = () => {
    router.push('/sign-in');
  };

  const handleSignUp = () => {
    router.push('/sign-up');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <MotionHeader className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                {word.split('').map((letter, letterIndex) => (
                  <MotionWrapper
                    key={`${wordIndex}-${letterIndex}`}
                    animation="stagger"
                    delay={wordIndex * 100 + letterIndex * 30}
                    className="inline-block text-transparent bg-clip-text \
                                            bg-gradient-to-r from-neutral-900 to-neutral-700/80 \
                                            dark:from-white dark:to-white/80"
                  >
                    {letter}
                  </MotionWrapper>
                ))}
              </span>
            ))}
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div
              className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 \
                                dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg \
                                overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <MotionButton className="w-full">
                <Button
                  asChild
                  variant="ghost"
                  className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md \
                                    bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 \
                                    text-black dark:text-white transition-all duration-300 \
                                    group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10\
                                    hover:shadow-md dark:hover:shadow-neutral-800/50"
                >
                  <Link href="/sign-in">
                    <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                      Sign In
                    </span>
                    <span
                      className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 \
                                        transition-all duration-300"
                    >
                      →
                    </span>
                  </Link>
                </Button>
              </MotionButton>
            </div>

            <div
              className="inline-block group relative bg-gradient-to-b from-blue-500/20 to-blue-600/20 \
                                dark:from-blue-400/20 dark:to-blue-500/20 p-px rounded-2xl backdrop-blur-lg \
                                overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            ></div>
          </div>
        </MotionHeader>
      </div>
    </div>
  );
}
