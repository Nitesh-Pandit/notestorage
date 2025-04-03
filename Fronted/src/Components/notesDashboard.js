import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom'

import "../css/notesDashboard.css";
import Quill from "quill";
import "quill/dist/quill.snow.css"; // ✅ Make sure CSS is imported

export default function NotesDashboard() {
  const editorRef = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    if (!quillInstance.current && editorRef.current) {
      quillInstance.current = new Quill(editorRef.current, {
        modules: { toolbar: "#toolbar" },
        placeholder: "Start typing your notes...",
        theme: "snow",
      });
    }

    return () => {
      quillInstance.current = null;
    };
  }, []);

  return (
    <div style={{marginRight:"200px"}}>
      <div className="container">
      <aside className="sidebar">
        <div className="container">
          <div className="profile-container dropdown">
            <div
              className="avatar"
              id="profileDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              S
            </div>
             <strong>sonikumar12345abc@gmail.com</strong><br />
             <br/>
             <br/>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="profileDropdown">
              <li className="dropdown-header">ACCOUNT</li>
              <li className="px-3">
                <strong>sonikumar12345abc</strong><br />
                <small>sonikumar12345abc@gmail.com</small>
              </li>
              <hr />
              <li>
                <a className="dropdown-item" href="/"
                  ><i className="fas fa-user"></i> Account info...</a>
              </li>
              <li>
                <a className="dropdown-item" href="/"
                  ><i className="fas fa-cog"></i> Settings</a>
              </li>
              <li>
                <a className="dropdown-item" href="/"
                  ><i className="fas fa-bell"></i> Notifications</a>
              </li>
              <hr />
              <li>
                <a className="dropdown-item" href="/"
                  ><i className="fas fa-question-circle"></i> Need help?</a>
              </li>
              <hr />
              <li>
                <a className="dropdown-item text-danger" href="/"
                  ><i className="fas fa-sign-out-alt"></i> Sign out</a>
              </li>
            </ul>
          </div>
        </div>
        <input type="text" className="search" placeholder="Search" />
        <div className="d-flex justify-content-between">
          <button className="btn note"><Link to="/notes" style={{color: "black",textDecoration:"none"}}>+ Note</Link></button>
          <div className="dropdown">
            <button
              className="btn btn-secondary"
              type="button"
              data-bs-toggle="dropdown"
              style={{margin: "10px",paddingRight:"70px",textAlign: "center"}}
            >
              ...
            </button>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="/"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal1"
                >
                  <i className="fas fa-book"></i> NoteBook
                </a>
              </li>
              <hr />
              <li>
                <a className="dropdown-item" href="/"
                  ><i className="fas fa-file"></i> File</a>
              </li>
              <hr />
              <li>
                <a className="dropdown-item" href="/"
                  ><i className="fas fa-image"></i> Image</a>
              </li>
              <hr />
              <li>
                <a className="dropdown-item" href="/"><i className="fas fa-paint-brush"></i> Sketch</a>
              </li>
            </ul>
          </div>
        </div>
        
        
        
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#taskModal">+ Task</button>



{/* <!-- Modal --> */}
    <div className="modal fade" id="taskModal" tabindex="-1" aria-labelledby="taskModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="taskModalLabel">Things to do</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Task Name</label>
                            <input type="text" className="form-control" placeholder="Enter task"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea className="form-control" placeholder="What is this task about?"></textarea>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Due Date</label>
                            <div className="d-flex">
                                <button type="button" className="btn btn-outline-secondary">Today</button>
                                <button type="button" className="btn btn-outline-secondary">Tomorrow</button>
                                <button type="button" className="btn btn-outline-secondary">Custom</button>
                                <button type="button" className="btn btn-outline-secondary">Repeat</button>
                            </div>
                        </div>
                                               
                       
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary">Create Task</button>
                </div>
            </div>
        </div>
    </div>

        <div className="slider">
          <ul>
            <li>
              <i className="fas fa-home"></i><Link to="/home" style={{color: "black", textDecoration: "none"}}> Home</Link>
            </li>
            <li><i className="fas fa-sticky-note"></i> Notes</li>
            <li><i className="fas fa-tasks"></i> <Link to="/task" style={{color: "black",textDecoration:"none"}}>Tasks</Link></li>
            <li><i className="fas fa-file"></i> Files</li>
            <li><i className="fas fa-book"></i> <Link to="/notebook" style={{color: "black",textDecoration:"none"}}>NoteBook</Link></li>
            <li><i className="fas fa-share"></i> <Link to="/shared" style={{color: "black",textDecoration:"none"}}>Shared with Me</Link></li>
            <li><i className="fas fa-trash"></i> <Link to="/trash" style={{color: "black",textDecoration:"none"}}>Trash</Link></li>
          </ul>
        </div>
        <div className="notebook-card">
          <img src="/images/istoc.jpg" alt="Notebook Icon" />
          <p><strong>Write Your notes Here!</strong></p>
        </div>
      </aside>
      <main className="content">
        <div className="d-flex justify-content-between">
          <h3>First Notebook</h3>
          <button
            type="button"
            className="btn btn-light btn-sm"
            style={{width: "25%", color: "blue"}}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Share
          </button>
        </div>
        <p>0 notes</p>
        <div className="add-note">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg1fQdMzYmJ6ux6CDXbLAtsl4S3NARPNYVwg&s" alt="Note Icon" />
          <p><strong>It all begins with notes</strong></p>
          <p>
            Click the <span className="new-note"><b>+ New Note</b></span> button in
            the sidebar to create a note.
          </p>
        </div>
      </main>

      <main className="content1">
        <div className="rich-text-container">
          <h2 style={{textAlign: "center"}}>Write Your Notes</h2>
          <input type="text" className="note-title" placeholder="Enter Title..." />
          <div id="toolbar">
            <span className="ql-formats">
              <select className="ql-font"></select>
              <select className="ql-size"></select>
            </span>
            <span className="ql-formats">
              <button className="ql-bold"></button>
              <button className="ql-italic"></button>
              <button className="ql-underline"></button>
              <button className="ql-strike"></button>
            </span>
            <span className="ql-formats">
              <select className="ql-color"></select>
              <select className="ql-background"></select>
            </span>
            <span className="ql-formats">
              <button className="ql-list" value="ordered"></button>
              <button className="ql-list" value="bullet"></button>
              <button className="ql-indent" value="-1"></button>
              <button className="ql-indent" value="+1"></button>
            </span>
            <span className="ql-formats">
              <select className="ql-align"></select>
            </span>
            <span className="ql-formats">
              <button className="ql-clean"></button>
            </span>
          </div>
          <div id="editor" ref={editorRef} ></div>
          <button
            className="btn save"
            style={{backgroundColor: "green",color: "white"}}
          >
            Save
          </button>
        </div>

        {/* <!-- Modal for Share Btn   --> */}
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Share</h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <label for="exampleInputEmail1" className="form-label"
                  >Email address</label>
                <input
                  type="text"
                  className="form-control"
                  id="Email Name"
                  placeholder="Enter Email here!"
                />
                
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-warning w-25">
                  Send Invite
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!--  Model For Notebook --> */}

        <div
          className="modal fade"
          id="exampleModal1"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Create Notebook
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <label for="text" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Notebook Name"
                  placeholder="Note........."
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-warning">Create</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
}