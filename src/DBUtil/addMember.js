export const addMember = (firstname, lastname, spouse, email, membership_level, address, address2, district, city, postal_code, phone) => {fetch(`http://localhost:3001/members/add?firstname=${firstname}&lastname=${lastname}&spouse=${spouse}&&email=${email}&membership_level=${membership_level}&address=${address}&address2=${address2}&district=${district}&city=${city}&postal_code=${postal_code}&phone=${phone}`)
        .then(response => response.json())
        .catch(err => console.log(err))
}

export default {
        addMember
}