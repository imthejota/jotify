import Artist from "./Artist"

export default function Artists ({artists}) {

    return (
    
    <>{artists.map(e => <Artist key={e.id} name={e.name} id={e.id} images={e.images} />)}</>

    )

}


