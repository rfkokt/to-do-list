import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Headers, Detail } from './index'

export default function MainApp() {
    return (
        <Router>
            <Headers />
            <div className='mx-auto container py-4 mt-10'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/detail/:id' element={<Detail />} />
                </Routes>
            </div>
        </Router>
    )
}
