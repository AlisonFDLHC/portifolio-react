import styles from './TopSkills.module.css';

import Container from 'react-bootstrap/esm/Container';

import { useInView } from 'react-intersection-observer';

import ReactIcon from '../../imgs/Techs/react.svg';
import BootstrapIcon from '../../imgs/Techs/bootstrap.svg';
import HtmlIcon from '../../imgs/Techs/html.svg';
import CssIcon from '../../imgs/Techs/css.svg';
import JavascriptIcon from '../../imgs/Techs/javascript.svg';
import SqlIcon from '../../imgs/Techs/mysql.svg'

const TopSkills = () => {

    const [ref, inView] = useInView({threshold: 0})

    return (
        <Container fluid className={`${styles.topSkillsContainer}`} ref={ref}>
            <Container className={`${styles.topSkillsText}`}>
                <h3>My favorites technologies to work with.</h3>
            </Container>
            <Container className={`${styles.topSkills}`}>
                <div>
                    <div>
                        <img src={ReactIcon} alt="React Icon" />
                        <h4>React</h4>
                    </div>
                    <div className={`${styles.bar}`}>
                        <span className={`${styles.barReactFill} ${inView && `${styles.barReactFillAnimation}`}`}></span>
                    </div>
                </div>
                
                <div>
                    <div>
                        <img src={BootstrapIcon} alt="Bootstrap Icon" />
                        <h4>Bootstrap</h4>
                    </div>
                    <div className={`${styles.bar}`}>
                        <span className={`${styles.barBootstrapFill} ${inView && `${styles.barBootstrapFillAnimation}`}` }></span>
                    </div>
                </div>
                
                <div>
                    <div>
                        <img src={HtmlIcon} alt="Html Icon" />
                        <h4>HTML5</h4>
                    </div>
                    <div className={`${styles.bar}`}>
                        <span className={`${styles.barHtmlFill} ${inView && `${styles.barHtmlFillAnimation}`}` }></span>
                    </div>
                </div>
                
                <div>
                    <div>
                        <img src={CssIcon} alt="Css icon" />
                        <h4>CSS3</h4>
                    </div>
                    <div className={`${styles.bar}`}>
                        <span className={`${styles.barCssFill} ${inView && `${styles.barCssFillAnimation}`}` }></span>
                    </div>
                </div>

                <div>
                    <div>
                        <img src={JavascriptIcon} alt="Javascript Icon" />
                        <h4>JavaScript</h4>
                    </div>
                    <div className={`${styles.bar}`}>
                        <span className={`${styles.barJavascriptFill} ${inView && `${styles.barJavascriptFillAnimation}`}` }></span>
                    </div>
                </div>

                <div>
                    <div>
                        <img src={SqlIcon} alt="Mysql Icon" />
                        <h4>Mysql</h4>
                    </div>
                    <div className={`${styles.bar}`}>
                        <span className={`${styles.barMysqlFill} ${inView && `${styles.barMysqlFillAnimation}`}` }></span>
                    </div>
                </div>
                
            </Container>
        </Container>
    )
}

export default TopSkills;