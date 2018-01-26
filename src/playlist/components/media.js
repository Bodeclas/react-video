import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends PureComponent {
  render() {
    console.log(this.props);
    const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 210,
        border: '1px solid red',
      },
    };
    return (
      <div className="Media" onClick={this.props.handleClick}>
        <div className="Media-cover">
          <img src={'http://via.placeholder.com/350x150'} alt="" width={260} height={160} className="Media-image" />
          <h3 className="Media-title"> {this.props.title} </h3> <p className="Media-author"> {this.props.author} </p>{' '}
        </div>{' '}
      </div>
    );
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video', 'audio']),
};

export default Media;
