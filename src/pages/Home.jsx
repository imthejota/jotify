import useToken from "../hooks/useToken";
import { getArtistByGenre } from "../services/Artist.services";
import { useQuery } from "@tanstack/react-query";

import Artists from "../components/Artists";
import Paginate from "../components/Paginate";
import usePage from "../hooks/usePage";

export default function Home() {
    const token = useToken((state) => state.token);
    const page = usePage((state) => state.page);
    const { data, isLoading } = useQuery({
        queryKey: ["artist", page],
        queryFn: () => getArtistByGenre(token, page),
    });

    if (isLoading) return "Loading...";

    return (
        <>
            <h1>My fucking Artists</h1>
            {!isLoading && data.length > 0 && <Artists artists={data} />}
            {!isLoading && data.length > 0 && <Paginate />}
        </>
    );
}
