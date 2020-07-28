import React from 'react';
import classes from './Packages.module.css';
import packagesDB from '../../helpers/packagesHelper';

const Packages = () => {
    return (
        <div>
            <h2>My Packages</h2>
            {packagesDB.map(pkg => (
                <div key={pkg.key} className={classes.Packages}>
                <h4>Package #{pkg.key + 1}</h4>
                <h4>Package Name: {pkg.name}</h4>
                <p>{pkg.description}</p>

                <a href={pkg.link} target="_blank" rel="noopener noreferrer">
                    {pkg.linkText}
                </a>
                <br />
                <a href={pkg.githubLink} target="_blank" rel="noopener noreferrer">
                    {pkg.githubLinkText}
                </a>

                <div className={classes.Line}><hr /></div>
               </div>
            ))}
        </div>
    );
};

export default Packages;