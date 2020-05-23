import config from '@config'

/* API's */
import * as ProfilesAPI from '@api/profiles'

import Constants from './constants'

export const setProfiles = profiles => ({ type: Constants.SET_PROFILES, payload: profiles })

export const addProfile = profile => ({ type: Constants.ADD_PROFILE, payload: profile })

export const updateLocalProfile = profile => (dispatch, getState) => {
    const profiles = getState().profiles.list
    // changing the profile
    dispatch(setProfiles(profiles.map(p => (p.id === profile.id ? profile : p))))
}

const setFetchStatus = fetchStatus => ({ type: Constants.SET_PROFILES_FETCH_STATUS, payload: fetchStatus })

const setHasMore = more => ({ type: Constants.SET_PROFILES_HAS_MORE, payload: more })

export const getProfiles = () => async (dispatch, getState) => {
    const { list, hasMore } = getState().profiles

    if (!hasMore) return

    const offset = list.length

    const newProfiles = await ProfilesAPI.getAll(offset, status => dispatch(setFetchStatus(status)))

    if (Array.isArray(newProfiles)) {
        if (offset) dispatch(setProfiles([...list, ...newProfiles]))
        else dispatch(setProfiles(newProfiles))
        if (!newProfiles.length || newProfiles.length % config.api.limit !== 0) dispatch(setHasMore(false))
    }
}

export const reset = () => ({ type: Constants.RESET_PROFILES_REDUCER })
