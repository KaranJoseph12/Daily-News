import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import NewItems from './NewItems'

const News = () => {
  const url = " https://newsapi.org/v2/top-headlines?country=in&apiKey=3c16c7db096e45d0bd345a6ef08846fb"
  const [articles, setArticles] = useState([]);

  const updateNews = async() => {
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData)
    setArticles(parsedData.articles)
  }
  
  useEffect(() => {
    updateNews();
  }, [])
  

  return (
    <main>
      <div>
            <h1 className='text-center font-bold text-4xl text-slate-500'>Top HeadLines</h1>
            {articles.map(e => {
              return (
                <div className="grid grid-cols-3 pt-20" key={e.url} >
                    <NewItems title={(e.title?e.title.slice(0,60):"Unknown")} description = {(e.description?e.description:"No description")} 
                    imgUrl={e.urlToImage?e.urlToImage:"https://cdn.wisden.com/wp-content/uploads/2023/10/Copy-of-Lead-image-2023-10-24T115224.063.png"}  newsUrl={e.url}/>
                </div>
              )
            })}

        </div>
    
      
    </main>
  )
}

News.propTypes = {}

export default News