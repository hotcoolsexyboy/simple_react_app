import React from 'react';
import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list'
import PostAddForm from '../post-add-form/post-add-form'

import AppStyles from './App.module.sass'
import '../app-header/app-header.sass'
import '../search-panel/search-panel.sass'
import '../post-list/post-list.sass'
import '../post-list-item/post-list-item.sass'
import '../post-add-form/post-add-form.sass'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {label: "Going to learn React", important: true, id: 1},
        {label: "That is so fun!", important: false, id: 2},
        {label: "I need a break...", important: true, id: 3}
      ]
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);

    this.maxId = 4;
  }

  deleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, ...after];

      return {
        data: newArr
      }
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: this.maxId++
    };
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  render() {
    const {data} = this.state;
    return(
      <div className = {AppStyles.app}>
        <AppHeader />
        <div className = "search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts = {data} onDelete={this.deleteItem}/>
        <PostAddForm onAdd={this.addItem}/>
      </div>
    )
  }
}