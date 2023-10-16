import axios from "axios";

export const BACKEND_ENDPOINT = `https://qtify-backend-labs.crio.do`;

export const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(BACKEND_ENDPOINT + "/albums/top");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
export const fetchNewAlbums = async () => {
  try {
    const res = await axios.get(BACKEND_ENDPOINT + "/albums/new");
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const filterByGenre = async (genre) => {
  // const res = await axios.get(`${BACKEND_ENDPOINT}/genres/${genre}`);
  // console.log(`${BACKEND_ENDPOINT}/genres/${genre}`);
  // return res.data;
};

export const fetchSongs = async () => {
  const res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
  // console.log(`${BACKEND_ENDPOINT}/songs`);
  return res.data;
};
