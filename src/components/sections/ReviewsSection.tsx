import { PrimaryButton, SecondaryButton } from "../UI/Buttons"
import { Links } from "../UI/Link"
import { DownCurveShape } from "../UI/Shapes/Shapes"
import { Section } from "./Section"
import { SectionWrapper } from "./SectionWrapper"

export const ReviewsSection = () => {
    return (
        <SectionWrapper wrapperClass="bg-cyan-950 text-white">
                <div className="flex flex-col lg:flex-row gap-5 md:gap-8 justify-center items-center">

                    <div className="w-full h-[235px] lg:w-[23%] lg:h-[275px] rounded-tl-4xl rounded-br-4xl rounded-tr-xl rounded-bl-xl overflow-hidden shadow-2xl relative">
                        <img
                            className="w-full h-full object-cover object-center"
                            src="Gemini_Generated_Image_a1xc4ja1xc4ja1xc.jpg"
                            alt="Johan Svensson - Grundare"
                        />
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <h2 className="header-container text-[28px] lg:text-[32px] text-white">
                                Du får alltid en fast <span className="text-amber-300">offert</span> innan vi börjar
                            </h2>

                            <p className="text-white italic border-l border-amber-300 pl-2">
                                "Jag vill att du ska veta exakt vad det kostar innan vi drar första kabeln."
                            </p>
                        </div>

                        <div>
                            <p className="font-semibold text-white">Moa Svensson</p>
                            <p className="text-xs text-gray-300">Grundare & VD</p>
                        </div>

                        <div className="mt-8">
                            <SecondaryButton href="" text="Läs mer om oss" />
                        </div>
                    </div>

                </div>
          

            <DownCurveShape color="#f8f8f8" />
     </SectionWrapper>
    )
}