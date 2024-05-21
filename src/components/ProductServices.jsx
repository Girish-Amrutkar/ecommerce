import axios from "axios";

export class ProductServices{
    static serverUrl = "http://localhost:7000"
    static getAllProducts(){
        let dataUrl = `${this.serverUrl}/product`
        return axios.get(dataUrl)
    }

    static getProduct(productId){
        let dataUrl = `${this.serverUrl}/product/${productId}`;
        return axios.get(dataUrl)
    }
}