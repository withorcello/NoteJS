import React from 'react'

const Error = ({onRetry}) => (
    <div className="error">
        <h1>Ops!</h1>
        <h2>Ocorreu um erro tente novamente.</h2>
        <button className="error_button" onClick={onRetry}>Tentar novamente</button>
    </div>
)

export default Error;