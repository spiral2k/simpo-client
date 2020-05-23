import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

/* Components */
import Form from '@components/Form/Form'
import Input from '@components/Input/Input'
import Button from '@components/Button/Button'
import Image from '@components/Image/Image'

/* Actions */
import * as ProfilesActions from '@reducers/profiles/actions'
import * as EditFormActions from '@reducers/editForm/actions'

/* API's */
import * as ProfilesAPI from '@api/profiles'

import './EditProfile.scss'

const EditProfile = ({ dispatch, id, name, bio, facebook_id, fetchStatus }) => {
    const [done, setDone] = useState(true)

    // reset on unmount
    useEffect(() => () => dispatch(EditFormActions.reset()), [])

    const handleChange = (key, value) => {
        // release save lock
        if (done) setDone(false)

        dispatch(EditFormActions.setValues({ [key]: value }))
    }

    const handleSave = async () => {
        if (done) return
        try {
            await ProfilesAPI.editOne(id, { name, bio, facebook_id }, state => dispatch(EditFormActions.setFetchStatus(state)))

            dispatch(ProfilesActions.updateLocalProfile({ id, name, bio, facebook_id }))

            // lock save button
            setDone(true)
        } catch (e) {
            // handle error
        }
    }

    return (
        <div className="edit-profile-container">
            <Form>
                <>
                    <div className="header">
                        <Image src={`http://graph.facebook.com/${facebook_id}/picture`} />
                        <span>Edit {name}</span>
                    </div>
                    <Input value={name} onChange={e => handleChange('name', e.target.value)} />
                    <Input value={bio} onChange={e => handleChange('bio', e.target.value)} />
                    <Input value={facebook_id} onChange={e => handleChange('facebook_id', e.target.value)} />
                    <Button text="Save changes" className={`${done ? 'disabled' : 'blue'} right`} onClick={handleSave} fetchStatus={fetchStatus} />
                </>
            </Form>
        </div>
    )
}

EditProfile.propTypes = {
    dispatch: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    facebook_id: PropTypes.string.isRequired,
    fetchStatus: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
    const { values, fetchStatus } = state.editForm
    return {
        ...values,
        fetchStatus,
    }
}

export default connect(mapStateToProps)(EditProfile)
