const students = [
    {id:21, name:'najmul'},
    {id:31, name:'alam'},
    {id:41, name:'miraj'}
]

const name = students.map( s => s.name);
const id = students.map( s => s.id)
const biger = students.filter ( s=> s.id>40)
console.log(biger);