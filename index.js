const _ = require('lodash');
const express = require('express');
const port = 3000

const app = express();
var courses = [
    {title : "cr1", author : "at1", price:100, url:"url1"},
    {title : "cr2", author : "at2", price:200, url:"url2"},
    {title : "cr3", author : "at1", price:100, url:"url3"}
]

// crud

// get
app.get('/api/courses', (req,res) =>{
    res.send(courses)
})
// get by price
app.get('/api/courses/find/price/:price', (req,res)=>{
    let course_list = courses.filter(course=>course.price === parseInt(req.params.price));
    if(course_list.length==0)
        res.status(204);
    res.send(course_list)
});
app.use(express.json());

app.post('/api/courses', (req,res)=>{
    let course = _.pick(req.body, ['title','author','price','url']);
    courses.push(course);
    res.status(201).send(course)
})

app.listen(port, ()=>console.log(`Server on ${port}`))  //' Server on '+port