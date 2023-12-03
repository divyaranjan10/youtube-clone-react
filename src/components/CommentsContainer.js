import React from 'react';

const commentsData = [
    {
        name: "DP",
        text: "Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies!!",
        replies: []
    },
    {
        name: "DP",
        text: "Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies!!",
        replies: [
            {
                name: "DP",
                text: "Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies!!",
                replies: [
                    {
                        name: "DP",
                        text: "Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies!!",
                        replies: [
                            {
                                name: "DP",
                                text: "Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies!!",
                                replies: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "DP",
        text: "Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies!!",
        replies: [
            {
                name: "DP",
                text: "Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies!!",
                replies: []
            }
        ]
    },
    {
        name: "DP",
        text: "Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies!!",
        replies: [
            {
                name: "DP",
                text: "Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies!!",
                replies: []
            }
        ]
    },
    {
        name: "DP",
        text: "Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies!!",
        replies: [
            {
                name: "DP",
                text: "Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies, Dummy Replies!!",
                replies: []
            }
        ]
    }
]

const Comments = ({data}) => {
    const {name, text, replies} = data;
    return(
        <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg m-2 max-sm:px-0'>
            <img
                className='w-12 h-12'
                alt='user-comment-pic'
                src='https://cdn-icons-png.flaticon.com/512/552/552721.png'
            />
            <div className='px-2 max-sm:px-1'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentsList = ({comments}) => {
    //Disclaimer: Don't use index as keys
    return comments.map((comment, index) => (
        <div key={index}>
            <Comments data={comment}/>
            <div className='pl-5 border border-l-black ml-5'>
                <CommentsList comments={comment.replies}/>
            </div>
        </div>
    ))
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2 w-[100%] max-sm:mx-0'>
        <h1 className='text-2xl font-bold'>Comments:</h1>
        {/* <Comments data={commentsData[0]}/> */}
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;