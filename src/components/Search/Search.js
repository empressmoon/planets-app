import React from 'react';
import styles from './Search.module.scss';

class Search extends React.Component {
  state = {
    value: this.props.searchString || ''
  };

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    const { value } = this.state;

    return (
      <div className={styles.wrapper}>
        <input
          className={styles.searchBar}
          type='text'
          placeholder='Search by planet name...'
          value={value}
          onChange={event => this.handleChange(event)}
        />
        <button className={styles.searchBtn}>
          <i className={'fas fa-search'} />
        </button>
      </div>
    );
  }
}

export default Search;
