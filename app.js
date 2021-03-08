const express=require('express');
const random=require('random');
const body=require('body-parser');
let url=body.urlencoded({extend:true});

const app=express();

app.use(express.static('public'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
	res.render('index')
})

app.get('/info',(req,res)=>{
	let data={
		name:'Gevorg', 
		email:'gevorgabgaryan001@gmail.com',
		languages:['c++','javascript', 'php']
	}
	res.render('info',{userInfo:data})
})

app.get('/random',(req,res)=>{
	console.log(req.query)
	let randNum=0;
	if(req.query.min){
		randNum=random.int(+req.query.min,+req.query.max);
	}
	
	res.render('random',{rand:randNum})
})

app.get('/contact',(req,res)=>{
	res.render('contact-success',{})
})
app.post('/contact',url,(req,res)=>{
	console.log(req.body)
	res.render('contact-suc',{info:req.body})
})
app.listen(3000)



