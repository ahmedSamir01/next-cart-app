const fetchData = async (endpoint = "", settings) => {
  const response = await fetch(
    `https://fakestoreapi.com/products${endpoint}`,
    settings
  );

  if (response.ok) {
    let json = await response.json();
    return json;
  }

  throw new Error(response.status);
};

export default fetchData;
