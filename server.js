var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    

'article-one':{
  title:'article one|arshil singh bhatia',
  heading:'article-one',
  date:'8 august 2017',
  content:`<p>
                this is the content for my first atrical.this is the content for my first atrical.this is the content for my first atrical.this is the content for my first atrical.this is the content for my first atrical.this is the content for my first atrical.
            </p>
            <p>
                this is the content for my first atrical.this is the content for my first atrical.this is the content for my first atrical.this is the content for my first atrical.this is the content for my first atrical.this is the content for my first atrical.
            </p>
            <p>
                
                this is the content for my first atrical.this is the content for my first atrical.this is the content for my first atrical.this is the content for my first atrical.this is the content for my first atrical.this is the content for my first atrical.
            </p>`
    
},
'article-Two':{
    title:'article Two|arshil singh bhatia',
  heading:'article-two',
  date:'9 august 2017',
  content:`<p>
  this is my second article.this is my second article
  </p>`
  },
'article-Three':{
    title:'article three|arshil singh bhatia',
    heading:'article-two',
  date:'10 august 2017',
  content:`<p>
  this is my second article.this is my second article
  </p> `}
}
;

function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmlTamplates=`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width-device-width ,initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div  class="container">
        <div>
            <a href='/'>home</a>
        </div>
        <hr/>
        <h1>
            ${heading}
        </h1>
        <div>
            ${date}
        </div>
        <div>
           ${content}
        </div>
        </div>
    </body>
</html>`;
return htmlTamplates;
}






app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function (req,res){
    //articleName==articleOne
    var articalName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
