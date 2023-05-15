import * as actions from "./actionTypes"

export function getProductsSuccess(products) {
    return { type: actions.GETPRODUCTSSUCCESS, payload: products }
}

export function createProductsSuccess(products) {
    return { type: actions.CREATEPRODUCTSSUCCESS, payload: products }
}

export function updateProductsSuccess(products) {
    return { type: actions.UPDATEPRODUCTSSUCCESS, payload: products }
}

export async function saveProductApi(product) {
    return await fetch("http://localhost:3000/products/" + `${product.id || ""}`, {
        method: product.id ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringfy(product)
    })
        .then(handleResponse)
        .catch(handleError)
}
export async function saveProduct(product) {
    return async function (dispatch) {
        return await saveProductApi(product)
            .then(savedProduct => {
                product.id
                    ? dispatch(updateProductsSuccess(saveProduct))
                    : dispatch(createProductsSuccess(saveProduct));
            }).catch(error => { throw error })
    };
}


export async function handleResponse(response) {
    if (response.ok) {
        return response.json
    }
    const error = await response.text()
    throw new Error(error)
}

export function handleError(error) {
    throw error;
}
export function getProducts(categoryId) {
    return function (dispatch) {
        let url = "http://localhost:3000/products";
        if (categoryId) {
            url += `?categoryId=${categoryId}`
        }
        return fetch(url)
            .then((response) => response.json())
            .then((result) => dispatch(getProductsSuccess(result)));
    }
}