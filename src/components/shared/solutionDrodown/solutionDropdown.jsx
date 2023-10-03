import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const items = [
    {
        name: "IT Services",
        link: "/it-services"
    },
    {
        name: "Hire Train Deploy",
        link: "/hire-train-deploy"
    },
    {
        name: "Contact & Flexible Staffing",
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
    const ref = useRef();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!ref?.current?.contains(event.target)) {
                props.setOpenSolutions(false)
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);
    return (
        <div className='solutiondropdown' ref={ref}>
            {items.map((item, index) => {
                return (
                    <Link to={item.link}>
                        <div className='nav-item'>
                            <p>{item.name}</p>
                        </div>
                    </Link>

                )
            })}
        </div>
    )
}
