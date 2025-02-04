import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface prop {
  name: string;
  role: string;
  photoSrc: string
  insta: string;
  linkd: string
}

function Team({ name, role, photoSrc, insta, linkd }: prop) {
  const [pic, setPic] = useState<StaticImageData | null>(null);
  useEffect(() => {
    const GET = () => async {
      const info = await fetch("https://raw.githubusercontent.com/bitspaceorg/ass-ets/main/hoomans/jesus.jpg");
    console.log(info);
  };
  GET();
}, [pic]);
console.log(photoSrc)
return (
  <>
    <Image
      src={photoSrc}
      alt="Team"
      layout="fill"
      objectFit="cover"
      objectPosition="center"
      className="flex-grow w-[300px] relative h-full min-h-[250px] lg:flex flex-col justify-end hidden z-40"
      loading="lazy"
    />
  </>
)
}

export default Team;
