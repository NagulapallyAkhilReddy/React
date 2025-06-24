function App(){
  // const x=document.getElementById('root')
  // let y=0;
  // const div=document.createElement('div')
  // const count=document.createElement('h1')
  // count.textContent= y
  // const plus=document.createElement('button')
  // plus.addEventListener('click',()=>y=y+1)
  // plus.textContent='plus'
  // const minus=document.createElement('button')
  // minus.addEventListener('click',()=>y=y-1)
  // minus.textContent='minus'
  // div.append(count,plus,minus)
  // x.appendChild(div)
  const name="Akhil";
  const styles={
    container: {
      // display: "flex",
      // justify
      textAlign:"center"
    },
    h1: {
     
      textAlign: "center",
      backgroundColor:"black",
      color: "orange",
      padding: "10px",
      borderRadius: "8px"
    }

  };
  

  return(
    <div style={styles.container}>
       <h1 style={styles.h1}>Hi, I am {name} </h1>
      </div>
  );
}
export default App;
