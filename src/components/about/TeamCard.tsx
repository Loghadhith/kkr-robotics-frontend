import Image from "next/image";
import { useEffect, useState } from "react";

interface prop {
  name: string;
  role: string;
  photoSrc: string;
  insta: string;
  linkd: string;
}

function Team({ name, role, photoSrc, insta, linkd }: prop) {
  const [imageData, setImageData] = useState<string | null>(null);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/bitspaceorg/ass-ets/main/hoomans/jesus.jpg"
        );
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setImageData(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImageData(); // Trigger the fetch

    return () => {
      if (imageData) {
        URL.revokeObjectURL(imageData);
      }
    };
  }, []);

  return (
    <div className="team-member">
      <h2>{name}</h2>
      <p>{role}</p>
      <Image
        src={imageData || photoSrc}
        alt={`Image of ${name}`}
        width={300}
        height={250}
        objectFit="cover"
        objectPosition="center"
        className="flex-grow w-[300px] relative h-full min-h-[250px] lg:flex flex-col justify-end hidden z-40"
        loading="lazy"
      />
      <div className="social-links">
        <a href={insta} target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href={linkd} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
}

export default Team;
