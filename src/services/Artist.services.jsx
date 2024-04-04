export const getArtistByGenre = async (
    token,
    page = 0,
    genre = "argentine rock"
) => {
    const query = new URLSearchParams({
        q: `genre: ${genre}`,
        type: "artist",
        locale: "es-ES",
        limit: 10,
        offset: page * 10,
        include_external: "audio",
    });
    const endpoint = `${
        import.meta.env.VITE_SPOTIENDPOINT
    }/search?${query.toString()}`;
    const config = {};
    config.method = "GET";
    config.headers = {};
    config.headers["Authorization"] = `Bearer ${token}`;
    const response = await fetch(endpoint, config);
    const { artists } = await response.json();

    return artists.items;
};
