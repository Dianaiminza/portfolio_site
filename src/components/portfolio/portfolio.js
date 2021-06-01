// import React, {useState,useEffect} from 'react';
// import axios from 'axios';
// import {Link} from 'react-router-dom';
// import { useSelector} from 'react-redux';
// import Footer from '../footer/footer'
// // import LogIn from '../../pages/signin';
// // import{Switch}from 'react-router-dom';
//   const FileUpload = () => {
//   const userSignin = useSelector((state) => state.userSignin.userInfo);
  
//   // const { userInfo } = userSignin;
//   const [project, setProject] = useState([]);
//   // const [isLog, setLog] = useState({});
  
//      useEffect(() => {
//     axios.get(`http://localhost:5000/projects`)
//       .then((res) => {
//         console.log(res.data)
//          setProject(res.data);
//       })
//   }, 
//   []);
//   console.log({userSignin})
//   //  const handleLogin = (isLog)=>{
//   //    setLog(isLog)
//   //  console.log(isLog)
//   // alert(isLog)
//   //  }

//   const deleteProject=(projectid)=> {
//     let selectproject=project.find(function(project){
//      return project.id === projectid;
     
//      });
//      const yesdelete= window.confirm(`Do you want to delete ${selectproject.title} ${selectproject.projectid}?`);
     
//      if(yesdelete){

//      const res =axios.delete("http://localhost:5000/projects/delete/" +selectproject.projectid ,{
//        headers: {
//            "Content-Type": "application/json",
//            Accept: "application/json",
//        },
       
//       })
//       .then((res) => {
//         if (res) {
//             alert("Deleted successfully!");  
//         }
//     })
//     .catch((e) => {
//         alert(e);
//     });
//       console.log(res)
//   }else{
//     alert("Delete cancelled");
//    }
//   }    
  
//   return (
// <div className="untree_co-section untree_co-section-4 pb-0" id="portfolio-section">
// <div className="container">
// <div class="relative"><div class="loader-portfolio-wrap"><div class="loader-portfolio"></div></div> </div>
// <div id="portfolio-single-holder"></div>
// <div className="portfolio-single-wrap unslate_co--section" id="portfolio-single-section">
// <div className="portfolio-single-inner">
// <h2 className="heading-portfolio-single-h2 text-black">Projects</h2>
// <div className="img-grid">
// {project.map(project =>(
//      <div className="row justify-content-between mb-5"> 
//     <div className="thumbnail">
//     <figure className="mb-4">
//     <img src={project.projectimg}  alt="light" style={{width:"100%",height:"auto"}} />
// </figure>
// <div className="col-12 my-5">
// <div className="row">
// <div className="col-sm-6 col-md-6 col-lg-3">
// <div className="detail-v1">
// <span className="detail-label">Project Date</span>
// <span className="detail-val">March 9th, 2020</span>
// </div>
// </div>
// <div className="col-sm-6 col-md-6 col-lg-3">
// <div className="detail-v1">
// <span className="detail-label">Title</span>
// <span className="detail-val">{project.title}</span>
//  </div>
// </div>
// <div className="col-sm-6 col-md-6 col-lg-3">
// <div className="detail-v1">
// <span className="detail-label">Visit</span>
// <span className="detail-val"><a href={project.url} rel="noopener noreferrer"target="_blank">View</a></span>
// </div>
// </div>
// </div>
// </div>
// <div className="col-md-6">
// <p>{project.description}</p>  

// {userSignin?.user ? <div> 

//   <h3>Edit</h3>
//              <>
//              <Link to ={`/projects/${project.projectid}/edit`} >Edit</Link>
//              <button  onClick={() => deleteProject(project.id)} >Delete</button>
//              </>
//  </div> :
//    <div>
//    Please <Link to="/login">Sign-in</Link> to edit.
//  </div>
 
//   }
  
// </div>

// </div>
// </div>
// ))}

// </div>
// </div>
// </div>
// </div>
// <Footer/>
// </div>

//   );          
// };
// export default FileUpload;


import React, {useState,useEffect} from 'react';
import {Card,CardText,CardTitle,CardActions,Button,CardMenu,IconButton}from 'react-mdl';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux';
import Footer from '../footer/footer'
// import LogIn from '../../pages/signin';
// import{Switch}from 'react-router-dom';
  const FileUpload = () => {
  const userSignin = useSelector((state) => state.userSignin.userInfo);
  
  // const { userInfo } = userSignin;
  const [project, setProject] = useState([]);
  // const [isLog, setLog] = useState({});
  
     useEffect(() => {
    axios.get(`http://localhost:5000/projects`)
      .then((res) => {
        console.log(res.data)
         setProject(res.data);
      })
  }, 
  []);
  console.log({userSignin})
  //  const handleLogin = (isLog)=>{
  //    setLog(isLog)
  //  console.log(isLog)
  // alert(isLog)
  //  }

  const deleteProject=(projectid)=> {
    let selectproject=project.find(function(project){
     return project.id === projectid;
     
     });
     const yesdelete= window.confirm(`Do you want to delete ${selectproject.title} ${selectproject.projectid}?`);
     
     if(yesdelete){

     const res =axios.delete("http://localhost:5000/projects/delete/" +selectproject.projectid ,{
       headers: {
           "Content-Type": "application/json",
           Accept: "application/json",
       },
       
      })
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
    <div class="untree_co-section untree_co-section-4 pb-0" id="portfolio-section">
<div class="container">

<div class="relative"><div class="loader-portfolio-wrap"><div class="loader-portfolio"></div></div> </div>
<div id="portfolio-single-holder"></div>
<div class="portfolio-wrapper">
<div id="posts" class="row">
<div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<Card shadow={5}style={{minWidth:'450',margin:'auto'}}>
             <CardTitle style={{color:'#fff',height:'250px',background: 'url() bottom right 15% no-repeat #46B6AC'}}> Health Bio App </CardTitle>
               <CardText>A HealthBioApp that helps you to be able to know more about the symptoms,causes and prevention of various chhronic diseases.</CardText>
              <CardActions border>
              <Button colored><a href="https://github.com/Dianaiminza/Health-Bio-App"rel="noopener noreferrer"target="_blank">Github</a></Button>
              <Button colored><a href="https://dianaiminza.github.io/Health-Bio-App/"rel="noopener noreferrer"target="_blank">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>

              </CardMenu>
               </Card>

<a href="portfolio-single-1.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="1">
<div class="overlay">
<span class="wrap-icon icon-link2"></span>
</div>
</a>
</div>
<div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<Card shadow={5}style={{minWidth:'450',margin:'auto'}}>
               <CardTitle style={{color:'#fff',height:'250px',background:'url(https://www.google.com/search?q=a+shoe+picture&rlz=1C1CHZN_enKE939KE939&sxsrf=ALeKk02SrJe2deYeteLKgV5fLNGIgO1gFw:1622109424329&tbm=isch&source=iu&ictx=1&fir=1eAXsIOMhITEWM%252C82uK0WP-tI6vyM%252C_&vet=1&usg=AI4_-kTrvsKU7UNphsbIy_ECN110R4P-Dg&sa=X&ved=2ahUKEwjpiZjAzOnwAhXWu6QKHQzrCBAQ9QF6BAgPEAE#imgrc=1eAXsIOMhITEWM) bottom right 15% no-repeat #46B6AC'}}>Kicks Kenya </CardTitle>
               <CardText>Kicks Kenya is an e-commerce website that helps people to be able to buy and order shoes</CardText>
              <CardActions border>
              <Button colored><a href="https://github.com/Dianaiminza/KicksKenya"rel="noopener noreferrer"target="_blank">Github</a></Button>
              <Button colored><a href="https://kickskenya-fa0f5.web.app"rel="noopener noreferrer"target="_blank">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>
              
              </CardMenu>
               </Card>
<a href="portfolio-single-2.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="2">
<div class="overlay">
<span class="wrap-icon icon-link2"></span>
<div class="portfolio-item-content">


</div>
</div>

</a>
</div>
<div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<Card shadow={5}style={{minWidth:'450',margin:'auto'}}>
             <CardTitle style={{color:'#fff',height:'250px',background: 'url() bottom right 15% no-repeat #46B6AC'}}>ChuckNorris App</CardTitle>
               <CardText>ChuckNorris App</CardText>
              <CardActions border>
              <Button colored><a href="https://github.com/Dianaiminza/ChuckNorris"rel="noopener noreferrer"target="_blank">Github</a></Button>
              <Button colored><a href=" https://dianaiminza.github.io/ChuckNorris/"rel="noopener noreferrer"target="_blank">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>
              
              </CardMenu>
               </Card>
<a href="portfolio-single-3.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
<div class="overlay">
<span class="wrap-icon icon-link2"></span>
<div class="portfolio-item-content">
 
</div>
</div>

</a>
</div>
<div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<Card shadow={5}style={{minWidth:'450',margin:'auto'}}>
             <CardTitle style={{color:'#fff',height:'250px',background: 'url() bottom right 15% no-repeat #46B6AC'}}>E-commerce App</CardTitle>
               <CardText>An e commerce app.</CardText>
              <CardActions border>
              <Button colored><a href="https://github.com/Dianaiminza/Soko"rel="noopener noreferrer"target="_blank">Github</a></Button>
              <Button colored><a href="https://github.com/Dianaiminza/Soko"rel="noopener noreferrer"target="_blank">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>

              </CardMenu>
               </Card>
<a href="portfolio-single-3.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
<div class="overlay">
<span class="wrap-icon icon-link2"></span>
<div class="portfolio-item-content">

</div>
</div>

</a>
</div>
<div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<Card shadow={5}style={{minWidth:'450',margin:'auto'}}>
             <CardTitle style={{color:'#fff',height:'250px',background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}> Image Upload </CardTitle>
               <CardText>File upload.A project on uploading,compressing files</CardText>
              <CardActions border>
              <Button colored><a href="https://github.com/Dianaiminza/FileUpload"rel="noopener noreferrer"target="_blank">Github</a></Button>
              <Button colored><a href="https://github.com/Dianaiminza/FileUpload"rel="noopener noreferrer"target="_blank">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>

              </CardMenu>
               </Card>
<a href="portfolio-single-3.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
<div class="overlay">
<span class="wrap-icon icon-link2"></span>
<div class="portfolio-item-content">

</div>
</div>

</a>
</div>
<div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<Card shadow={5}style={{minWidth:'450',margin:'auto'}}>
             <CardTitle style={{color:'#fff',height:'250px',background: 'url() bottom right 15% no-repeat #46B6AC'}}>Kicks Kenya </CardTitle>
               <CardText>Kicks.An e commerce app for buying and selling shoes</CardText>
              <CardActions border>
              <Button colored><a href="https://github.com/Dianaiminza/kicks"rel="noopener noreferrer"target="_blank">Github</a></Button>
              <Button colored><a href="https://dianaiminza.github.io/kicks/"rel="noopener noreferrer"target="_blank">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>

              </CardMenu>
               </Card>
<a href="portfolio-single-1.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="1">
<div class="overlay">
<span class="wrap-icon icon-link2"></span>
<div class="portfolio-item-content">

</div>
</div>

</a>
</div>
<div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<Card shadow={5}style={{minWidth:'450',margin:'auto'}}>
             <CardTitle style={{color:'#fff',height:'250px',background: 'url() bottom right 15% no-repeat #46B6AC'}}> Budget Planner </CardTitle>
               <CardText>Little Budget Planner.An app to help people know how they spend money per day</CardText>
              <CardActions border>
              <Button colored><a href="https://github.com/Dianaiminza/Budget"rel="noopener noreferrer"target="_blank">Github</a></Button>
              <Button colored><a href="https://dianaiminza.github.io/Budget/"rel="noopener noreferrer"target="_blank">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>

              </CardMenu>
               </Card>
<a href="portfolio-single-2.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="2">
<div class="overlay">
<span class="wrap-icon icon-link2"></span>
<div class="portfolio-item-content">

</div>
</div>

 </a>
</div>
<div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<Card shadow={5}style={{minWidth:'450',margin:'auto'}}>
             <CardTitle style={{color:'#fff',height:'250px',background: 'url() bottom right 15% no-repeat #46B6AC'}}> Djikstra Algorithm </CardTitle>
               <CardText>Djikstra Algorithm. Used to find the shortest path</CardText>
              <CardActions border>
              <Button colored><a href="https://github.com/Dianaiminza/Dianaiminza.github.io"rel="noopener noreferrer"target="_blank">Github</a></Button>
              <Button colored><a href="https://dianaiminza.github.io/"rel="noopener noreferrer"target="_blank">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>

              </CardMenu>
               </Card>
<a href="portfolio-single-3.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
<div class="overlay">
<span class="wrap-icon icon-link2"></span>
<div class="portfolio-item-content">

</div>
</div>

</a>
</div>
<div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<Card shadow={5}style={{minWidth:'450',margin:'auto'}}>
             <CardTitle style={{color:'#fff',height:'250px',background: 'url() bottom right 15% no-repeat #46B6AC'}}> Bitly </CardTitle>
               <CardText>A URL Shortener</CardText>
              <CardActions border>
              <Button colored><a href="https://github.com/Dianaiminza/Bitly"rel="noopener noreferrer"target="_blank">Github</a></Button>
              <Button colored><a href="https://github.com/Dianaiminza/Bitly"rel="noopener noreferrer"target="_blank">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>

              </CardMenu>
               </Card>
<a href="portfolio-single-3.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
<div class="overlay">
<span class="wrap-icon icon-link2"></span>
<div class="portfolio-item-content">

</div>
</div>

</a>
</div>
<div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<Card shadow={5}style={{minWidth:'450',margin:'auto'}}>
             <CardTitle style={{color:'#fff',height:'250px',background: 'url() bottom right 15% no-repeat #46B6AC'}}>Cloudinary</CardTitle>
               <CardText>Uploading images and giles using cloudinary</CardText>
              <CardActions border>
              <Button colored><a href="https://github.com/Dianaiminza/Cloud"rel="noopener noreferrer"target="_blank">Github</a></Button>
              <Button colored><a href="https://github.com/Dianaiminza/Cloud"rel="noopener noreferrer"target="_blank">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>

              </CardMenu>
               </Card>
<a href="portfolio-single-3.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
<div class="overlay">
<span class="wrap-icon icon-link2"></span>
<div class="portfolio-item-content">

</div>
</div>

</a>
</div>
<div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<Card shadow={5}style={{minWidth:'450',margin:'auto'}}>
             <CardTitle style={{color:'#fff',height:'250px',background: 'url() bottom right 15% no-repeat #46B6AC'}}>Telephone validator</CardTitle>
               <CardText>Telephone number validator</CardText>
              <CardActions border>
              <Button colored><a href="https://github.com/Dianaiminza/Telephone-number-validator"rel="noopener noreferrer"target="_blank">Github</a></Button>
              <Button colored><a href="https://github.com/Dianaiminza/Telephone-number-validator"rel="noopener noreferrer"target="_blank">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>

              </CardMenu>
               </Card>
<a href="portfolio-single-3.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
<div class="overlay">
<span class="wrap-icon icon-link2"></span>
<div class="portfolio-item-content">

</div>
</div>

</a>
</div>
<div class="item web branding col-sm-6 col-md-6 col-lg-4 isotope-mb-2">
<Card shadow={5}style={{minWidth:'450',margin:'auto'}}>
             <CardTitle style={{color:'#fff',height:'250px',background: 'url() bottom right 15% no-repeat #46B6AC'}}>Hotel Reservation</CardTitle>
               <CardText>Hotel reservation site</CardText>
              <CardActions border>
              <Button colored><a href="https://github.com/Dianaiminza/Hotelreservation"rel="noopener noreferrer"target="_blank">Github</a></Button>
              <Button colored><a href="https://github.com/Dianaiminza/Hotelreservation"rel="noopener noreferrer"target="_blank">Live Demo</a></Button>
              </CardActions>
              <CardMenu style={{color:'#fff'}}>
              <IconButton name="share"/>

              </CardMenu>
               </Card>

<a href="portfolio-single-3.html" class="portfolio-item ajax-load-page isotope-item gsap-reveal-img" data-id="3">
<div class="overlay">
<span class="wrap-icon icon-link2"></span>
<div class="portfolio-item-content">

</div>
</div>

</a>
</div>
</div>
</div>

</div>
<Footer/>
</div>
    

  );          
};
export default FileUpload;