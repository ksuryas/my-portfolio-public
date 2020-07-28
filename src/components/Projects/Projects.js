import React, { Component } from 'react';
import classes from './Projects.module.css';
import ProjIcon from '../../assets/images/icons/projects.png';
import GitHubIcon from '../../assets/images/icons/github.png';
import Card from '../UI/Card';
import { TransitionGroup } from 'react-transition-group';
import projectsDB from '../../helpers/projectDBHelper';
import Certificates from '../Certificates/Certificates';
import Packages from '../Packages/Packages';

class Projects extends Component {
    render() {
        return (
            <div>
                <Card>
                    <h2 className={classes.TableTitle}><img src={ProjIcon} alt="" className={classes.Icon}/> Projects</h2>             
                    <TransitionGroup component="div" className={classes.Projects}>
                        <table className={classes.OverallTable}>
                            <thead className={classes.TableHeading}>
                                <tr className={classes.Table}>
                                    <td className={classes.Table}>Project Name</td>
                                    <td className={classes.Table}>Status</td>
                                    <td className={classes.Table}>Published</td>
                                    <td className={classes.Table}>Project Description</td>
                                    <td className={classes.Table}>Technologies Used</td>
                                    <td className={classes.Table}>App Link</td>
                                    <td className={classes.Table}>GitHub Link</td>
                                </tr>
                            </thead>
                            {projectsDB.map(prj => (
                                    <tbody className={classes.Table} key={prj.appID}>
                                        <tr className={classes.Table}>
                                            <td className={classes.Table}>{prj.name}</td>
                                            <td className={classes.Table}>{prj.status}</td>
                                            <td className={classes.Table}>{prj.published}</td>
                                            <td className={classes.Table}>{prj.description}</td>
                                            <td className={classes.Table}>
                                                <p className={classes.Languages}>{prj.languages}</p>
                                            </td>
                                            <td className={classes.Table}>
                                                <a href={prj.appLink} target="_blank" rel="noopener noreferrer"><img src={prj.appLogo} alt="App's Logo" className={classes.Icon}/></a>
                                            </td>
                                            <td className={classes.Table}>
                                               {prj.githubLink ? <a href={prj.githubLink} target="_blank" rel="noopener noreferrer"><img src={GitHubIcon} alt="GitHub's Logo" className={classes.Icon}/></a> : 'N/A'}
                                               </td>
                                               </tr>
                                               </tbody>
                            ))}
                            </table>
                        <p className={classes.TableFooter}>and more to come...</p>

                        <br />

                        <Certificates />

                        <br />

                        <Packages />
                    </TransitionGroup> 
                </Card>
            </div>
        );
    }
};

export default Projects;
