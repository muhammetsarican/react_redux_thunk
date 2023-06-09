import * as actions from "./actionTypes"

export function changeCategory(category) {
    return { type: actions.CHANGECATEGORY, payload: category }
}
export function getCategoriesSuccess(categories) {
    return { type: actions.GETCATEGORIESSUCCESS, payload: categories }
}
export function getCategories() {
    return function (dispatch) {
        let url = "http://localhost:3000/categories";
        return fetch(url)
            .then((response) => response.json())
            .then((result) => dispatch(getCategoriesSuccess(result)));
    }
}