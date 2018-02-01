import React from 'react';
import Category from './category';
import SearchContainer from '../../widgets/containers/search';
import './categories.css';
import Media from '../../playlist/components/media';

function Categories(props) {
  return (
    <div className="Categories">
      <SearchContainer />
      {props.search.map(element => <Media {...element.toJS()} key={element.get('id')} />)}
      {props.categories.map(item => {
        return <Category 
          key={item.get('id')} 
          {...item.toJS()} 
          handleOpenModal={props.handleOpenModal} 
        />;
      })}
    </div>
  );
}

export default Categories;
