import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <Image
        className="logo"
        src="/logo.png"
        width={50}
        height={50}
        alt="logo"
      />
      {/* <div className="logo">NEXT</div> */}
      <Link href="/">home</Link>
      <Link href="about">about</Link>
    </nav>
  );
};

export default Navbar;
