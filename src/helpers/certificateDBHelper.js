import C1 from '../assets/certificates/CS50.pdf';
import C2 from '../assets/certificates/Nodejs.pdf';
import C3 from '../assets/certificates/Reactjs.pdf';

const certificatesDB = [
    {
        course: "CS50's Introduction to Computer Science by David Malan",
        pdf: C1,
        pdfText: 'CS50 Certificate', 
        elearning: 'EdX'
    }, 
    {
      number: 2,
      course: 'The Complete Node.js Developer Course (3rd Edition) by Andrew Mead and Rob Percival',
      remarks: "I did this course in my dad's account!",
      pdf: C2,
      pdfText: 'Node.js Certificate',
      elearning: 'Udemy'   
    },
    {
      number: 3,
      course: 'React - The Complete Guide (incl. Hooks, React Router, Redux) by Maximilian Schwarzmüller',
      pdf: C3,
      pdfText: 'React.js Certificate',
      elearning: 'Udemy'      
    }
];

export default certificatesDB;