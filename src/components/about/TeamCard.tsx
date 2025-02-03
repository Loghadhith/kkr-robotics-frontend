import Image from "next/image";

interface prop {
  photoSrc: string
}

function Team ({photoSrc} : prop) {
  return (
    <>
      <Image src={photoSrc} alt="Team" className="h-64 w-52" width="52" height="64" />
    </>
  )
}

export default Team;
