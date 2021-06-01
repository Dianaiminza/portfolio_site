
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux';
import Footer from '../footer/footer'
import two from '../image/gal_2.jpg';
import three from '../image/gal_3.jpg';
const FileUpload = () => {
  const userSignin = useSelector((state) => state.userSignin.userInfo);
  // const { userInfo } = userSignin;
  const [blog, setBlog] = useState([]);
     useEffect(() => {
    axios.get(`http://localhost:5000/blogs`)
      .then((res) => {
        console.log(res.data)
        setBlog(res.data);
      })
  }, 
  []);
  
  const deleteBlog=(blogid)=> {
    let selectblog=blog.find(function(blog){
     return blog.id ===blogid;
     
     });
     const yesdelete= window.confirm(`Do you want to delete ${selectblog.title}?`);
     
     if(yesdelete){

     const res =axios.delete("http://localhost:5000/blogs/delete/" +selectblog.blogid ,{
      
       headers: {
           "Content-Type": "application/json",
           Accept: "application/json",
       },
       
      })
      console.log(res)
      .then((res) => {
        if (res) {
            alert("Deleted successfully!");  
        }
    })
    .catch((e) => {
        alert(e);
    });
      console.log(res)
  }else{
    alert("Delete cancelled");
   }
  }    
  return (
<div class="untree_co-section">
<div class="container">
<div class="row mb-5">
<div class="col-lg-7 text-center mx-auto">
<h2 class="section-heading gsap-reveal-hero mb-0"><strong>Blog Posts</strong></h2>

<div class="wave gsap-reveal-hero">
<svg>
<path d="M10,10 L50,100 L90,50"></path>
</svg>
</div>
</div>
</div>
<div class="row">

<div class="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
<div class="post-entry">
<a href="https://dev.to/dianaiminza/react-2h3k" rel="noopener noreferrer"target="_blank" class="thumb"><img src={two} alt="img" class="img-fluid"/></a>
<h3><a href="https://dev.to/dianaiminza/react-2h3k"rel="noopener noreferrer"target="_blank" >Introduction to React</a></h3>
<div class="post-meta">
Aug 4, 2020 by <a href="https://dev.to/dianaiminza/react-2h3k" rel="noopener noreferrer"target="_blank">Captain</a> in <a href="https://dev.to/dianaiminza/react-2h3k" rel="noopener noreferrer"target="_blank">Web Design</a>
</div>
</div>
</div>
<div class="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
<div class="post-entry">
<a href="https://dev.to/dianaiminza/clean-javascript-code-4k4l" rel="noopener noreferrer"target="_blank" class="thumb"><img src={three} alt="img" class="img-fluid"/></a>
<h3><a href="https://dev.to/dianaiminza/clean-javascript-code-4k4l"rel="noopener noreferrer"target="_blank" >JavaScript</a></h3>
<div class="post-meta">
Aug 4, 2020 by <a href="https://dev.to/dianaiminza/clean-javascript-code-4k4l" rel="noopener noreferrer"target="_blank" >Captain</a> in <a href="https://dev.to/dianaiminza/clean-javascript-code-4k4l" rel="noopener noreferrer"target="_blank" >Web Design</a>
</div>
</div>
</div>

</div>
</div>
<Footer/>

</div>

  );
    
};

export default FileUpload;