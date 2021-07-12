/********************************************\
 * App.jsx
 * 
 * The base (or top-level) component of our React
 * front-end
 * 
\********************************************/
import React, { Component } from 'react';
import { connect } from 'react-redux';          // required for mapStateToProps / mapDispatchToProps
import * as actions from '../actions/actions';  // import actions from action creators file

// import any child components/containers here:
import HomeContainer from '../containers/HomeContainer';
import CategoryMenu from './CategoryMenu';

const DEBUG = true;

/**
 * map application state values to local component properties.
 * REM to add mapStateToProps to export at bottom of page!!
 * @param {object} state current application state served by Redux store
 * @returns {object} 
 */
const mapStateToProps = state => {

    const { user } = state;

    // if (DEBUG) console.log('TestContainer: mapStateToProps: testBool: ', test.testPropBool);
    // if (DEBUG) console.log('TestContainer: mapStateToProps: testString: ', test.testPropString);

    return {
        currentUser: user.currentUser,
    };
};

/**
 * map action dispatch to local properties as callback functions
 * REM to add mapDispatchToProps to export at bottom of page!!
 */
const mapDispatchToProps = (dispatch) => {
    // create functions that will dispatch action creators
    return {
        getBookmarks: (user) => {
            dispatch(actions.getBookmarks_ActionCreator(user));
        },
    }
};


class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

        // call GET_BOOKMARKS for the default user
        if (DEBUG) console.log(`App: mapDispatchToProps: getBookmarks: ${this.props.currentUser}`);
        this.props.getBookmarks(this.props.currentUser);

    }

    render() {
        return (
            <div>
                {/* <h1>Welcome to React!</h1> */}
                {/* <HomeContainer /> */}
                {/* <CategoryMenu categories={['Programming', 'Sport', 'Business', 'Education']} /> */}
            </div>
        )
    }
};

/**
 * export template:
 * 
 * export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);
 * 
 * NOTE: replace mapping functions with null if you don't want to utilize them
 */
export default connect(mapStateToProps, mapDispatchToProps)(App);