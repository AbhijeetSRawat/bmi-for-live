import React from 'react'

export default function Container({ className, children }) {
    return (
        <div className={`lg:w-[1200px] mx-auto w-full ${className}`}>{children}</div>
    )
}
