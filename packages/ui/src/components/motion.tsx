"use client";

import { motion, type MotionProps } from "framer-motion";
import { cn } from "@workspace/ui/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const motionVariants = cva("", {
  variants: {
    animation: {
      fadeIn: "animate-fade-in",
      slideUp: "animate-slide-up",
      slideDown: "animate-slide-down",
      slideLeft: "animate-slide-left",
      slideRight: "animate-slide-right",
      scale: "animate-scale",
      bounce: "animate-bounce-in",
    },
    delay: {
      none: "",
      sm: "delay-100",
      md: "delay-200",
      lg: "delay-300",
      xl: "delay-500",
    },
    duration: {
      fast: "duration-200",
      normal: "duration-300",
      slow: "duration-500",
      slower: "duration-700",
    },
  },
  defaultVariants: {
    animation: "fadeIn",
    delay: "none",
    duration: "normal",
  },
});

// Predefined animation configurations
const animationConfigs = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 },
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, type: "spring", stiffness: 100 },
  },
  slideDown: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, type: "spring", stiffness: 100 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4, type: "spring", stiffness: 100 },
  },
  slideRight: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4, type: "spring", stiffness: 100 },
  },
  scale: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.3, type: "spring", stiffness: 200 },
  },
  bounce: {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { 
      duration: 0.6, 
      type: "spring", 
      stiffness: 200,
      damping: 20 
    },
  },
  stagger: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: 0.1 },
  },
  staggerDelay: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: 0.2 },
  },
  staggerDelayLong: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, delay: 0.3 },
  },
  form: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
  header: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  content: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7 },
  },
  button: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  divider: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.7 },
  },
  social: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  footer: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.9 },
  },
} as const;

type AnimationType = keyof typeof animationConfigs;

interface MotionWrapperProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  motionProps?: MotionProps;
}

function MotionWrapper({
  children,
  animation = "fadeIn",
  delay = 0,
  duration,
  className,
  motionProps,
}: MotionWrapperProps) {
  const config = animationConfigs[animation];
  
  // Apply custom delay if provided
  const finalConfig = {
    ...config,
    transition: {
      ...config.transition,
      delay: delay / 1000, // Convert ms to seconds
      duration: duration ? duration / 1000 : config.transition.duration,
    },
  };

  return (
    <motion.div
      {...finalConfig}
      {...motionProps}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

// Specialized motion components for common use cases
function MotionHeader({ children, ...props }: Omit<MotionWrapperProps, "animation">) {
  return <MotionWrapper animation="header" {...props}>{children}</MotionWrapper>;
}

function MotionContent({ children, ...props }: Omit<MotionWrapperProps, "animation">) {
  return <MotionWrapper animation="content" {...props}>{children}</MotionWrapper>;
}

function MotionForm({ children, ...props }: Omit<MotionWrapperProps, "animation">) {
  return <MotionWrapper animation="form" {...props}>{children}</MotionWrapper>;
}

function MotionButton({ children, ...props }: Omit<MotionWrapperProps, "animation">) {
  return <MotionWrapper animation="button" {...props}>{children}</MotionWrapper>;
}

function MotionDivider({ children, ...props }: Omit<MotionWrapperProps, "animation">) {
  return <MotionWrapper animation="divider" {...props}>{children}</MotionWrapper>;
}

function MotionSocial({ children, ...props }: Omit<MotionWrapperProps, "animation">) {
  return <MotionWrapper animation="social" {...props}>{children}</MotionWrapper>;
}

function MotionFooter({ children, ...props }: Omit<MotionWrapperProps, "animation">) {
  return <MotionWrapper animation="footer" {...props}>{children}</MotionWrapper>;
}

function MotionStagger({ children, ...props }: Omit<MotionWrapperProps, "animation">) {
  return <MotionWrapper animation="stagger" {...props}>{children}</MotionWrapper>;
}

function MotionStaggerDelay({ children, ...props }: Omit<MotionWrapperProps, "animation">) {
  return <MotionWrapper animation="staggerDelay" {...props}>{children}</MotionWrapper>;
}

function MotionStaggerDelayLong({ children, ...props }: Omit<MotionWrapperProps, "animation">) {
  return <MotionWrapper animation="staggerDelayLong" {...props}>{children}</MotionWrapper>;
}

export {
  MotionWrapper,
  MotionHeader,
  MotionContent,
  MotionForm,
  MotionButton,
  MotionDivider,
  MotionSocial,
  MotionFooter,
  MotionStagger,
  MotionStaggerDelay,
  MotionStaggerDelayLong,
  motionVariants,
  animationConfigs,
};

export type { AnimationType, MotionWrapperProps }; 