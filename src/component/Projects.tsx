import React from 'react';

interface MyComponentProps {
  description: string;
  imageSrc: string;
}

const Projects: React.FC<MyComponentProps> = ({ description, imageSrc }) => {
  return (
    <div>
      <p className="description">{description}</p>
      <div className="example">
        <img className="example-img small" src={imageSrc} />
        <div className="img-description">The Times is using this project internally.</div>
      </div>
    </div>
  );
};

export default Projects;