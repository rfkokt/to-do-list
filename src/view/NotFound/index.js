import React from 'react'
import { newActivity } from '../../Assets'

export default function NotFound() {
    return (
        <div className='flex justify-center mt-16' data-cy="activity-empty-state">
            <img src={newActivity} alt="data not found" />
        </div >
    )
}
