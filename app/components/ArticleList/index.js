import React, { Component, PropTypes } from 'react';
import { Spin } from 'antd';
import Article from '../ArticleCard';

import './style.scss';

/**
 * Create the Component
 */
class ArticleList extends Component {
  /**
   * When the component mounts
   */
  componentDidMount() {

  }

  /**
   * Render the article
   * @returns {*}
   */
  render() {
    const { data } = this.props;
    if ( data.loading ) {
      return (
        <div className="loading">
          <Spin />
        </div>
      );
    } else {
      console.log(data.posts.edges);
      return (
        <div className="article-list">
            { data.posts.edges.map((edge, i) => <Article key={edge.node.id} article={edge.node} /> )}
        </div>
      );
    }
  }
}

ArticleList.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    posts: PropTypes.object,
  }).isRequired,
};

/**
 * Export the component
 */
export default ArticleList;
