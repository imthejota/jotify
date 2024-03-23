import useToken from "../hooks/useToken";
import { getArtistByGenre } from "../services/Artist.services";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
    const token = useToken((state) => state.token)
    const {data, isLoading} = useQuery({
        queryKey: ["artist", token],
        queryFn: () => getArtistByGenre(token)
    });

    if (isLoading) return "Loading..."

    
    return (
        <>
            <h1>Soy una página de Home</h1>
            {data.map(e => <h2 key={e.id}>{e.name}</h2>)}
        </>
    );
}
