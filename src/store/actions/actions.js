export function gettingData(value, pages) {
    return {
        type: 'GETTING_DATA',
        payload: value,
        payloadPages: pages
    }
}

export function changePage(page) {
    return {
        type: 'CHANGE_PAGE',
        payload: page
    }
}