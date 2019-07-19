import React from 'react';
import styles from './App.module.scss';
import Table from '../Table/Table';
import Search from '../Search/Search';
import Form from '../Form/Form';

class App extends React.Component {
  state = {
    data: [],
    isLoaded: false
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

  render() {
    const { isLoaded, data } = this.state;

    if (!isLoaded) {
      return <div className={styles.loading}>Loading...</div>;
    } else {
      return (
        <div className={styles.wrapper}>
          <h1 className={styles.header}>planets</h1>
          <Search />
          <Table planets={data} />
          <Form />
        </div>
      );
    }
  }
}

export default App;
