"use client";

import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ArrowPathIcon} from "@heroicons/react/24/solid"
import {Textarea} from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {copyTextToClipboard} from "@/lib/utils";
import {toast} from "react-toastify";

declare global {
    interface Window {
        ai: any;
    }
}

const checkAI = async () => {
    if ("ai" in window) {
        if ((await window.ai.canCreateTextSession()) === "readily") {
            return true;
        }
    }
    return false;
};

const LANGUAGES = [
    "Arabic",
    "Bangla",
    "Brazilian Portuguese",
    "Chinese (China)",
    "Danish",
    "Dutch",
    "English",
    "European Portuguese",
    "French",
    "German",
    "Hindi",
    "Italian",
    "Japanese",
    "Korean",
    "Polish",
    "Russian",
    "Spanish",
    "Swedish",
    "Turkish",
    "Ukrainian"
]

export default function Translator() {
    const [model, setModel] = useState({
        prompt: async (inputValue?: string) => {
        },
        execute: async (inputValue?: string) => {
        },
    });
    const [isAI, setIsAI] = useState<null | boolean>(null);
    const [inputValue, setInputValue] = useState("");
    const [inferring, setInferring] = useState(false);
    const [result, setResult] = useState('')
    const [language, setLanguage] = useState(LANGUAGES[0])

    const updateIsAI = async () => {
        const checkAIStatus = await checkAI();

        if (checkAIStatus) {
            const model = await window.ai.createTextSession();
            setModel(model);
        }

        setIsAI(checkAIStatus);
    };

    useEffect(() => {
        updateIsAI();
    }, []);

    const handleTranslate = async () => {
        if (inputValue === "") {
            return;
        }

        setInferring(true);
        let aiReplay = (await model.prompt(`I want you to act as an ${language} translator. You will translate it and answer in the corrected and improved version of my text, in ${language}. 
        
        My text: ${inputValue}`)) as unknown as string;

        setResult(!aiReplay || aiReplay.length == 0 ? '[Nothing]' : aiReplay)
        const newModel = await window.ai.createTextSession();
        setModel(newModel);
        setInferring(false);
    }

    const handleReset = async () => {
        setInferring(true)
        const model = await window.ai.createTextSession();
        setInputValue("");
        setResult("")
        setModel(model);
        setInferring(false)
    }

    const handleCopy = () => {
        if (result) {
            copyTextToClipboard(result)
            toast('copied successfully')
        }
    }

    const buttonDisabled = !isAI || inferring


    return (
        <>
            <div>
                {isAI === null ? <p>Testing your browser</p> : !isAI && <p>
                    Built-in AI is not working. Please check out the {" "}
                    <Link
                        href="/chrome/setup"
                        className='font-medium text-primary underline underline-offset-4'
                    >
                        setup guide
                    </Link>{" "}
                    to make it work.
                </p>}
            </div>

            <div className='w-full'>
                <section className='grid grid-cols-2 gap-4 h-[60vh]'>
                    <Textarea value={inputValue} onChange={e => setInputValue((e.target.value))}
                              className='h-full focus-visible:shadow-none' placeholder='Enter text'/>
                    <Textarea value={result} onChange={e => setResult((e.target.value))}
                              className='h-full focus-visible:shadow-none' placeholder='Translation'/>
                </section>
                <section className='mt-4 flex items-center space-x-2 sm:space-x-4'>
                    <Select value={language} onValueChange={setLanguage} disabled={buttonDisabled}>
                        <SelectTrigger className="flex-1">
                            <SelectValue/>
                        </SelectTrigger>
                        <SelectContent>
                            {LANGUAGES.map(language => <SelectItem value={language}
                                                                   key={language}>{language}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    <Button onClick={handleTranslate} className='bg-theme text-white' disabled={buttonDisabled}>
                        {inferring && <ArrowPathIcon className="mr-2 h-4 w-4 animate-spin"/>}
                        Translate
                    </Button>
                    <Button onClick={handleCopy} disabled={!result || buttonDisabled}>
                        Copy
                    </Button>
                    <Button onClick={handleReset} disabled={buttonDisabled}>
                        Clear
                    </Button>
                </section>
            </div>
        </>
    )
}
