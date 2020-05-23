import request from '@request'

export const create = (data, asyncUpdate) => {
    return request(
        {
            url: 'profiles/',
            method: 'POST',
            data,
        },
        asyncUpdate
    )
}

export const getAll = (offset, asyncUpdate) =>
    request(
        {
            url: `profiles/?offset=${offset}`,
            method: 'GET',
        },
        asyncUpdate
    )

export const getOne = (id, asyncUpdate) =>
    request(
        {
            url: `profiles/${id}`,
            method: 'GET',
        },
        asyncUpdate
    )

export const editOne = (id, data, asyncUpdate) =>
    request(
        {
            url: `profiles/${id}`,
            method: 'PUT',
            data,
        },
        asyncUpdate
    )
