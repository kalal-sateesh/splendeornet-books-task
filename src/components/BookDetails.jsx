import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookDetails = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    setTitle(localStorage.getItem("title"));
    setAuthor(localStorage.getItem("author"));
    setUrl(localStorage.getItem("image"));
  }, []);

  return (
    <>
      <div>
        <h3>BOOK DETAILS</h3>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <div
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
              src={url}
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
            <h1>{title}</h1>
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
            <h1>{author}</h1>
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
              style={{
                width: "25%",
                height: "80%",
                backgroundColor: "gray",
                border: "none",
                borderRadius: "5px",
              }}
              onClick={handleBack}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
