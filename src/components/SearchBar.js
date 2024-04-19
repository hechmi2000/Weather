// SearchBar.js
import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';


const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    }

    return (
        <Form onSubmit={handleSubmit} >
            <input
                type="text"
                placeholder="Enter city"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            
            <Button type="submit">Search</Button>
        </Form>
    );
}

export default SearchBar;
