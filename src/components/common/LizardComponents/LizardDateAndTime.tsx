import { getServerTimes } from "@/utils/helpers/dateHelpers";
import { LizardText } from "./LizardText";

interface LizardDateAndTimeProps {
    className?: string;
    label?: string;
    type?: "date" | "time";
    time?: "localTime" | "utcTime";
}

export function LizardDateAndTime({ className = "", label, type = "time", time = "localTime" }: LizardDateAndTimeProps) {
    const { localTime, utcTime } = getServerTimes("timestamp");

    const displayTime = time === "localTime" ? localTime : utcTime;
    const dateObj = new Date(displayTime);


    const formattedDate =
        type === "date"
            ? dateObj.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric", year: "numeric" })
            : dateObj.toLocaleTimeString();

    return (
        <div className={`flex gap-2 ${className}`}>

            {label && (
                <LizardText className="text-[#b3b3b3] text-[20px] uppercase">
                    {label}
                </LizardText>
            )}
            <LizardText className="text-[20px]">{formattedDate}</LizardText>
        </div>

    );
}
