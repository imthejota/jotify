import Artist from "./Artist"

export default function Artists ({artists}) {

    return (
    
    <>{artists.map(e => <Artist key={e.id} name={e.name} images={e.images} />)}</>

    )

}


