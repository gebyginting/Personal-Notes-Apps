import React from "react";
import SearchIcon from '../assets/search-icon.svg'
import '../styles/style.css'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: ''
        }
    }

    onSearchKeywordHandler(event) {
        this.setState(() => {
            return {
                keyword: event.target.value
            }
        })
    }

    onSearchResultHandler(event) {
        const result = event.target.value;
        this.props.onSearch(result);
    }

    render() {
        return (
            <form id="search-note">
                <input type="text" name="catatan" id="catatan" placeholder="Cari catatan..." value={this.state.keyword} onChange={(event) => {
                    this.onSearchKeywordHandler(event);
                    this.onSearchResultHandler(event);
                }} />
                <img src={SearchIcon} alt="search icon" className="search-icon"/>
            </form>
        )
    }
}

export default SearchBar;