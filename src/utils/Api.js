import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTliMDc3YzMyZDkzNGI0MzQyNGI1N2VhN2FmN2ExMiIsInN1YiI6IjY0YmZkZjc0OGMwYTQ4MDEzYThhNWY2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OO8t1Acnyjp6uh6nuZd__xiS5sCIb-bkbEH4fcgQGmk";

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
