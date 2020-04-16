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
        {label: "Going to learn React", important: true, id: 'qweewqe'},
        {label: "That is so fun!", important: false, id: 'sadsad'},
        {label: "I need a break...", important: true, id: 'zxfewd'}
      ]
    };
    this.deleteItem = this.deleteItem.bind(this);
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
        <PostAddForm />
      </div>
    )
  }
}