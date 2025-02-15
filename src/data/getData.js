export const getData = async () => {
  const res = await fetch(
    "http://gateway.marvel.com/v1/public/comics?apikey=60c560e29aeb6427343d376aff923b24&hash=afaa251f6970432959a1c63f3ae087f6&ts=1"
  );

  const data = await res.json();

  return data;
};
