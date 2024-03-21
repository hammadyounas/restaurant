"use client"
import { React, useState } from 'react';
import style from './Navbar.module.css';
import Link from 'next/link';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <nav className={style.navbar}>
            <ul className={style.logoContainer}>
                <div className={style.logoSection}>
                    <img src='/Assets/LogoImage/burger.png' alt="App Logo" />
                    <Link href={'/'} className={style.logoText}>Mr Burger</Link>
                </div>
                <div className={`${style.menuToggle} ${showMenu ? style.open : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </ul>

            <ul className={`${style.navLinks} ${showMenu ? style.showMenu : ''}`}>
                <li><Link href={'/'} className={style.link}>Order</Link></li>
                <li><Link href={'/'} className={style.link}>Items</Link></li>
                <li><Link href={'/'} className={style.link}>Deals</Link></li>
                <li><Link href={'/'} className={style.link}>Reviews</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
