import { useRouter } from "next/router";
import req from "../utils/req";
export default function Nav() {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex px-16 text-2xl whitespace-nowrap space-x-10 sm:space-x-24 overflow-x-scroll scrollbar-hide">
        {Object.entries(req).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => router.push(`/?genre=${key}`)}
            className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"></div>
    </nav>
  );
}
