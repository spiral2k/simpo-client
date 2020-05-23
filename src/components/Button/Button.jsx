import React from 'react'
import PropTypes from 'prop-types'

/* Components */
import Loader from '@components/Loader/Loader'

/* Constants */
import FetchStatus from '@constants/fetchStatus'

import './Button.scss'

const { FETCHING } = FetchStatus

const Button = ({ text, onClick, fetchStatus, className }) => {
    const handleClick = e => {
        e.preventDefault()
        onClick(e)
    }

    // if loading, show loader
    const buttonText = fetchStatus === FETCHING ? <Loader /> : text

    return (
        <button type="button" onClick={handleClick} className={`button ${className}`}>
            {buttonText}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
    fetchStatus: PropTypes.string,
}

Button.defaultProps = {
    text: 'no text',
    onClick: () => {},
    className: '',
    fetchStatus: '',
}

export default Button
