import Artist from "./Artist"

export default function Artists ({artists}) {

    return (
    
    <ul>{artists.map(e => <Artist key={e.id} />)}</ul>

    )

}


// un componente para mostrar cada artista, modularizar la funcion
