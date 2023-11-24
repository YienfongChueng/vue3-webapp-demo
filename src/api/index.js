import request from '@/utils/request'

export function apiGetList(params) {
    return request({
        method:'get',
        url: `/home/page/${params.page}/${params.pageSize}`
    })
}

export function apiGetDetail(params) {
    return request({
        method:'get',
        url: '/detail',
        params
    })
}