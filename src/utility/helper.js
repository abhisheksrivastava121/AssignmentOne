import axios from 'axios';
import constant from './constants';

// function for get request
export const get_req = async (path) => {
    const url = constant.IP_PORT + constant.BASE_URL + path;
    
    const header = {
        //"Access-Control-Allow-Origin": "*",
        //"Cache-Control":"no-cache",
        "content-type": "application/x-www-form-urlencoded"
    };

    return axios({
        method: 'get',
        url: url,
        headers: header,
    });
}
