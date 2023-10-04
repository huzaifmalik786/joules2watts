import React, { useState } from 'react'
import "./style.css"
import { useWindowWidth } from '../../../breakpoints'
import { StateDefaultWrapper } from '../StateDefaultWrapper'
import { SolutionDropdown } from '../solutionDrodown'
import { PlatformDropdown } from '../platformDropdown'
import { Link } from 'react-router-dom'


export const Header = () => {
    const screenWidth = useWindowWidth();
    const [OpenSolutions, setOpenSolutions] = useState(false);
    const [platformSolutions, setPlatformSolutions] = useState(false);
    return (
        <header className="header-2-shared desktop-only">
            <Link to="/">
                <img className="logo-shared" alt="Logo" src="/services/logo-1.png" />
            </Link>
            <div className="holder-shared">
                <div className="frame-33-shared">
                    {OpenSolutions && screenWidth > 1440 &&
                        <SolutionDropdown OpenSolutions={OpenSolutions} setOpenSolutions={setOpenSolutions} />
                    }
                    <div className="text-wrapper-16-shared" onClick={() => setOpenSolutions(!OpenSolutions)}>Solutions</div>
                </div>
                <div className="frame-33-shared">
                    <div className="text-wrapper-16-shared" onClick={() => setPlatformSolutions(!platformSolutions)}>Platforms</div>
                    {platformSolutions && screenWidth > 1440 &&
                        <PlatformDropdown OpenSolutions={platformSolutions} setOpenSolutions={setPlatformSolutions} />
                    }
                </div>
                <div className="frame-33-shared">
                    <Link to="/about-us">
                        <div className="text-wrapper-16-shared"> About Us</div>
                    </Link>
                </div>
                <div className="frame-33-shared">
                    <Link to="/leadership">
                        <div className="text-wrapper-17-shared">Leadership</div>
                    </Link>
                </div>
                <div className="frame-33-shared">
                    <Link to="/industries">
                        <div className="text-wrapper-16-shared">Industries</div>
                    </Link>
                </div>
                <div className="frame-34-shared">
                    <div className="text-wrapper-16-shared">Careers</div>
                </div>
                <StateDefaultWrapper className="CTA-8-shared" default1 />
            </div>
        </header>
    )
}
