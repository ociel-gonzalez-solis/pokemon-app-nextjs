import { useTheme, Text, Spacer } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0 50px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Link href="/">
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
          alt="pokemon"
          width={70}
          height={70}
        />
      </Link>
      <Link href="/">
        <Text color="white" h2>
          Pokemon
        </Text>
      </Link>
      <Spacer css={{ flex: 1 }} />
      <Link href="/favorites">
        <Text color="white">Favoritos</Text>
      </Link>
    </div>
  );
};
