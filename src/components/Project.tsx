import React from 'react';

import { Card, Col } from 'react-bootstrap';

import { FilteredProject } from './Projects';

const Project: React.FC<{ data: FilteredProject }> = ({
    data,
}: {
    data: FilteredProject;
}) => {
    const handleButton = (url: string, e: any) => {
        e.preventDefault();
        window.open(url);
    };

    if (data.fork) {
        return (
            <Col xs={4} className="mb-4">
                <Card>
                    <Card.Body className="d-flex flex-column dark-bg">
                        <Card.Title>{data.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            Fork
                        </Card.Subtitle>
                        <Card.Text>
                            {data.description ??
                                'Bu proje için bir açıklama bulunmamaktadır.'}
                        </Card.Text>
                        <button
                            onClick={(e) => handleButton(data.html_url, e)}
                            className="btn mt-auto btn-d"
                            formTarget="_blank"
                        >
                            Projeye Git
                        </button>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
    return (
        <Col xs={4} className="mb-4">
            <Card>
                <Card.Body className="d-flex flex-column dark-bg">
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Text>
                        {data.description ??
                            'Bu proje için bir açıklama bulunmamaktadır.'}
                    </Card.Text>
                    <button
                        onClick={(e) => handleButton(data.html_url, e)}
                        className="btn mt-auto btn-d"
                    >
                        Projeye Git
                    </button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Project;
