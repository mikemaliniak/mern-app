import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Dashboard = props => {
    return (
        <div>
            Dsahboard
        </div>
    )
}

Dashboard.propTypes = {

}

export default connect()(Dashboard)


