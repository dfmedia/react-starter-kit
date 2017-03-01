import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ArticleList from '../../components/ArticleList';

const articlesQuery = gql`
    query articleList {
        posts( first: 5 ) {
            edges {
                node {
                    id
                    postId
                    title
                    date
                    excerpt
                    content
                    link
                }
            }
        }
    }
`;

export default graphql(articlesQuery, {
    options: { pollInterval: 5000 },
})(ArticleList);