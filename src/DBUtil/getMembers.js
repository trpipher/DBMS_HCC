export const getMembers = (info) => {fetch('http://localhost:3001/members')
        .then(response => response.json())
        .then(response => info.setState({members:response.data}))
        .catch(err => console.log(err))
}

export default {
        getMembers
}