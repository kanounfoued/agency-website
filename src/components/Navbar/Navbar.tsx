import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex items-center px-8 py-4">
      <div className="min-w-[152px] mr-auto">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={152}
            height={48}
            alt="agency company logo"
          />
        </Link>
      </div>

      <nav className="flex items-center">
        <ul className="inline-flex">
          <li className="px-8 py-2">
            <Link href="/about">about</Link>
          </li>
          <li className="px-8 py-2">
            <Link href="/services">services</Link>
          </li>
          <li className="px-8 py-2">
            <Link href="/pricing">pricing</Link>
          </li>
          <li className="px-8 py-2">
            <Link href="/blog">blog</Link>
          </li>
        </ul>
      </nav>

      <div className="ml-auto">
        <button className="px-9 py-2.5 rounded border border-solid">
          Contact
        </button>
      </div>
    </header>
  );
}
