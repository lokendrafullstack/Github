import axios from 'axios'

async function UsersAction() {
    let url = 'http://localhost:3001/services'

    //Main Logic
    return ({
        type: 'UsersAction',
        payload: await axios.get(url).then((res) => res.data)
    })

}

export default UsersAction