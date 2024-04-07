import { useQuery } from "@tanstack/react-query";
import useToken from "../hooks/useToken";
import { useParams } from "react-router-dom";

export default function Artist() {
    const token = useToken((state) => state.token);
    const params = useParams();

    const [artists, albums] = useQuery({
        queries: [
            {
                queryKey: ["artists", params],
                queryFn: () => getArtist(token, params.id),
            },
            {
                queryKey: ["albums", artists],
                queryFn: () => getAlbumsByArtists(token, params.id),
            },
        ],
    });

    return <h2>Soy una página de artista</h2>;
}
