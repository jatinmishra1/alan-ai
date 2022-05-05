
import React,{useState,useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';



const App=()=>{

const [newsArticles,setNewsArticles]=useState([])
    useEffect(()=>{
            alanBtn({
                key:'d749653da8c26f00836fb61349cfbb042e956eca572e1d8b807a3e2338fdd0dc/stage',
                onCommand:({command,articles})=>{
                    if(command==='newHeadline'){
                        console.log(articles);
                    setNewsArticles(articles);
                    }

                }
            })
    },[])

    return(
        <>
        <h1>alan ai application app 00</h1>
        </>
    )
}
export default App;

