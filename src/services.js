import axios from "axios";

const apiKey = "94233dbed83f30ea420bcda4b0d99b71";

export const getCharacters = async () => {
  try {
    const res = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?limit=9&apikey=${apiKey}`
    );
    return res;
  } catch (error) {
    throw new Error();
  }
};
