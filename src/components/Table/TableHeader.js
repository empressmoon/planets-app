import React from 'react';
import styles from './Table.module.scss';

class TableHeader extends React.Component {
  render() {
    const { sortByFn } = this.props;

    return (
      <tr>
        <th>
          Planet name
          <button className={styles.sortBtn} onClick={() => sortByFn('name')}>
            &#9660;
          </button>
        </th>
        <th>
          Length of day [h]
          <button
            className={styles.sortBtn}
            onClick={() => console.log('click')}
          >
            &#9660;
          </button>
        </th>
        <th>
          Number of moons
          <button
            className={styles.sortBtn}
            onClick={() => console.log('click')}
          >
            &#9660;
          </button>
        </th>
      </tr>
    );
  }
}

export default TableHeader;
