import React from 'react'

export default function PagenotFound() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%',marginTop:'30px' }}>
            <h2 >No match found for <code>{window.location.pathname}</code></h2>
        </div>
    )
}
