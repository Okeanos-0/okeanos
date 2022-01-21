import React, { Component } from 'react';
import Project from './Project';

import { Container, Row } from 'react-bootstrap';

export interface FilteredProject {
    name: string;
    description: string;
    fork: boolean;
    html_url: string;
}

interface State {
    username: string;
    projects: FilteredProject[];
}

class Projects extends Component {
    state: State = {
        username: 'Okeanos-0',
        projects: [],
    };
    async componentDidMount() {
        const projects = await (
            await fetch(
                `https://api.github.com/users/${this.state.username}/repos`
            )
        ).json();
        this.setState({ projects });
    }
    render(): React.ReactNode {
        return (
            <Container>
                <h1 className="text-light">Projects</h1>
                <br />
                <Row>
                    {this.state.projects.map((project) => (
                        <Project data={project} />
                    ))}
                </Row>
            </Container>
        );
    }
}

export default Projects;
