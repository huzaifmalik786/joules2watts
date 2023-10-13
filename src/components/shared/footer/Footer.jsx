import React, { useState } from 'react'
import "./style.css"
import { useWindowWidth } from '../../../breakpoints'
import { Link } from 'react-router-dom';
import { PlatformDropdown } from '../platformDropdown';


export const Footer = () => {
    const screenWidth = useWindowWidth();
    const [platformSolutions, setPlatformSolutions] = useState(false);
    return (
        <>
            <div
                className="footer-2-shared desktop-only"
                style={{
                    backgroundColor:
                        screenWidth >= 450 ? "var(--white)" : screenWidth < 450 ? "var(--secondary-04)" : undefined,
                    height: screenWidth >= 450 ? "292px" : screenWidth < 450 ? "696px" : undefined,
                    width: screenWidth >= 450 ? "1441px" : screenWidth < 450 ? "390px" : undefined,
                }}
            >
                <div className="overlap-8-shared">
                    <div className="frame-49-shared">
                        <div className="DIV-2-shared">
                            <Link to="/services-overview">
                                <div className="text-wrapper-29-shared">Services</div>
                            </Link>
                            <button className="text-wrapper-29-shared" style={{ background: "transparent", border: 'none', outline: 'none' }} onClick={() => setPlatformSolutions(!platformSolutions)}>Platforms</button>
                            {platformSolutions &&
                                <PlatformDropdown OpenSolutions={platformSolutions} setOpenSolutions={setPlatformSolutions} />
                            }
                            <Link to="/about-us">
                                <div className="text-wrapper-29-shared">About</div>
                            </Link>
                            <Link to="/leadership">
                                <div className="text-wrapper-29-shared">Leadership</div>
                            </Link>
                            <Link to="/industries">
                                <div className="text-wrapper-29-shared">Industries</div>
                            </Link>
                            <Link to="/careers">
                                <div className="text-wrapper-29-shared">Careers</div>
                            </Link>
                            <Link to="/csr-policy">
                                <div className="text-wrapper-29-shared">CSR</div>
                            </Link>
                        </div>
                        <a
                            className="text-wrapper-30-shared"
                            href="https://www.facebook.com/joulestowatts/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Facebook
                        </a>
                        <a
                            className="text-wrapper-31-shared"
                            href="https://www.instagram.com/joulestowatts/?hl=en"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Instagram
                        </a>
                        <a
                            className="text-wrapper-32-shared"
                            href="https://twitter.com/j2w_consulting"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Twitter
                        </a>
                        <a
                            className="text-wrapper-33-shared"
                            href="https://www.linkedin.com/in/joules-to-watts-612591236/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            LinkedIn
                        </a>
                        <Link to="/privacy-policy">
                            <div className="text-wrapper-34-shared">Privacy policy</div>
                        </Link>
                        <Link to="/contact-us">
                            <div className="text-wrapper-35-shared">Contact us</div>
                        </Link>
                        <div className="frame-39-shared">
                            <div className="text-wrapper-36-shared">HEAD OFFICE</div>
                            <p className="text-wrapper-37-shared">
                                Plot No. 356, Novel MSR, Marathahalli Bridge, Varthur Road, behind MGA Hospital, Subbaiah Reddy
                                Colony, Marathahalli, Bengaluru, Karnataka 560037
                            </p>
                        </div>
                        <div className="group-12-shared">
                            <a
                                className="text-wrapper-38-shared"
                                href="https://www.youtube.com/channel/UCpxlw04SInw2jA2fGqZbNeQ"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                Youtube
                            </a>
                            <img className="face-book-shared" alt="Face book" src="/services/facebook-7.svg" />
                        </div>
                        <img className="linkedin-shared" alt="Linkedin" src="/services/linkedin-1.svg" />
                        <img className="facebook-shared" alt="Facebook" src="/services/facebook-6.svg" />
                        <img className="facebook-2-shared" alt="Facebook" src="/services/facebook-4.svg" />
                        <img className="facebook-3-shared" alt="Facebook" src="/services/facebook-5.svg" />
                    </div>
                    <div className="group-13-shared">
                        <div className="frame-41-shared">
                            <p className="text-wrapper-39-shared">© Copyright © 2018-19 Joulestowatts Business Solutions Pvt. Ltd.</p>
                            <div className="ellipse-9-shared" />
                            <Link to="/privacy-policy">
                                <div className="text-wrapper-39-shared">Privacy Policy</div>
                            </Link>
                        </div>
                    </div>
                    <img className="logo-3-shared" alt="Logo" src="/services/logo.png" />
                </div>
            </div>
            <footer className="footer-3-shared mobile-only">
                <div className="overlap-16-shared">
                    <div className="frame-73-shared">
                        <div className="frame-74-shared">
                            <div className="text-wrapper-36-shared">HEAD OFFICE</div>
                            <p className="text-wrapper-37-shared">
                                Plot No. 356, Novel MSR, Marathahalli Bridge, Varthur Road, behind MGA Hospital, Subbaiah Reddy
                                Colony, Marathahalli, Bengaluru, Karnataka 560037
                            </p>
                        </div>
                        <div className="DIV-3-shared">
                            <Link to="/leadership">
                                <div className="text-wrapper-29-shared">Leadership</div>
                            </Link>
                            <Link to="/industries">
                                <div className="text-wrapper-53-shared">Industries</div>
                            </Link>
                            <Link to="/careers">
                                <div className="text-wrapper-53-shared">Careers</div>
                            </Link>
                            <Link to="/csr-policy">
                                <div className="text-wrapper-53-shared">CSR</div>
                            </Link>
                        </div>
                        <div className="DIV-4-shared">
                            <Link to="/services-overview">
                                <div className="text-wrapper-29-shared">Services</div>
                            </Link>
                            <button className="text-wrapper-53-shared" style={{ background: "transparent", border: 'none', outline: 'none' }} onClick={() => setPlatformSolutions(!platformSolutions)}>Platforms</button>
                            {platformSolutions &&
                                <PlatformDropdown OpenSolutions={platformSolutions} setOpenSolutions={setPlatformSolutions} />
                            }
                            <Link to="/about-us">
                                <div className="text-wrapper-53-shared">About</div>
                            </Link>
                            <Link to="/contact-us">
                                <div className="text-wrapper-53-shared">Contact us</div>
                            </Link>
                            <Link to="/privacy-policy">
                                <div className="text-wrapper-53-shared">Privacy policy</div>
                            </Link>
                        </div>
                        <div className="frame-75-shared">
                            <div className="group-20-shared">
                                <a
                                    className="text-wrapper-38-shared"
                                    href="https://www.youtube.com/channel/UCpxlw04SInw2jA2fGqZbNeQ"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Youtube
                                </a>
                                <img className="face-book-shared" alt="Face book" src="/services/facebook-3.svg" />
                            </div>
                            <div className="frame-76-shared">
                                <img className="linkedin-2-shared" alt="Linkedin" src="/services/linkedin.svg" />
                                <a
                                    className="text-wrapper-54-shared"
                                    href="https://www.linkedin.com/in/joules-to-watts-612591236/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    LinkedIn
                                </a>
                            </div>
                            <div className="frame-76-shared">
                                <img className="facebook-4-shared" alt="Facebook" src="/services/facebook-2.svg" />
                                <a
                                    className="text-wrapper-54-shared"
                                    href="https://www.facebook.com/joulestowatts/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Facebook
                                </a>
                            </div>
                            <div className="frame-76-shared">
                                <img className="facebook-4-shared" alt="Facebook" src="/services/facebook.svg" />
                                <a
                                    className="text-wrapper-54-shared"
                                    href="https://www.instagram.com/joulestowatts/?hl=en"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Instagram
                                </a>
                            </div>
                            <div className="frame-77-shared">
                                <img className="facebook-4-shared" alt="Facebook" src="/services/facebook-1.svg" />
                                <a
                                    className="text-wrapper-54-shared"
                                    href="https://twitter.com/j2w_consulting"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>
                    <img className="logo-4-shared" alt="Logo" src="/services/logo.png" />
                    <div className="group-21-shared">
                        <div className="frame-78-shared">
                            <p className="text-wrapper-55-shared">© Copyright © 2018-19 Joulestowatts Business Solutions Pvt. Ltd.</p>
                            <div className="ellipse-14-shared" />
                            <Link to="/privacy-policy">
                                <div className="text-wrapper-56-shared">Privacy Policy</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}
