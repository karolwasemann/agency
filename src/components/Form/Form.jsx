// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Form.scss";
// const Result = () => {
//   return (
//     <p>Your Message has been successfully sent, we will contact you soon</p>
//   );
// };

// const Contact = ({ props, files, setFiles, removeFile }) => {
//   const [result, showResult] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("gmail", "template_liuwdkd", e.target, "LZp1Q8lqzBmXpD3te")
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     e.target.reset();
//     showResult(true);
//   };

//   // Hide result

//   setTimeout(() => {
//     showResult(false);
//   }, 5000);

//   // Upload File;

//   const uploadHandler = (event) => {
//     const file = event.target.files[0];
//     if (!file) return;
//     file.isUploading = true;
//     setFiles([...files, file]);

//     // upload file
//     const formData = new FormData();
//     formData.append("newFile", file, file.name);
//     // axios.post('http://localhost:8080/upload', formData)
//     //     .then((res) => {
//     //         file.isUploading = false;
//     //         setFiles([...files, file])
//     //     })
//     //     .catch((err) => {
//     //         // inform the user
//     //         console.error(err)
//     //         removeFile(file.name)
//     //     });
//   };
//   return (
//     <form className="form" onSubmit={sendEmail}>
//       <h1>Apply</h1>
//       <label></label>
//       <select id="field" name="jobs" required>
//         <option value="none">choose an open position</option>
//         <option value="Web-dev">Web Developer</option>
//         <option value="Online-marketing">Online Marketing</option>
//         <option value="junior architect">Junior Cloud Architect</option>
//         <option value="Web-dev">Web Developer</option>
//         <option value="Online-marketing">Online Marketing</option>
//         <option value="junior architect">Junior Cloud Architect</option>
//       </select>
//       {/* <label>Full Name</label> */}
//       {/* <br /> */}
//       <input type="text" name="fullName" placeholder="Full Name"required />

//       {/* <label>Phone Number</label> */}

//       <input type="text" name="phone" placeholder="Phone Number" required />

//       {/* <label>E-mail</label> */}

//       <input type="text" name="email" placeholder="E-mail" required />

//       <div>
//         <span>Message</span>
//         <br />
//         <textarea name="message" required></textarea>
//         <br />

//         <div className="row">{result ? <Result /> : null}</div>
//       </div>
//       {/* Upload The Folder */}
//       <div className="file-card">
//         <div className="file-inputs">
//           <input type="file" onChange={uploadHandler} />
//           <button>
//             <i>
//               <FontAwesomeIcon icon={faPlus} />
//             </i>
//             Upload Documents
//           </button>
//         </div>

//         <p className="main">Supported files</p>
//         <p className="info">PDF, JPG, PNG</p>
//       </div>
//       <br />
//       <button>SUBMIT</button>
//     </form>
//   );
// };
// export default Contact;

import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// import "./job.css";
const Result = () => {
  return (
    <p>Your Message has been successfully sent, we will contact you soon</p>
  );
};

export default function Form({ props, files, setFiles, removeFile }) {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    //   emailjs
    //     .sendForm("gmail", "template_liuwdkd", e.target, "LZp1Q8lqzBmXpD3te")
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );
    //   e.target.reset();
    //   showResult(true);
    // };
  };
  // Hide result

  setTimeout(() => {
    showResult(false);
  }, 5000);

  // Upload File;

  const uploadHandler = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    file.isUploading = true;
    setFiles([...files, file]);

    // upload file
    const formData = new FormData();
    formData.append("newFile", file, file.name);
    // axios.post('http://localhost:8080/upload', formData)
    //     .then((res) => {
    //         file.isUploading = false;
    //         setFiles([...files, file])
    //     })
    //     .catch((err) => {
    //         // inform the user
    //         console.error(err)
    //         removeFile(file.name)
    //     });
  };
  return (
    <div className="job-container">
      <form className="form" onSubmit={sendEmail}>
        <h1>Submit your application</h1>
        {/* <label></label> */}
        <select id="field" name="jobs" required>
          <option value="none">Choose an open position</option>
          <option value="Web-dev">Web Developer</option>
          <option value="Online-marketing">Online Marketing</option>
          <option value="junior architect">Junior Cloud Architect</option>
          <option value="Web-dev">Web Developer</option>
          <option value="Online-marketing">Online Marketing</option>
          <option value="junior architect">Junior Cloud Architect</option>
        </select>
        {/* <label>Full Name</label> */}

        <input type="text" name="fullName" placeholder="Full Name" required />

        {/* <label>Phone Number</label> */}

        <input type="text" name="phone" placeholder="Phone Number" required />

        {/* <label>E-mail</label> */}

        <input type="text" name="email" placeholder="Email" required />

        <div>
          {/* <span>Message</span> */}
          <br />
          <textarea
            name="message"
            placeholder="Write somthing ..."
            required
          ></textarea>
          <br />

          {/* <div className="row">{result ? <Result /> : null}</div> */}
        </div>
        {/* Upload The Folder */}
        <div className="file-card">
          <div className="file-inputs">
            <input type="file" onChange={uploadHandler} />
            <button>
              <i>
                <FontAwesomeIcon icon={faPlus} />
              </i>
              Upload Documents
            </button>
          </div>

          <p className="main">Supported files</p>
          <p className="info">PDF, JPG, PNG</p>
        </div>
        {/* <br /> */}
        <button>SUBMIT</button>
        <div>
          <div className="row">{result ? <Result /> : null}</div>
        </div>
      </form>
    </div>
  );
  // };
}
