import React from 'react';
import { Animated } from 'react-animated-css';

export default function CardProject({ project }) {
  const stacks = [
    {
      name: 'react',
      icon: (
        <i
          style={{ color: 'rgb(147, 147, 251)' }}
          key="react"
          className="fa-brands fa-react"
        />
      ),
    },
    {
      name: 'node',
      icon: (
        <i
          style={{ color: 'rgb(164, 160, 66)' }}
          key="node"
          className="fa-brands fa-node-js"
        />
      ),
    },
    {
      name: 'docker',
      icon: (
        <i
          style={{ color: 'rgb(147, 147, 251)' }}
          key="docker"
          className="fa-brands fa-docker"
        />
      ),
    },
    {
      name: 'mysql',
      icon: (
        <i
          style={{ color: 'rgb(85, 103, 217)' }}
          key="mysql"
          className="fa-solid fa-database"
        />
      ),
    },
    {
      name: 'css',
      icon: (
        <i
          style={{ color: 'rgb(85, 103, 217)' }}
          key="css"
          className="fa-brands fa-css3-alt"
        />
      ),
    },
    {
      name: 'javascript',
      icon: (
        <i
          style={{ color: '#abd02f' }}
          key="javascript"
          className="fa-brands fa-square-js"
        />
      ),
    },
  ];

  const { tags, name, description, image, repository, source } = project;

  const thisStacks = stacks.filter((stack) => {
    if (tags.includes(stack.name)) return stack;
    return null;
  });

  return (
    <Animated
      animationIn="fadeInUp"
      animationInDuration={500}
      animationOutDuration={300}
      animationOut="fadeOut"
      isVisible={true}
    >
      <div className="project-card">
        <h3>{name}</h3>
        <div className="stacks">
          {thisStacks.map((stack) => (
            <span key={stack.name}>{stack.icon}</span>
          ))}
        </div>
        <div>
          <div className="image-box">
            <img src={image} alt="" />
          </div>
          <p>{description}</p>
        </div>
        <div className="source-buttons">
          <a target="_blank" rel="noreferrer" href={repository}>
            <i
              style={{ color: '#29a19c' }}
              className="fa-brands fa-github fa-lg"
            />
          </a>
          {repository !== source && (
            <a target="_blank" rel="noreferrer" href={source}>
              <i
                style={{ color: '#29a19c' }}
                className="fa-solid fa-right-to-bracket"
              />
            </a>
          )}
        </div>
      </div>
    </Animated>
  );
}
