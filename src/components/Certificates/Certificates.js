import React from 'react';
import classes from './Certificates.module.css';
import TrophyIcon from '../../assets/images/icons/trophy.png';
import certificatesDB from '../../helpers/certificateDBHelper';

const Certificates = () => {
    return (
        <div>
        <h2><img src={TrophyIcon} alt="My Certificates" className={classes.Icon} /> Certificates</h2>
    
       {certificatesDB.map((certificate, index) => (
         <div key={index} className={classes.Certificates}>
           <h4>Certificate #{!certificate.number ? '1' : certificate.number}</h4>
           <h4>Course Name: {certificate.course}</h4>
           <p>On {certificate.elearning}</p>
           <p>{certificate.remarks ? `Other Information: ${certificate.remarks}` : null}</p>
           <a href={certificate.pdf} target="_blank" rel="noopener noreferrer">{certificate.pdfText}</a>
          <div className={classes.Line}><hr /></div>
         </div>
      ))}

      <p>Next Certificate: React Native - The Practical Guide [2020 Edition] by Maximilian Schwarzmüller (upcoming)</p>
      </div>
    );
};

export default Certificates;