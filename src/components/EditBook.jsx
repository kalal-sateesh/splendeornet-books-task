import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [id, setId] = useState("");
  const [titleErrorMag, setTitleErrorMsg] = useState("");
  const [authorErrorMag, setAuthorErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleUpdate = () => {
    if (!title.trim().length) {
      setTitleErrorMsg("Title is required");
      setTimeout(() => {
        setTitleErrorMsg("");
      }, 2000);
      return;
    }
    if (!author.trim().length) {
      setAuthorErrorMsg("Author Name is required");
      setTimeout(() => {
        setAuthorErrorMsg("");
      }, 2000);
      return;
    }
    const updatedBook = { title: title, author: author };
    const reqObj = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    };
    fetch(`https://659efd125023b02bfe8929a0.mockapi.io/Fakebooks/${id}`, reqObj)
      .then((res) => res.json())
      .then(() => {
        alert("book updated successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setTitle(localStorage.getItem("title"));
    setAuthor(localStorage.getItem("author"));
    setId(localStorage.getItem("id"));
  }, []);

  return (
    <div>
      <h3>EDIT YOUR BOOK</h3>
      <h3>Title</h3>
      <input
        placeholder="Please Enter title here"
        style={{
          width: "250px",
          height: "40px",
          padding: "5px",
          boxSizing: "border-box",
        }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br></br>
      <span style={{ color: "red" }}>{titleErrorMag}</span>
      <h3>Author Name</h3>
      <input
        placeholder="Please Enter Author name here"
        style={{
          width: "250px",
          height: "40px",
          padding: "5px",
          boxSizing: "border-box",
        }}
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <br></br>
      <span style={{ color: "red" }}>{authorErrorMag}</span>
      <br></br>
      <br></br>
      <button
        style={{
          width: "100px",
          height: "40px",
          backgroundColor: "green",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={handleUpdate}
      >
        Save
      </button>
    </div>
  );
};

export default EditBook;
