import { AppSocialLinks } from "./app-sociallinks";

export function AppFooter() {
    return (
        <footer className="w-full  py-6 md:py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-center text-sm md:text-base">
                © {new Date().getFullYear()} Ronan Ramos Sibunga. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
                <AppSocialLinks />
            </div>
        </footer>
    );
}
