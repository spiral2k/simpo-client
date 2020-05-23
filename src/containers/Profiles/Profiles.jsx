import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* Components */
import Profile from '@containers/Profile/Profile'
import Button from '@components/Button/Button'

/* API's */
import * as ProfilesAPI from '@api/profiles'

/* Actions */
import * as ProfilesActions from '@reducers/profiles/actions'
import * as EditFormActions from '@reducers/editForm/actions'

import './Profiles.scss'

function Profiles({ dispatch, profiles, fetchStatus, hasMore }) {
    // get profiles by offset
    const fetchProfiles = () => dispatch(ProfilesActions.getProfiles())

    useEffect(() => {
        fetchProfiles()
    }, [])

    const handleEditClick = async localProfile => {
        let profile = localProfile

        // no cache - calling to get the information
        if (!profile.facebook_id) {
            profile = await ProfilesAPI.getOne(profile.id)

            // caching profile data
            dispatch(ProfilesActions.updateLocalProfile(profile))
        }

        dispatch(EditFormActions.setValues(profile))
        dispatch(EditFormActions.setModalVisibility(true))
    }

    return (
        <div className="profiles-container container">
            {profiles.map(profile => (
                <Profile key={profile.id} {...profile} onEditClick={handleEditClick} />
            ))}
            <div className="load-more">
                <Button
                    text={hasMore ? 'Load more' : 'No more profiles to display'}
                    className={hasMore ? 'green' : 'disabled'}
                    fetchStatus={fetchStatus}
                    onClick={fetchProfiles}
                />
            </div>
        </div>
    )
}

Profiles.propTypes = {
    dispatch: PropTypes.func.isRequired,
    profiles: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string, name: PropTypes.string, bio: PropTypes.string, facebook_id: PropTypes.string })
    ).isRequired,
    fetchStatus: PropTypes.string.isRequired,
    hasMore: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    profiles: state.profiles.list,
    fetchStatus: state.profiles.fetchStatus,
    hasMore: state.profiles.hasMore,
})

export default connect(mapStateToProps)(Profiles)
