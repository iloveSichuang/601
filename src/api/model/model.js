import request from "@/utils/request";


export function getModel() {
  return request({
    url: "/show_models",
    method: "get",
  });
}

export function uploadModel(data) {
  return request({
    url: "/upload_modelapp",
    method: "post",
    data: data,
  });
}

export function startTrain(id) {
  return request({
    url: "/train_model/" + id,
    method: "get",
    timeout: 100000
  });
}

export function getTrainStatus(id) {
  return request({
    url: "" + id,
    method: "get",
  });
}

export function delModelById(id) {
  return request({
    url: "/delete_model/" + id,
    method: "get",
  });
}

export function modifyParams(id, data) {
  return request({
    url: "/modify_params/" + id,
    method: "post",
    data: data,
  });
}


export function getPic(image_name) {
  return request({
    url: "/get_imagebypath/" + image_name,
    method: "get",
    responseType: 'blob'
  });
}

// export function searchModelByIdesc(q) {
//   return request({
//     url: "/search",
//     method: "get",
//     params: { 'q': q }
//   });
// }
