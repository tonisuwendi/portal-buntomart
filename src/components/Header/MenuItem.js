import Link from "next/link";
import { GoStar } from "react-icons/go";

export default function MenuItem({ title, slug }) {
  return (
    <li>
      <Link href={slug}>
        <a
          className="flex items-center gap-x-1 px-4 py-2.5 transition duration-200 hover:bg-slate-100 text-slate-500 hover:text-slate-800 font-medium text-sm2 rounded"
        >
          {title === "Afiliasi" && <GoStar />}
          {title}
        </a>
      </Link>
    </li>
  );
}
