import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
    return(
        <section className='notfound'>
            <h1 className='notfound__title'>404</h1>
            <h2 className='notfound__text'>Страница не найдена</h2>
            <Link to={-1} className='notfound__link'>Назад</Link>
        </section>
    )
}

export default NotFound