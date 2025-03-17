import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
}

const Logo = ({ variant = "light" }: LogoProps) => {
  const src = variant === "dark" ? "/ba-dark.svg" : "/ba.svg";

  return (
    <div>
      <Image src={src} width={100} height={50} alt="Logo" />
    </div>
  );
};

export default Logo;
