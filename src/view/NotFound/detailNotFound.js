import React from 'react'
import { newDetailActivity } from '../../Assets'

export default function DetailNotFound() {
    return (
        <div className='flex justify-center mt-16' data-cy="activity-empty-state">
            <img src={newDetailActivity} alt="data not found" />
        </div >
    )
}
