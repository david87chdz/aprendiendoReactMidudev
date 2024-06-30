import { useCatImage } from '../hooks/useCatImage'

export function Otro () {

    const { imageUrl } = useCatImage({ fact: 'Ramdom fact' })

    return (
        <>
         {imageUrl && <img src={imageUrl} />}
        </>
    )
}