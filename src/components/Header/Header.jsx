import React from 'react'

/* Components */
import CreateProfile from '@containers/CreateProfile/CreateProfile'

import './Header.scss'

function Header() {
    return (
        <header className="header-container">
            <div className="container">
                <CreateProfile />
            </div>
        </header>
    )
}

export default Header
