import React from 'react';
import { SearchInput } from 'evergreen-ui';
import '../navbars.css'

export function Rechercher({ query, onChange }) {

    return (
        <div>
            <SearchInput placeholder="Rechercher un événement, une oeuvre...(ex: Sunset)" width="100%" autoFocus value={query}
                onChange={onChange}
            />
            <p className="indicationRecherche"><em>Entrez au moins trois caractères lors de votre recherche.</em></p>
        </div>
    );
}