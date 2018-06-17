import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import BlogPostPreview from './BlogPostPreview'

const BlogPosts = props => {
  const node = props.viewer.BlogPost
  return (
    <div>
      <BlogPostPreview blogpost={node} />
    </div>
  )
}

export default createFragmentContainer(BlogPosts, {
  viewer: graphql`
        fragment BlogPosts_viewer on Viewer {
          BlogPost(id: "cjij1bt3v00iq0195godiia1l") {
            ...BlogPostPreview_blogpost
          }
        }
    `
})
