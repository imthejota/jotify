import Artist from "./ArtistCard";

export default function Artists({ artists }) {
    return (
        <ul>
            {artists.map((e) => (
                <Artist 
                key={e.id}
                id = {e.id} 
                name={e.name} 
                images={e.images} />
            ))}
        </ul>
    );
}
