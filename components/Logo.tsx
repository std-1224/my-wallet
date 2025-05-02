import { PiggyBank } from "lucide-react";
import Image from "next/image";
import React from "react";


function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      {/* 
      <PiggyBank className="stroke h-11 w-11 stroke-green-500 stroke-[1.5]" />
    <img src="@/finance.png" className="h-11 w-11" alt="finance" />
    */}
    <Image src="/finance.png" className="h-11 w-11" width={100} height={100} alt="finance" />
      <p className="bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        My Wallet
      </p>
    </a>
  );
}

export function LogoMobile() {
  return (
    <a href="/" className="flex items-center gap-2">
      <p className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        My Wallet
      </p>
    </a>
  );
}

export default Logo;
