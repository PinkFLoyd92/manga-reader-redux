// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Manga extends Component {
    constructor(props){
	super(props);
	this.handleClick = this.handleClick.bind(this);
	this.state = {key:0};
    }

  handleClick() {
      this.props.addManga("Dragon Ball", this.state.key);
      this.setState({key : this.state.key+1});
  }

    
    componentWillMount(){
	this.props.addManga("One Piece", "testing...");
    }
  render() {
    const { mangas } = this.props;
      let mangaLi = null;
      if(mangas != undefined){
mangaLi = mangas.map((manga) =>
		     <li key={manga.description}>{manga.name}</li>);
      }
      else{
	  mangaLi = <p>No hay mangas..</p>
      }
    return (
	    <div onClick = {this.handleClick}>
	    {mangaLi}
      </div>
    );
  }
}

export default Manga;
