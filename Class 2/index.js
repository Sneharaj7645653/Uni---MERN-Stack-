const express = require('express');
const app = express();
app.use(express.json());
//dummy data base
let courses= [
    {id:1 , name:'Java'},
    {id:2 , name:'DBMS'},
    {id:3 , name:'JavaScript'},
]

app.get('/', (req, res) => {
  res.send('Hello, World!');
}); 
app.get('/about', (req, res) => {
  res.send('About Page');
});         
app.get('/contact', (req, res) => {
  res.send('Contact Page');
});


app.get('/courses', (req, res) => {
  res.send(courses);
});

app.get('/courses/:id',(req, res)=>{
    console.log(req.params);
    console.log(req.params.id);
    console.log(courses);
    let course = courses.filter((course) => {
        return course.id == req.params.id;
    })[0];

    let course2 = courses.find((course) => {
        return course.id == req.params.id;
    });
    res.send(course);

    //cannot spend two responses
    // res.send(course2);
})




app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
