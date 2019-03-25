// Object property shorthand

const name = 'Sara'
const userAge = 1

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

//Object destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// const label = product.label
// const stock = produtc.stock

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order', produtct)