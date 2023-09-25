import Student from "./student"
function Trainees(){
    // let arr=[10,30,587];
    let trainees = [{
        'name':'srinu',
        'rollno':'1234',
        'clg':'Acoe',
    },
    {
        'name':'naveen',
        'rollno':'5432',
        'clg':'Acoe',
    

    }]
    return(
        <div>
            <h1>Trainees List</h1>
            
            <table border={1} cellSpacing={0} align="center" width={"300px"}>
                <tr><th>S.NO</th><th>Name</th><th>Roll.No</th><th>Clg</th></tr>
                {
                    trainees.map((ele,i)=>{
                        return(<Student index={i} name={ele.name} rollno={ele.rollno} clg={ele.clg} />
                        )})
                    
                }
            </table>

            

        </div>
    )
}
export default Trainees