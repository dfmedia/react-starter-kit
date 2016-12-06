import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../state/actions/articles'
import ArticleList from '../../components/ArticleList';

function mapStateToProps( state ) {
    return {
        articles: state.articles
    }
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators( actions, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( ArticleList );