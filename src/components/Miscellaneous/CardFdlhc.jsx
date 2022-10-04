import styles from './CardFdlhc.module.css';

import Card from 'react-bootstrap/Card';


const CardFdlhc = ( {title, text, liveLink, codeLink, img, techs} ) => {

    console.log(techs)

    return (
        <Card className={`${styles.cardFdlhc}`}>
            <Card.Img className={`${styles.cardImg}`} variant="top" src={img}/>
            <Card.Header className={`${styles.cardFdlhcHeader}`}>
                <Card.Title className={`${styles.cardFdlhcTitle}`}>{title}</Card.Title>
            </Card.Header>
            <Card.Body className={`${styles.cardFdlhcBody}`}>
                <Card.Text className={`${styles.cardFdlhcText}`}>{text}</Card.Text>
                <div className={`${styles.techLogoContainer}`}>
                    {techs.map((tech) => { return (
                        <img key={tech} className={`${styles.techLogo}`} src={tech} alt="techLogo" />
                    )})}
                    
                </div>
                
            </Card.Body>
            <Card.Footer className={`${styles.cardFdlhcFooter}`}>
                    <a href={liveLink} target="_blank">
                        <button className={`${styles.cardFooterButton}`}>View Live</button>
                    </a>
                    <a href={codeLink} target="_blank">
                        <button className={`${styles.cardFooterButton}`}>View Code</button>
                    </a>
                </Card.Footer>
        </Card>
    )
}

export default CardFdlhc;