import React,{useState,useEffect} from 'react'
import Search from './SearchComp';
import {fetchNews} from '../api/fetchNews';
import Card from './Card';
import Spinner from './Spinner';

function Home() {

    const [newscat,setNewsCat] = useState('');
    const [newslang,setNewsLang] = useState('en');
    const [newsCountry,setNewsCountry] = useState('in');
    const [news,setNews] = useState([]);
    const [loading,setLoading] = useState(false);

    const handleFormSubmit = async(e) =>{
        e.preventDefault();
        setLoading(true);
        const {articles} = await fetchNews(newscat,newslang,newsCountry);
        setNews(articles);
        setLoading(false)
    }

    const initLoad = async() =>{
        setLoading(true);
        const {articles} = await fetchNews('latest',newslang,newsCountry);
        setNews(articles)
        setLoading(false);
    }

    useEffect(() => {
       initLoad()// eslint-disable-next-line
    }, [])


    return (
        <div className="container mt-5">
            <Search newscat={newscat} setNewsCat={setNewsCat} newsCountry={newsCountry} setNewsCountry={setNewsCountry} 
            newslang={newslang} setNewsLang={setNewsLang} handleFormSubmit={handleFormSubmit}/>
            <div className="row mt-2">
                {
                    loading ? <Spinner /> : news.length > 0 ? 
                    news.map((data,i) =>(
                        <Card news={data} key={i}/>
                    )) : null
                }
            </div>
        </div>
    )
}

export default Home
