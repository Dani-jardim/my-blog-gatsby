import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import Avatar from '../Avatar'

const Profile = () => {
  const {   
    site:{
    siteMetadata: { title, position, description},
  },
} = useStaticQuery (graphql`
query MySiteMetadata {
    site{
      siteMetadata{
        title
        position
        description
      }
    }
  }
  `)
  return (
    <div className="Profile-wrapper">
      <h1>{title}</h1>
      <Avatar />
      <h2>{position}r</h2>
      <p>{description}</p>
    </div>
  )

}



export default Profile
