const App =require('express');
const morgon= require('morgan');
const app = App();

app.listen(5000);
app.use(morgon('dev'));
// app.use((req, res, next)=>{
//     console.log("middleeare  run1");
//     next();

// });


app.get('/', (req, res)=>{
    res.sendFile('./docs/about.html', { root: __dirname });

})
app.get('/contact', (req, res)=>{
    res.sendFile('./docs/contact.html', { root: __dirname });
})
app.get('/project', (req, res)=>{
    res.sendFile('./docs/project.html', { root: __dirname});
})
// app.use((req, res, next)=>{
//     console.log("middleeare  run2");
//     next();

// });
app.get('/home', (req, res)=>{
    res.sendFile('./docs/home.html', { root: __dirname});
})
 

app.use('/about', (req, res)=>{
    res.redirect('/');
})

app.use((req, res)=>{
    res.status(404).sendFile('./docs/Erronotfound.html', { root: __dirname });
})
