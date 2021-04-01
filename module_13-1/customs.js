let oldFetch = window.fetch;

async function customFetch(url, options) {
    const response = await oldFetch(url, options);

    if(response.status === 400) throw new Error('Bad request!');
    if(response.status === 404) throw new Error('Not found!');

    return response
}

window.fetch = customFetch;