
  export default function Card(props){
    return(
        <div className="card">
           <img src={props.img}/>
           <h2>{props.name}</h2>
           <h4>{props.price}</h4>
        </div>
    )
  }