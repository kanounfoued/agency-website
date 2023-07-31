import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex p-8">
      <div className="mr-auto">
        <h3>Agency</h3>
      </div>

      <div className="mr-auto">
        <h5>Menu</h5>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="mr-auto">
        <h5>Service</h5>
        <ul>
          <li>Design</li>
          <li>Development</li>
          <li>Marketing</li>
          <li>See More</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>facebook</li>
          <li>twitter</li>
          <li>instagram</li>
        </ul>
      </div>
    </footer>
  );
}
