import React from "react";
import HeaderImg from "../assets/header-img.png";
import SearchBar from "./SearchFeature";

const Header = ( {onSearch} ) => {
    return (
        <header>
            <section className="header-title">
                <img src={HeaderImg} alt="header image" />
                <h1>My Personal Notes</h1>
            </section>
            <SearchBar onSearch={ onSearch }/>
        </header>
    );
}

export default Header;