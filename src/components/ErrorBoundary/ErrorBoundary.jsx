import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends PureComponent {
    static propTypes = {
        children: PropTypes.arrayOf(PropTypes.element).isRequired,
    }

    constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(/* error, errorInfo */) {
        // handle error
    }

    render() {
        const { children } = this.props
        const { hasError } = this.state

        if (hasError) {
            // fallback UI
        }

        return children
    }
}

export default ErrorBoundary
