
import { LizardAndTitleLogo } from ".";
import { LizardDateAndTime } from "./LizardDateAndTime";
import { LizardLogoContainer } from "./LizardLogoContainer";

export function LizardHeader() {

    return (
        <div className="flex w-full items-center gap-4 py-4 px-20">
            <div className="flex w-full justify-between">
                <div>
                    <LizardLogoContainer
                        svg={LizardAndTitleLogo}
                        className=" w-60 h-auto fill-[#88fb59ff] stroke-[#88fb59ff] "
                    />
                </div>

                <div className="flex gap-4">
                    <LizardDateAndTime time="utcTime" type="time" label="Server Time:" />
                    <LizardDateAndTime time="localTime" type="time" label="Local Time:" />
                </div>
            </div>
        </div>
    );
}
