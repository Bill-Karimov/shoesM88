class Products {
    constructor() {
        this.newProducts = [
            {id: 1, name: 'Лоферы с кожанным ремешком', price: 350000, path:'/', color: 'grey', img:'/img/shoes_coll/01-2.jpg'},
            {id: 2, name: 'Женские лоферы с кожанным ремешком', price: 400000, path:'/', color: 'red', img:'/img/shoes_coll/01-3.jpg'},
            {id: 3, name: 'Женские лоферы с кожанным ремешком', price: 750000, path:'/', color: 'red', img:'/img/shoes_coll/01-4.jpg'},
            {id: 4, name: 'Женские лоферы с кожанным ремешком', price: 100000, path:'/', color: 'white', img:'/img/shoes_coll/02-1.jpg'},
            {id: 5, name: 'Женские лоферы с кожанным ремешком', price: 120000, path:'/', color: 'blue', img:'/img/shoes_coll/02-1.jpg'},
        ];
        
        this._popularProducts = [
            {id: 1, name: 'Женские лоферы с кожанным ремешком', price: 250000, path:'/', color: 'beige', img:'/img/shoes_coll/01-1.jpg'},
            {id: 2, name: 'Женские лоферы с кожанным ремешком', price: 750000, path:'/', color: 'red', img:'/img/shoes_coll/01-4.jpg'},
            {id: 3, name: 'Женские лоферы с кожанным ремешком', price: 400000, path:'/', color: 'red', img:'/img/shoes_coll/01-3.jpg'},
            {id: 4, name: 'Женские лоферы с кожанным ремешком', price: 350000, path:'/', color: 'grey', img:'/img/shoes_coll/01-2.jpg'},
            {id: 5, name: 'Женские лоферы с кожанным ремешком', price: 100000, path:'/', color: 'white', img:'/img/shoes_coll/02-1.jpg'},
        ];
    }
}

var products = Products;

export default products;