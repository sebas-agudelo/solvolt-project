import { DownCurveShape, UpCurveShape } from "@/components/UI/Shapes/Shapes"
import { PrimaryButton, SecondaryButton } from "../UI/Buttons"
import { Section } from "./Section"

export const CtaSection = () => {
    return (
        <div className="bg-neutral-100 relative z-40">
            <Section className="pt-15 lg:pt-20">
                <div className="w-full max-w-[530px] mx-auto flex flex-col items-center gap-15">
                    <div className="flex flex-col gap-2">
                        <h2 className="heading-md md:text-center">Behöver du hjälp av en auktoriserad elektriker?</h2>
                        <p className="paragraph md:text-center md:px-10">Vi är certifierade elektriker som utför alla typer av elinstallationer åt privatpersoner såväl som åt företag.</p>
                    </div>

                    <div className="w-full flex flex-col items-start md:flex-row md:items-center md:justify-center gap-6">
                        <PrimaryButton href="tel:" text="Ring oss" />
                        <SecondaryButton href="/contact" text="Jag vill bli kontaktad" />
                    </div>
                </div>
            </Section>
            <DownCurveShape color="#083344" />
        </div>
    )
}