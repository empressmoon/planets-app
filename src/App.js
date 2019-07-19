import React from 'react';

class App extends React.Component {
  state = {
    planets: [],
    isLoaded: false
  };

  componentDidMount() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const url = 'https://dry-plains-91502.herokuapp.com/planets';

    fetch(proxyUrl + url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          planets: data
        });
        console.log(data);
      })
      .catch(console.log);
  }

  render() {
    const { isLoaded, planets } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <h1>planets</h1>;
    }
  }
}

export default App;
