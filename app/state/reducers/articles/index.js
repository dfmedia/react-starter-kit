/**
 * This file handles all changes to the articles subtree of the Redux store
 */

/**
 * Internal Dependencies
 */

// Import contstants from action-types
import {
  ARTICLES_RECIEVE,
  ARTICLES_REQUEST,
  ARTICLES_REQUEST_SUCCESS,
} from '../../action-types';

// Initial state for articles subtree
// an object defining isFetching as false
// and an empty array of items
const initialState = {
  isFetching: false,
  items: [],
};

/**
 * articles reducer
 *
 * This listens for dispatched actions, and reduces the state tree based on the action type
 *
 * If the action.type doesn't match any of the articles action types,
 * we return the state without any modifications
 *
 * @param state
 * @param action
 * @returns {{isFetching: boolean, items: Array}}
 */
export default function articles(state = initialState, action) {
  // Look for specific action types to reduce
  switch (action.type) {

    // If the action.type is ARTICLES_REQUEST
    case ARTICLES_REQUEST:

      // Return a new object, copying the current state and
      // updating the isFetching property to be true.
      return Object.assign({}, state, {
        isFetching: true,
      });

    case ARTICLES_REQUEST_SUCCESS:

      return Object.assign({}, state, {
        isFetching: false,
      });

    case ARTICLES_RECIEVE:

      return Object.assign({}, state, {
        items: [...state.items, ...action.items],
      });

    // If action.type doesn't match above, return the unaltered state
    default:
      return state;
  }
}
