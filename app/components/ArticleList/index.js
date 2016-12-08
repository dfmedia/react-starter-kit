import React, { Component } from 'react';
import { Spin } from 'antd';
import Article from '../Article';

import './style.scss';

/**
 * Create the Component
 */
class ArticleList extends Component {
  /**
   * When the component mounts
   */
  componentDidMount() {
    // access the articles and the fetchArticles action from the props
    const { articles, fetchArticles } = this.props;

    // If there are no articles, fetch some
    if (!articles.items.length && !articles.isFetching) {
      fetchArticles();
    }
  }

  /**
   * Render the article
   * @returns {*}
   */
  render() {
    const { articles } = this.props;

    console.log(articles);

    if (articles.items.length) {
      return (
        <div className="article-list">
          {(() => {
            if (articles.isFetching) {
              return (
                <div className="loading">
                  <Spin />
                </div>
              );
            }
            return (
              articles.items.map((article, i) => <Article key={i} article={article} />)
            );
          })()}
        </div>
      );
    }
    return (
      <div className="loading">
        <Spin />
      </div>
    );
  }
}

ArticleList.propTypes = {
  articles: React.PropTypes.object,
  fetchArticles: React.PropTypes.func,
};

/**
 * Export the component
 */
export default ArticleList;
