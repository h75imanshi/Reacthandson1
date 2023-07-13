import React from 'react'; 
import '../App.css'
import './Style.css'

function FuncCombo()
{
    return(
        <>
        <div class="box">
        <h1>This is created using Functional Component</h1>
        <p class="p1"> This is done using external CSS</p>
        <p style={{ color: 'blue' , fontSize:'20px' }}>This is done using inline CSS</p>
        </div>
        </>
    )
}
export default FuncCombo;