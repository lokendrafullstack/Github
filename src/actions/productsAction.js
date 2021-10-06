import axios from 'axios'

async function ProductsAction() {
    let URL = 'https://jsonplaceholder.typicode.com/posts'

    //Main Logic
    return ({
        type: 'ProductsAction',
        payload: axios.get(URL).then((res) => res.data)
    })

}

export default ProductsAction