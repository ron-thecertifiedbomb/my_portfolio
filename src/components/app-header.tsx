import { Link } from 'react-router-dom'
import { AppLogo } from './app-logo'
import { AppSidebar } from './app-sidebar'


import { AppNavbar } from './app-navbar'


export function AppHeader() {
    return (
        <header className="bg-background sticky top-0 z-50">
            <div className="w-full max-w-7xl mx-auto flex items-center h-14 px-4 md:px-8 border-b">
                <div className="flex items-center gap-2">
                    <AppSidebar />
                    <Link to="/">
                        <AppLogo />
                    </Link>
                </div>
                <div className="flex flex-1 justify-end items-center gap-3">
                    <AppNavbar />


                </div>
            </div>
        </header>
    )
}