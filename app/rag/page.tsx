import {Metadata} from "next";
import ChatBoxRAG from "@/components/Chatbox";

export const metadata: Metadata = {
    title: "Chrome AI - Offline RAG - window.ai",
    description:
        "Run RAG in your browser. Processing sensitive data locally",
};

export default function Page() {
    return (<section
            className='m-4 flex-1 px-4 py-4 border-border rounded-lg border backdrop-blur-[2px]'>
            <div className='mx-auto flex w-full flex-col gap-8'>
                <div className='col-span-full flex items-start justify-between gap-1'>
                    <div className='flex min-w-0 flex-col gap-1'>
                        <h1 className='font-cal text-3xl'>Free RAG Playground</h1>
                        <h2 className='text-muted-foreground'>
                            Interact with Gemini Nano
                        </h2>
                    </div>
                </div>
                <ChatBoxRAG/>
            </div>
        </section>
    );
}
