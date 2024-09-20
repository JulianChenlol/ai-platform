"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FloatingForm } from "@/app/ui/polls/details/floating-forms";
import { fetchPosts } from "./api/route";
import Pagination from "@/app/ui/pagination";

export default function PostCards({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [postId, setPostId] = useState(-1);
  const itemRef = useRef<HTMLDivElement | null>(null);

  const handleClickItem = (id: string) => {
    // 获取id
    setPostId(Number(id));
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
  useEffect(() => {
    async function fetchData() {
      const { posts: data, totalPages } = await fetchPosts(query, currentPage);
      console.log("fetchData");
      setPosts(data);
      setTotalPages(totalPages);
    }
    fetchData();
  }, []);
  const imageWidth = 180;
  return (
    <div>
      <div ref={itemRef}>{isOpen && <FloatingForm postId={postId} />}</div>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {posts.map((item) => (
          <div
            onClick={() => handleClickItem(item.id)}
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
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
