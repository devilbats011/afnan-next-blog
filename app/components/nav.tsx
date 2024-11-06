"use client";

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
  useEffect(() => {
    function initMoveColorWithCursor() {
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

      const mouseMoveHandler = (event: MouseEvent) => {
        tgX = event.clientX;
        tgY = event.clientY;
      };

      window.addEventListener("mousemove", mouseMoveHandler);
      move();

      return () => {
        window.removeEventListener("mousemove", mouseMoveHandler);
      };
    }
    const cleanup = initMoveColorWithCursor();
    return cleanup;
  }, []);

  function changeToFunkyTheme(event) {
    const root = document.documentElement;
    root.style.setProperty("--color-bg1", "rgb(108, 0, 162)");
    root.style.setProperty("--color-bg2", "rgb(0, 17, 82)");
    root.style.setProperty("--color1", "18, 113, 255");
    root.style.setProperty("--color2", "221, 74, 255");
    root.style.setProperty("--color3", "100, 220, 255");
    root.style.setProperty("--color4", "200, 50, 50");
    root.style.setProperty("--color5", "180, 180, 50");
    root.style.setProperty("--color-interactive", "140, 100, 255");
  }

  function changeToMidnightTheme() {
    const root = document.documentElement;
    root.style.setProperty("--color-bg1", "rgb(0, 17, 82)");
    root.style.setProperty("--color-bg2", "rgb(0, 0, 0)");
    root.style.setProperty("--color1", "24, 40, 200");
    root.style.setProperty("--color2", "140, 100, 255");
    root.style.setProperty("--color3", "0, 166, 251");
    root.style.setProperty("--color4", "151, 1, 172");
    root.style.setProperty("--color5", "0, 166, 251");
    root.style.setProperty("--color-interactive", "0, 166, 251");
  }

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className=" flex flex-row items-start relative px-0 pb-0 fade scroll-pr-6 md:relative"
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
            <div className="flex flex-col gap-6">
              <button
                className="cursor-pointer text-center border py-2.5 px-4 flex gap-2 items-center justify-center midnight-btn btn-theme"
                onClick={changeToMidnightTheme}
              >
                Midnight <Midnight />
              </button>
              
              <button
                onClick={changeToFunkyTheme}
                className="cursor-pointer text-center border py-2.5 px-4 flex gap-2 items-center justify-center fruity-btn btn-theme"
              >
                Funky <Fire />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
