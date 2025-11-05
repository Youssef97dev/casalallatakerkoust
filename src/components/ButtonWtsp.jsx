import React from "react";
import Image from "next/image";

import Link from "next/link";

const ButtonWtsp = () => {
  return (
    <Link href="https://wa.me/212675480103">
      <Image
        src="/whatsapp.png"
        alt="whatsapp casa lalla takerkoust"
        width={100}
        height={100}
        className="object-cover w-12"
      />
    </Link>
  );
};

export default ButtonWtsp;
