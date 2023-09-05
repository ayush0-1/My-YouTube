import React from 'react'


const commentsData = [
    {
        name: "Ayush Tiwari",
        text: "It's very helpful brother, keep making more videos on this topic cause we will get an idea how to tackle such question while interview, again greet job please continue this series.",
        replies:[]
    },
    {
        name: "Ayush Tiwari",
        text: "It's very helpful brother, keep making more videos on this topic cause we will get an idea how to tackle such question while interview, again greet job please continue this series.",
        replies:[
            {
                name: "Ayush Tiwari",
                text: "It's very helpful brother, keep making more videos on this topic cause we will get an idea how to tackle such question while interview, again greet job please continue this series.",
                replies:[]
            },
        ]
    },
    {
        name: "Ayush Tiwari",
        text: "It's very helpful brother, keep making more videos on this topic cause we will get an idea how to tackle such question while interview, again greet job please continue this series.",
        replies:[
            {
                name: "Ayush Tiwari",
                text: "It's very helpful brother, keep making more videos on this topic cause we will get an idea how to tackle such question while interview, again greet job please continue this series.",
                replies:[
                    {
                        name: "Ayush Tiwari",
                        text: "It's very helpful brother, keep making more videos on this topic cause we will get an idea how to tackle such question while interview, again greet job please continue this series.",
                        replies:[
                            {
                                name: "Ayush Tiwari",
                                text: "It's very helpful brother, keep making more videos on this topic cause we will get an idea how to tackle such question while interview, again greet job please continue this series.",
                                replies:[]
                            },
                        ]
                    },
                ]
            },
            {
                name: "Ayush Tiwari",
                text: "It's very helpful brother, keep making more videos on this topic cause we will get an idea how to tackle such question while interview, again greet job please continue this series.",
                replies:[
                    {
                        name: "Ayush Tiwari",
                        text: "It's very helpful brother, keep making more videos on this topic cause we will get an idea how to tackle such question while interview, again greet job please continue this series.",
                        replies:[]
                    },
                ]
            },
        ]
    },
    {
        name: "Ayush Tiwari",
        text: "It's very helpful brother, keep making more videos on this topic cause we will get an idea how to tackle such question while interview, again greet job please continue this series.",
        replies:[]
    },
    {
        name: "Ayush Tiwari",
        text: "It's very helpful brother, keep making more videos on this topic cause we will get an idea how to tackle such question while interview, again greet job please continue this series.",
        replies:[{
            name: "Ayush Tiwari",
            text: "It's very helpful brother, keep making more videos on this topic cause we will get an idea how to tackle such question while interview, again greet job please continue this series.",
            replies:[{
                name: "Ayush Tiwari",
                text: "It's very helpful brother, keep making more videos on this topic cause we will get an idea how to tackle such question while interview, again greet job please continue this series.",
                replies:[]
            },]
        },]
    },
    {
        name: "Ayush Tiwari",
        text: "It's very helpful brother, keep making more videos on this topic cause we will get an idea how to tackle such question while interview, again greet job please continue this series.",
        replies:[]
    },

]


const Comment = ({data})=>{

   const {name , text , replies} = data ;

    return (
        <div className='flex bg-slate-100 rounded-lg my-1 p-2 shadow-lg'>
              <img className='w-8 h-8' alt='user' src='https://cdn-icons-png.flaticon.com/512/3177/3177440.png'></img>
             <div className='px-2'>
              <p className='font-bold'>{name}</p>
              <p>{text}</p>
              </div>
        </div>
    )
}

const CommentsList = ({comments})=>{
    return comments.map((comment , index)=> (
        <div>
           <Comment key={index} data={comment}/>
           <div className='ml-5 pl-5 border border-l-black'>
            <CommentsList comments={comment.replies}/>
           </div>
        </div>
    ))
}


const CommentsContiainer = () => {
  return (
    <div className='px-4 w-[1140px]'>
        <h1 className='text-2xl font-bold pb-4'>Comments:</h1>
        <CommentsList comments = {commentsData}/>
    </div>
  )
}

export default CommentsContiainer