const data = async () => {
  const users = await (
    await fetch(
      "http://gateway.marvel.com/v1/public/comics?apikey=60c560e29aeb6427343d376aff923b24&hash=afaa251f6970432959a1c63f3ae087f6&ts=1"
    )
  ).json();
  return users;
};

export default data;

// key public  "60c560e29aeb6427343d376aff923b24"

// key private  "7fde8eb32c572f4ab5de6cc0a4d7376d237ff6f4"

// ts 1

// 17fde8eb32c572f4ab5de6cc0a4d7376d237ff6f460c560e29aeb6427343d376aff923b24

// hash md5  "afaa251f6970432959a1c63f3ae087f6"
