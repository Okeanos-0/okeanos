import React from 'react';

import { Spring, animated } from 'react-spring';

import { Card, Col } from 'react-bootstrap';

import { FilteredProject } from '../@types/types';

const Project: React.FC<{ data: FilteredProject }> = ({
    data,
}: {
    data: FilteredProject;
}) => {
    const handleButton = (url: string, e: any) => {
        e.preventDefault();
        window.open(url);
    };
    return (
        <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {(styles) => (
                <Col xs={4} className="mb-4">
                    <Card>
                        <Card.Body className="d-flex flex-column dark-bg">
                            <Card.Title>
                                <animated.div style={styles}>
                                    {data.name}
                                </animated.div>
                            </Card.Title>
                            {data.fork ? (
                                <Card.Subtitle className="mb-2 text-muted">
                                    <animated.div style={styles}>
                                        Fork
                                    </animated.div>
                                </Card.Subtitle>
                            ) : null}
                            <Card.Text>
                                <animated.div style={styles}>
                                    {data.description ??
                                        'Bu proje için bir açıklama bulunmamaktadır.'}
                                </animated.div>
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
            )}
        </Spring>
    );
};

export default Project;
