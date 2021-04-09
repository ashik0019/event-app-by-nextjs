import React from 'react'
import Link from 'next/link'
import classes from './main-header.module.css'

function MainHeader() {
    return (
        <header>
            <div>
                <Link href='/'>
                    Tech Aliens
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/event">Browse All Event</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader
