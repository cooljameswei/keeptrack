import React, { Fragment, useState } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from "./ProjectList";
import { Project } from "./Project";

function ProjectPage() {
    const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
    const saveProject = (project: Project) => {
        let updatedProject = projects.map((p: Project) => {
            return p.id === project.id ? project : p;
        });
        setProjects(updatedProject);
    };
    return (
        <Fragment>
            <h1>Projects</h1>
            <ProjectList
                onSave={saveProject}
                projects={projects}
            />
        </Fragment>
    );
}

export default ProjectPage;