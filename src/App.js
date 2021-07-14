import React, { Component } from "react";
import MovieList from "./Components/movieList";
import { connect } from "react-redux";
import * as actions from "./Actions";
import "./styles.css";
import logo from "./Netflix-Logo.png";

class App extends Component {
  componentDidMount() {
    this.props.getlist();
  }

  add = (id) => {
    this.props.add(id);
  };

  remove = (id) => {
    this.props.remove(id);
  };

  render() {
    return (
      <div>
        <img className="logo" src={logo} alt="Netflix Logo" />
        <h2 className="mylist">My List</h2>
        <MovieList
          list={this.props.mylist}
          handleClick={this.remove}
          eventType={"delete"}
        />

        <h2 className="mylist">My Recommendations</h2>
        <MovieList
          list={this.props.recommendations}
          handleClick={this.add}
          eventType={"add"}
        />

        <h2 className="mylist">My List</h2>
        <MovieList
          list={this.props.mylist}
          handleClick={this.remove}
          eventType={"title"}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    recommendations: state.recommendations
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (id) => {
      dispatch(actions.remove(id));
    },
    add: (id) => {
      dispatch(actions.add(id));
    },
    getlist: () => {
      dispatch(actions.getlist());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
