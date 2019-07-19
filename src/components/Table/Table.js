import React from 'react';
import styles from './Table.module.scss';

class Table extends React.Component {
  renderTableData() {
    const { planets } = this.props;

    return planets.map(planet => {
      const { id, name, length_of_day, number_of_moons } = planet;
      return (
        <tr key={id}>
          <td>{name}</td>
          <td>{Math.floor(length_of_day)}</td>
          <td>{number_of_moons}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table className={styles.table}>
          <thead className={styles.header}>
            <tr>
              <th>Planet name</th>
              <th>Length of day [h]</th>
              <th>Number of moons</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
