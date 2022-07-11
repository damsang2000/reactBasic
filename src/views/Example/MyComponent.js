import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          persons: data.results,
        })
      );
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((item, index) => (
          <li key={index}>{item.email}</li>
        ))}
      </ul>
    );
  }
}

export default MyComponent;
