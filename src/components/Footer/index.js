export default function Footer() {
  return (
    <footer className="p-7 border-t bg-slate-50 mt-20 shadow">
      <div className="w-1100 mx-auto md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © {new Date().getFullYear()}{" "}
          <a href="https://www.buntomart.co" className="hover:underline">
            Buntomart
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Tentang
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Syarat Ketentuan
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Hubungi Kami
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}