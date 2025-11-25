import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HeaderContainer, Logo, NavLinks, HamburgerMenu, MobileNav } from './styles';
import intenseLogo from '/svgs/intense.svg';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleLinkClick = () => setIsMenuOpen(false);

    return (
        <>
            <HeaderContainer>
                <Link to="/">
                    <Logo src="/svgs/intense.svg" alt="Logo da Revista Intense" />
                </Link>

                <NavLinks>
                    <NavLink to="/revista-digital">
                        baixe a revista digital
                    </NavLink>
                    <NavLink to="/sobre">sobre</NavLink>
                    <NavLink to="/contato">contato</NavLink>
                    <a className="disabled">blog</a>
                </NavLinks>

                <HamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span>
                        {isMenuOpen ? '✕' : '☰'}
                    </span>
                </HamburgerMenu>
            </HeaderContainer>

            <MobileNav isOpen={isMenuOpen}>
                <NavLink to="/revista-digital" onClick={handleLinkClick}>
                    baixe a revista digital
                </NavLink>
                <NavLink to="/sobre" onClick={handleLinkClick}>sobre</NavLink>
                <NavLink to="/contato" onClick={handleLinkClick}>contato</NavLink>
                <a className="disabled">blog</a>
            </MobileNav>
        </>
    );
};

export default Header;