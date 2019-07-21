import React from 'react';
import styles from './App.module.scss';
import Table from '../Table/Table';
import Search from '../Search/Search';
import Form from '../Form/Form';

class App extends React.Component {
  state = {
    data: [],
    isLoaded: false,
    searchString: ''
  };

  componentDidMount() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://dry-plains-91502.herokuapp.com/planets';

    fetch(proxyUrl + url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          data: json
        });
      })
      .catch(console.log);
  }

  filterUpdate = value => {
    this.setState({
      searchString: value
    });
  };

  addItem = e => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value + ' 👽 ',
      length_of_day: e.target[1].value,
      number_of_moons: e.target[2].value
    };

    this.setState(prevState => ({
      data: [...prevState.data, newItem]
    }));

    e.target.reset();
  };

  sortItemsByNumber = (e, key) => {
    const data = this.state.data;

    data.sort((a, b) => a[key] - b[key]);
    this.setState({ data });
  };

  sortItemsByName = (e, key) => {
    const data = this.state.data;

    data.sort((a, b) => a[key].localeCompare(b[key]));
    this.setState({ data });
  };

  render() {
    const { isLoaded, data, searchString } = this.state;

    if (!isLoaded) {
      return <div className={styles.loading}>Loading...</div>;
    } else {
      return (
        <div className={styles.wrapper}>
          <h1 className={styles.header}>planets</h1>
          <Search
            searchString={searchString}
            filterUpdate={this.filterUpdate}
          />
          <Table
            data={data}
            searchString={searchString}
            sortItemsByNumber={this.sortItemsByNumber}
            sortItemsByName={this.sortItemsByName}
          />
          <Form submitFn={this.addItem} />
        </div>
      );
    }
  }
}

export default App;
