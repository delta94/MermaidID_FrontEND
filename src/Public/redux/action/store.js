import axios from 'axios'
// import console = require('console');

export const fetchStore = () =>{
    let link = `https://mermaidid.herokuapp.com/mqb/tb_store?where=tb_store+id_user+2`
    // let link = `http://192.168.100.5:3001/manual/cart`
    console.log(link)
    return {
        type: 'FETCH_STORE',
        payload: axios.get(link)
    }
}

export const updateStore = (category, image, color) =>{
    let link = `http://192.168.6.119:3001/category`
    return {
        type: 'ADD_CATEGORY',
        payload: axios({
            method: 'post',
            url: link,
            data: {
                category: category,
                image: image,
                color: color,
            }           
            })
    } 
}

export const deleteStore = (id) =>{
    let link = `http://192.168.6.119:3001/category?where=no+`+id
    return {
        type: 'DELETE_CATEGORY',
        payload: axios.delete(link)
    } 
}

export const addStore = (data) => {
    let link= 'https://mermaidid.herokuapp.com/mqb/tb_store'
    return {
        type: 'ADD_STORE',
        payload: axios.post({
            method: 'POST',
            url: link,
            data: {
                store_name: data.storeName,
                location: data.storeLocation,
                pos_code: data.postalCode,
                img_store: 'https://res.cloudinary.com/dvyonb6zt/image/upload/v1563097699/Product/toped_hfullm.png',
            }
        })
    }
}

