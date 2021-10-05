# DEMO APP - IMPROVING GOOGLE PAGESPEED SCORE FOR IMAGES

## Steps to run
1. Clone the repo. 
2. Run `npm install` in the root of the repo folder.
3. Run `node index.js`.

This will start a server on port 3000 on your system which can be accessed from `https://localhost:3000` in your browser.

## Different templates for different levels of optimization
All the templates are available in the `views/mixins` directory. You can replace the template being used on the page  by editing the file `views/partials/products.pug`.

1. `product.pug` - unoptimimzed images
2. `product_ik.pug` - unoptimized images, but with CDN and the right cache headers
3. `product_optimized.pug` - optimized images with the right format and commpression
4. `product_resize.pug` - optimized plus resized for a single screen size
5. `product_responsive.pug` - optimized, responsive images 
6. `product_lazyload.pug` - optimized, responsive images with native lazyloading

To use a particular template, use the template name (i.e. `product_lazyload`) in the `views/partials/products.pug`

