import Image from "next/image";
import { HeaderItem } from "../components";
import {
  HomeIcon,
  CheckBadgeIcon,
  MagnifyingGlassIcon,
  UserIcon,
  RectangleStackIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const home = "Home";
  return (
    <header className="flex  flex-col sm:flex-row justify-between items-center  m-5">
      <div className="flex items-center">
        <HeaderItem Icon={HomeIcon} title="Home" />
        <HeaderItem Icon={BoltIcon} title="Trending" />
        <HeaderItem Icon={CheckBadgeIcon} title="Verified" />
        <HeaderItem Icon={RectangleStackIcon} title="Collection" />
        <HeaderItem Icon={MagnifyingGlassIcon} title="Search" />
        <HeaderItem Icon={UserIcon} title="User" />
      </div>
      <Image
        className="object-contain w-32 md:w-40"
        src="https://hulu-clone-2-0.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2Fua6&w=256&q=75"
        alt="hulu image"
        width={200}
        height={100}
        priority
      />
    </header>
  );
}
