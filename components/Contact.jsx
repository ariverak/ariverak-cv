import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

const useStyles = createUseStyles({
  root: {
    marginTop: 30,
    margin: 20
  },
  info: {
    marginBottom: 10,
    '& p': {
      fontSize: 14
    },
    '& span': {
      fontSize: 12
    }
  },
  title: {
    marginBottom: 20
  }
});

export default function Contact({ data }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <p
        className={classNames(
          'has-text-info',
          'is-size-4',
          'has-text-weight-medium',
          classes.title
        )}
      >
        CONTACTO
      </p>
      {data.map(contactInfo => (
        <div className={classes.info}>
          <p className="is-uppercase has-text-weight-semibold">
            {contactInfo.key}
          </p>
          <span>{contactInfo.value}</span>
        </div>
      ))}
    </div>
  );
}
