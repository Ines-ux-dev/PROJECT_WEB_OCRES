import React from 'react';
import { SearchInput } from 'evergreen-ui';

export function Rechercher({ query, onChange }) {

    return (
        /*<Row>
            <Col xs={2} md={2} lg={2}>
*/
        <SearchInput placeholder="Rechercher (ex: Sunset)" width="37%" autoFocus value={query}
            onChange={onChange}
        />
        /* </Col>

     </Row>*/
    );
}