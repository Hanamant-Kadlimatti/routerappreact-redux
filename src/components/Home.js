import React, {Component} from 'react';
// import axios from 'axios';
import logo from '../logo.svg'
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

class Home extends Component {

    // state= {
    //     posts : []
    // }

    // componentDidMount () {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res  => {
    //       console.log(res)
    //       this.setState({
    //           posts : res.data
    //       })
    //     })
    // }
    render () {
        console.log(this.props)
        // const {posts} = this.state

        const {posts} = this.props

        const postsList = posts.length ? (
            posts.map( post => {
                return (
                    <div className="post card" key={post.id}>
                    <img src={logo} alt="A React Logo" />
                      <div className="card-content">
                         <Link to={'/' + post.id}>
                         <span className="card-title red-text"> {post.title} </span>
                         </Link>
                          <p> {post.body} </p>
                      </div>
                    </div>
                )
            })
        ) : (
            <div className="center"> <p> No Posts Yet </p></div>
        )
        return (
            <div className="container" >
               <h1 className="center"> Home </h1>

               {postsList}
                <p>
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, by injected humour, or randomised words 
                which don't look even slightly believable. If you are going to use a passage of
                Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in 
                the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                 predefined chunks as necessary, making this the first true generator on the 
                Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                The generated Lorem Ipsum is therefore always free from repetition, injected
                humour, or non-characteristic words etc.
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
 }
export default connect(mapStateToProps) (Home)