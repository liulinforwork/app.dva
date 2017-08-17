import axios from 'axios'
import qs from 'qs'
import { baseURL, version, baseURL_pay } from './config'
import { message } from 'antd'
const fetch = (options) => {

  let {
      method = 'get',
      data,
      fetchType,
      url,
      urlType
  } = options

  if(urlType==1){
    axios.defaults.baseURL = baseURL_pay;/*监理宝支付模块*/

  }else{
    axios.defaults.baseURL = baseURL;/*监理宝*/
  }


  // const cloneData = lodash.cloneDeep(data)
  const cloneData = data

  try {
    let domin = ''
    if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
      domin = url.match(/[a-zA-z]+:\/\/[^/]*/)[0]
      url = url.slice(domin.length)
    }
    const match = pathToRegexp.parse(url)
    url = pathToRegexp.compile(url)(data)
    for (let item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name]
      }
    }
    url = domin + url


  } catch (e) {
    // message.error(e.message)
  }

  const befor = function (obj) {
    let params = {
      userId: 8,
      timestamp: new Date().getTime(),
      sign: "oI10aB2NvcPy5AA6",
      para: JSON.stringify(obj),
      version: version,
      terminal: 2,
      h5: 0
    };
    return qs.stringify(params);
  }


  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: cloneData,
      })
    case 'delete':
      return axios.delete(url, {
        data: cloneData,
      })
    case 'post':
      return axios.post(url, befor(cloneData),{
        withCredentials:true
      })
    case 'put':
      return axios.put(url, cloneData)
    case 'patch':
      return axios.patch(url, cloneData)
    default:
      return axios(options)
  }
};
// const loginOut = (code) => {
//   switch (code){
//     case 108:
//       // message.error('登录超时，请重新登录');
//       //清除所有cookie
//       //跳转至登录页面
//       break;
//     case 200:
//       break;
//     default:
//       //清除所有cookie
//       break;
//   }
// };

export default function request (options) {

  if (options.url && options.url.indexOf('//') > -1) {
    const origin = `${options.url.split('//')[0]}//${options.url.split('//')[1].split('/')[0]}`
  }

  return fetch(options).then((response) => {
    const { statusText, status } = response

    // loginOut(response.status);

    let data = response.data;
    return {
      success: true,
      message: statusText,
      status,
      ...data,
    }


  }).catch((error) => {


    const { response } = error
    let msg
    let status
    let otherData = {}
    if (response) {
      const { data, statusText } = response
      otherData = data
      status = response.status
      msg = data.message || statusText
    } else {
      status = 600
      msg = 'Network Error'
    }
    return { success: false, status, message: msg, ...otherData }


  })
}
