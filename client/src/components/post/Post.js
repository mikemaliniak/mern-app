import React, {Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PostItem from '../posts/PostItem'
import Spinner from '../layout/Spinner'
import { getPost } from '../../actions/post'


const Post = ({ getPost, post: { post, loading }, match }) => {
    useEffect(() => {
        getPost(match.params.id);
    },  [getPost]);
    return loading || post === null ? 
        <Spinner /> : 
        <section className="container">
            <Link to='/posts' className='btn'>
                Back To Posts
            </Link>
            <PostItem post={post} showActions={false} />
        </section>
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getPost })(Post)