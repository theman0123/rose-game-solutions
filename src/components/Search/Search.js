import React from "react";
// import "./About.css";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className=''>
        <input placeholder='search a game' />
      </div>
    );
  }
}
