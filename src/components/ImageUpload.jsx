import React, { useState } from "react";
import axios from "axios";

function ImageUpload() {
  const [avatar, setAvatar] = useState(null);
  return (
    <div>
      <input
        type="file"
        name="avatar"
        onChange={function(event) {
          event.preventDefault();
          setAvatar(event.target.files[0]);
        }}
      />
      <button
        onClick={function() {
          let data = new FormData();
          data.append("myImage", avatar);
          data.append("name", "Ehtesham");
          data.append("age", 19);
          const config = {
            headers: {
              "content-type": "multipart/form-data"
            }
          };
          axios
            .post("http://localhost:4000/file", data, config)
            .then(response => {
              console.log(response);
            })
            .catch(error => console.log(error));
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default ImageUpload;
