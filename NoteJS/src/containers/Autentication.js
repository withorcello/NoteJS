import React from 'react'

import Login from '../components/Login'

const Autentication = ({ onLogin }) => (
    <div>
        <Login onLogin={onLogin} />
    </div>
)

export default Autentication