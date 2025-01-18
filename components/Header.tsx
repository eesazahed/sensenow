import { NextPage } from "next";
import Image from "next/image";

const Header: NextPage = () => (
  <header className="w-full py-16 relative">
    <div className="absolute inset-0 -z-10">
      <Image
        src="https://gist.github.com/user-attachments/assets/306311cd-1069-4469-bc3a-1967776d8107.png"
        alt="Background"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
    <div className="m-auto w-72 h-72">
      <img
        src="https://gist.github.com/user-attachments/assets/f2bb70c5-c62a-4dff-a50c-86bacaabb6bd.png"
        className="w-full h-full"
        alt="Logo for SenseNow Academy"
        loading="lazy"
      />
    </div>
  </header>
);

export default Header;
