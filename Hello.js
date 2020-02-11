import React, { Component } from "react";
import ReactTable from "react-table";
class Hello extends Component {
  render() {
    const data = [
      {
        name: "Tanner Linsley1",
        age: 25,
        friend: {
          name: "Jason Maurer1",
          age: 22
        }
      },
      {
        name: "Tanner Linsley2",
        age: 26,
        friend: {
          name: "Jason Maurer2",
          age: 23
        }
      },
      {
        name: "Tanner Linsley1",
        age: 25,
        friend: {
          name: "Jason Maurer1",
          age: 22
        }
      },
      {
        name: "Tanner Linsley2",
        age: 26,
        friend: {
          name: "Jason Maurer2",
          age: 23
        }
      },
      {
        name: "Tanner Linsley1",
        age: 25,
        friend: {
          name: "Jason Maurer1",
          age: 22
        }
      },
      {
        name: "Tanner Linsley2",
        age: 26,
        friend: {
          name: "Jason Maurer2",
          age: 23
        }
      },
      
    ];
    const columns = [
      {
        Header: "Name",
        accessor: "name" // String-based value accessors!
      },
      {
        Header: "Age",
        accessor: "age",
        Cell: data => <span className="number">{data.value}</span> // Custom cell components!
      },
      {
        id: "friendName", // Required because our accessor is not a string
        Header: "Friend Name",
        accessor: d => d.friend.name // Custom value accessors!
      },
      {
        Header: data => <span>Friend Age</span>, // Custom header components!
        accessor: "friend.age"
      }
    ];
    return (
      <React.Fragment>
        <h1>Hello {this.props.name} </h1>
        <ReactTable data={data} columns={columns} defaultPageSize={10}
  minRows={3}/>
      </React.Fragment>
    );
  }
}
export default Hello;
