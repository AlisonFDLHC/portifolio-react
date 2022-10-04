import styles from './Projects.module.css'

import { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';

import Button from '../Controls/Button';
import CardFdlhc from '../Miscellaneous/CardFdlhc';


import projects from '../projects.js';
import Eye from '../../imgs/eye.svg'

const Projects = () => {

    const projectsFdlhc = projects

    const [showingType, setShowingType] = useState('');
    const [showingProjects, setShowingProjects] = useState([])

    useEffect(() => {
        if(showingType !== "all") {
            setShowingProjects(projectsFdlhc.filter((project) => { return project.type === showingType}));
        } else {
            setShowingProjects(projectsFdlhc);
        }
    }, [showingType])
    

    const handleProjectShowing = (event) => {
        setShowingType(event.target.value)
    }

    function formatTitle(text) {
        let TextFormatted = text[0].toUpperCase() + text.slice(1)
        
        if (TextFormatted[TextFormatted.length - 1] !== 's' && TextFormatted !== "All") {
            TextFormatted += 's'
        }

        return TextFormatted
    }

    return (
        <Container fluid className={`${styles.projectsContainer} p-0`}>
            <Container fluid className={`${styles.buttonsContainer} p-0`}>
                <Button className={`${showingType == "website" && `${styles.active}`}`} value="website" color="pink" onClick={(event) => {handleProjectShowing(event)}}>Websites</Button>
                <Button className={`${showingType === "component" && `${styles.active}`}`} value="component" color="blue" onClick={(event) => {handleProjectShowing(event)}}>Components</Button>
                <Button className={`${showingType === "miscellaneous" && `${styles.active}`}`} value="miscellaneous" color="purple" onClick={(event) => {handleProjectShowing(event)}}>Miscellaneous</Button>
                <Button className={`${showingType === "all" && `${styles.active}`}`} value="all" color="pink" onClick={(event) => {handleProjectShowing(event)}}>All</Button>
            </Container>
            {showingType && <h2 className={`text-center mt-3 mb-5`}>{formatTitle(showingType)}</h2>}
            <Container className={`${styles.projects}`}>
                {showingProjects.map((project) => {
                    return (
                        <CardFdlhc
                            key={project.title}
                            title={project.title}
                            text={project.text}
                            liveLink={project.liveLink}
                            codeLink={project.codeLink}
                            techs={project.techs}
                            img={project.img}
                        />
                    )
                })}        
            </Container>
            
        </Container>
    )

}

export default Projects;