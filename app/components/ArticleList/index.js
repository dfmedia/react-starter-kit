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
        let { articles, fetchArticles } = this.props;

        // If there are no articles, fetch some
        if ( ! articles.items.length && ! articles.isFetching ) {
            fetchArticles()
        }

    }

    /**
     * Render the article
     * @returns {*}
     */
    render() {

        let { articles } = this.props;

        console.log( articles );

        if ( articles.items.length ) {

            return (
                <div className="article-list">
                    {(() => {

                        if ( articles.isFetching ) {

                            return (
                                <div className="loading">
                                    <Spin />
                                </div>
                            )

                        } else {

                            return(
                                articles.items.map( (article, i) => <Article key={i} article={article}/>)
                            )

                        }

                    })() }
                </div>
            )

        } else {

            return (
                <div className="loading">
                    <Spin />
                </div>
            )

        }
    }

}

/**
 * Export the component
 */
export default ArticleList;