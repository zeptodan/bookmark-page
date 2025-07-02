import { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./App.css"
function App() {
  return (
    <>
    <Header />
    <Features />
    <Main />
    <Faqs />
    <Footer />
    </>
  )
}

const Header = () => {
  return (
    <div className=" position-relative pb-5">
      <header className="container d-flex flex-column position-relative">
        <nav className=" navbar navbar-expand-md my-2">
          <div className="container-fluid d-flex">
            <img  className="navbar-brand" src="./images/logo-bookmark.svg" alt="logo" />
            <button className=" navbar-toggler" data-bs-toggle="modal" data-bs-target="#nav">
              <span className=" navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse">
              <ul className="navbar-nav ms-auto me-md-3 gap-5">
                <li className="nav-item"><a className=" nav-link" href="#">FEATURES</a></li>
                <li className="nav-item"><a className=" nav-link" href="#">PRICING</a></li>
                <li className="nav-item"><a className=" nav-link" href="#">CONTACT</a></li>
                <li className="nav-item  btn btn-danger py-0"><a className=" nav-link text-white" href="#">LOGIN</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className=" modal fade" id="nav">
          <div className=" modal-dialog modal-fullscreen">
            <div className="modal-content text-white" style={{backgroundColor:"rgba(31, 42, 77, 0.8)"}}>
              <div className="container modal-header p-3 px-4">
                <h3 className="modal-title">BOOKMARK</h3>
                <button type="button" className=" btn-close btn-close-white" data-bs-dismiss="modal"></button>
              </div>
              <div className="container modal-body overflow-x-hidden d-flex flex-column align-items-center px-0 pt-0">
                <a className="w-100 nav-link fs-2 border-bottom text-center py-4" href="#">FEATURES</a>
                <a className="nav-link fs-2 border-bottom w-100 text-center py-4" href="#">PRICING</a>
                <a className="nav-link fs-2 border-bottom w-100 text-center py-4" href="#">CONTACT</a>
                <a className="nav-link fs-2 w-100 text-center py-3 border border-2 m-4 rounded-1" href="#">LOGIN</a>
              </div>
              <div className=" modal-footer d-flex flex-row justify-content-center">
                <img className=" m-2" src="./images/icon-facebook.svg" alt="facebook icon" />
                <img className=" m-2" src="./images/icon-twitter.svg" alt="twitter icon" />
              </div>
            </div>
          </div>
        </div>
        <div className=" d-flex flex-md-row flex-column align-items-center mt-4">
          <div className=" flex-fill me-lg-5 me-2 align-items-center justify-content-center order-1 order-md-0">
            <h1 className=" text-center text-md-start">A Simple Bookmark Manager</h1>
            <p className=" text-secondary text-center text-md-start">A clean and simple interface to organize your favourite websites. Open a new 
              browser tab and see your sites load instantly. Try it for free.
            </p>
            <div className=" d-flex w-100 justify-content-center justify-content-md-start">
              <button className="btn btn-primary shadow me-3">Get it on Chrome</button>
              <button className="btn btn-light shadow">Get it on Firefox</button>
            </div>
          </div>
          <div className=" mt-4 order-0 order-md-1" style={{flex:" 0 0 50%"}}>
            <img className="img-fluid w-100" src="./images/illustration-hero.svg" alt="" />
          </div>
        </div>
      </header>
      <div className="bg-primary position-absolute z-n1 end-0 bottom-0  rounded-start-circle d-none d-md-block" style={{width:"35%",height:"60%"}}></div>
      <div className="bg-primary position-absolute z-n1 end-0 rounded-start-circle d-block d-md-none" style={{width:"60%",height:"30%",bottom:"30%"}}></div>
    </div>
  )
}

const Features = () => {
  const [tab,setTab] = useState(0);
  const list = [
    {"heading":"Bookmark in one click", "text" : "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.", "url" : "./images/illustration-features-tab-1.svg"},
    {"heading" : "Intelligent search", "text": "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.","url" : "./images/illustration-features-tab-2.svg"},
    {"heading" : "Share your bookmarks", "text": "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.","url" : "./images/illustration-features-tab-3.svg"}
  ]
  return (
    <section className=" d-flex flex-column align-items-center">
      <h2 className=" text-center">Features</h2>
      <p className=" text-center py-3 px-3 text-secondary" style={{maxWidth:"600px"}}>Our aim is to make it quick and easy for you to access your favourite websites. 
        Your bookmarks sync between your devices so you can access them on the go.
      </p>
      <div className=" d-flex flex-column btn-group flex-md-row">
        <button className={`btn border-0 bg-white border-bottom p-3 hover-effect ${tab===0? "active":""}`} onClick={() => setTab(0)}>Simple Bookmarking</button>
        <button className={`btn border-0 bg-white border-bottom p-3 hover-effect ${tab===1? "active":""}`} onClick={() => setTab(1)}>Speedy Searching</button>
        <button className={`btn border-0 bg-white border-bottom p-3 hover-effect ${tab===2? "active":""}`} onClick={() => setTab(2)}>Easy Sharing</button>
      </div>
      <div className="d-flex flex-column flex-md-row mt-3">
        <div className="d-flex justify-content-center p-5 position-relative" style={{flex:"0 0 50%"}}>
          <div className=" w-75 h-75 position-absolute bottom-0 start-0 rounded-end-circle z-n1 bg-primary d-block"></div>
          <img className=" img-fluid" src={list[tab].url} alt="" />
        </div>
        <div className="d-flex flex-column justify-content-center p-5" style={{flex:"0 0 50%"}}>
          <h1 className=" text-center text-md-start">{list[tab].heading}</h1>
          <p className="text-center text-md-start text-secondary mt-3 me-0 me-md-5">{list[tab].text}</p>
          <div className="d-flex justify-content-center justify-content-md-start">
          <button className="btn btn-primary ">More Info</button>
          </div>
        </div>
      </div>
    </section>
  )
}

const Main = () => {
  const list = [
    {"url": "./images/logo-chrome.svg","text":"Chrome","version":"62","margin":"mt-0"},
    {"url": "./images/logo-firefox.svg","text":"Firefox","version":"55","margin":"mt-4"},
    {"url": "./images/logo-opera.svg","text":"Opera","version":"46","margin":"mt-4 mt-md-5"}
  ]
  return (
    <main className="container d-flex flex-column justify-content-center align-items-center">
      <h2 className=" text-center">Download the extension</h2>
      <p className="text-center text-secondary" style={{maxWidth:"600px"}}>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite 
        you’d like us to prioritize.
      </p>
      <div className="row w-100 mt-3 justify-content-center">
        {list.map((item,index)=>{
          return (
            <div className={`col-10 col-md-4 col-xl-3 ${item["margin"]}`}>
              <Card key={index} {...item}/>
            </div>
            )
        })}
      </div>
    </main>
  )
}
const Card = ({url,text,version}) => {
  return (
    <div className="d-flex flex-column border border-1 shadow border-top-0 pb-3">
      <img className=" img-fluid p-5 m-3 m-md-0" src={url} alt="" />
      <h4 className=" text-center">Add to {text}</h4>
      <p className=" text-center">Minimum version {version}</p>
      <button className="btn btn-primary mx-3">Add & Install Extension</button>
    </div>
  )
}

const Faqs = () => {
  const faqs = [
    {
      question: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    },
    {
      question: "How can I request a new browser?",
      answer:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
    }
  ];
  return (
    <section className=" container mt-4 p-3 d-flex flex-column align-items-center">
      <h3 className=" text-center">Frequently Asked Questions</h3>
      <p className=" text-center text-secondary" style={{maxWidth:"600px"}}>
        Here are some of our FAQs. If you have any other questions you’d like 
        answered please feel free to email us.
      </p>
      <div className=" w-100" style={{maxWidth:"600px"}}>
        {faqs.map((faq,index) => (
          <FaqItem key={index} index={index} {...faq}/>
        ))}
      </div>
      <button className="btn btn-primary my-5">More Info</button>
    </section>
  )
}

const FaqItem = ({question,answer,index}) => {
  return (
    <div className=" p-3 position-relative border-bottom">
      <p className=" d-inline pe-3">{question}</p>
      <button className=" d-inline border-0 bg-white position-absolute end-0" data-bs-toggle="collapse" data-bs-target={`#${index}`} >
        <img src="./images/icon-arrow.svg" alt="" />
      </button>
      <div className="collapse mt-3" id={index}>{answer}</div>
    </div>
  )
}
const Footer = () => {
  useEffect(() => {
    const form = document.getElementById("form");
    const inp = document.getElementById("invalid");
    form.addEventListener("submit",(e)=>{
      if (!form.checkValidity()){
        e.preventDefault();
      }
      form.classList.add("was-validated");
      inp.style.boxShadow = "0 -3px 0 #dc3545";

    })
  })
  return (
    <footer className="">
      <div className=" text-bg-primary d-flex flex-column align-items-center pt-3">
        <p className=" my-3 text-uppercase" style={{letterSpacing:"3px"}}>35,000+ already joined</p>
        <h2 className="my-3 text-center" style={{maxWidth:"500px"}}>  Stay up-to-date with what we’re doing</h2>
        <form className="my-3 mb-5 d-flex flex-column flex-md-row align-items-center gap-4 my.form" id="form" noValidate>
          <div className="flex-grow-1 position-relative">
            <input
              className="form-control pe-5"
              type="email"
              id="email"
              placeholder="Enter your email address"
              required
            />
            <div className="invalid-feedback text-bg-danger mt-0 rounded-bottom p-1 pt-0" id="invalid">
              Please enter a valid email address.
            </div>
          </div>
          <button className="btn btn-danger flex-shrink-0 align-self-md-start" type="submit">Contact Us</button>
        </form>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center p-4" style={{ backgroundColor: "#052c65" }}>
        <div className=" text-white d-flex flex-column flex-md-row gap-md-5 gap-4 mb-3 mb-md-0">
          <img src="images/logo-bookmark.svg" alt="" />
          <a className=" text-center link-light link-underline-opacity-0" href="">FEATURES</a>
          <a className=" text-center link-light link-underline-opacity-0" href="">PRICING</a>
          <a className=" text-center link-light link-underline-opacity-0" href="">CONTACT</a>
        </div>
        <div className="d-flex gap-4 m-3">
          <img src="./images/icon-facebook.svg" alt="" />
          <img src="./images/icon-twitter.svg" alt="" />
        </div>
      </div>
    </footer>
  )
}
export default App
