import React, { Component } from 'react';
import Project from '../components/Project';

import { Container, Row } from 'react-bootstrap';

import { FilteredProject } from '../@types/types';

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
    async componentWillUnmount() {
        this.setState({
            projects: [],
        });
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
