import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'

const BlogPostPreview = props => {
  return (
    <React.Fragment>
      <h1>{props.blogpost.title}</h1>
    </React.Fragment>
  )
}

export default createFragmentContainer(BlogPostPreview, graphql`
  fragment BlogPostPreview_blogpost on BlogPost {
    id
    title
  }
`)
