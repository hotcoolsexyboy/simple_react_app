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
        {label: "Going to learn React", important: true, like: false, id: 1},
        {label: "That is so fun!", important: false, like: false, id: 2},
        {label: "I need a break...", important: true, like: true, id: 3}
      ],
      term: ''
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleImportant = this.onToggleImportant.bind(this);
    this.onToggleLiked = this.onToggleLiked.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);

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

  onToggleImportant(id) {
    this.setState(({data}) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      const newItem = {...old, important: !old.important};

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, newItem, ...after];

      return {
        data: newArr
      }
    })
  }

  onToggleLiked(id) {
    this.setState(({data}) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      const newItem = {...old, like: !old.like};

      const before = data.slice(0, index);
      const after = data.slice(index + 1);

      const newArr = [...before, newItem, ...after];

      return {
        data: newArr
      }
    })
  }

  searchPost(items, term) {
    if(term.length === 0) {
      return items
    }
    const filteredArr = items.filter(item => {
      const lowerLabel = item.label.toLowerCase();
      const lowerTerm = term.toLowerCase();
      return (lowerLabel.indexOf(lowerTerm) > -1)
    });
    return filteredArr;
  }

  onUpdateSearch(term) {
    this.setState({term});
  }

  render() {
    const {data, term} = this.state;

    const liked = data.filter(item => item.like).length;
    const allPosts = data.length;

    const visiblePosts = this.searchPost(data, term);

    return(
      <div className = {AppStyles.app}>
        <AppHeader 
          liked={liked}
          allPosts={allPosts}
        />
        <div className = "search-panel d-flex">
          <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
          <PostStatusFilter />
        </div>
        <PostList posts = {visiblePosts}
                  onDelete={this.deleteItem}
                  onToggleImportant={this.onToggleImportant}
                  onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm onAdd={this.addItem}/>
      </div>
    )
  }
}