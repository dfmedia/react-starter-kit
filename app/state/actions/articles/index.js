/**
 * External Dependencies
 */
import axios from 'axios';
import map from 'lodash/map'
import extend from 'lodash/extend'

/**
 * Internal Dependencies
 */
import {
    ARTICLES_RECIEVE,
    ARTICLES_REQUEST,
    ARTICLES_REQUEST_SUCCESS,
    ARTICLES_REQUEST_FAILURE,
} from '../../../state/action-types';

// dispatched when articles are received
function recieveArticles( articles ){
    return {
        type: ARTICLES_RECIEVE,
        items: articles
    }
}

// dispatches when articles are requested
function requestArticles( url ){
    return {
        type: ARTICLES_REQUEST
    }
}

// dispatches when articles are requested and the request succeeds
function requestArticlesSuccess(){
    return {
        type: ARTICLES_REQUEST_SUCCESS
    }
}

// dispatched when article requests fail
function requestArticlesFailure( error ){
    return {
        type: ARTICLES_REQUEST_FAILURE,
        error: error
    }
}

/**
 * articlesFetch
 *
 * This function handles requesting articles from the WordPress API
 * and dispatching payloads so the Redux store can properly be updated
 *
 * @returns {Function}
 */
export function fetchArticles(){

    return function( dispatch ){

        // Dispatch requestArticles action
        dispatch( requestArticles() );

        // Make an AJAX call to the endpoint
        return axios.get( 'https://www.denverpost.com/wp-json/wp/v2/posts?per_page=50' )

        // When the response comes in
            .then( function( response ){

                // dispatch the articles that were received
                dispatch( recieveArticles( response.data ) );

                // dispatch success
                dispatch( requestArticlesSuccess() );

                // If there's an error with the repsonse
            }).catch( function( error ){

                // dispatch an error
                dispatch( requestArticlesFailure( error ) );
            });

    }

};