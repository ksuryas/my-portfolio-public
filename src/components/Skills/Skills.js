import React from 'react';
import StarIcon from '../../assets/images/icons/star.png';
import classes from './Skills.module.css';
import SkillsIcon from '../../assets/images/icons/skills.png';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import Card from '../UI/Card';
import localDB from '../../helpers/localDBHelper';

const Skills = () => {
   return (
    <div>
      <Card>
      <h2><img src={SkillsIcon} alt="My Skills" className={classes.Icon} /> Skills</h2>
      <h4>I'm now a MERN Stack Developer!</h4>

      <h4><u>Programming</u></h4>
       <TransitionGroup component="table">
            <thead className={classes.TableInfo}>
            <tr className={classes.TableInfo}>
                <td className={classes.TableInfo}>Language/Framework</td>
                <td className={classes.TableInfo}>Beginner</td>
                <td className={classes.TableInfo}>Intermediate</td>
                <td className={classes.TableInfo}>Expert</td>
            </tr>
            </thead>
          {localDB.langs.map(language => (
                 <tbody key={language.key} className={classes.TableInfo}>
                <tr className={classes.TableInfo}>
                    <td className={classes.TableInfo}>{language.name}</td>
                         
                    <td className={classes.TableInfo}>
                    {language.beginner ? <img src={StarIcon} alt="" className={classes.Icon} /> 
                    : ''}
                    </td>

                    <td className={classes.TableInfo}>
                    {language.intermediate ? <img src={StarIcon} alt="" className={classes.Icon} /> 
                    : ''}
                    </td>
                    <td className={classes.TableInfo}>
                    {language.expert ? <img src={StarIcon} alt="" className={classes.Icon} /> 
                    : ''}    
                    </td>          
                </tr>
            </tbody>         
        ))}
        </TransitionGroup>

      <h4><u>Tools</u></h4> 
      <div>
      <table>
      <thead className={classes.TableInfo}>
            <tr className={classes.TableInfo}>
                <td className={classes.TableInfo}>Tool/DB</td>
                <td className={classes.TableInfo}>Beginner</td>
                <td className={classes.TableInfo}>Intermediate</td>
                <td className={classes.TableInfo}>Expert</td>
            </tr>
            </thead>
          {localDB.tools.map(tool => (
                 <tbody className={classes.TableInfo} key={tool.key}>
                <tr className={classes.TableInfo}>
                    <td className={classes.TableInfo}>{tool.name}</td>
                         
                    <td className={classes.TableInfo}>
                    {tool.beginner ? <img src={StarIcon} alt="" className={classes.Icon} /> 
                    : ''}
                    </td>

                    <td className={classes.TableInfo}>
                    {tool.intermediate ? <img src={StarIcon} alt="" className={classes.Icon} /> 
                    : ''}
                    </td>
                    <td className={classes.TableInfo}>
                    {tool.expert ? <img src={StarIcon} alt="" className={classes.Icon} /> 
                    : ''}    
                    </td>          
                </tr>
            </tbody>         
        ))}
        </table>
          </div>

      <h4 className={classes.SoftSkillsHeading}><u>Soft Skills</u></h4>
      <div className={classes.SoftSkills}>
        <ul>
          <li>Active Listening</li>
          <li>Communication</li>
          <li>Creativity</li>
        </ul>
       </div>
      </Card>
    </div>
    );
};

export default Skills;