import React from 'react';


const test = () =>{
    return false
}

const Posts = () =>{
    return (
        <div>
       
           {test() ? <div style={{"color":"green"}}>This is true</div> : <div style={{"color":"red"}}>This is False</div>}
        </div>
    )
}

export default Posts;