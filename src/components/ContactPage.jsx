import React, { useState } from 'react';
import styled from 'styled-components/macro';

import { socials } from './services/social-links';

import { send } from 'emailjs-com';
const ContactPage = () => {
  const [details, setDetails] = useState({
    name: '',
    contact: '',
    email: '',
    to_name: 'Rohan',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    send('service_egwpk7i', 'template_g9nchag', details, 'OGdpfQhpNmj7uHH5m')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <ContactPageWrapper>
      <BannerWrapper>
        <h1
          css={`
            text-transform: uppercase;
            color: #000;

            font-size: 50px;
            font-family: 'Bebas Neue';
          `}
        >
          Lets connect
        </h1>
      </BannerWrapper>
      <FormWrapper>
        <h3>Lets Get to know each other</h3>

        <LinksWrapper>
          {socials.map((item, index) => (
            <a
              href={item.linkTo}
              key={item.name}
              rel="noreferrer"
              target="_blank"
              className="social-link"
            >
              {item.icon}
            </a>
          ))}
        </LinksWrapper>

        <div className="form-container">
          <h3>Email me here</h3>

          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Name"
              value={details.name}
              onChange={handleChange}
              required
            />

            <input
              className="input"
              name="contact"
              inputMode="numeric"
              maxLength={10}
              placeholder="Contact"
              value={details.contact}
              onChange={handleChange}
              required
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              value={details.emailr}
              onChange={handleChange}
              required
            />
            <button className="connect-button" type="submit">
              Connect
            </button>
          </form>
        </div>
      </FormWrapper>
    </ContactPageWrapper>
  );
};

export default ContactPage;

const ContactPageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 95vh;
  ${'' /* position: fixed; */}
  top: 0;
  overflow-x: hidden;
`;

const BannerWrapper = styled.div`
  width: 50%;
  background: #ffc130;

  padding: 30px 0;
`;
const FormWrapper = styled.div`
  width: 50%;
  position: relative;
  padding: 30px 0;
  ${'' /* top: 10%; */}

  & .form-container {
    width: 530px;
    padding: 30px 5px 0;
    height: 340px;
    margin: 50px auto 0;
    border: 1px solid #ffc130;
    box-shadow: 4px 4px 1px 1px #ffb300;
  }

  & .input {
    display: block;
    margin: auto;
    width: 400px;
    height: 40px;
    padding: 5px 10px;
    font-family: 'Poppins';
    border: 2px solid var(--border-color);
    margin-bottom: 10px;
  }

  & .connect-button {
    background: #ffc130;
    padding: 5px 20px;
    font-family: 'Poppins';
    font-weight: 700;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
`;
const LinksWrapper = styled.div`
  & .social-link {
  }

  & .icon {
    font-size: 30px;
    color: var(--normal-text);
    margin: 5px 20px;
    &:hover {
      color: var(--primary-color);
    }
  }
`;
