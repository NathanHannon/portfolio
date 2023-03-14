import React from 'react';
import { Card } from 'react-bootstrap';
import { AnimateSharedLayout, motion } from 'framer-motion';
import './ProjectCard.scss';

export const ProjectCard = (props) => {
    const [open, setOpen] = useState(false)
    return (
        // This is the link to the GitHub page for the project
        // Project details are mapped from the project 

        // <a href={props.projects.repo_url} target='_blank' rel='noreferrer noopener' title={props.projects.name + ' GitHub Page'}>
        <AnimateSharedLayout>
            {open ?
                // collapsed card
                <motion.div
                    onClick={() => props.setOpen(true)}
                    className='projectCardContainer'
                    layoutId='expandable-card'
                >
                    <Card outline className='projectCard'>
                        <Card.Img className='projectCardImage' variant='top' src={props.projects.image_url} width='300px' height='200px' />
                        <Card.Body>
                            <Card.Title className='cardTitle text-dark'>{props.projects.name}</Card.Title>
                            <Card.Text className='cardContent text-dark'>{props.projects.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </motion.div> :
                // expanded card
                <motion.div onClick={() => setOpen(false)}
                    className='expanded-card'
                    layoutId="expandable-card">
                    <motion.h2
                        className='expanded-card-h'
                        layoutId="expandable-card-h">
                        {props.projects.name}</motion.h2>
                    <p>{props.projects.description}</p>
                </motion.div>
            }
        </AnimateSharedLayout>
    );
}