import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = () => {
    fetch("https://659efd125023b02bfe8929a0.mockapi.io/Fakebooks/")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((err) => console.log(err));
  };

  const filteredBooks = books.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    const reObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(`https://659efd125023b02bfe8929a0.mockapi.io/Fakebooks/${id}`, reObj)
      .then((res) => res.json())
      .then(() => {
        fetchData();
      })
      .catch((err) => console.log(err));
  };

  const handleEdit = (id, title, author) => {
    localStorage.setItem("id", id);
    localStorage.setItem("title", title);
    localStorage.setItem("author", author);
    navigate("/edit");
  };

  const handleDetails = (id, title, author, image) => {
    localStorage.setItem("image", id);
    localStorage.setItem("title", title);
    localStorage.setItem("author", author);
    localStorage.setItem("image", image);
    navigate(`/details/:${id}`);
  };

  const list = filteredBooks.map((item, index) => {
    return (
      <div
        key={index}
        style={{
          width: "300px",
          height: "450px",
          borderRadius: "10px",
          overflow: "hidden",
          boxShadow: "1px 1px solid black",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "70%",
            padding: "5px",
            boxSizing: "border-box",
          }}
        >
          <img
            src={item.image}
            width="100%"
            height="100%"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div
          style={{
            width: "100%",
            height: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{item.title}</h1>
        </div>
        <div
          style={{
            width: "100%",
            height: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{item.author}</h1>
        </div>
        <div
          style={{
            width: "100%",
            height: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <button
            style={{ width: "25%", height: "80%", backgroundColor: "gray" }}
            onClick={() =>
              handleDetails(item.id, item.title, item.author, item.image)
            }
          >
            Details
          </button>
          <button
            style={{ width: "25%", height: "80%", backgroundColor: "Yellow" }}
            onClick={() => handleEdit(item.id, item.title, item.author)}
          >
            Edit
          </button>
          <button
            style={{ width: "25%", height: "80%", backgroundColor: "red" }}
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  });

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleAddBook = () => {
    navigate("/add");
  };

  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <input
          style={{
            width: "250px",
            height: "40px",
            padding: "5px",
            boxSizing: "border-box",
          }}
          placeholder="Search here by title"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          style={{ width: "100px", height: "40px", backgroundColor: "gray",marginLeft:"50px" }}
          onClick={handleAddBook}
        >
          Add Book
        </button>
      </div>
      <div
        style={{
          width: "100%",
          height: "1000px",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "30px",
        }}
      >
        {list}
      </div>
    </>
  );
};

export default Books;
