

export const getArtistByCountry = async () => {
    const data = {};
    const VITE_EDU = import.meta.env.VITE_EDU
    const VITE_API = import.meta.env.VITE_API;
    const VITE_KEY = import.meta.env.VITE_KEY;
    const endpoint = `${VITE_EDU}${VITE_API}chart.artists.get?apikey=${VITE_KEY}&page=1&page_size=3&country=arg&format=json`;
    const request = await fetch(endpoint, {headers: {"X-Requested-With": "XMLHttpRequest"}});
    const response = await request.json();
    console.log(response)

    data.artist = response? response.message.body.artist_list : [];

    return data
}

