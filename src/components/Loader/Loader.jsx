import React from 'react'
import PropTypes from 'prop-types'

import './Loader.scss'

const Loader = ({ className }) => <div className={`loader ${className}`}></div>

Loader.propTypes = {
    className: PropTypes.string,
}

Loader.defaultProps = {
    className: '',
}
export default Loader
