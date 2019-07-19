import React from 'react';
import styles from './App.module.scss';
import Table from '../Table/Table';

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
        console.log(json);
      })
      .catch(console.log);
  }

  render() {
    const { isLoaded, data } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className={styles.wrapper}>
          <h1 className={styles.header}>planets</h1>
          <Table planets={data} />
        </div>
      );
    }
  }
}

export default App;
