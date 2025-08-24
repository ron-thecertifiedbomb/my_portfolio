import { LizardImage, LizardText } from "@/components/common/LizardComponents";


// interface LizardInteractivePanelsProps {
//   title: string;
//   subtitle?: string;
//   badge?: string;
//   logoSrc?: string;
// }

export function LizardInteractivePanels() {
  return (
    <div className=" box-content  w-full max-w-[300px] bg-[#242425]  pl-2">
      <div className="  w-full bg-transparent relative overflow-hidden ">
        <LizardText
          variant="h1"
          className="text-[30px] pl-3 text-white font-light uppercase "
        >
          WELCOME
        </LizardText>
        <LizardImage
          src={"/public/assets/union.png"}
          alt="logo"
          objectFit="contain"
          className="h-15 w-15 absolute right-[-15px] top-[-5px] rotate-62 invert"
        />
      </div>

      <div className="bg-[black]">
        <LizardText
          variant="h1"
          className="text-[14px] p-3 text-white font-light uppercase"
        >
          I am a creative and passionate individual with a strong love for
          learning. I thrive on exploring new ideas, embracing challenges, and
          constantly growing both personally and professionally.
        </LizardText>
      </div>
    </div>
  );
}
