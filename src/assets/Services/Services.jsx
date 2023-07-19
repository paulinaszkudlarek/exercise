import React from 'react';
import './Services.scss';

function Services() {
  const services = [
    {
      title: 'Photography',
      description: 'Lorem Ipsum dolor sit amet, consectetur adipscing elit, sed doeiusmod tempor.',
      icon: 'img/clock-icon.svg',
      alt: 'Ikona zegara'
    },
    {
      title: 'Web design',
      description: 'Lorem Ipsum dolor sit amet, consectetur adipscing elit, sed doeiusmod tempor.',
      icon: 'img/graph-icon.svg',
      alt: 'Ikona grafu'
    },
    {
      title: 'Creativity',
      description: 'Lorem Ipsum dolor sit amet, consectetur adipscing elit, sed doeiusmod tempor.',
      icon: 'img/tv-icon.svg',
      alt: 'Ikona monitora'
    },
    {
      title: 'SEO',
      description: 'Lorem Ipsum dolor sit amet, consectetur adipscing elit, sed doeiusmod tempor.',
      icon: 'img/book-icon.svg',
      alt: 'Ikona książki'
    },
    {
      title: 'CSS/HTML',
      description: 'Lorem Ipsum dolor sit amet, consectetur adipscing elit, sed doeiusmod tempor.',
      icon: 'img/home-icon.svg',
      alt: 'Ikona domu'
    },
    {
      title: 'Digital',
      description: 'Lorem Ipsum dolor sit amet, consectetur adipscing elit, sed doeiusmod tempor.',
      icon: 'img/viewfinder-icon.svg',
      alt: 'Ikona obiektywu'
    }
  ];

  return (
    <div className="services">
      <div>
        <h3 className="services__title">
          <span className="services__title--small">
            We work with
          </span>
          <span className="services__title--big">
            Amazing services
          </span>
        </h3>
        <div className="services__separation"></div>
      </div>
      <div className="services__grid">
        {services.map((service, index) => (
          <div className="service" key={index}>
            <img className="service__icon" src={service.icon} alt={service.alt} />
            <div>
              <h4 className="service__title">{service.title}</h4>
              <p className="service__description">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
