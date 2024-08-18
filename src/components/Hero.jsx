import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import { bird, heroBackground } from "../assets";
import Button from "./Button";
import FloatingText from "./FloatingText";
import Section from "./Section";
import { TypewriterEffect } from "./typewriterEffect";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 animate-fade-up">
          Transform Your Vision into&nbsp;Stunning  <TypewriterEffect className="typewritingHeader" words={[
            { text: "AI-Generated", className: "h1" },
            { text: "Art", className: "h1" },
          ]} cursorClassName="typewritingHeader" />
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Unlock the power of AI to create stunning visuals effortlessly. At GimCraft, your imagination is our blueprint for innovation.
          </p>
          <Button href="/pricing" white>
            Start Free
          </Button>
        </div>

        <div className="relative max-w-[15rem] mx-auto md:max-w-3xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">

              <div className="aspect-[33/40] rounded-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={bird}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="bird"
                />

                <ScrollParallax isAbsolutelyPositioned>
                  <FloatingText
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Image generating"
                  />
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <FloatingText
                    className="hidden absolute -left-[9rem] bottom-[18rem] w-[18rem] xl:flex"
                    title="API Support"
                  />
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <FloatingText
                    className="hidden absolute -left-[7rem] bottom-[2rem] w-[18rem] xl:flex"
                    title="+10 pre-built AI models"
                  />
                </ScrollParallax>
              </div>
            </div>

          </div>

          {/* Background */}
          <div className="absolute -top-[154%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[158%] lg:-top-[150%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
        </div>
      </div>

    </Section>
  );
};

export default Hero;
