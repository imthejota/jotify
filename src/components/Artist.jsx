

export default function Artist ({name, id, images}) {
    const image = images.map(e => e.url)

    return (
        <>
            <img src={image[0]} alt="Image" width="300" />
            <h3>Name: {name}</h3>
            
        </>
    )

}