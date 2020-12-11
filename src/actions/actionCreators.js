import {
    SELECT_DATASET,
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    SELECT_ITEM,
    OPEN_ADD_FORM,
    CHANGE_INPUT_FIELD,
    ADD_ITEM,
    CHANGE_SEARCH_FIELD,
    START_SEARCH,
    SORT_DATA
} from './actionTypes';

export function selectDataset(dataset) {
  return { type: SELECT_DATASET, payload: { dataset } };
}
export function fetchDataRequest() {
  return { type: FETCH_DATA_REQUEST };
}
export function fetchDataSuccess(data) {
  return { type: FETCH_DATA_SUCCESS, payload: { data } };
}
export function fetchDataFailure(error) {
  return { type: FETCH_DATA_FAILURE, payload: { error } };
}
export function selectItem(selectedId) {
  return { type: SELECT_ITEM, payload: { selectedId } };
}
export function startSearch(search) {
  return { type: START_SEARCH, payload: { search } };
}
export function changeSearchField(search) {
  return { type: CHANGE_SEARCH_FIELD, payload: { search } };
}
export function openAddForm() {
    return { type: OPEN_ADD_FORM };
}
export function changeInputField(id, firstName, lastName, email, phone) {
  return { type: CHANGE_INPUT_FIELD, payload: { id, firstName, lastName, email, phone } };
}
export function addItem(item) {
  return { type: ADD_ITEM, payload: { item } };
}
