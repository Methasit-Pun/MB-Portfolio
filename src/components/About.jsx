import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Container, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import Header from './Header';
import endpoints from '../constants/endpoints';
import FallbackSpinner from './FallbackSpinner';

const styles = {

  introTextContainer: {
    margin: 10,
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    textAlign: 'left',
    fontSize: '1.2em',
    fontWeight: 500,
    lineHeight: '1.6',
  },
  introImageContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    position: 'relative',
    transition: 'transform 0.3s ease',
    textAlign: 'center',
  },
  introImage: {
    borderRadius: '50%',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    width: '350px', // Adjusted width to make the image larger
    height: '350px', // Adjusted height to match width
    objectFit: 'cover', // Ensure the image covers the circle shape properly
    marginBottom: '20px', // Add space between the image and quote
    transition: 'transform 0.3s ease',
  },
  quoteContainer: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#555',
    marginBottom: '50px',
    fontStyle: 'italic',
  },
};

function About(props) {
  const { header } = props;
  const [data, setData] = useState(null);

  const parseIntro = (text) => <ReactMarkdown children={text} />;

  useEffect(() => {
    fetch(endpoints.about, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.1)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <>
      <Header title={header} />
      <div className="section-content-container">
        <Container>
          {data ? (
            <Fade>
              <Row>
                <Col style={styles.introImageContainer}>
                  <img
                    src={data?.imageSource}
                    alt="profile"
                    style={styles.introImage}
                    className="intro-image"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                </Col>
                <Col style={styles.introTextContainer}>
                  {/* Quote Section moved above the intro text */}
                  <div style={styles.quoteContainer}>
                    &ldquo;If I say I will do it, I do it.&rdquo;
                  </div>
                  {parseIntro(data.about)}
                </Col>
              </Row>
            </Fade>
          ) : (
            <FallbackSpinner />
          )}
        </Container>
      </div>
    </>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
};

export default About;
