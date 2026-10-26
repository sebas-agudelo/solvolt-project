import { PrimaryButton } from "@/components/UI/Buttons"


export const ContactForm = () => {
    return (
        <form className="">
            <div className="flex flex-col gap-2 md:flex-row mb-6">
                <div className="w-full md:w-1/2">

                    <label className="text-black text-[15px]" htmlFor="">Förnamn</label>
                    <input
                        className="border border-black/50 rounded-md w-full py-2 px-3"
                        id="firstname"
                        type="text"
                        name="firstname"
                        // placeholder="Namn"
                        required
                    />

                </div>

                <div className="w-full md:w-1/2">

                    <label className="text-black text-[15px]" htmlFor="">Efternamn</label>
                    <input
                        className="border border-black/50 rounded-md w-full py-2 px-3"
                        id="lastname"
                        type="text"
                        name="lastname"
                        // placeholder="Namn"
                        required
                    />

                </div>


            </div>

<div className="flex flex-col gap-2">

            <div className="w-full mb-6">
                <label className="text-black text-[15px]" htmlFor="">Telefonnummer</label>
                <input
                    className="border border-black/50 rounded-md w-full py-2 px-3"
                    id="phone"
                    type="text"
                    name="phone"
                    // placeholder="Telefonnummer"
                    required
                />
            </div>

            <div className="w-full mb-6">
                <label className="text-black text-[15px] block" htmlFor="">E-post</label>
                <input
                    className="border border-black/50 rounded-md text-cyan-950 w-full py-2 px-3"
                    id="email"
                    type="text"
                    name="email"
                    // placeholder="Email"
                    />
            </div>
                    </div>

{/* 
            <div className="w-full mb-8">
                <label className="text-black text-[15px]" htmlFor="">Vad kan vi hjälpa dig med?</label>
                <select
                    className="border border-black/50 h-full w-full text-cyan-950 rounded-md py-2"
                    name="" id="">
                    <option value="">Välj tjänst</option>
                    <option value="">Installera laddboxar</option>
                </select>
            </div> */}

            <div className="h-[125px] w-full mb-10">
                <label className="text-black text-[15px]" htmlFor="">Meddelande</label>
                <textarea
                    className="border border-black/50 h-full w-full text-cyan-950 rounded-md"
                    id="message"
                    name="message"
                    required
                // placeholder="Meddelande"
                >
                </textarea>
            </div>

            <div className="flex items-center mb-8">
                <input id="chbx" className="" type="checkbox" />
                <label htmlFor="chbx" className=" ml-2 text-sm">Jag godkänner behandling av mina uppgifter.</label>

            </div>

           <PrimaryButton text="Skicka"/>
        </form>
    )
}