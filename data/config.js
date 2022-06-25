export const meta = {
  title: 'Andrew Carr - Data Engineer',
  description: 'Hey, I\'m LeBron. I\'m a web developer and designer building things people love.'
}

export const hero = {
  title: "Hey there! I'm Andrew Carr.",
  desc: "I'm a Data Engineer building things people love."
};

export const projects = {
  title: 'My Projects',
  desc: "Here are some of my favorite projects that I've worked on.",
  projects: [
    {
      title: 'Recent Automation Project',
      description: 'At the school where I was working, many processes were manually being completed which I could automate using python on google colab. Alot of these processes relate to recording the amount of support provided to each child. At the school each child required 3 google forms completed per staff member per day. The results of this form had to be collated and put in a format which could easily be placed into each teachers unit plan. The first part of solving this problem was running a report every week which collated all forms submitted across the school and creating an excel file for each subject for each year for each subject and saving it within the schools google drive. As a result a process which was taking a management staff member 3-4 hours each week now only took me 10 minutes per week. After taking a term using this porcess I discovered google data studio which provided a much cleaner interface and much for streamlined process for collating and sharing the submitted forms. Please see the link [here](https://github.com/andrewcarr6239/portfolio/blob/gh-pages/ExcelReportGeneration.ipynb)',
      // link: 'https://lakers.com',
      github: ''
    },
    {
      title: 'Previous Natural Language Processing',
      description: 'The above example demonstrates how I tested OpenAI\'s GTP-3 model to attempt to reduce the work for Teachers as part of compliance tasks at a school I was working    at. I was very impressed with the ease to which I could create a working text generation model using a little training data. ### Parsing Complex JSON. One of my first tasks as a Data Engineer at Refactor was parsing and extracting text from a deeply nested export. I initialy struggled to open the text file as it    would crash my computer. By the end of the project I had used Python, Pandas and AWS to extract the necessary text from the file and used AWS Comprehend to          determine the sentiment containted within conversations and provided a presentation to the client on what I had learnt. ',
      // link: 'https://lebronscoolapp.com',
      github: 'theking-lbj/cool-app'
    },
    {
      title: 'Linear Algebra',
      description: 'I am currently improving my Linear Algebra to improve my understanding of Machine Learning. The great folks at [Canberra Machine Learning and Artificial Intelligence Meetup](https://www.meetup.com/en-AU/Canberra-Machine-Learning-and-Artificial-Intelligence-Meetup/) have been helping me create a learning path and have really helped motivate me to improve my mathematical modelling skills.',
      // link: 'https://anotherlebronapp.com',
      github: 'theking-lbj/another-app'
    }
  ]
};

export const stack = {
  title: 'My Stack',
  stack: [
    'Python',
    'Elastic',
    'MySQL',
    'NextJS',
    'TailwindCSS',
    'Pentaho',
    'Git'
  ]
};

export const contact = {
  title: 'Contact Me',
  github: 'andrew.carr.6239',
  linkedin: 'andrew-carr-3a641b5a'
};
