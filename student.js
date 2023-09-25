function Student(props){
    //let name='Srinu'
    return(
       <>
       <tr><td>{props.index+1}</td><td>{props.name}</td><td>{props.rollno}</td><td>{props.clg}</td></tr>
       </>
    )
}
export default Student