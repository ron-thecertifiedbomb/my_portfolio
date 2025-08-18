import { socials } from '@/config/sociallinks';

export function AppSocialLinks() {

    return (
        <div className="flex flex-wrap gap-3">
            {socials.map((social) => (
                <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center p-3 rounded-full bg-dark.foreground hover:scale-110 transition-transform duration-200"
                >
                    {social.icon()}
                </a>
            ))}
        </div>
    );
}

