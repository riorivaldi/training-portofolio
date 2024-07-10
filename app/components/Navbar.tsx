import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className=" bg-black w-full">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link href="#home">
            <p className="flex items-center space-x-2 transition-transform duration-300">
              <Image src="/img/RRQ.png" alt="Logo" width={100} height={100} />
              <strong className="text-white text-lg font-bold">RR</strong>
            </p>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="#">
            <p className="text-white hover:text-gray-200 font-bold">Home</p>
          </Link>
          <Link href="#about">
            <p className="text-white hover:text-gray-200 font-bold">About</p>
          </Link>
          <Link href="#projects">
            <p className="text-white hover:text-gray-200 font-bold">Project</p>
          </Link>
          <Link href="#contact">
            <p className="text-white hover:text-gray-200 font-bold">Contact</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
