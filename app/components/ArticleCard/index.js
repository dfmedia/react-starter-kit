import React, { Component, PropTypes } from 'react';
import { Card, Button } from 'antd';

class ArticleCard extends Component {
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
      <Card title={article.title} extra={<Button size="small" onClick={this.handleEditClick}>Edit</Button>} style={{ marginBottom: '30px' }}>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
        <br />
        <Button type="primary" onClick={this.handleButtonClick}>View Article</Button>
      </Card>
    );
  }
}

ArticleCard.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    content: PropTypes.string,
    excerpt: PropTypes.string
  }).isRequired,
};

export default ArticleCard;
