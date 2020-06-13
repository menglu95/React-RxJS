import React, { Component } from "react";
import ReactDom from "react-dom";
import { ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";

class Rx extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    const response = ajax("https://jsonplaceholder.typicode.com/users").pipe(
      map(e => e.response)
    );
    response.subscribe(res => {
      this.setState({
        data: res
      });
    });
  }

  render() {
    return (
      <div>
        <h3>Using RxJS with ReactJS</h3>
        <ul>
          {this.state.data.map(element => (
            <li>
              {element.id} : {element.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Rx;
