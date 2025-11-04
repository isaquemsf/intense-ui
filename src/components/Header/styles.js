import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    padding: 20px 5%;
    background-color: ${({ theme }) => theme.colors.cyan};
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img`
    height: 35px;
`;

export const NavLinks = styled.nav`
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
    }

    display: flex;
    gap: 40px;
    
    a, a:visited {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-weight: 500;
        font-size: 1rem;
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
        transition: color 0.2s ease-in-out;
        
        &:hover {
            color: ${({ theme }) => theme.colors.pink};
        }
        
        &.disabled {
            color: rgba(255, 255, 255, 0.5);
            pointer-events: none;
        }

        &.active {
            color: ${({ theme }) => theme.colors.pink};
            font-weight: 700;
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const HamburgerMenu = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    z-index: 1001;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: flex; 
        justify-content: center;
        align-items: center;
    }

    span {
        font-size: 28px;
        color: white;
        line-height: 1;
    }
`;

export const MobileNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.cyan};
    z-index: 1000;

    transition: transform 0.3s ease-in-out;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};

    a, a:visited {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-weight: 700;
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
        transition: color 0.2s ease-in-out;
        
        &:hover {
            color: ${({ theme }) => theme.colors.pink};
        }
        
        &.disabled {
            color: rgba(255, 255, 255, 0.5);
            pointer-events: none;
        }
        
        &.active {
            color: ${({ theme }) => theme.colors.pink};
        }
    }
`;