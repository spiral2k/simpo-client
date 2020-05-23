import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import routes from '@routes'

/* Components */
import Footer from '@components/Footer/Footer'

/* Redux */
import { Provider } from 'react-redux'
import Store from '@redux/store'

/* ErrorBoundary */
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary'

import '@style/global.scss'

ReactDOM.render(
    <HashRouter>
        <Provider store={Store}>
            <ErrorBoundary>
                {routes}
                <Footer />
            </ErrorBoundary>
        </Provider>
    </HashRouter>,
    document.getElementById('simpo-root')
)
