
function Movie(props) {
  return (
    <div>
      <img src={props.url} alt="Image" style={{height:'300px', width: '300px'}} />
      <h2>{props.name}</h2>
    </div>
  )
}

export default Movie
