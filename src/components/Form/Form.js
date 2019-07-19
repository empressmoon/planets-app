import React from 'react';
import styles from './Form.module.scss';
import Button from '../Button/Button';

class Form extends React.Component {
  state = {};

  render() {
    return (
      <div className={styles.wrapper}>
        <form className={styles.form} autoComplete='off'>
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor='name'>
              Planet name
            </label>
            <input className={styles.input} name='name' label='Planet name' />
          </div>
          <div className={styles.inputWrapper}>
            <label className={styles.label} htmlFor='day'>
              Length of day
            </label>
            <input className={styles.input} name='day' label='Length of day' />
          </div>
          <div className={styles.inputWrapper}>
            <label className={styles.label} clahtmlFor='moons'>
              Moons
            </label>
            <input className={styles.input} name='moons' label='Moons' />
          </div>
          <Button>Submit</Button>
        </form>
      </div>
    );
  }
}

export default Form;
