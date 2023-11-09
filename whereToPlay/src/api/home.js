import httpRequest from '@/axios'

export const getTestBackend = () =>{
    return httpRequest({
        url: 'http://localhost:8086/test/fuck',
        method: 'get'
    })
}
export const getAddressList = () =>{
    return httpRequest({
        url: 'http://localhost:8086/test/addressList',
        method: 'get'
    })
}
export const deleteAddress = (id) =>{
    return httpRequest({
        url: 'http://localhost:8086/test/delete?id=' + id,
        method: 'delete'
    })
}
export const create = (data) =>{
    return httpRequest({
        url: 'http://localhost:8086/test/create',
        method: 'post',
        data: data
    })
}
export const update = (data) =>{
    return httpRequest({
        url: 'http://localhost:8086/test/update',
        method: 'post',
        data: data
    })
}