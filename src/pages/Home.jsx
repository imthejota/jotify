import useToken from "../hooks/useToken";
import { getArtistByGenre } from "../services/Artist.services";
import { useQuery } from "@tanstack/react-query";
import Artists from "../components/Artists"

export default function Home() {
    const token = useToken((state) => state.token)
    const {data, isLoading} = useQuery({
        queryKey: ["artist", token],
        queryFn: () => getArtistByGenre(token)
    });

    if (isLoading) return "Loading..."

    
    return (
        <>
            <h1>My fucking Artists</h1>
            <Artists artists={data}/>
            
        </>
    );
}
