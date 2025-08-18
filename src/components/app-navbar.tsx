import { NavLink } from "react-router-dom"
import { mainMenu } from "@/config/menu"
import { cn } from "@/lib/utils"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function AppNavbar() {
    return (
        <nav className="hidden md:flex gap-1">
            {mainMenu.map((item, index) =>
                item.items && item.items.length > 0 ? (
                    <DropdownMenu key={index}>
                        <DropdownMenuTrigger className="focus-visible:outline-none">
                            <NavLink
                                to={item.url}
                                className={({ isActive }) =>
                                    cn(
                                        "flex items-center gap-2 rounded-md p-2.5 text-sm transition hover:bg-accent hover:text-accent-foreground",
                                        "h-8",
                                        isActive
                                            ? "text-foreground bg-accent"
                                            : "text-foreground/70"
                                    )
                                }
                            >
                                {item.icon && <item.icon />}
                                <span className="font-medium">{item.title}</span>
                                <ChevronDown className="!size-3 -ml-1" />
                            </NavLink>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="min-w-56">
                            {item.items.map((subItem, subIndex) => (
                                <DropdownMenuItem key={subIndex} asChild>
                                    <NavLink
                                        to={subItem.url}
                                        className={({ isActive }) =>
                                            cn("cursor-pointer", isActive && "bg-muted")
                                        }
                                    >
                                        {subItem.title}
                                    </NavLink>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <NavLink
                        key={index}
                        to={item.url}
                        className={({ isActive }) =>
                            cn(
                                "flex items-center gap-2 rounded-md p-2.5 text-sm transition hover:bg-accent hover:text-accent-foreground",
                                "h-8",
                                isActive
                                    ? "text-foreground bg-accent"
                                    : "text-foreground/70"
                            )
                        }
                    >
                        {item.icon && <item.icon />}
                        <span className="font-medium">{item.title}</span>
                    </NavLink>
                )
            )}
        </nav>
    )
}
