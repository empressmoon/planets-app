import React from 'react';
import styles from './Search.module.scss';

class Search extends React.Component {
  state = {
    search: ''
  };

  updateSearch(event) {
    this.setState({
      search: event.target.value
    });

    console.log(this.state.search);
  }

  render() {
    const { search } = this.state;

    return (
      <div className={styles.wrapper}>
        <input
          className={styles.searchBar}
          type='text'
          placeholder='Search by planet name...'
          value={search}
          onChange={event => this.updateSearch(event)}
        />
        <button className={styles.searchBtn}>
          <i className={'fas fa-search'} />
        </button>
      </div>
    );
  }
}

export default Search;
