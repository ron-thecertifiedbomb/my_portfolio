import { AppLogo } from "./app-logo";
import { AppSidebar } from "./app-sidebar";

export function AppHeader() {
    return (
        <header className="bg-background sticky top-0 z-50 mb-5">
            <div className="max-w-7xl mx-auto px-2 sm:px-8">
                {/* Full-width flex container with border */}
                <div className="w-full flex items-center justify-between h-14 border-b">
                    {/* Left: Logo */}
                    <div className="flex items-center">
                        <AppLogo />
                    </div>

                    {/* Right: Sidebar / Hamburger */}
                    <div className="flex items-center">
                        <AppSidebar />
                    </div>
                </div>
            </div>
        </header>

    );
}
