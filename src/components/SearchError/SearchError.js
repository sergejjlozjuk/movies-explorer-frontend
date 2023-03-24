import './SearchError.css'

export default function SearchError({error}) {
    return(
        <article className='search-error'>
            <h1 className='search-error__title'>{error}</h1>
        </article>
    )
}