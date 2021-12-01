import React from 'react';
import { SearchInput } from 'evergreen-ui';
import { Row, Col } from 'react-bootstrap';

export function Rechercher({ query, onChange }) {

    return (
        <Row>
            <Col xs={2} md={2} lg={2}>

                <SearchInput placeholder="Rechercher (ex: Sunset)" width="100%" autoFocus value={query}
                    onChange={onChange}
                />
            </Col>

        </Row>
    );
}