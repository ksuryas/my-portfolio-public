import React from 'react';
import Card from '../UI/Card';
import classes from './BasicInfo.module.css';
import Myself from '../../assets/images/Surya.jpg';
import MailIcon from '../../assets/images/icons/mail.png';
import EduIcon from '../../assets/images/icons/education.jpg';
import LocationIcon from '../../assets/images/icons/location.png';
import InfoIcon from '../../assets/images/icons/info.png';

const BasicInfo = () => {
    return (
        <div>
        <Card>
        <img src={Myself} alt="Me" className={classes.Image} />
        <h1>Surya Kasibhatla</h1>
        <h3>Age: 12</h3>
        <h4><img src={LocationIcon} alt="Location" className={classes.Icon} /> Plano, Texas, United States of America</h4>
        <h4><a href="mailto:surya.kasibhatla@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={MailIcon} alt="Mail ID" className={classes.Icon} />
            </a> surya.kasibhatla@gmail.com</h4>
        <h4><img src={EduIcon} alt="Education" className={classes.Icon} /> 7th Grader at Robinson Middle School</h4>
        {/* Intro section above */}

        <h4><img src={InfoIcon} alt="About Me and my Dream Company" className={classes.Icon} /> About Me and my Dream Company:</h4>   
        <p className={classes.AboutMe}>
        Hi! Computer programming is my passion. I'm a person who always wants to enhance and develop my knowledge because I love to learn! 
         I have Cerebral Palsy by birth but I don't let that hinder my ability to learn new skills. 
        I am always determined to learn and achieve greater heights. 
        I'm very open-minded. I always respect others. 
        I always like to help others and prefer to share my knowledge. 
       <p> 
        My long-term goal is to become an entrepreneur of a technology company. 
       I want to set up a software development company that will make a voice-based operating system 
        and voice-based programming language that uses Artificial Intelligence and Machine Learning. All 
        software that my company develops will be open source. I want to make my company the best disabled-
        friendly employer!
       </p>
        </p>
    </Card>
    </div>
);
};
    
export default BasicInfo;