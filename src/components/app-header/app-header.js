import React from 'react';

const AppHeader = ({liked, allPosts}) => {
  return(
    <div className = "app-header d-flex">
      <h1>Vlad Petrov</h1>
      <h2>{allPosts} записей, из них понравились {liked}</h2>
    </div>
  )
}

export default AppHeader;