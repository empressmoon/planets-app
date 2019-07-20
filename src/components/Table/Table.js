import React from 'react';
import styles from './Table.module.scss';
import TableHeader from './TableHeader';

class Table extends React.Component {
  renderTableData() {
    const { planets } = this.props;

    return planets.map(planet => {
      const { name, length_of_day, number_of_moons } = planet;

      return (
        <tr key={planet.name}>
          <td>{name}</td>
          <td>{Math.floor(length_of_day)}</td>
          <td>{number_of_moons}</td>
        </tr>
      );
    });
  }

  /*  sortBy = key => {
    const { data } = this.state;
    data.sort((a, b) => a[key] < b[key]);

    this.setState({ data });
    console.log('click');
  }; */

  render() {
    return (
      <div className={styles.wrapper}>
        <table className={styles.table}>
          <thead className={styles.header}>
            <TableHeader sortByFn={this.sortBy} />
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}

export default Table;
