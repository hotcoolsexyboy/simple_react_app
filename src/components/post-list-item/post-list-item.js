import React, {Component} from 'react';

export default class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      important: false,
      like: false
    }
    this.onImortant = this.onImortant.bind(this);
    this.onLike = this.onLike.bind(this);
  }

  onImortant() {
    this.setState(({important}) => ({
      important: !important
    }))
  }
  onLike() {
    this.setState(({like}) => ({
      like: !like
    }))
  }

  render() {
    const {label, onDelete} = this.props;
    const {important, like} = this.state;

    let classNames = "app-list-item d-flex justify-content-between";
    if(important) {
      classNames += ' important';
    }
    if(like) {
      classNames += ' like';
    }

    return(
      <div className = {classNames}>
        <span className = "app-list-item-label">
          {label}
        </span>
        <div className = "d-flex justify-content-center align-items-center">
          <button onClick = {this.onImortant} type = "button" className = "btn-star btn-sm">
            <i className = "fa fa-star"></i>
          </button>
          <button onClick={onDelete} type = "button" className = "btn-trash btn-sm">
            <i className = "fa fa-trash-o"></i>
          </button>
          <i  onClick = {this.onLike} className = "fa fa-heart"></i>
        </div>
      </div>
    )
  }
}