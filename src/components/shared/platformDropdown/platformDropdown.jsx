import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const items = [
    {
        name: "J2W Offer Letter",
        link: "/offer-letter-platform"
    },
    {
        name: "J2W premiere lounge",
        link: "/j2w-premiere-lounge"
    }
]

export const PlatformDropdown = (props) => {
    const ref = useRef();
    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //         if (!ref?.current?.contains(event.target)) {
    //             props.setOpenSolutions(false)
    //         }
    //     };
    //     document.addEventListener("mousedown", handleClickOutside);
    // }, [ref]);
    return (
        <div className='solutiondropdown' id="dorpdown2" ref={ref}>
            {items.map((item, index) => {
                return (
                    <Link to={item.link} key={index}>
                        <div className='nav-item'>
                            <p>{item.name}</p>
                        </div>
                    </Link>

                )
            })}
        </div>
    )
}
