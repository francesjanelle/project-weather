import React from "react"
import Loader from 'react-loader-spinner'

export default function Loading() {
    return (
        <Loader
            type="ThreeDots"
            color="#007bff"
            height={80}
            width={80} />
        )
    }