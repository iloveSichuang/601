import request from "@/utils/request";

export function getUserData() {
    return request({
        url: "show_userdata",
        method: "get",
    });
}


export function delById(id) {
    return request({
        url: 'delete_testdata/' + id,
        method: 'delete'
    })
}