import React from 'react';


function CommentContent(props){
    return <div className="comment-content">
       <ul>
           {
               props.datalist.map(item=><li key={item}>{item}</li>)
           }
       </ul>
    </div>
}

export default CommentContent;