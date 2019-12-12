export const getProduct = (sku) => {
       return fetch(`http://localhost:3001/products/get?sku=${sku}`)
        .then(response => response.json())
        .then((json) => {return json.data;})
        .catch(err => console.log(err))
}

export default {
        getProduct
}