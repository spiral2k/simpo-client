import React from 'react'
import { connect } from 'react-redux'

/* Components */
import Header from '@components/Header/Header'
import Modal from '@components/Modal/Modal'
import Profiles from '@containers/Profiles/Profiles'
import EditProfile from '@containers/EditProfile/EditProfile'

/* Actions */
import * as EditFormActions from '@reducers/editForm/actions'

function Main({ dispatch, showModal }) {
    return (
        <div className="simpo-client">
            <Header />
            <Profiles />
            <Modal isVisible={showModal} close={() => dispatch(EditFormActions.setModalVisibility(false))}>
                <EditProfile />
            </Modal>
        </div>
    )
}

const mapStateToProps = state => ({
    showModal: state.editForm.showModal,
})

export default connect(mapStateToProps)(Main)
