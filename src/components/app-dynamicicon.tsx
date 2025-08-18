// src/components/app-dynamicicon.tsx
import * as Icons from "lucide-react";

type Props = {
    name: string;
    className?: string;
};

export function AppDynamicIcon({ name, className }: Props) {
    const LucideIcon = (Icons as any)[name];
    return LucideIcon ? <LucideIcon className={className ?? "size-4"} /> : null;
}
