
import {

    LizardContent,
    LizardText,
} from '@/components/common/LizardComponents'


export function IntroductionScreen() {
    return (
        <LizardContent
            className="
                      box-content
                      w-full
                      flex  
                      flex-col 
                      flex-1
                     
                    "
        >
            <LizardText className="text-[18px] text-white font-light uppercase mb-4 text-center">
                Introduction Screen
            </LizardText>


        </LizardContent>
    )
}
