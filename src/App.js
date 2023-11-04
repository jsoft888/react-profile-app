import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Oluwafemi",
        bio: "A software developer",
        imgSrc: "https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/37420331_1943090552422628_402342524720513024_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=be3454&_nc_ohc=ZyjDUp60YYUAX9lgKLL&_nc_oc=AQlnt--sTP7iwPdxgc81JpaYEpXJiHMaOwIgk0h2CowCi2YDL2QI2hqiM4v7NZkncb0&_nc_ht=scontent-los2-1.xx&oh=00_AfA1yMX6x0H5Cs_XnhZgXoFuw7NQzJ4zmOUElFtluJXMKQ&oe=656D91D2",
        profession: "Web Developer",
      },
      shows: false,
      mountTime: new Date(),
    };
  }

  toggleProfile = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  componentDidMount() {
    this.interval = setInterval(this.updateMountTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateMountTime = () => {
    this.setState({ mountTime: new Date() });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleProfile}>
          Toggle Profile
        </button>
        {this.state.shows && (
          <div>
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="Avatar" />
            <p>Profession: {this.state.person.profession}</p>
          </div>
        )}
        <p>Time since mount: {Math.floor((new Date() - this.state.mountTime) / 1000)} seconds</p>
      </div>
    );
  }
}

export default App;

