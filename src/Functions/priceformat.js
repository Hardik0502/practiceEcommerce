export let priceformat = (price)=>{
    return  `$ ${(price / 100).toFixed(2)}`
}