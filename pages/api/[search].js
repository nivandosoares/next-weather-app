import cities from "../../lib/city.list.json";
export const getStaticPaths = async () => {
  const data = cities;
  const paths = data.map((o) => {
    return {
      params: { slug: o.slug.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const data = cities;
  console.log(data);

  return {
    props: {
      city: data,
    },
  };
};
const cityData = ({ city }) => {
  return (
    <div>
      <p></p>
      <h1>{city}</h1>
      <h1>{city}</h1>
    </div>
  );
};

export default cityData;
