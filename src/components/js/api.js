let host="http://rap2api.taobao.org/app/mock/18520/";

let url={
    cartList:"cartList",
    listAdd:"listAdd",
    tablelist:"tablelist",
    productlist:"productlist"
}

for(let key in url){
    if(url.hasOwnProperty(key)){
        url[key]=host + url[key]
    }
}

export default url