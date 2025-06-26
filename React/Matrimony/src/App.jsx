import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Mainpage from './Components/Mainpage'
import './App.css'
function App() {
  const matches=
  [
   { name: "Akhil",   age: "26", desc: "Most eligible bachelor", img: "https://m.media-amazon.com/images/M/MV5BZjEzN2M4MjktZmE2OC00NTlhLTkzOTMtODY0MDczNzIwOGRmXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg" },
  { name: "Sanjana", age: "24", desc: "Loves books and dogs", img: "https://thumbs.dreamstime.com/b/emotive-headshot-portrait-happy-young-woman-charming-teen-girl-joyful-facial-expression-looking-camera-beautiful-94898285.jpg" },
  { name: "Ravi",    age: "28", desc: "Gym freak with a soft side", img: "https://as1.ftcdn.net/jpg/03/60/68/42/1000_F_360684230_a5TnyQHg1feoRA6ibuUqmdAjIO39UIUv.jpg" },
  { name: "Meera",   age: "25", desc: "Engineer by day, artist by night", img: "https://images.pexels.com/photos/15229983/pexels-photo-15229983/free-photo-of-headshot-of-an-attractive-woman.jpeg" },
  { name: "Arjun",   age: "27", desc: "Adventurous and loyal", img: "https://c8.alamy.com/comp/K4G6K7/closeup-headshot-portrait-of-fine-young-man-undergrad-student-smiling-K4G6K7.jpg" },
  { name: "Priya",   age: "23", desc: "Coffee addict and a traveler", img: "https://images.squarespace-cdn.com/content/v1/574512d92eeb81676262d877/1dc1f125-b7d6-4302-8d3b-b25c3dc2a546/Headshot-Photographer-London-UK-Ian-Kobylanki-292.jpg" },
  { name: "Dev",     age: "29", desc: "Techie who plays the guitar", img: "https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg" },
  { name: "Nisha",   age: "26", desc: "Dog mom and chai lover", img: "https://images.squarespace-cdn.com/content/v1/5e7e36edb12d603146380d33/1634316747075-IXALJA1M24HY6MSADVCL/Orange-County-Headshots-2.jpg" },
  { name: "Vikram",  age: "30", desc: "Witty, wise, and a foodie", img: "https://portraitpal.ai/wp-content/uploads/2024/12/olawale-munna-oXzyPakqsA0-unsplash-scaled.jpg" },
  { name: "Kavya",   age: "22", desc: "Spontaneous and full of life", img: "https://images.squarespace-cdn.com/content/v1/572e050c4d088ea3a8f0ac9d/1572711304319-K2K7Y2PKAW0QVJLQGVW7/Atlanta-Professional-Headshots-1.jpg" },
  { name: "Rohit",   age: "28", desc: "Silent type with big dreams", img: "https://images.squarespace-cdn.com/content/v1/56a2cd3c05f8e2da3116788c/1639017298265-ZK69PTSICGTIMV5Q9ELX/DSC_7624.jpg" },
  { name: "Ananya",  age: "25", desc: "Fitness lover and beach soul", img: "https://img.freepik.com/free-photo/front-view-business-woman-suit_23-2148603018.jpg?semt=ais_hybrid&w=740" }
  ]
  function like(s){
    console.log(`i like this person ${s}`)
  }
  function dislike(s1){
    console.log(`i do not like this person ${s1}`)
  }
  return (
    <div className='main'>
      <Header />
      <div className='mainpage'>
       {
       matches.map((v,i)=>
       (
        <Mainpage name={v.name} age={v.age} desc={v.desc} img={v.img} fun={like} fun1={dislike}/>
       ))
       }
      </div>
      
      <Footer />
    </div>
  )
}

export default App
