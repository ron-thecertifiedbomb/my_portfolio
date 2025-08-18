
import { AppLogo } from './app-logo'
import { AppSidebar } from './app-sidebar'
import { AppNavbar } from './app-navbar'



export function AppHeader() {
    return (
        <header className="bg-background sticky top-0 z-50">
            <div className="w-full max-w-7xl mx-auto flex items-center h-14 border-b">
                <div className="flex items-center ">
                    <AppSidebar />
                        <AppLogo />
                </div>
                <div className="flex flex-1 justify-end items-center gap-3">
                    <AppNavbar />
                    {/* <ModeToggle /> */}

                </div>
            </div>
        </header>
    )
}