import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Book from './components/Book'

function App() {
  const books = [
  {
    title: "To Kill a Mockingbird",
    url: "https://m.media-amazon.com/images/I/81OdwZ9x4+L.jpg",
    author: "Harper Lee"
  },
  {
    title: "1984",
    url: "https://m.media-amazon.com/images/I/71kxa1-0AfL.jpg",
    author: "George Orwell"
  },
  {
    title: "The Great Gatsby",
    url: "https://m.media-amazon.com/images/I/81af+MCATTL.jpg",
    author: "F. Scott Fitzgerald"
  },
  {
    title: "Pride and Prejudice",
    url: "https://m.media-amazon.com/images/I/91HHxxtA1wL.jpg",
    author: "Jane Austen"
  },
  {
    title: "The Catcher in the Rye",
    url: "https://m.media-amazon.com/images/I/71Q1Iu4suSL.jpg",
    author: "J.D. Salinger"
  },
  {
    title: "Moby Dick",
    url: "https://m.media-amazon.com/images/I/81PRVYVnZDL.jpg",
    author: "Herman Melville"
  },
  {
    title: "Brave New World",
    url: "https://m.media-amazon.com/images/I/81ZxkU1YoUL.jpg",
    author: "Aldous Huxley"
  },
  {
    title: "The Hobbit",
    url: "https://m.media-amazon.com/images/I/91b0C2YNSrL.jpg",
    author: "J.R.R. Tolkien"
  },
  {
    title: "Fahrenheit 451",
    url: "https://m.media-amazon.com/images/I/71OFqSRFDgL.jpg",
    author: "Ray Bradbury"
  },
  {
    title: "Jane Eyre",
    url: "https://m.media-amazon.com/images/I/81drfTT9ZfL.jpg",
    author: "Charlotte Brontë"
  },
  {
    title: "Crime and Punishment",
    url: "https://m.media-amazon.com/images/I/81CqxhQ+QDL.jpg",
    author: "Fyodor Dostoevsky"
  },
  {
    title: "The Lord of the Rings",
    url: "https://m.media-amazon.com/images/I/91SZSW8qSsL.jpg",
    author: "J.R.R. Tolkien"
  }
]
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1 w-full'>
        <Header />
        <Book books={books} />
      </main>
      <Footer/>
    </div>
  )
}

export default App
