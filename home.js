import nani from "./nani.webp"
function Home(){
    //internal styles
    let ss={
        background:'red',
        color:'blue',
        marginTop:'100px'//don't use margin-top because we have use only in js format
    }
    return(
        <div>
        <h1 style={ss}>this is my home page</h1>
        <img src={nani} height="300px"/>
        </div>
    )
}
export default Home;