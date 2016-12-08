import React, { Component } from 'react';
import { Card, Button } from 'antd';
import { convertUnicode } from '../../utils/utils';

class Article extends Component {
  constructor() {
    super();

    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleEditClick(e) {
    e.preventDefault();
    const { article } = this.props;

    alert(`The Edit button was clicked for article: "${article.title.rendered}"`);
  }

  handleButtonClick(e) {
    e.preventDefault();
    const { article } = this.props;

    alert(`You clicked "view article"...we could open the url in a new tab perhaps? ${article.link}`);
  }

  render() {
    const { article } = this.props;

    return (
      <Card title={article.title.rendered} extra={<Button size="small" onClick={this.handleEditClick}>Edit</Button>} style={{ marginBottom: '30px' }}>
        <div dangerouslySetInnerHTML={{ __html: convertUnicode(article.excerpt.rendered) }} />
        <br />
        <Button type="primary" onClick={this.handleButtonClick}>View Article</Button>
      </Card>
    );
  }
}

Article.propTypes = {
  article: React.PropTypes.object,
};

export default Article;
