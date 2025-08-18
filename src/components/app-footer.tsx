// import { appConfig } from '@/config/app'
// import { ModeToggle } from './mode-toggle'

export function AppFooter() {
    return (
        <footer className="flex flex-col items-center justify-center gap-4 min-h-[3rem] md:h-20 py-2 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground">
                © {new Date().getFullYear()} Apache Propeller and Machine Shop. All rights reserved.
                For inquiries, call{" "}
                <a
                    href="tel:+15551234567"
                    className="font-medium underline underline-offset-4"
                >
                    09182084851
                </a>
                .
            </p>
        </footer>
    )
}