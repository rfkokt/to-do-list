import React from 'react'

export default function Buttons({ children, className, onClick }) {
    return (
        <button onClick={onClick} className={`bg-primary text-white font-medium py-3 px-6 rounded-full ${className}`}>
            {children}
        </button>
    )
}
