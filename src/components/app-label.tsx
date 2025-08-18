import React from "react";
import { cn } from "@/lib/utils";

// Headings
export function AppHeading1({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h1 className={cn("text-3xl font-bold", className)} {...props}>
            {children}
        </h1>
    );
}

export function AppHeading2({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2 className={cn("text-2xl font-semibold", className)} {...props}>
            {children}
        </h2>
    );
}

export function AppHeading3({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h3 className={cn("text-xl font-semibold", className)} {...props}>
            {children}
        </h3>
    );
}

export function AppHeading4({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h4 className={cn("text-lg font-medium", className)} {...props}>
            {children}
        </h4>
    );
}

// Paragraph
export function AppParagraph({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p className={cn("text-gray-700 dark:text-gray-300 text-lg leading-relaxed", className)} {...props}>
            {children}
        </p>
    );
}

// Label / Badge
export function AppLabel({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "inline-block px-3 py-1 rounded-md bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 text-sm font-medium",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

// Label Title and Description
export function AppLabelTitle({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
    return <span className={cn("font-semibold text-sm", className)} {...props} />;
}

export function AppLabelDescription({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
    return <span className={cn("text-xs text-muted-foreground", className)} {...props} />;
}
