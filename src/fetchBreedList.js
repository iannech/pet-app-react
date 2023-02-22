const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  const apiRes = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiRes.ok) {
    throw new Error(`breed/${animal} not okay`);
  }

  return apiRes.json();
};

export default fetchBreedList;
