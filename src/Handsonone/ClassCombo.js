import { Component } from "react";

class ClassCombo extends Component{
render()
{
    return(
        <>
       <div class="box1">
        <h1>This is created using Class Component</h1>
        <p class="p2"> This is done using external CSS</p>
        <p style={{ color: 'blue' , fontSize:'20px' }}>This is done using inline CSS</p>
        </div>
        </>
    )
}
}
export default ClassCombo;