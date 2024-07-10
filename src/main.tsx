import React from 'react'
import ReactDOM from 'react-dom/client'


import App from "@app/app.tsx";

import './main.css'

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>,
    )
}
