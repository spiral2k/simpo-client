import Constants from './constants'

const initialState = {
    fetchStatus: '',
    values: {
        name: '',
        bio: '',
        facebook_id: '',
    },
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case Constants.SET_FORM_VALUES: {
            return Object.assign({}, state, { values: { ...state.values, ...payload } })
        }

        case Constants.SET_FORM_FETCH_STATUS: {
            return Object.assign({}, state, { fetchStatus: payload })
        }

        case Constants.RESET_FORM_REDUCER: {
            return Object.assign({}, state, initialState)
        }

        default: {
            return state
        }
    }
}
