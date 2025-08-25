import { LizardImage } from "@/components/common/LizardComponents/LizardImage";
import { LizardText } from "@/components/common/LizardComponents/LizardText";
import { useLizardStore } from "@/store/lizardStore";

interface LizardCenterCardProps {
  className?: string;
}

export function LizardCenterCard({ className = "" }: LizardCenterCardProps) {
  const { skills, selectedSkillType, setSelectedSkillType } = useLizardStore();

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {skills.map((skill) => {
        const isSelected = selectedSkillType === skill.type;

        return (
          <div
            key={skill.type}
            onClick={() => setSelectedSkillType(skill.type)}
            className={`
              w-full flex flex-row items-center
              rounded-sm border-[0.5px] border-[rgba(255,255,255,0.1)]
              shadow-md backdrop-blur-sm bg-white/5
              transition-shadow duration-300 ease-in-out
              hover:shadow-lg hover:bg-white/10
              cursor-pointer
              ${isSelected ? "bg-[#E84A4A]/20 border-[#E84A4A] shadow-lg" : ""}
            `}
          >
            {/* Image */}
            <div className="flex-shrink-0 flex justify-center items-center p-4 border-r border-[rgba(255,255,255,0.1)]">
              <LizardImage
                src={skill.imageSrc}
                alt={skill.imageAlt || "logo"}
                objectFit="contain"
                className="w-12 h-auto"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col p-4">
              <LizardText
                variant="h4"
                className={`font-iceland text-[25px] font-medium uppercase ${isSelected ? "text-[#E84A4A]" : "text-[#b3b3b3]"
                  }`}
              >
                {skill.title}
              </LizardText>

              {skill.description && (
                <LizardText
                  variant="p"
                  className="text-[14px] text-[#b3b3b3] font-light leading-snug tracking-wide uppercase"
                >
                  {skill.description}
                </LizardText>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
