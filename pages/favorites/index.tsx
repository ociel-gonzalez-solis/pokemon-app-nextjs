import { Layout } from "../../components/layouts";
import { NotFavorites } from "../../components/UI";
import { useEffect, useState } from "react";
import { localFavorites } from "../../utils";
import { FavoritePokemons } from "../../components/pokemon";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favorites - Pokemons">
      {favoritePokemons.length === 0 ? (
        <NotFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
