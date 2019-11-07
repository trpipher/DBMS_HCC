export const getAddress = (info) => {fetch('http://localhost:3001/address')
        .then(response => response.json())
        .then(response => info.setState({address:response.data}))
        .catch(err => console.log(err))
}

export default {
    getAddress
}