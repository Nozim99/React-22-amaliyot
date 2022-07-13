export default function PostList(props){
  const {name, id, removePost} = props

  return (
    <div>
      <h4>{name} </h4>
      <button onClick={()=> removePost(id) }>Delete</button>
    </div>
  )
}