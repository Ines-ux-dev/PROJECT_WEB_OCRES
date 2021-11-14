import React from 'react';
import { SearchInput } from 'evergreen-ui';

export function Rechercher({ query, onChange }) {

    return (

        <SearchInput placeholder="Rechercher..." width="100%" autoFocus value={query}
            onChange={onChange}
        />
    );
}