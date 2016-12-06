import React, { Component } from 'react';
import { Card } from 'antd';
import { convertUnicode } from '../../utils/utils';



class Article extends Component {

    handleEditClick() {

        let { article } = this.props;

        alert( 'The Edit button was clicked for article: "' + article.title.rendered + '"' );

    }


    render() {

        let { article } = this.props;

        return (
            <Card title={article.title.rendered} extra={<a href="#0" onClick={ this.handleEditClick.bind(this) }>Edit</a>} style={{marginBottom: '30px'}}>
                <div dangerouslySetInnerHTML={ {__html: convertUnicode(article.excerpt.rendered)} }/>
            </Card>
        )
    }

}

export default Article;