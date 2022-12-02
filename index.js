const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
// const bodyParser = require('body-parser')

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json())

app.get('/', (req, res) =>{
    res.send('Hello from my over Smarty Smarty Pant !')
});

const users = [
    {id:1, name:'shabana', email: 'shabana@gmail.com'},
 
    {id:2, name:'shabnur', email: 'shabana@gmail.com'},
 
    {id:3, name:'srabonti', email: 'shabana@gmail.com'},
 
    {id:4, name:'sonia',  email: 'shabana@gmail.com'},

    {id:5, name:'sonia', email: 'shabana@gmail.com'},
]


app.get('/users', (req, res) =>{
    // filter by search query parameter
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else{
        res.send(users)
    }
    
})
// এবার ডায়নামিকভাবে করার জন্য 

app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    // const id = req.params.id;
    // const user = users[id]
    // এভাবে না করে নিচের মতো করেও করতে পারি 
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id)

    res.send(user)
});

// post to the server

app.post('/user', (req, res) =>{
    console.log('request',req.body); 
    const user = req.body;
    user.id = users.length + 1;  
    users.push(user);
    res.send(user);
})

app.listen(port, () =>{
    console.log('Listening to port', port);
}); 
  