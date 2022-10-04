import styles from './Main.module.css'

import Container from 'react-bootstrap/Container';

import logo from '../../imgs/logo.svg'

const Main = () => {
    return (
        <Container fluid className={`${styles.mainContainer}`}>
            <div className={`${styles.mainContentContainer}`}>
                <div className={styles.textContainer}>
                    <p>Hello,</p>
                    <p>I'm Alison,<br/>a passionate developer and here is some of my projects.</p>
                </div>
                <div className={`${styles.logoContainer}`}>
                    <img src={logo} alt="logo_fdlhc" />
                </div>
            </div>    
        </Container>
    )
}

export default Main