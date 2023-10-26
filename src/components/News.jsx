import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import NewItems from './NewItems'
import Spinner from './Spinner'


const News = (props) => {
  const url = ` https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3c16c7db096e45d0bd345a6ef08846fb`
  const [articles, setArticles] = useState([]);
  const [lording, setLording] = useState(false);

  const updateNews = async() => {
    setLording(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(parsedData.articles)
    setLording(false)
  }
  
  useEffect(() => {
    updateNews();
  }, [])
  

  return (
    <main>
      <div>
            <h1 className='text-center font-bold text-4xl text-slate-500 pb-20'>Top {props.category.replace(/\b\w/g, x => x.toUpperCase())} HeadLines</h1>
             {lording && <Spinner/>}
            <div className="grid grid-cols-3 "  >
                {articles.map(e => {
                  return (
                      <div className='pb-16'key={e.url}>
                          <NewItems title={(e.title?e.title.slice(0,60):"Unknown")} description = {(e.description?e.description.slice(0,120):"No description")} 
                          imgUrl={e.urlToImage?e.urlToImage:"https://cdn.wisden.com/wp-content/uploads/2023/10/Copy-of-Lead-image-2023-10-24T115224.063.png"}  newsUrl={e.url}/>
                      </div>
                    
                  )
                  })}
            </div>
        </div>
    
      
    </main>
  )
}

News.propTypes = {
  country:PropTypes.string,
  category:PropTypes.string,
}

export default News