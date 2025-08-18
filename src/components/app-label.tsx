import React from "react";
import { cn } from "@/lib/utils";

// Headings
export function AppHeading1({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h1 className={cn("text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold", className)} {...props}>
            {children}
        </h1>
    );
}

export function AppHeading2({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2 className={cn("text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold", className)} {...props}>
            {children}
        </h2>
    );
}

export function AppHeading3({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3 className={cn("text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold", className)} {...props}>
            {children}
        </h3>
    );
}

export function AppHeading4({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h4 className={cn("text-sm sm:text-lg md:text-xl lg:text-2xl font-medium", className)} {...props}>
            {children}
        </h4>
    );
}

// Paragraph
export function AppParagraph({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn(
                "text-sm sm:text-base md:text-m leading-relaxed",
                className
            )}
            {...props}
        >
            {children}
        </p>
    );
}

// Label / Badge
export function AppLabel({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className={cn("text-sm sm:text-sm md:text-base lg:text-base", className)} {...props}>
            {children}
        </p>
    );
}

// Label Title and Description
export function AppLabelTitle({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className={cn("font-semibold text-xs sm:text-sm md:text-base", className)} {...props}>
            {children}
        </p>
    );
}

export function AppLabelDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className={cn("text-xs sm:text-sm md:text-base lg:text-base", className)} {...props}>
            {children}
        </p>
    );
}
