import {
    ChevronRight,
    Menu,
} from "lucide-react"
import { mainMenu } from '@/config/menu'
import { Link, NavLink } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarProvider,
} from "@/components/ui/sidebar"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from '@/lib/utils'
import { ModeToggle } from "./mode-toggle"
import { AppLabel } from "./app-label"

export function AppSidebar() {
    return (
        <SidebarProvider>
            <div className="flex items-center">
                <Popover>
                    <PopoverTrigger asChild>
           
                        <button className="h-10 w-10 p-2 bg-transparent rounded-full hover:bg-accent transition">
                            <Menu size={24} />
                        </button>
             
                    </PopoverTrigger>
                    <PopoverContent
                        className="w-56 overflow-hidden rounded-lg p-0 absolute z-50 left-1/2 -translate-x-[95%]"
                    >
                        <Sidebar collapsible="none" className="bg-transparent">
                            <SidebarContent>
                                
                                <SidebarGroup>
                                    <SidebarGroupContent className="gap-0">
                                        <SidebarMenu>
                                            {mainMenu.map((item, index) =>
                                                item.items && item.items.length > 0 ? (
                                                    <Collapsible
                                                        key={item.title}
                                                        asChild
                                                        defaultOpen={location.pathname.startsWith(item.url)}
                                                        className="group/collapsible"
                                                    >
                                                        <SidebarMenuItem>
                                                            <CollapsibleTrigger asChild>
                                                                <SidebarMenuButton tooltip={item.title}>
                                                                    {item.icon && <item.icon />}
                                                                    <span>{item.title}</span>
                                                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                                                </SidebarMenuButton>
                                                            </CollapsibleTrigger>
                                                            <CollapsibleContent>
                                                                <SidebarMenuSub>
                                                                    {item.items?.map((subItem) => (
                                                                        <SidebarMenuSubItem key={subItem.title}>
                                                                            <SidebarMenuSubButton asChild>
                                                                                <NavLink
                                                                                    to={subItem.url}
                                                                                    className={cn(
                                                                                        "cursor-pointer",
                                                                                        subItem.url === location.pathname &&
                                                                                        "bg-muted"
                                                                                    )}
                                                                                >
                                                                                    <span>{subItem.title}</span>
                                                                                </NavLink>
                                                                            </SidebarMenuSubButton>
                                                                        </SidebarMenuSubItem>
                                                                    ))}
                                                                </SidebarMenuSub>
                                                            </CollapsibleContent>
                                                        </SidebarMenuItem>
                                                    </Collapsible>
                                                ) : (
                                                    <SidebarMenuItem key={index}>
                                                        <SidebarMenuButton asChild>
                                                            <Link
                                                                to={item.url}
                                                                className={cn(
                                                                    "cursor-pointer",
                                                                    item.url === location.pathname && "bg-muted"
                                                                )}
                                                            >
                                                                {item.icon && <item.icon />}
                                                                <span>{item.title}</span>
                                                            </Link>
                                                        </SidebarMenuButton>
                                                    </SidebarMenuItem>
                                                )
                                            )}
                                        </SidebarMenu>
                                
                                       
                                    </SidebarGroupContent>
                                </SidebarGroup>
                            </SidebarContent>
                        </Sidebar>
                    
                    </PopoverContent>
                </Popover>
            </div>
        </SidebarProvider>
    );
}