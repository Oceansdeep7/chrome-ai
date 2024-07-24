import {Metadata} from "next";
import Disclosure from "@/components/Disclosure";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Browser AI - Offline AI Tools - Free",
    description:
        "Run browser built-in LLM in your browser.",
};

const FAQ = [
    {
        title: 'Can I use this AI tool in other browsers?',
        content: 'No, Chrome work towards defining common standards for AI integration in web browsers.'
    },
    {
        title: 'Compatibility issue on macOS',
        content: 'The use of Rosetta to run the x64 version of Chromium on ARM is neither tested nor maintained, and unexpected behavior will likely result. Please check that all tools that spawn Chromium are ARM-native.'
    },
    {title: 'Is the browser Built-in AI Tool free to use?', content: 'Yes,this is run locally and free to use.'},
    {
        title: 'What is the length of the context window?',
        content: 'The default context window is set to 1024 tokens. For Gemini Nano, the theoretical maximum is 32k, but there is a tradeoff between context size and performance.'
    },
    {
        title: 'Is there a way to know the token length of the input prompt?',
        content: 'Not at the moment. We acknowledge that this is inconvenient. For Latin languages, consider using this rule of thumb: one token is about four characters long.'
    },
]

export default function Page() {
    return (<>
            <section className="mx-auto max-w-[960px] text-center">
                <h1 className="mb-10 text-4xl font-bold md:mb-16">Free Browser Built-in AI Tools</h1>
                <p className="mx-auto mb-8 mt-0 text-base md:text-lg">Run AI tools with Gemini Nano locally, no more worries about usage limits.</p>
                <Link href='/chat'
                      className="inline-flex justify-center min-w-[240px] rounded-full bg-theme px-11 py-6 text-base font-medium leading-none text-white outline-none">
                    Free AI Playground
                </Link>
            </section>
            <section>
                <h2 className="mx-auto max-w-[960px] mt-10 text-3xl font-bold text-center">Frequently Asked
                    Questions</h2>
                <div className='mt-10'>
                    {FAQ.map((item, index) => (
                        <div className={`px-7 py-6  lg:py-10 my-5`} key={index}>
                            <Disclosure title={item.title} content={item.content}></Disclosure>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
