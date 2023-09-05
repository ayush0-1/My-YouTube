import React, { useEffect, useState } from 'react'
import SearchCard from './SearchCard'
import { SEARCH_RESULTS_API } from '../utils/constants';
import { useSearchParams  , Link} from 'react-router-dom';

const SearchPage = () => {
  
const [searchedVideos , setSearchedVideos]=useState([]);
const [searchStr , setSearchStr] = useState('');

const [searchParams]=useSearchParams();

// const searchStr = searchParams.get("s");


useEffect(()=>{
  setSearchStr(searchParams.get("s"));
} , [searchParams])

useEffect(()=>{
  getSearchResults();
} , [searchStr])

const getSearchResults = async()=>{
    const data = await fetch(`${SEARCH_RESULTS_API}${searchStr}`);
    const json = await data.json();
    // console.log(json.items);
    setSearchedVideos(json.items);

} 

// if(!searchedVideos)
// return <h1>loading </h1>


  return (
    !searchedVideos? <h1>Loading</h1> :
    <div className=' w-full m-2'>
        {
          searchedVideos.map((searchedVideo , index)=>{
            return (
              <Link  key = {index}  to={"watch?v="+searchedVideo?.id?.videoId}><SearchCard data = {searchedVideo}/></Link>
              )
          })
        }
    </div>
  )
}

export default SearchPage