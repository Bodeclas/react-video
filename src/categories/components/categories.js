import React from 'react';
import Category from './category';
import SearchContainer from '../../widgets/containers/search';
import './categories.css';
import Media from '../../playlist/components/media';

function Categories(props) {
  return (
    <div className="Categories">
      <SearchContainer />
      {props.search.map(element => <Media {...element} key={element.id} />)}
      {props.categories.map(item => {
        return <Category key={item.id} {...item} handleOpenModal={props.handleOpenModal} />;
      })}
    </div>
  );
}

export default Categories;
