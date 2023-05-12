import axios from "axios";
export const getGifs = (value) => {
  axios
    .get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: "k3uanbkRrYnnLyExbOCfKsSNtbaN7OGy",
        q: value,
        limit: 20
      },
    })
    .then((response) => {
      return response
      // console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getGifs2 = async(category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=k3uanbkRrYnnLyExbOCfKsSNtbaN7OGy&q=${category}&limit=20`
  const resp = await fetch( url );
  const { data } = await resp.json();

  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  return gifs
}
