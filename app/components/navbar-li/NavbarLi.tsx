import { LiType } from "@/types/componentTypes";
import Link from "next/link";

const NavbarLi: React.FC<LiType> = (prop: LiType) => {
  return (
    <li className='liHover transition-all duration-300 ease-in-out'>
        <Link href={prop.href}>{prop.name}</Link>
    </li>
  );
};

export default NavbarLi;
