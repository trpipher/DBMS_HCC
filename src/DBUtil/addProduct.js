export const addProduct = (sku, name, cost, stock) => {fetch(`http://localhost:3001/products/add?sku=${sku}&name=${name}&cost=${cost}&&stock=${stock}`)
        .then(response => response.json())
        .catch(err => console.log(err))
}

export default {
        addProduct
}