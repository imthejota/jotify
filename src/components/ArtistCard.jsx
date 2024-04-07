import { useNavigate } from "react-router-dom"


export default function Artist ({name, id, images, link}) {
    console.log(images)
    const image = images.length > 0 ? images[0]?.url : null
    const nav = useNavigate()

    return (
        <li onClick={() => nav(`/artist/${id}`)}>
            <img src={image} alt="Image" width="300" />
            <h3>Name: {name}</h3>
            
        </li>
    )

}