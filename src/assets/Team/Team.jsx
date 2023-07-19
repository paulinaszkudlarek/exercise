import React from 'react';
import Facebook from '../Icons/Facebook';
import Twitter from '../Icons/Twitter';
import Pinterest from '../Icons/Pinterest';
import Instagram from '../Icons/Instagram';
import './Team.scss';

function Person({ name, role, image, imagex2, imagex3 }) {
  return (
    <div className="person">
      <div className="person__image-wrapper">
        <img className="person__image" src={image} srcSet={`${imagex2} 2x, ${imagex3} 3x, `} alt={name} />
        <div className="person__overlay"></div>
        <div className="icons">
          <Facebook />
          <Twitter />
          <Pinterest />
          <Instagram />
        </div>
      </div>
      <div>
        <h4 className="person__name">{name}</h4>
        <p className="person__role">{role}</p>
      </div>
    </div>
  );
}

function Team() {
  const teamMembers = [
    {
      name: 'Matthew Dex',
      role: 'Graphic Design',
      image: 'img/person1.png',
      imagex2: 'img/person1@x2.png',
      imagex3: 'img/person1@x3.png'
    },
    {
      name: 'Christopher Campbell',
      role: 'Branding/UX Design',
      image: 'img/person2.png',
      imagex2: 'img/person2@x2.png',
      imagex3: 'img/person2@x3.png'
    },
    {
      name: 'Michael Fertig',
      role: 'Developer',
      image: 'img/person3.png',
      imagex2: 'img/person3@x2.png',
      imagex3: 'img/person3@x3.png'
    }
  ];

  return (
    <div className="team">
      <div>
        <h3 className="team__title">
          <span className="team__title--small">Who we are</span>
          <span className="team__title--big">Meet our Team</span>
        </h3>
        <div className="team__separation"></div>
        <p className="team__blurb">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="team__grid">
        {teamMembers.map((member, index) => (
          <Person key={index} name={member.name} role={member.role} image={member.image} imagex2={member.imagex2} imagex3={member.imagex3} />
        ))}
      </div>
    </div>
  );
}

export default Team;
