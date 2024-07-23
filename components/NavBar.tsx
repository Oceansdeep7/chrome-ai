"use client";
import Logo from "@/assets/logo.svg";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Dialog} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
import Image from "next/image";

interface NavLink {
    url: string;
    text: string;
}

interface MobileNavLink extends NavLink {
    closeMenu: () => void;
}

function NavLink({url, text}: NavLink) {
    const path = usePathname();
    return (
        <li className="flex">
            <Link
                href={url}
                className={`flex items-center mx-4 -mb-1 border-b-2 dark:border-transparent ${
                    path === url && "dark:text-violet-400 dark:border-violet-400"
                }}`}
            >
                {text}
            </Link>
        </li>
    );
}

function MobileNavLink({url, text, closeMenu}: MobileNavLink) {
    const handleClick = () => {
        closeMenu();
    };
    return (
        <Link
            href={url}
            onClick={handleClick}
            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100 hover:bg-gray-900"
        >
            {text}
        </Link>
    );
}

const links = [
    {url: '/chat', text: 'Chat'},
    {url: '/rag', text: 'RAG'},
    {url: '/chrome/setup', text: 'Setup'},
]

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const closeMenu = () => {
        setMobileMenuOpen(false);
    };
    return (
        <div className="p-4 dark:bg-black dark:text-gray-100">
            <div className="container flex justify-between h-16 mx-auto px-0 sm:px-6">
                <Link
                    href="/"
                    aria-label="Back to homepage"
                    className="flex items-center p-2"
                >
                    <Image src={Logo} width={36} height={36} alt="logo"/>
                    <h2 className="ml-4 text-2xl font-bold">BrowserAI</h2>
                </Link>

                <div className="items-center flex-shrink-0 hidden lg:flex">
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        {links.map((item: NavLink) => (
                            <NavLink key={item.url} {...item} />
                        ))}
                    </ul>
                </div>

                <Dialog
                    as="div"
                    className="lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75"/>
                    {/* Overlay */}
                    <Dialog.Panel
                        className="fixed inset-y-0 rtl:left-0 ltr:right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-inset sm:ring-white/10">
                        <div className="flex items-center justify-between">
                            <Link href='/' className="-m-1.5 p-1.5">
                                <Image src={Logo} width={36} height={36} alt="logo"/>
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-white"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-700">
                                <div className="space-y-2 py-6">
                                    {links.map((item) => (
                                        <MobileNavLink
                                            key={item.url}
                                            closeMenu={closeMenu}
                                            {...item}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
                <button
                    className="p-4 lg:hidden"
                    onClick={() => setMobileMenuOpen(true)}
                >
                    <Bars3Icon className="h-7 w-7" aria-hidden="true"/>
                </button>
            </div>
        </div>
    );
}
