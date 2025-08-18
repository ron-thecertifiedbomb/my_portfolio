import { baseUrl } from "@/config/app"
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function AppLogo() {
    return (
        <div className='flex items-center gap-2'>
            <Avatar className="hidden md:h-9 md:w-12 md:flex p-1">
                <AvatarImage src={baseUrl + '/avatars/logo.png'} alt='logo' />
                <AvatarFallback className="rounded-lg">SC</AvatarFallback>
            </Avatar>
        </div>
    )
}