// import { appConfig } from '@/config/app'
// import { ModeToggle } from './mode-toggle'

export function AppFooter() {
    return (
        <footer className="flex flex-col items-center justify-center gap-4 min-h-[3rem] md:h-20 py-2 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground">
                Ronan Ramos Sibunga {new Date().getFullYear()}.
               
            </p>
        </footer>
    )
}