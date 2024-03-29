import React from 'react';
import classNames from 'classnames';
import Title from '@components/Title';
import Contact from '@components/Contact';
import Social from '@components/Social';
import Subtitle from '@components/Subtitle';
import Education from '@components/Education';
import Experience from '@components/Experience';
import { createUseStyles } from 'react-jss';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import LeftCorner from './LeftCorner';
import MobileFooter from './MobileFooter';

const avatarProps = {
  borderRadius: 20,
  objectFit: 'cover',
};

const useStyles = createUseStyles({
  root: {
    width: '100%',
    display: 'inline-flex',
    backgroundColor: 'white',
    padding: '40px 15px',
    zIndex: 1000,
  },
  top: {
    backgroundColor: '#ededed',
    width: '100%',
    height: 60,
  },
  content: {
    width: '100%',
    minHeight: 'calc(100vh - 60px)',
    backgroundColor: 'white',
    borderTopLeftRadius: '10%',
    padding: '5% 10%',
  },
  right: {
    position: 'relative',
    backgroundColor: '#ededed',
    width: 400,
    minHeight: '100vh',
    '& img': {
      position: 'absolute',
      width: 90,
      height: 90,
      top: 100,
      left: 100,
      ...avatarProps,
    },
    '& $about': {
      marginTop: 65,
      margin: 20,
      '& p': {
        marginBottom: 20,
      },
    },
  },
  about: {},
});

export const Image = ({ imageUrl }) => (
  <motion.img
    alt=''
    src={imageUrl}
    animate={{ scale: 2 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.8 }}
    whileTap={{ scale: 1.5 }}
  />
);

Image.propTypes = {
  imageUrl: PropTypes.string,
};

function Layout({
  imageUrl,
  about,
  contact,
  social,
  title,
  subtitle,
  education,
  experience,
}) {
  const classes = useStyles();

  const aboutMe = (
    <div className={classes.about}>
      <p className='has-text-info is-size-4 has-text-weight-medium'>SOBRE MI</p>
      <p className='has-text-left is-size-7'>{about}</p>
    </div>
  );

  const aboutRender = (
    <>
      <Image imageUrl={imageUrl} />
      {aboutMe}
      <Contact data={contact} />
      <Social data={social} />
    </>
  );

  return (
    <div className={classNames('panel', classes.root)}>
      <div className={classNames('is-hidden-mobile', classes.right)}>
        <LeftCorner />
        {aboutRender}
      </div>
      <div style={{ width: '100%', backgroundColor: '#ededed' }}>
        <div className={classNames(classes.top, 'is-hidden-mobile')} />
        <div className={classes.content}>
          <Title imageUrl={imageUrl}>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          <Education data={education} />
          <Experience data={experience} />
          <MobileFooter contact={contact} social={social} />
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  imageUrl: PropTypes.string,
  about: PropTypes.string,
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  social: PropTypes.array,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  education: PropTypes.array,
  experience: PropTypes.array,
};

export default Layout;
