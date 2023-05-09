import { Container, Image, Text } from "@nextui-org/react";
import { Layout } from "../../components/layouts";
import { NotFavorites } from "../../components/UI";
import { useEffect, useState } from "react";
import { localFavorites } from "../../utils";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favorites - Pokemons">
      <NotFavorites />
    </Layout>
  );
};

export default FavoritesPage;
