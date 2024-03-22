import { useLoaderData } from "react-router-dom"

export default function Home () {
    const data = useLoaderData()
    console.log(data.artist)
    return (
        <>
        <h1>Soy una página de Home</h1>
        {data.artist.map(e => <h1 key={e.artist.artist_id}>{e.artist.artist_name}</h1>)}
        </>
    )
}