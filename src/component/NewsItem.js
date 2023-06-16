import React from 'react'

const NewsItem = (props) =>{
  
 
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

    return (
      <div>
        <div  className="card">
          <div style={
           { display:'flex',
             justifyContent:'flex-end',
             position:'absolute',
             right:'0'
          }
          }>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
  <img src={!imageUrl?"https://www.imagenewsfm.com.np/wp-content/uploads/2017/08/news-3-690x302.jpg":imageUrl}  className="card-img-top" alt="Image loading failled"/>
  <div  className="card-body">
  <h5 className="card-title">{title} </h5>
    <h5  className="card-title">{title}</h5>
    <p  className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"Unkown":author} on {new Date(date).toGMTString()}</small></p>

   
    <a href={newsUrl} rel={'noopener noreferrer'} target={'_blank'}className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )

}
export default NewsItem

