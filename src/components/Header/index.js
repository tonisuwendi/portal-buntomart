import { useState, useEffect } from "react";
import Link from "next/link";
import { IoWallet } from "react-icons/io5";
import Button from "../UI/Button";
import Menu from "./Menu";

export default function Header() {
  const [headerClasses, setHeaderClasses] = useState("");
  useEffect(() => {
    window.onscroll = () => {
      const scroll = window.scrollY;
      if (scroll > 60) {
        setHeaderClasses("bg-white shadow-sm");
      } else {
        setHeaderClasses("");
      }
    };
  }, []);
  return (
    <nav
      className={`py-4 h-20 flex items-center fixed z-10 w-full transition ${headerClasses}`}
    >
      <div className="flex items-center justify-between mx-auto w-1100">
        <div className="flex items-center">
          <Link href="/">
            <a>
              <img
                src="/images/logo-buntomart-dark.svg"
                className="h-36"
                alt="logo buntomart"
              />
            </a>
          </Link>
          <Menu />
        </div>
        <Button title="Beli Sekarang" icon={<IoWallet />} />
      </div>
    </nav>
  );
}
