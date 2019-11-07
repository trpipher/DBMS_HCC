export const getAddress = _ =>{
    fetch('http://localhost:3001/address')
        .then(response => response.json())
        .then(response => response.data)
        .catch(err => console.log(err))
}