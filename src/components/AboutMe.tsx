import React from 'react';

import { Container } from 'react-bootstrap';

enum Logos {
    py = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    cs = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
    ts = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
}

const AboutMe = () => {
    return (
        <div>
            <Container>
                <div className="text-light about-card">
                    <div className="container">
                        <h1 className="display-3">Hello there 👋</h1>
                        <br />
                        <p className="card-text">
                            I'm a person who is interested in Python, C#, and
                            Typescript in a nutshell
                        </p>
                        <div className="imgs">
                            <img
                                src={Logos.py}
                                alt="Python"
                                width={60}
                                height={120}
                            />
                            <img
                                src={Logos.ts}
                                alt="Typescript"
                                width={60}
                                height={120}
                            />
                            <img
                                src={Logos.cs}
                                alt="C#"
                                width={60}
                                height={120}
                            />
                        </div>
                        <p>
                            <code className="about-code">
                                this may have been a little bit irrelevant
                            </code>
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default AboutMe;
