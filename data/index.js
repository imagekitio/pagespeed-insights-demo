var shopInfo = {
    phone: '8 800 799 99 99',
    email: 'example@example.com',
    address: 'St.&nbsp;Petersburg, Nevsky&nbsp;Prospect&nbsp;28',
    openingHours: 'Daily 10:00–22:00',
    storeName: 'Store Name',
    latitude: 59.9356728,
    longitude: 30.3258604
};

var toolbarMenu = [{
    name: 'News',
    href: 'news.html'
  }, {
    name: 'FAQ',
    href: 'faq.html'
  }, {
    name: 'Payment',
    href: '#'
  }];


  var navbarMenu = [{
    name: 'Catalog',
    href: '#'
  }, {
    name: 'Brands',
    href: '#'
  }, {
    name: 'Pages',
    href: '#'
  }, {
    name: 'Blog',
    href: '#'
  }, {
    name: 'About',
    href: '#'
  }, {
    name: 'Contacts',
    href: '#'
  }]; 


  var catalog = [{
    name: 'Laptops & Tablets',
    id: 'laptops-tablets',
    href: 'category.html',
    image: 'images/catalog/computers.svg',
    quantity: 367,
    items: [
      'Laptops',
      'Tablets',
      'Peripherals',
      'Keyboards',
      'Accessories'
    ]
  }, {
    name: 'Phones & Gadgets',
    id: 'phones-gadgets',
    href: 'category.html',
    image: 'images/catalog/phones.svg',
    quantity: 144,
    items: [
      'Smartphones',
      'Mobile Phones',
      'Smart watches',
      'Charging and batteries',
      'Accessories'
    ]
  }, {
    name: 'TV & Video',
    id: 'tv-video',
    href: 'category.html',
    image: 'images/catalog/tv.svg',
    quantity: 58,
    items: [
      'TV',
      'Home Cinema',
      'Satellite & Cable TV',
      'Projectors',
      'DVD & Blu-ray',
      'Accessories'
    ]
  }, {
    name: 'Games & Entertainment',
    id: 'games-entertainment',
    href: 'category.html',
    image: 'images/catalog/games.svg',
    quantity: 13,
    items: [
      'Gaming consoles',
      'Games',
      'Software',
      'Joysticks & gamepads',
      'Accessories'
    ]
  }, {
    name: 'Photo',
    id: 'photo',
    href: 'category.html',
    image: 'images/catalog/photo.svg',
    quantity: 59,
    items: [
      'Cameras',
      'Lenses',
      'Accessories'
    ]
  }]


let data = {
    "shopInfo" : shopInfo,
    'toolbarMenu' : toolbarMenu,
    "navbarMenu" : navbarMenu,
    "catalog" : catalog
};

module.exports = data;