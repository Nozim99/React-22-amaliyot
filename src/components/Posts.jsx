import PostList from "./PostList"

export default function Posts(props){
  const {removePost, delteFunk, posts} = props

  return (
    <div>
      {posts.map(post =>(
        <PostList key={post.id} id={post.id} name={post.name} removePost={removePost} delteFunk={delteFunk} />
      ))}
    </div>
  )
}