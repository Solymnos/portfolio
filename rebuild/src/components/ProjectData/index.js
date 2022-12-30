import React from 'react';

const ProjectData = ({project}) =>
{
    return (
        <div>
            <h1>{project.name}</h1>
            <div>
                <div>{project.desc}</div>
            </div>
        </div>
    )
}

export default ProjectData;