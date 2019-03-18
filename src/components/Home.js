import React, { Component } from 'react';
import PostInput from './PostInput';
import PostDisplay from './PostsDisplay';
import { connect } from 'react-redux';
import { add_image } from '../action/actions';

class Home extends Component {
    addImage = (src, title) => {
        this.props.add_image(src, title);
    }

    render() {
        console.log('post:', this.props.posts);
        const postsDisplay = this.props.posts.map((item, index)=>{
            return <PostDisplay item={item} key={index}/>
        });


        return (
            <div>
                <PostInput add={this.addImage}/>
                {postsDisplay}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.post_reducer
    }
}

const mapDispatchToProps = {
    add_image
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);