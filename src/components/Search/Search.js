import React from 'react';
import styles from './Search.module.scss';

class Search extends React.Component {
  filterUpdate = () => {
    const searchString = this.searchString.value;
    this.props.filterUpdate(searchString);
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <input
          className={styles.searchBar}
          type='search'
          ref={value => {
            this.searchString = value;
          }}
          placeholder='Search by planet name...'
          onChange={this.filterUpdate}
        />
        <i className={'fas fa-search'} />
      </div>
    );
  }
}

export default Search;
