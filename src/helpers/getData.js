export const getData = async () => {
    const url = `https://rickandmortyapi.com/api/character`

    const resp = await fetch( url )

    const { results, info } = await resp.json()

    const characters = results.map( character => ({
        id: character.id,
        name: character.name,
        image: character.image,
        next: info.next
    }))

    return characters
}
