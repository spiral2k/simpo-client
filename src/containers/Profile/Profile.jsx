import React, { memo } from 'react'
import PropTypes from 'prop-types'

/* Components */
import Button from '@components/Button/Button'

import './Profile.scss'

const checkIfNeedRender = (prevProps, nextProps) => JSON.stringify(prevProps) === JSON.stringify(nextProps)

// memoized component
const Profile = memo(
    ({ onEditClick, ...profile }) => (
        <div className="profile-container">
            <span className="name left">{profile.name}</span>
            <Button text="Edit" className="blue right" onClick={() => onEditClick(profile)} />
        </div>
    ),
    checkIfNeedRender
)

Profile.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    onEditClick: PropTypes.func,
}

Profile.defaultProps = {
    name: 'No name',
    onEditClick: () => {},
}

export default Profile
