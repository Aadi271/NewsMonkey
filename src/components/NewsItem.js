import React from 'react'
                                                                                         
const NewsItem =(props)=>{
    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className='my 3'>
        <div className="card">
          <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
        <span className="badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}</span>
          </div>
          <img src={!imageUrl?"https://etstatic.tnn.in/thumb/msid-106807282,width-1280,height-720,resizemode-75/106807282.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text"> {description}... </p>
            <p className='card-text'><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toUTCString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More...</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem