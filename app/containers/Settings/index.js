import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../state/actions/settings'
import SettingsTable from '../../components/SettingsTable';

function mapStateToProps( state ) {
    return {
        settings: state.settings
    }
}

function mapDispatchToProps( dispatch ) {
    return bindActionCreators( actions, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( SettingsTable );