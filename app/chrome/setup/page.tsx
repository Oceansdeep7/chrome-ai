import {Metadata} from "next";
import enables from "@/assets/enables-optimization-guide-on-device.png"
import optimization from "@/assets//optimization-guide-on-device-model.png.png"
import prompt from "@/assets//prompt-api-for-gemini-nano.png"
import Image from "next/image";

export const metadata: Metadata = {
    title: "Browser AI - Chrome - Setup Guide",
}

export default function Page() {
    return (<section className="py-10 lg:px-8">
            <div className="mx-auto rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-4">Setup Guide for Chrome</h1>
                <div className="mb-8">
                    <h2 className="text-lg font-semibold mb-2">Prerequisites and Initial Steps</h2>
                    <ul className="list-disc ml-4">
                        <li>Download Chrome Dev channel (or Canary channel), version <a className='underline' href='https://www.google.com/intl/en_uk/chrome/canary/' target="_blank" rel="nofollow" >128.0.6545.0 or newer.</a></li>
                        <li>Ensure your device has at least 22 GB of free storage space.</li>
                        <ul className="list-disc">
                            <li>Open Chrome, go to <code>chrome://flags/#optimization-guide-on-device-model</code>.</li>
                            <li>Select "Enabled" for <code>BypassPerfRequirement</code>.</li>
                            <div className='text-center'>
                            <Image className="my-4" src={enables} alt='enabled-opttimization-guide-on-device'/>
                            </div>
                            <li>Go to <code>chrome://flags/#prompt-api-for-gemini-nano</code>.</li>
                            <li>Select "Enabled" for Prompt API.</li>
                            <div className='text-center'>
                            <Image className="my-4" src={prompt} alt='prompt-api-for-gemini-nano'/>
                            </div>
                            <li>Relaunch Chrome.</li>
                        </ul>
                    </ul>
                </div>
            </div>
        </section>
    )
}