import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const items = [
    {
        name: "IT Services",
        link: "/it-services"
    },
    {
        name: "Workforce Solutions",
        link: "/workforce-solutions"
    },
    {
        name: "Contract & Flexible Staffing",
        link: "/staffing-solution"
    },
    {
        name: "Master Service Provider",
        link: "/msp"
    },
    {
        name: "Consulting For GICs & COEs",
        link: "/consulting"
    },
    {
        name: "Administrative & Payroll",
        link: "/administrative-and-payroll-management"
    },
    {
        name: "RPO",
        link: "/rpo"
    }
]

export const SolutionDropdown = (props) => {
    const ref = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!ref?.current?.contains(event.target)) {
                props.setOpenSolutions(false)
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);
    return (
        <div className='solutiondropdown' id="dropdown1" ref={ref}>
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
