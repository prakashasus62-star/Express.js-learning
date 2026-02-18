const App =require('express');
const app = App();
app.listen(5000);
app.get('/', (req, res)=>{
    res.sendFile('./docs/about.html', { root: __dirname });

})
app.get('/contact', (req, res)=>{
    res.sendFile('./docs/contact.html', { root: __dirname });
})
app.get('/project', (req, res)=>{
    res.sendFile('./docs/project.html', { root: __dirname});
})
app.get('/home', (req, res)=>{
    res.sendFile('./docs/home.html', { root: __dirname});
})
app.use('/about', (req, res)=>{
    res.redirect('/');
})
app.use((req, res)=>{
    res.status(404).sendFile('./docs/Erronotfound.html', { root: __dirname });
})
