import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [titleErrorMsg, setTitleErrorMsg] = useState("");
  const [authorErrorMsg, setAuthorErrorMsg] = useState("");
  const [urlErorMsg, setUrlErrorMsg] = useState("");

  const urlRegExpresion = /^(ftp|http|https):\/\/[^ "]+$/;

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleAdd = () => {
    if (!title.trim()) {
      setTitleErrorMsg("Please Enter Title");
      setTimeout(() => {
        setTitleErrorMsg("");
      }, 2000);
      return;
    }
    if (!author.trim()) {
      setAuthorErrorMsg("Please Enter Author Name");
      setTimeout(() => {
        setAuthorErrorMsg("");
      }, 2000);
      return;
    }
    console.log("add");
    if (!urlRegExpresion.test(url)) {
      setUrlErrorMsg("Please Enter a valid url");
      setTimeout(() => {
        setUrlErrorMsg("");
      }, 2000);
      return;
    }
    const book = { title: title, author: author, image: url };
    const reqObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    };
    fetch("https://659efd125023b02bfe8929a0.mockapi.io/Fakebooks/", reqObj)
      .then((res) => res.json())
      .then(() => {
        setTitle("");
        setAuthor("");
        setUrl("");
        setTimeout(() => {
          alert("book added successfully");
          navigate("/");
        }, 2000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>ADD YOUR BOOK</h3>
      <h3>Title</h3>
      <input
        placeholder="Please Enter title here"
        style={{
          width: "250px",
          height: "40px",
          padding: "5px",
          boxSizing: "border-box",
        }}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <br></br>
      <span style={{ color: "red" }}>{titleErrorMsg}</span>
      <h3>Author Name</h3>
      <input
        placeholder="Please Enter Author name here"
        style={{
          width: "250px",
          height: "40px",
          padding: "5px",
          boxSizing: "border-box",
        }}
        required
        onChange={(e) => setAuthor(e.target.value)}
      />
      <br></br>
      <span style={{ color: "red" }}>{authorErrorMsg}</span>
      <h3>image</h3>
      <input
        placeholder="Please Enter image here"
        style={{
          width: "250px",
          height: "40px",
          padding: "5px",
          boxSizing: "border-box",
        }}
        onChange={(e) => setUrl(e.target.value)}
      />
      <br></br>
      <span style={{ color: "red" }}>{urlErorMsg}</span>
      <br></br>
      <br></br>
      <button
        style={{
          width: "100px",
          height: "40px",
          backgroundColor: "gray",
          marginRight: "20px",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={handleBack}
      >
        Back
      </button>
      <button
        style={{
          width: "100px",
          height: "40px",
          backgroundColor: "green",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default AddBook;
