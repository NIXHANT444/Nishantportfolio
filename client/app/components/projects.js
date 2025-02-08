import React, { useState, useEffect } from 'react';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [mockups, setMockups] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        (async () => {
            try {
                setLoading(true); // Set loading to true when fetching begins
                const res = await fetch('http://localhost:5000/data');
                const mres = await fetch('http://localhost:5000/mockup');
                const mockups = await mres.json();
                const data = await res.json();
                setProjects(data.projects);
                setMockups(mockups.mockups);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching completes
            }
        })();
    }, []);

    if (loading) {
        return (
            <section className="featured-projects" id="projects">
                <h2>Featured Projects</h2>
                <div className="project-container">

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <svg
                            style={{
                                animation: 'spin 1s linear infinite',
                                height: '28px',
                                width: '28px',
                                color: 'white',
                                margin: '28px',
                            }}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                style={{ opacity: 0.25 }}
                            />
                            <path
                                fill="currentColor"
                                style={{ opacity: 0.75 }}
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                        </svg>

                        <span style={{ color: 'white', fontSize: '1.875rem', fontWeight: 'bold' }}>
                            Loading...
                        </span>
                    </div>

                    <style>
                        {`@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }`}
                    </style>


                </div>
                <section className="animated-mockups">
                    <div className="mockup-container">

                        <div className="mockup">

                        </div>
                    </div>
                </section>
            </section>
        );
    }

    return (
        <section className="featured-projects" id="projects">
            <h2>Featured Projects</h2>
            <div className="project-container">
                {projects.map((i, index) => (
                    <div className="project" key={i.id || index}>
                        <div className="thumbnail">
                            <a href={i.url}>
                                <img src={i.imageUrl} alt={i.title} />
                                <div className="overlay">
                                    <h3>{i.title}</h3>
                                    <p>{i.description}</p>
                                </div>
                            </a>
                        </div>
                        <center>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }} onClick={() => window.open(i.url)}                        >
                                <button style={{ display: 'flex', marginRight: '5px' }}>Live</button><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48M336 64h112v112M224 288 440 72"></path></svg></div></center>
                    </div>
                ))}
            </div>
            <section className="animated-mockups">
                <div className="mockup-container">
                    {mockups.map((i, index) => (
                        <div className="mockup" key={i.id || index}>
                            <h3>{i.title}</h3>
                            <img src={i.imageURL} alt={i.title} />
                        </div>))}
                </div>
            </section>
        </section>
    );
}
