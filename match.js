const numbers = [45, 67, 23, 98, 19];
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);

// }
for(const number of numbers){
    console.log(number)
}

const products = [
    {id: 1, name: 'realme phone', price: 33000},
    {id: 2, name: 'xiaomi phone', price: 33000},
    {id: 3, name: 'iphone', price: 33000},
    {id: 4, name: 'oneplus', price: 33000},
    {id: 5, name: 'lenovo', price: 33000},
];
// for(product of products){
//     console.log(product);
// }
function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.includes(search)){
            matched.push(product);
        }
    }
    return matched;
}
const result = matchedProducts(products, 'phone');
console.log(result);