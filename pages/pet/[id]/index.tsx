/* eslint-disable jsx-a11y/alt-text */
import { CenteringSection } from "../../../layouts/homePage.style";

const PetPage = ({ data, pageName }) => {
  return (
    <div>
      <h1>{pageName}</h1>
      <CenteringSection></CenteringSection>
    </div>
  );
};

export async function getStaticPaths() {
  const { animals_categories } = await import("../../../data/data.json");
  const allPaths = animals_categories.map((ev) => {
    return {
      params: {
        id: ev.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const post = await import("../../../data/data.json");
  const data = post.animals_categories.find((ev) => ev.id === id);
  return {
    props: {
      data,
      pageName: id,
    },
  };
}

export default PetPage;
