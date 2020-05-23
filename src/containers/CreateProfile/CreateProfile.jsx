import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

/* Components */
import Form from '@components/Form/Form'
import Input from '@components/Input/Input'
import Button from '@components/Button/Button'

/* Actions */
import * as FormActions from '@reducers/form/actions'
import * as ProfilesActions from '@reducers/profiles/actions'

/* API's */
import * as ProfilesAPI from '@api/profiles'

import './CreateProfile.scss'

const CreateProfile = ({ dispatch, name, bio, facebook_id, fetchStatus }) => {
    const handleSubmit = async () => {
        try {
            const profile = await ProfilesAPI.create({ name, bio, facebook_id }, state => dispatch(FormActions.setFetchStatus(state)))
            dispatch(ProfilesActions.addProfile(profile))
            dispatch(FormActions.reset())
        } catch (e) {
            // handle error
        }
    }

    const handleChange = (value, key) => dispatch(FormActions.setValues({ [key]: value }))

    return (
        <div className="create-profile-container">
            <Form>
                <>
                    <Input placeholder="Name" value={name} onChange={e => handleChange(e.target.value, 'name')} />
                    <Input placeholder="Bio" value={bio} onChange={e => handleChange(e.target.value, 'bio')} />
                    <Input placeholder="Facebook ID" value={facebook_id} onChange={e => handleChange(e.target.value, 'facebook_id')} />
                    <Button text="Create" onClick={handleSubmit} className="green" fetchStatus={fetchStatus} />
                </>
            </Form>
        </div>
    )
}

CreateProfile.propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    facebook_id: PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired,
    fetchStatus: PropTypes.string.isRequired,
}

const mapStateToProps = state => {
    const { values, fetchStatus } = state.form
    return {
        ...values,
        fetchStatus,
    }
}

export default connect(mapStateToProps)(CreateProfile)
