import React from "react";

import { BoltIcon, CloudIcon, ArrowsPointingOutIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/24/solid'

const perks = [
  {
    text: "~4kb gzipped",
    component: BoltIcon
  },
  {
    text: "no dependencies",
    component: CloudIcon,
  },
  {
    text: "super flexible API",
    component: ArrowsPointingOutIcon,
  },
  {
    text: "SEO-friendly",
    component: DocumentMagnifyingGlassIcon
  },
];

export default function () {
  return (
    <ul className="flex flex-wrap justify-center -mr-6 -mt-6">
      {perks.map((perk) => {
        const Icon = perk.component;

        return (
          <li
            key={perk.text}
            className="mb-6 pr-6 flex flex-col w-1/2 md:w-auto"
          >
            <i className="text-2xl md:text-5xl flex justify-center items-center text-gray-700 mb-3">
              <Icon className="h-12 w-12" />
            </i>
            <span className="ml-2 text-gray-700 text-lg md:text-xl">
              {perk.text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
