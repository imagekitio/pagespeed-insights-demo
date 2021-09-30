let express = require('express');
let websiteData = require('./data/index');
let productData = require('./data/products');

let app = new express();

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('static', {
    setHeaders  : function(res) {
        res.setHeader('Cache-Control', 'no-cache,no-store')
    }
}))

app.get('/', function(req, res, next) {
    res.redirect('/product-listing');
});

app.get('/product-listing', function(req, res, next) {
    res.render('product-listing', {
        products : productData, 
        shopInfo : websiteData.shopInfo,
        toolbarMenu : websiteData.toolbarMenu,
        navbarMenu : websiteData.navbarMenu,
        catalog : websiteData.catalog
    });
});

app.listen(3000);