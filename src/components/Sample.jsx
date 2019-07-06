import React, { useState } from "react";
// import cloudinary, { Cloudinary } from "cloudinary-core";
import axios from "axios";

function Sample() {
  const [avatar, setAvatar] = useState(null);
  return (
    <div>
      <input
        type="file"
        name="myImage"
        onChange={function(event) {
          event.preventDefault();
          setAvatar(event.target.files[0]);
        }}
      />
      <button
        onClick={function() {
          let data = new FormData();
          data.append(avatar);
          console.log(data);
          // var cl = new cloudinary.Cloudinary({ cloud_name: "ehtesham74" });
          axios
            .post("https://api.cloudinary.com/v1_1/ehtesham74/upload", data)
            .then(function(result) {
              console.log(result);
            })
            .catch(function(err) {
              console.log(err);
            });
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default Sample;
