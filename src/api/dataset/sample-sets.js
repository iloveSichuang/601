import { service as request } from "@/utils/request1";
import qs from 'qs'

export function postData(data) {
  return request({
    url: "sample-sets",
    method: "post",
    data: data,
    // headers: { "Content-Type": "multipart/form-data" },
  });
}

// export function listPost(query) {
//   return request({
//     url: '/sample-sets',
//     method: 'get',
//     params: query
//   })
// }1

export function getData() {
  return request({
    url: "/sample-sets/all",
    method: "get",
    // headers: { "Content-Type": "multipart/form-data" },
  });
}

export function getDetailData(id) {
  return request({
    url: "sample-sets/" + id + "/details",
    method: "get",
    // headers: { "Content-Type": "multipart/form-data" },
  });
}


export function getRowCol(id) {
  return request({
    url: "sample-sets/" + id + "/rowcol",
    method: "get",
    // headers: { "Content-Type": "multipart/form-data" },
  });
}

export function selectRowCol(id, input, output) {
  return request({
    url: "sample-sets/process/" + id,
    method: "post",
    params: {
      in: input,
      out: output
    },
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    }
    // headers: { "Content-Type": "multipart/form-data" },
  });
}

export function delById(id) {
  return request({
    url: 'sample-sets/' + id,
    method: 'delete'
  })
}

// export function getDataa(id) {
//   return request({
//     url: "/sample-sets/" + id + "/data",
//     method: "get",
//     // headers: { "Content-Type": "multipart/form-data" },
//   });
// }


// https://blog.csdn.net/weixin_43970434/article/details/121402694