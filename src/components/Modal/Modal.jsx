import React from 'react'
import PropTypes from 'prop-types'

/* Components */
import Button from '@components/Button/Button'

import './Modal.scss'

const Modal = ({ isVisible, close, children }) => {
    if (!isVisible) return null

    return (
        <div className="modal-container">
            <div className="modal">
                <Button text="Close" className="close red" onClick={close} />
                {children}
            </div>
        </div>
    )
}

Modal.propTypes = {
    isVisible: PropTypes.bool,
    children: PropTypes.element.isRequired,
}

Modal.defaultProps = {
    isVisible: false,
}

export default Modal
