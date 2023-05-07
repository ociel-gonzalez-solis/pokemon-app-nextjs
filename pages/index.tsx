import type { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layouts";
import { pokeApi } from "./api";

const HomePage: NextPage = (props) => {
  console.log("🚀 ~ file: index.tsx:6 ~ props:", props);
  return (
    <Layout title="Listado de pokemons">
      <h1>Home</h1>
      <ul>
        <li></li>
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data} = await pokeApi.get("/pokemon?limit=151");
  console.log(
    "🚀 ~ file: index.tsx:19 ~ constgetStaticProps:GetStaticProps= ~ res:",
    data
  );
  return {
    props: {
      pokemons: data.results,
    },
  };
};

export default HomePage;
