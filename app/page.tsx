import Image from "next/image";
import Header from "@/components/header";
import SelectDialog from "@/components/select-template-dialog";
import BlurText from "@/components/ui/blur-text";
import HeroSectionBackground from "./hero-section-background";

const Page = () => {
  return (
    <div>
      <div className="absolute top-0 z-[-2] h-full w-full bg-[radial-gradient(ellipse_60%_150%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <HeroSectionBackground />

      <Header />
      <BlurText>
        <main className="px-4 mt-10 flex flex-col items-center gap-3.5 sm:gap-6 w-full overflow-hidden mb-20">
          <h1 className="text-2xl sm:text-5xl md:text-6xl font-space-grotesk font-semibold text-center">
            Create Your Professional <br /> Resume in Minutes
          </h1>
          <p className="text-center mb-3 sm:mb-0 text-xs sm:text-base text-pretty text-secondary-foreground font-space-grotesk font-light">
            Say goodbye to formatting struggles. Our intuitive <br /> builder
            creates ATS-friendly resumes in minutes, not hours.
          </p>

          <SelectDialog />

          <div
            style={{
              perspective: "4000px",
              perspectiveOrigin: "100% 120%",
            }}
          >
            <Image
              alt="front image"
              src="/front-img.png"
              width={1000}
              height={1000}
              style={{
                transform:
                  "translateX(8%) scale(1.2) rotateX(45deg) rotateY(31deg) rotate(324deg)",
              }}
              className="w-full h-full object-cover object-center rounded-xl"
            />
            <div className="hero-image rounded-xl" />
          </div>
        </main>
      </BlurText>

      {/* <div className="mt-28">
        <KeyFeatures />
      </div> */}
    </div>
  );
};

export default Page;
