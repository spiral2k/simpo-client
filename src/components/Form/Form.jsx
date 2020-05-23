import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ children }) => <form>{children}</form>

Form.propTypes = {
    children: PropTypes.element.isRequired,
}

export default Form
