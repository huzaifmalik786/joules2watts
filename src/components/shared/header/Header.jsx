import React, { useState } from 'react'
import "./style.css"
import { useWindowWidth } from '../../../breakpoints'
import { StateDefaultWrapper } from '../StateDefaultWrapper'
import { SolutionDropdown } from '../solutionDrodown'
import { PlatformDropdown } from '../platformDropdown'
import { Link } from 'react-router-dom'


export const Header = ({ nobg, msp, blacklogo }) => {
    const screenWidth = useWindowWidth();
    const [OpenSolutions, setOpenSolutions] = useState(false);
    const [platformSolutions, setPlatformSolutions] = useState(false);
    return (
        <header className="header-2-shared desktop-only">
            <Link to="/">
                <img className="logo-shared" alt="Logo" src={blacklogo?"/logos/logo-black.webp":"/services/logo-1.png"} />
            </Link>
            <div className="holder-shared">
                <div className="frame-33-shared">
                    <button className="text-wrapper-16-shared" style={{ color: nobg && !msp ? "#fff" : "#000", outline: "none", border: "none", background: "transparent" }} onClick={() => setOpenSolutions(true)}>Solutions</button>
                    {OpenSolutions &&
                        <SolutionDropdown OpenSolutions={OpenSolutions} setOpenSolutions={setOpenSolutions} />
                    }
                </div>
                <div className="frame-33-shared">
                    <button className="text-wrapper-16-shared" style={{ color: nobg && !msp ? "#fff" : "#000", outline: "none", border: "none", background: "transparent" }} onClick={() => setPlatformSolutions(!platformSolutions)}>Platforms</button>
                    {platformSolutions &&
                        <PlatformDropdown OpenSolutions={platformSolutions} setOpenSolutions={setPlatformSolutions} />
                    }
                </div>
                <div className="frame-33-shared">
                    <Link to="/about-us">
                        <div className="text-wrapper-16-shared" style={{ color: nobg && !msp ? "#fff" : "#000" }}> About Us</div>
                    </Link>
                </div>
                <div className="frame-33-shared">
                    <Link to="/leadership">
                        <div className="text-wrapper-17-shared" style={{ color: nobg && !msp ? "#fff" : "#000" }}>Leadership</div>
                    </Link>
                </div>
                <div className="frame-33-shared">
                    <Link to="/industries">
                        <div className="text-wrapper-16-shared" style={{ color: nobg && !msp ? "#fff" : "#000" }}>Industries</div>
                    </Link>
                </div>
                <div className="frame-34-shared">
                    <Link to="/careers">
                        <div className="text-wrapper-16-shared" style={{ color: nobg && !msp ? "#fff" : "#000" }}>Careers</div>
                    </Link>
                </div>
                <StateDefaultWrapper className="CTA-8-shared" default1 msp={msp}/>
            </div>
        </header>
    )
}
