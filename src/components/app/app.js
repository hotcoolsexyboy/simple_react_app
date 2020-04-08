import React from 'react';
import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list'
import PostAddForm from '../post-add-form/post-add-form'

import './app.sass'
import '../app-header/app-header.sass'
import '../search-panel/search-panel.sass'
import '../post-list/post-list.sass'
import '../post-list-item/post-list-item.sass'
import '../post-add-form/post-add-form.sass'


const App = () => {

  const data = [
    {label: "Going to learn React", important: true, id: 'qweewqe'},
    {label: "That is so fun!", important: false, id: 'sadsad'},
    {label: "I need a break...", important: true, id: 'zxfewd'}
  ];

  return(
    <div className = "app">
      <AppHeader />
      <div className = "search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts = {data}/>
      <PostAddForm />
    </div>
  )
}

export default App;