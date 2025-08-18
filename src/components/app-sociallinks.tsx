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
                    className="p-3 rounded-full bg-gray-800 hover:scale-110 transition-transform"
                >
                    {social.icon()}
                </a>
            ))}
        </div>
    );
}

