import styles from './home.module.css'
import Nav from '../../components/nav/Nav';

const Home = () => {
    return (
        <section className={`${styles.home}`}>
            <Nav />
        </section>
    )
}

export default Home; 