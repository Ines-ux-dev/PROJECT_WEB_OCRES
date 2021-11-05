import React from 'react';
import { SearchInput } from 'evergreen-ui';

export function Rechercher({ query }) {

    return (

        <SearchInput placeholder="Rechercher..." width="100%" autofocus value={query} />
    );
}