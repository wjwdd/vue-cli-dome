import axios from 'axios'; //引入axios
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog';
import store from '@/store'
import api from 'common/js/url.js'; //引用url.js
import Qs from 'Qs';
export function fetch(options, load = true) {
  return new Promise((resolve, reject) => {
    // 是否显示加载中
    if (load) {
      setTimeout(() => {
        store.commit('switch_dialog');
      }, 300)
    }

    const instance = axios.create({ //instance创建一个axios实例，可以自定义配置，可在 axios文档中查看详情
      //所有的请求都会带上这些配置，比如全局都要用的身份信息等。
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'token_in_header': global_.token,//token从全局变量那里传过来
      },
      baseURL: api.Hallowmas + '/index.php/Api/',//接口公共
      timeout: 30 * 1000, // 30秒超时,
      responseType: 'json', // default,
      transformRequest: [function(data) {
        // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
        　　
        return Qs.stringify(data);
      }],

    });
    instance(options)
      .then(response => { //then 请求成功之后进行什么操作

        resolve(response); //把请求到的数据发到引用请求的地方
        if (load) {
          setTimeout(() => {
            store.commit('switch_dialog1');
          }, 500)
        }

      })
      .catch(error => {
        console.log('请求异常信息：' + error);
        reject(error);
      });
  });
}
