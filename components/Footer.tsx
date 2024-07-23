"use client"
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import Image from "next/image";

interface FooterLink {
    url: string;
    text: string;
}

function FooterLink({url, text}: FooterLink) {
    return (
        <li className="flex">
            <Link
                href={url}
                className={`hover:dark:text-violet-400`}
            >
                {text}
            </Link>
        </li>
    );
}

function CategoryLink({url, text}: FooterLink) {
    return (
        <li className="flex">
            <Link
                href={`/${url}`}
                className="hover:dark:text-violet-400"
            >
                {text}
            </Link>
        </li>
    );
}

const legalLinks = [
    {url: '/tos', text: 'Terms of Service'},
    {url: '/policy', text: 'Privacy Policy'},
]

const categoryLinks = [
    {url: '/chat', text: 'Chat'},
    {url: '/rag', text: 'RAG'},
]

const menuLinks = [
    {url: '/setup', text: 'Setup'},
    // {url: '/faq', text: 'FAQ'},
]

export default function Footer() {
    return (
        <footer className="py-6 dark:bg-black dark:text-gray-50">
            <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <Link
                            href="/"
                            aria-label="Back to homepage"
                            className="flex items-center p-2"
                        >
                            <Image src={Logo} width={36} height={36} alt="logo"/>
                            <h2 className="ml-4 text-2xl font-bold">BrowserAI</h2>
                        </Link>
                    </div>

                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">Categories</p>
                        <ul>
                            {categoryLinks.map(link => (
                                <CategoryLink key={link.url} {...link} />
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">Menu</p>
                        <ul>
                            {menuLinks.map(link => (
                                <FooterLink key={link.url} {...link} />
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div className="flex">
            <span className="mr-2">
              browser-ai.tech © 2024 All rights reserved
            </span>
                        <ul className="flex">
                            {legalLinks.map(link => (<li className="flex" key={link.url}>
                                    <Link
                                        href={link.url}
                                        className="text-gray-400 hover:text-gray-300 mr-2"

                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
