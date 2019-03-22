import React,{Component} from 'react';



export default ({handleClick,children})=> {
    console.log(children)
    return (
        <button onClick={handleClick}>{children}</button>
    )
}