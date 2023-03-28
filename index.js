const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    let url = ctx.url

    if(url === "/"){

        ctx.body = `<h1>Ana sayfaya hoşgeldiniz</h1>`
    }
    else if(url === "/hakkinda"){
        ctx.body = `<h1>Hakkinda sayfasina hoşgeldiniz</h1>`
    }
    else if(url === "/iletisim"){
        ctx.body = `<h1>Iletisim sayfasina hoşgeldiniz</h1>`
    }
    else{
        ctx.body = "404"
    }

})



const port = 3000
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
});