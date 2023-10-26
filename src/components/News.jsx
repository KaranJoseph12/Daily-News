import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import NewItems from './NewItems'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [lording, setLording] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0)
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3c16c7db096e45d0bd345a6ef08846fb&page=${page}`

  const updateNews = async() => {
    setLording(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLording(false)
  }
  
  useEffect(() => {
    updateNews();
  }, [])

  // const handlePrev = () => {
  //   updateNews();
  //   setPage(page-1)
  // }

  // const handleNext = () => {
  //   updateNews();
  //   setPage(page+1)
  // }
  const fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3c16c7db096e45d0bd345a6ef08846fb&page=${page+1}`
    setPage(page+1)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }
  

  return (
    <main>
      <div>
            <h1 className='text-center font-bold text-4xl text-slate-500 pb-20'>Top {props.category.replace(/\b\w/g, x => x.toUpperCase())} HeadLines</h1>
            {/* <div className='flex justify-between px-3 pb-12'>
                <button type="button" onClick={handlePrev} className="text-white bg-gray-800 hover:bg-gray-900   font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 o dark:hover:bg-gray-700 ">Prev</button>

                <button type="button" onClick={handleNext}  className="text-white bg-gray-800 hover:bg-gray-900   font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  dark:hover:bg-gray-700 ">Next</button>

            </div> */}
           
             {lording}
             <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length <= totalResults}
                loader={<Spinner/>}
              >

                <div className="grid grid-cols-3 pl-7" >
                    {articles.map(e => {
                      return (
                          <div className='pb-16'key={e.url}>
                              <NewItems title={(e.title?e.title.slice(0,60):"Unknown")} description = {(e.description?e.description.slice(0,120):"No description")} 
                              imgUrl={e.urlToImage?e.urlToImage:"https://cdn.wisden.com/wp-content/uploads/2023/10/Copy-of-Lead-image-2023-10-24T115224.063.png"}  newsUrl={e.url}/>
                          </div>
                        
                      )
                      })}
                </div>
              </InfiniteScroll>
      </div>
    
      
    </main>
  )
}

News.propTypes = {
  country:PropTypes.string,
  category:PropTypes.string,
}

export default News