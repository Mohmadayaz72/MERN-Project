import React, { forwardRef, useState } from "react";
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programing",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design"
  ]

  const [selectedBookCategory, setselectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectValue = (event) => {
    console.log(event.target.value);
    setselectedBookCategory(event.target.value);
  }

  // handle book submission

  const handlBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    
    const bookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    }
    console.log(bookObj);

    // send data to database
    fetch("http://localhost:5000/upload-book",
    {
      method:"POST",
      headers:{
        "Content-type": "application/json"
      },
      body:JSON.stringify(bookObj)
    }
    ).then(res => res.json()).then(data => {
      alert("Book uploaded sucessfully!!!!")
      form.reset();
    })

  }

  return (
    <div className="px-4 my-12 ">
      <h2 className="mb-8 text-3xl font-bold">Upload A book</h2>

      <form onSubmit={handlBookSubmit}  className="flex lg:w-[1180px] flex-col flex-wrap gap-4">

        {/* first row */}
        <div className="flex gap-8">

          {/*book title */}
          <div className="lg:w-1/2">

            <div className="mb-2 block">Book Title
              <label htmlFor="bookTitle"
                value="Book Title"
              />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book name" required />
          </div>

          {/* author name */}
          <div className="lg:w-1/2">

            <div className="mb-2 block">Author Name
              <label htmlFor="authorName"
                value="Author Name"
              />
            </div>
            <TextInput
              id="authorName"

              name="authorName"
              type="text"
              placeholder="Author Name" required />
          </div>
        </div>

        {/* Second row */}
        <div className="flex gap-8">

          {/*book image url */}
          <div className="lg:w-1/2">

            <div className="mb-2 block">Book Image URL
              <label htmlFor="imageURL"
                value="Book image URL"
              />
            </div>
            <TextInput
              id="imageURL"
              name="imageURL"
              type="text"
              placeholder="Book image URL" required />
          </div>

          {/* Category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">Book Category
              <label htmlFor="inputState"
                value="Book Category"
              />
            </div>

            <select id="inputState" name="categoryName" className="w-full rounded" value={selectedBookCategory}
              onChange={handleChangeSelectValue}>
              {
                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)

              }

            </select>


          </div>
        </div>

        {/* bookDescription */}
        <div className="lg:w-1/2">
          <div className="mb-2 block">Book Description
            <label htmlFor="bookDescription"
              value="Book Description"
            />
          </div>
          <textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="write your book desctiption...."
            required
            className="w-full"
            rows={6} />
        </div>

        {/* book pdf link */}

        <div className="lg:w-1/2">

          <div className="mb-2 block">Book PDF URL
            <label htmlFor="bookPDFURL"
            value="Book PDF URL"
            />
          </div>
          <TextInput
            id="bookPDFURL"
            name="bookPDFURL"
            type="text"
            placeholder="Book PDF URL" required />
        </div>

          <Button type="submit" className="mt-5">
            Upload Book
          </Button>

      </form>
    </div>
  )
}

export default UploadBook