import Image from "next/image";
import React from "react";

export default function Header() {
    return (
        <header className="flex items-center justify-between w-screen p-3 bg-gradient-to-br from-fuchsia-900 via-purple-800 to-purple-600">
            {/* image and title */}
            <div className="flex items-center gap-3">
                <div className="relative w-12 h-12">
                    <Image src={"/logo.svg"} alt={"Logo"} fill={true}></Image>
                </div>
                <h1 className="text-lg font-semibold uppercase">
                    Quandale Computing
                </h1>
            </div>
            {/* search and profile */}
            <div className="flex items-center gap-3">
                {/* search */}
                <div className="flex items-center gap-2 py-2 pl-4 pr-24 rounded-full bg-slate-900">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15.4859 11.2262C16.0033 9.76389 15.9411 8.17245 15.3109 6.75063C14.6807 5.32881 13.526 4.17439 12.0634 3.50407C10.6008 2.83375 8.93092 2.69363 7.36728 3.11002C5.80365 3.52641 4.45375 4.47067 3.57101 5.76554C2.68826 7.06042 2.33337 8.61686 2.57295 10.1427C2.81254 11.6685 3.63012 13.0588 4.87222 14.0526C6.11432 15.0463 7.69552 15.5752 9.319 15.54C10.9425 15.5047 12.4966 14.9078 13.6896 13.8611"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M13.75 13.925L17.9167 17.8834"
                            stroke="white"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    Search
                </div>
                {/* profile */}
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8 7C8 9.20914 9.79086 11 12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                    />
                    <path
                        d="M5 16.9347C5 16.0743 5.54085 15.3068 6.35109 15.0175V15.0175C10.004 13.7128 13.996 13.7128 17.6489 15.0175V15.0175C18.4591 15.3068 19 16.0743 19 16.9347V18.2502C19 19.4376 17.9483 20.3498 16.7728 20.1818L15.8184 20.0455C13.2856 19.6837 10.7144 19.6837 8.18162 20.0455L7.22721 20.1818C6.0517 20.3498 5 19.4376 5 18.2502V16.9347Z"
                        stroke="white"
                        stroke-width="1.5"
                    />
                </svg>
            </div>
        </header>
    );
}
