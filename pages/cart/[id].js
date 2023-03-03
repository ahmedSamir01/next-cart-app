import fetchData from "../../server/fetchData";

export const getStaticPaths = async () => {
  const data = await fetchData();
  const paths = data.map((item) => ({ params: { id: item.id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

// will be triggered the number of times the page renders (number of items of data)
export const getStaticProps = async (context) => {
  const id = context.params.id;

  const data = await fetchData(`/${id}`);
  return {
    props: {
      item: data,
    },
  };
};

export default function CartItem({ item }) {
  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </div>
  );
}
