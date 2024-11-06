'use client';

import Link from "next/link";
import Midnight from "./night";
import Fire from "./fire";
import Dragon from "./dragon";
import Dragonheads from "./dragonheads";
import { useEffect } from "react";

const navItems = {
  "/": {
    name: (
      <div className="flex flex-row justify-center items-center gap-2">
        <span> Home </span>
        <Dragon />
      </div>
    ),
  },
  "/Projects": {
    name: (
      <div className="flex flex-row justify-center items-center gap-2 hover:border-b py-2">
        <span> Projects </span>
        <Dragonheads />
      </div>
    ),
  },
  // 'https://vercel.com/templates/next.js/portfolio-starter-kit': {
  //   name: 'deploy',
  // },
};

export function Navbar() {
  function wip() {

      const interBubble =
        document.querySelector<HTMLDivElement>(".interactive")!;
      let curX = 0;
      let curY = 0;
      let tgX = 0;
      let tgY = 0;

      function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(() => {
          move();
        });
      }

      window.addEventListener("mousemove", (event) => {

        console.log('move');
        tgX = event.clientX;
        tgY = event.clientY;
      });
      move();
  }

  useEffect(() => {
    wip();
    return () => {

    }
  }, [])
  
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className=" flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
          </div>
          <div className=" items-center justify-end h-full w-full text-sm responsive-theme">
            <div className="flex flex-col gap-4">
              <button className="cursor-pointer text-center border py-2 px-6 flex gap-2 items-center justify-center">
                {" "}
                Funky <Fire />{" "}
              </button>
              <button className="cursor-pointer text-center border py-2 px-6 flex gap-2 items-center justify-center">
                {" "}
                Midnight <Midnight />{" "}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
