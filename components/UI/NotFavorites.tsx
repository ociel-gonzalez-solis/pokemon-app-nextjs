import { Container, Image, Text } from "@nextui-org/react";

export const NotFavorites = () => {
  return (
    <Container
      css={{
        display: " flex",
        flexDirection: "column",
        height: "calc(100vh - 100px)",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <Text h1> No hay favoritos</Text>
      <Image
        src={
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        }
        alt="Pokemon 1"
        width={250}
        height={250}
        css={{
          opacity: 0.1,
        }}
      />
    </Container>
  );
};
