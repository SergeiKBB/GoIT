const courses = [
    {name: 'Basic HTML+CSS', topics: ['VSCode', 'HTML', 'CSS', 'GitHub Desktop', 'GitHub']},
    {name: 'Intermediate HTML+CSS', topics: ['VSCode', 'Terminal', 'Git', 'GitHub', 'HTML', 'CSS']},
    {name: 'Basic JavaScript', topics: ['VSCode', 'Type system', 'Loops', 'Functions', 'Conditions', 'Classes', 'DOM', 'Git', 'GitHub',]},
    {name: 'Intermediate JavaScript', topics: ['VSCode', 'NPM', 'Bundlers', 'Transpiling', 'Promises', 'AJAX', 'Git', 'GitHub',]}
]
const allTopics = courses.flatMap(course => course.topics);
const uniqueTopics = allTopics.filter((item, i, array) => array.indexOf(item) === i);

console.log(uniqueTopics);