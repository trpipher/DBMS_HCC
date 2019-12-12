export const getProducts = (info) => {fetch('http://localhost:3001/products')
        .then(response => response.json())
        .then(response => info.setState({products: response.data}))
        .catch(err => console.log(err))
}

export default {
        getProducts
}