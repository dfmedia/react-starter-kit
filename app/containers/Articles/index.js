import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import ArticleList from '../../components/ArticleList';

const articlesQuery = gql`
    query postList {
        posts {
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

export default graphql(articlesQuery)(ArticleList);