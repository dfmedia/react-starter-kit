import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { convertUnicode } from '../../utils/utils';

class Article extends Component {

    handleEditClick( e ) {

        e.preventDefault();

        let { article } = this.props;

        alert( 'The Edit button was clicked for article: "' + article.title.rendered + '"' );

    }

    handleButtonClick( e ) {

        e.preventDefault();

        let { article } = this.props;

        alert( 'You clicked "view article"...we could open the url in a new tab perhaps? ' + article.link );

    }


    render() {

        let { article } = this.props;

        return (
            <Card title={article.title.rendered} extra={<Button size="small" onClick={ this.handleEditClick.bind( this ) }>Edit</Button>} style={{marginBottom: '30px'}}>
                <div dangerouslySetInnerHTML={ {__html: convertUnicode(article.excerpt.rendered)} }/>
                <br/>
                <Button type="primary" onClick={ this.handleButtonClick.bind( this ) }>View Article</Button>
            </Card>
        )
    }

}

export default Article;