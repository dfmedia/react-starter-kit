const initalState = {
    exampleSetting: "exampleValue"
};

function settings( state = initalState, action ) {

    switch ( action.type ) {

        // @todo put reducers for each action type related to settings here

        default:
            return state;
    }

}

export default settings;