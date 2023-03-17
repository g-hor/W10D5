import React from 'react'
import { NavLink } from 'react-router-dom'

const GalleryNavigation = (props) => {
    const {galleries} = props
    const galleryMap = galleries.map(gallery => {
        return (
            <>
                <NavLink to={`/galleries/${gallery.id}`}>
                    {gallery.name}
                </NavLink>
                <br />
            </>
        )
    })

    return (
        <nav>
            <h1>
                Galleries
            </h1>
            <NavLink to='/'>
                Home
            </NavLink>
            <br />
            {galleryMap}
        </nav>
    )
}

export default GalleryNavigation