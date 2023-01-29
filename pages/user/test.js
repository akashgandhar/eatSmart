import React from 'react'

export default function Test({data}) {
  return (
    <div></div>
  )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://http://192.168.1.235:3000/api/hello')
    const posts = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        data,
      },
    }
  }
