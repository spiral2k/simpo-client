import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

/* Components */
import Loader from '@components/Loader/Loader'

/* Routes */
const App = lazy(() => import('@pages/App/App'))
const NotFound = lazy(() => import('@pages/NotFound/NotFound'))

export default (
    <Suspense fallback={<Loader />}>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="*" component={NotFound} />
        </Switch>
    </Suspense>
)
