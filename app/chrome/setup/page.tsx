import {Metadata} from "next";
import enables from "@/assets/enables-optimization-guide-on-device.png"
import optimization from "@/assets/optimization-guide-on-device-model.png"
import prompt from "@/assets/prompt-api-for-gemini-nano.png"
import Image from "next/image";

export const metadata: Metadata = {
    title: "Browser AI - Chrome - Setup Guide",
}

export default function Page() {
    return (<section className="py-10 lg:px-8">
            <div className="mx-auto rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4 text-center">Setup Guide for Chrome</h1>
                <section className="mb-8">
                    <h2 className="text-lg font-semibold mb-2">Initial Steps</h2>
                    <ul className="list-disc ml-4">
                        <li>Ensure your device has at least 22 GB of free storage space.</li>
                        <li>Download Chrome Dev channel (or Canary channel), version <a className='underline'
                                                                                        href='https://www.google.com/intl/en_uk/chrome/canary/'
                                                                                        target="_blank" rel="nofollow">128.0.6545.0
                            or newer.</a></li>
                        <li>Open Chrome, go to <code>chrome://flags/#optimization-guide-on-device-model</code>.</li>
                        <li>Select "Enabled" for <code>BypassPerfRequirement</code>.</li>
                        <div className='flex-center'>
                            <Image height={300} className="my-4 max-w-[500px]" src={enables}
                                   alt='enabled-opttimization-guide-on-device'/>
                        </div>
                        <li>Go to <code>chrome://flags/#prompt-api-for-gemini-nano</code>.</li>
                        <li>Select "Enabled" for Prompt API.</li>
                        <div className='flex-center'>
                            <Image height={300} className="my-4 max-w-[500px]" src={prompt} alt='prompt-api-for-gemini-nano'/>
                        </div>
                        <li>Relaunch Chrome.</li>
                    </ul>
                </section>
                <section className="mb-8">
                    <h2 className="text-lg font-semibold mb-2">Confirm availability of Gemini Nano</h2>
                    <ul className="list-disc ml-4">
                        <li>Go to <code>chrome://components</code>.</li>
                        <li>Confirm Optimization Guide On Device Model present with a version greater or equal to 2024.5.21.1031</li>
                        <div className='flex-center'>
                            <Image height={300} className="my-4 max-w-[500px]" src={optimization} alt='prompt-api-for-gemini-nano'/>
                        </div>
                    </ul>
                </section>
            </div>
        </section>
    )
}