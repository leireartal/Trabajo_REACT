import axios from 'axios';

const instance = axios.create({
    //baseURL: 'https://my-demoblog.firebaseio.com/'
    baseURL: 'https://trabajofinal-20967.firebaseio.com/'
});
 //instance.defaults.headers.common['Access-Control-Allow-Origin']= '*';
//axios.defaults.headers['Access-Control-Allow-Origin: ']='*';


export default instance;