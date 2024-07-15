// pages/linktree.tsx
import CustomLink from "@/components/mdx/CustomLink";
import { Heading3xl } from "@/components/typography/Heading";
import Link from "next/link";

import {
  FacebookIcon,
  MonitorIcon,
  YouTubeIcon,
  InstagramIcon,
} from "@/components/icons/SocialIcons";

const linksData = {
  mainLinks: {
    heading: "Freelancing Stuff",
    links: [
      {
        label: "Website",
        href: "/",
        icon: <MonitorIcon />,
      },
      {
        label: "@shahzadaalihassan_",
        href: "https://www.youtube.com/@trackingacademy_",
        icon: <YouTubeIcon />,
      },
      {
        label: "@shahzadaalihassan_",
        href: "https://www.instagram.com/shahzadaalihassan_/",
        icon: <InstagramIcon />,
      },
      {
        label: "@shahzadaalihassan",
        href: "https://www.facebook.com/shahzadaalihassan/",
        icon: <FacebookIcon />,
      },
    ],
  },
  vlogLinks: {
    heading: "Vlogging Channel",
    links: [
      {
        label: "@shahzadaalihassan_vlogs",
        href: "https://www.youtube.com/@shahzadaalihassan_vlogs",
        icon: <YouTubeIcon />,
      },
    ],
  },
};
export default function LinkTree() {
  return (
    <div className="min-h-[70vh]">
      {Object.values(linksData).map((category, categoryIdx) => (
        <div
          key={categoryIdx}
          className="flex w-full flex-col items-center justify-center gap-3 p-4"
        >
          <Heading3xl className="py-2">{category.heading}</Heading3xl>
          {category.links.map((link, idx) => (
            <CustomLink
              key={idx}
              href={link.href}
              className="text-complementary flex w-full items-center justify-between space-x-3 rounded-full border-2 bg-white px-6 py-1 font-bold !no-underline hover:animate-pulse hover:bg-gray-300 hover:!underline"
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </CustomLink>
          ))}
        </div>
      ))}
    </div>
  );
}
