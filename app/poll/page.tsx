"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FloatingForm } from "@/app/ui/polls/details/floating-forms";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);
  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleClickItem = (event: React.MouseEvent) => {
    setIsOpen(true);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const data = [
    {
      id: 1,
      title: "Docs",
      description: "Find in-depth information about Next.js features and API.",
      url: "https://www.baidu.com",
      user_url: "https://www.bing.com",
      user_name: "baidu",
    },
    {
      id: 2,
      title: "Docs",
      description: "Find in-depth information about Next.js features and API.",
      url: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
      user_url: "https://www.bing.com",
      user_name: "baidu",
    },
    {
      id: 3,
      title: "Docs",
      description: "Find in-depth information about Next.js features and API.",
      url: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
      user_url: "https://www.bing.com",
      user_name: "baidu",
    },
    {
      id: 4,
      title: "Docs",
      description: "Find in-depth information about Next.js features and API.",
      url: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
      user_url: "https://www.bing.com",
      user_name: "baidu",
    },
    {
      id: 5,
      title: "Docs",
      description: "Find in-depth information about Next.js features and API.",
      url: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
      user_url: "https://www.bing.com",
      user_name: "baidu",
    },
  ];
  const imageWidth = 180;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div ref={itemRef}>
          <FloatingForm isOpen={isOpen} />
        </div>
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          {data.map((item) => (
            <div
              onClick={handleClickItem}
              key={item.id}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <h2 className="mb-3 text-2xl font-semibold">
                  {item.title}{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/test.png"
                  alt="Test"
                  width={imageWidth}
                  height={(imageWidth / 3) * 4}
                  priority
                />
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  {item.description}
                </p>
              </a>
              <a
                href={item.user_url}
                className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-4 items-center text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                  src="/next.svg"
                  alt="Next.js Logo"
                  width={37}
                  height={37}
                  priority
                />
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  {item.user_name}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
