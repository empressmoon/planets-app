import React from 'react';
import styles from './Table.module.scss';
import TableHeader from './TableHeader';

const Table = ({ data, searchString }) => {
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
          <TableHeader />
        </thead>
        <tbody>{planetsList}</tbody>
      </table>
    </div>
  );
};

export default Table;
