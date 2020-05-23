import Constants from './constants'

const initialState = {
    showModal: false,
    fetchStatus: '',
    values: {
        name: '',
        bio: '',
        facebook_id: '',
    },
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case Constants.SET_EDIT_FORM_VALUES: {
            return Object.assign({}, state, { values: { ...state.values, ...payload } })
        }

        case Constants.SET_EDIT_FORM_MODAL_VISIBILITY: {
            return Object.assign({}, state, { showModal: payload })
        }

        case Constants.SET_EDIT_FORM_FETCH_STATUS: {
            return Object.assign({}, state, { fetchStatus: payload })
        }

        case Constants.RESET_EDIT_FORM_REDUCER: {
            return Object.assign({}, state, initialState)
        }

        default: {
            return state
        }
    }
}
