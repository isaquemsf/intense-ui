import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { HeaderContainer, Logo, NavLinks, HamburgerMenu, MobileNav } from './styles';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const launchDate = new Date('2025-11-27T00:00:00');
    const revistaLink = "SEU_LINK_DO_GOOGLE_DRIVE_AQUI";

    const handleRevistaClick = (event) => {
    const currentDate = new Date();

        if (currentDate < launchDate) {
            event.preventDefault();
        
            toast('Lançamento em 27 de novembro! 🚀', {
                duration: 4000,
                style: {
                background: '#333',
                color: '#fff',
                fontFamily: 'inherit',
                fontWeight: '700'
                },
            });
        }
    };

  const handleLinkClick = () => setIsMenuOpen(false);

    return (
        <>
            <HeaderContainer>
                <Link to="/">
                    <Logo src="/svgs/intense.svg" alt="Logo da Revista Intense" />
                </Link>

                <NavLinks>
                    <a href={revistaLink} target="_blank" rel="noopener noreferrer" onClick={handleRevistaClick}>
                        baixe a revista digital
                    </a>
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
                <a href={revistaLink} target="_blank" rel="noopener noreferrer" onClick={(e) => { handleRevistaClick(e); handleLinkClick(); }}>
                    baixe a revista digital
                </a>
                <NavLink to="/sobre" onClick={handleLinkClick}>sobre</NavLink>
                <NavLink to="/contato" onClick={handleLinkClick}>contato</NavLink>
                <a className="disabled">blog</a>
            </MobileNav>
        </>
    );
};

export default Header;