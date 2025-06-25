import Movie from './movie'
function Movieline(props) {
  return (
    <div className='Movieline' style={{display: 'flex', gap: '20px'}}>
      {
        props.movies.map((v,i)=>(
        <Movie  name={v.name} url={v.url}/>
        
        ))
      }
    </div>
  )
}

export default Movieline
