import Image from "next/image";
import Link from "next/link";

export default function Navbar(...props: any) {
  return (
    <header className="flex align-center">
      <div className="mr-auto">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={152}
            height={48}
            alt="agency company logo"
          />
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/services">services</Link>
          </li>
          <li>
            <Link href="/pricing">pricing</Link>
          </li>
          <li>
            <Link href="/blog">blog</Link>
          </li>
        </ul>
      </nav>

      <div className="ml-auto">
        <button>Contact</button>
      </div>
    </header>
  );
}
