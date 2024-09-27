import React, { useEffect, useState } from 'react'
import all from '../data/all.json'
import { useParams, useNavigate } from 'react-router-dom'

const Course = () => {
    const [data, setData] = useState()
    const { courseSlug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (Object.keys(all).includes(courseSlug)) {
            import(`../data/${all[courseSlug]}.json`).then((res) => {
                setData(res)
            })
        } else {
            navigate('/')
        }
    })

    return (
        <div>
            <h2>{JSON.stringify(data)}</h2>
        </div>
    )
}

export default Course