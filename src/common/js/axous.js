import { fetch } from 'common/js/fecth.js';
import api from 'common/js/url.js'; //引用url.js


//查看用户
export function lookOption() { //lookOption是你要调用接口的名字，issuer,userId是传进来的参数
  return fetch({
    //api.Hallowmas 引用url.js里面的数据
    url: 'My/shezhi',
    method: 'post', //请求方法
    params: {

    }
  })
}


export function userinfor(uid) { 
  return fetch({
    //api.Hallowmas 引用url.js里面的数据
    url: 'Register/user_info',
    method: 'post', //请求方法
    data: {
    	uid:uid,
    },
  })
}

export function last(data) { 
	
  return fetch({
    //api.Hallowmas 引用url.js里面的数据
    url: 'Route/last',
    method: 'post', //请求方法
    data: data,
  })
}



export function shoucang(uid) { 
  return fetch({
    //api.Hallowmas 引用url.js里面的数据
    url: 'My/shoucang',
    method: 'post', //请求方法
    data: {
    	uid:uid,
    },
  })
}