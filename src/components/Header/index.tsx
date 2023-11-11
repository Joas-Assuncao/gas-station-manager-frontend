import Image from "next/image";

import logo from "../../../public/driver-icon.svg";
import { HeaderLink } from "../HeaderLink";

export function Header() {
  return (
    <header className="flex items-center justify-between px-24 py-8 mb-4 shadow shadow-gray-600">
      <div className="flex items-center justify-start gap-4">
        <Image
          className="w-16 h-16"
          src={logo}
          alt="Motorista em forma de ícone"
        />
        <h1 className="text-xl">Gas Station Manager</h1>
      </div>

      <nav className="flex items-center justify-start gap-4">
        <HeaderLink name="Home" path="/" />
        <HeaderLink name="Criar motorista" path="/drivers/new" />
      </nav>
    </header>
  );
}
