/* constants */
import Constants from './constants'

export const setFetchStatus = fetchStatus => ({ type: Constants.SET_EDIT_FORM_FETCH_STATUS, payload: fetchStatus })

export const setValues = values => ({ type: Constants.SET_EDIT_FORM_VALUES, payload: values })

export const reset = () => ({ type: Constants.RESET_EDIT_FORM_REDUCER })

export const setModalVisibility = isVisible => ({ type: Constants.SET_EDIT_FORM_MODAL_VISIBILITY, payload: isVisible })
