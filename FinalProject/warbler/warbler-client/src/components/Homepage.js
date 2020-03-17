import React from 'react';
import {Link} from 'react-router-dom';

const Homepage = () => (
    <div className="home-hero">
        <h1>What's Happening?</h1>
        <h4>New to warbler?</h4>
        <Link to="/signup" className="btn btn-primary">
            Sign up Here
        </Link>
    </div>
);

export default Homepage;