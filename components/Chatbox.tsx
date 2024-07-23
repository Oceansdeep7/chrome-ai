"use client";

import {useEffect, useState} from "react";

import {Button} from "@/components/ui/button";
import {Input} from "./ui/input";
import {useRef} from "react";
import Link from "next/link";
import {ArrowPathIcon} from "@heroicons/react/24/solid"

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

export default function ChatBox() {
    const id = useRef(0);
    const [endMessage, setEndMessage] = useState<null | HTMLDivElement>(null);
    const [model, setModel] = useState({
        prompt: async (inputValue?: string) => {
        },
        execute: async (inputValue?: string) => {
        },
    });
    const [isAI, setIsAI] = useState<null | boolean>(null);
    const [inputValue, setInputValue] = useState("");
    const [inferring, setInferring] = useState(false);
    const [chatHistory, setChatHistory] = useState<any[]>([]);

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

    useEffect(() => {
        endMessage?.scrollIntoView({behavior: "smooth"});
    }, [endMessage]);

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
                <div id='chatbox' className='p-4 h-[60vh] overflow-y-auto'>
                    {chatHistory.map((chat) => {
                        if (chat.role === "user") {
                            return (
                                <div className='mb-2 text-right' key={chat.id}>
                                    <p className='bg-blue-500 text-white rounded-lg py-2 px-4 inline-block'>
                                        {chat.text}
                                    </p>
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    className='mb-2'
                                    key={chat.id}
                                    ref={(el) => {
                                        setEndMessage(el);
                                    }}
                                >
                                    <p className='bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block'>
                                        {chat.text}
                                    </p>
                                </div>
                            );
                        }
                    })}
                </div>
                <form
                    className='flex w-full items-center space-x-2'
                    onSubmit={async (form) => {
                        form.preventDefault();

                        if (inputValue === "") {
                            return;
                        }
                        setInferring(true);


                        let aiReplay = (await model.prompt(inputValue)) as unknown as string;

                        if (!aiReplay || aiReplay.length == 0) {
                            aiReplay = "[Nothing]";
                        }

                        setChatHistory(
                            [...chatHistory, {
                                id: ++id.current,
                                role: "user",
                                text: inputValue,
                            },
                                {
                                    id: ++id.current,
                                    role: "assistant",
                                    text: aiReplay,
                                }
                            ]
                        );
                        setInputValue("");
                        setInferring(false);
                    }}
                    onReset={() => {
                        id.current = 0
                        setChatHistory([]);
                        setInputValue("");
                    }}
                >
                    <Button type='reset' disabled={!isAI || inferring}>
                        New Chat
                    </Button>
                    <Input
                        placeholder='Send a message'
                        name='text'
                        value={inputValue}
                        onInput={(e) => {
                            if ("value" in e.target) {
                                setInputValue(e.target.value as string);
                            }
                        }}
                        disabled={!isAI}
                    />
                    <Button type='submit' disabled={!isAI || inferring}>
                        {inferring && <ArrowPathIcon className="mr-2 h-4 w-4 animate-spin"/>}
                        Send
                    </Button>
                </form>
            </div>
        </>
    );
}
