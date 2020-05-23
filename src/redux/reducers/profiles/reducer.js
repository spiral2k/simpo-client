import Constants from './constants'

const initialState = {
    list: [],
    hasMore: true,
    fetchStatus: '',
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case Constants.SET_PROFILES: {
            return Object.assign({}, state, { list: payload })
        }
        case Constants.ADD_PROFILE: {
            return Object.assign({}, state, { list: [payload, ...state.list] })
        }

        case Constants.SET_PROFILES_FETCH_STATUS: {
            return Object.assign({}, state, { fetchStatus: payload })
        }

        case Constants.SET_PROFILES_HAS_MORE: {
            return Object.assign({}, state, { hasMore: payload })
        }

        case Constants.RESET_PROFILES_REDUCER: {
            return Object.assign({}, state, initialState)
        }

        default: {
            return state
        }
    }
}
