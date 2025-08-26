
import { LizardText } from "./LizardText";
import { LizardDateAndTime } from "./LizardDateAndTime";

export function LizardHeader() {



    return (
        <div className="flex  w-full items-center gap-4 py-4 px-20">
            <div className="flex  w-full justify-between">
                <>
                    <div className="flex items-center gap-2 ">
                        <LizardText className="text-[#b3b3b3] text-3xl" >LIZARD INTERACTIVE</LizardText>

                    </div>

                </>

                <div className="flex gap-4">
                    <LizardDateAndTime time="utcTime" type="time" label="Server Time:" />
                    <LizardDateAndTime time="localTime" type="time" label="Local Time:" />


                </div>
            </div>
        </div>
    );
}
