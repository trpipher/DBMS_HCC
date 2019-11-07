export const getMembers = (firstname, lastname, spouse, address_id, email, membership_level, address, address2, district, city, postal_code, phone) => {fetch(`http://localhost:3001/members/add?id=2&firstname=${firstname}&lastname=${lastname}&spouse=${spouse}&address_id=${address_id}&email=${email}&membership_level=${membership_level}&address=${address}&address2=${address2}&district=${district}&city=${city}&postal_code=${postal_code}&phone=${phone}`)
        .then(response => response.json())
        .then(response => info.setState({address: info.state.address, members : response.data}))
        .catch(err => console.log(err))
}

export default {
        getMembers
}