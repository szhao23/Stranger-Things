import React from 'react';

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <br></br>
            <span className="visually-hidden">Search Craigslist-Lite posts &nbsp; </span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Posts"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
    
);

const posts = [
    { id: '1', name: 'This first post is about React' },
    { id: '2', name: 'This next post is about Preact' },
    { id: '3', name: 'We have yet another React post!' },
    { id: '4', name: 'This is the fourth and final post' },
];

const { search } = window.location;
const query = new URLSearchParams(search).get('s');

export default SearchBar;