let languages = [ 
  {
    key: 0,
    name: 'C',
    beginner: true,
    intermediate: false,
    expert: false
  },
  {
      key: 1,
      name: 'HTML5',
      beginner: false,
      intermediate: true,
      expert: false
  }, {
      key: 2,
      name: 'CSS3',
      beginner: true,
      intermediate: false,
      expert: false
  }, {
      key: 3,
      name: 'JavaScript',
      beginner: false,
      intermediate: true,
      expert: false
  }, {
      key: 4,
      name: 'Node.js',
      beginner: false,
      intermediate: true,
      expert: false
  }, {
    key: 5,
    name: 'React.js',
    beginner: false,
    intermediate: true,
    expert: false
  },
  {
    key: 6, 
    name: 'Express.js',
    beginner: true,
    intermediate: false,
    expert: false
  }, {
    key: 7,
    name: 'Python',
    beginner: true,
    intermediate: false,
    expert: false
   }, {
    key: 8,
    name: 'React Native',
    beginner: true,
    intermediate: false,
    expert: false
   } 
  ];
  
  let tools = [
    {
    key: 0,
    name: 'Git & GitHub',
    beginner: false,
    intermediate: true,
    expert: false
  }, {
    key: 1,
    name: 'VSCode',
    beginner: false,
    intermediate: true,
    expert: false
  }, {
    key: 2,
    name: 'Brackets',
    beginner: false,
    intermediate: true,
    expert: false
  }, {
    key: 3,
    name: 'Firebase',
    beginner: false,
    intermediate: true,
    expert: false
  },
  {
    key: 4,
    name: 'MongoDB',
    beginner: true,
    intermediate: false,
    expert: false
  }, {
    key: 5,
    name: 'MySQL',
    beginner: true,
    intermediate: false,
    expert: false
  }, {
    key: 6,
    name: 'SQLite3/PHPLiteAdmin',
    beginner: true,
    intermediate: false,
    expert: false
  }, 
  {
    key: 7,
    name: 'Atom',
    beginner: true,
    intermediate: false,
    expert: false
  }
  ];
  
  const localDB = {
      langs: languages,
      tools
  };
  
  export default localDB;