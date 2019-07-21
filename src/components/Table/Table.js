import React from 'react';
import styles from './Table.module.scss';

const Table = ({ data, searchString, sortItemsByNumber, sortItemsByName }) => {
  const planetsList = data
    .filter(planet => {
      return planet.name.toLowerCase().indexOf(searchString.toLowerCase()) >= 0;
    })
    .map(planet => {
      const { name, length_of_day: lengthDay, number_of_moons: moons } = planet;

      return (
        <tr key={planet.name}>
          <td>{name}</td>
          <td>{Math.floor(lengthDay)}</td>
          <td>{moons}</td>
        </tr>
      );
    });

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead className={styles.header}>
          <tr>
            <th>
              Planet name
              <button
                className={styles.sortBtn}
                onClick={e => sortItemsByName(e, 'name')}
              >
                &#9660;
              </button>
            </th>
            <th>
              Length of day [h]
              <button
                className={styles.sortBtn}
                onClick={e => sortItemsByNumber(e, 'length_of_day')}
              >
                &#9660;
              </button>
            </th>
            <th>
              Number of moons
              <button
                className={styles.sortBtn}
                onClick={e => sortItemsByNumber(e, 'number_of_moons')}
              >
                &#9660;
              </button>
            </th>
          </tr>
        </thead>
        <tbody>{planetsList}</tbody>
      </table>
    </div>
  );
};

export default Table;
