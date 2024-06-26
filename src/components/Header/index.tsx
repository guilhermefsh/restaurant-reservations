import { useEffect, useState } from "react"
import { NavContainer, ItensMenu, Logo, NavLinks, TagHeader } from "./styles"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa";

export const Header = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 700) {
            setScrolled(true)
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <TagHeader>
            <NavContainer className={scrolled ? 'scrolled' : ''}>
                <Logo to="/" className={scrolled ? 'scrolled' : ''} >La casa di Gastone</Logo>
                <ItensMenu onClick={toggleMenu} className={scrolled ? 'scrolled' : ''}>
                    <FaBars size={34} color="white" style={{ marginTop: -10 }} />
                </ItensMenu>
                <NavLinks className={`${isOpen ? 'open' : ''} ${scrolled ? 'scrolled' : ''}`}>
                    <Link to="/cardapio">CARDÁPIO</Link>
                    <Link to="/historia">HISTÓRIA</Link>
                    <Link to="/login">ENTRAR</Link>
                </NavLinks>
            </NavContainer>
        </TagHeader>
    )
}
