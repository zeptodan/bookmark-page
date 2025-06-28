import { useState } from "react"

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
    <header className="">
      <button>
        <img src="../images/icon-hamburger.svg" alt="navbar icon" />
      </button>
      <nav>
        <img src="./images/logo-bookmark.svg" alt="logo" />
        <ul>
          <li><a href="#">FEATURES</a></li>
          <li><a href="#">PRICING</a></li>
          <li><a href="#">CONTACT</a></li>
          <li><a href="#">LOGIN</a></li>
        </ul>
      </nav>
      <div>
        <h1>A Simple Bookmark Manager</h1>
        <p>A clean and simple interface to organize your favourite websites. Open a new 
          browser tab and see your sites load instantly. Try it for free.
        </p>
        <button>Get it on Chrome</button>
        <button>Get it on Firefox</button>
      </div>
      <div>
        <img src="./images/illustration-hero.svg" alt="" />
        <div></div>
      </div>
    </header>
  )
}

const Features = () => {
  const [tab,setTab] = useState(0);
  const list = [
    {"heading":"Bookmark in one click", "text" : "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.", "url" : "../images/illustration-features-tab-1.svg"},
    {"heading" : "Intelligent search", "text": "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.","url" : "../images/illustration-features-tab-2.svg"},
    {"heading" : "Share your bookmarks", "text": "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.","url" : "../images/illustration-features-tab-3.svg"}
  ]
  return (
    <section className="">
      <h2>Features</h2>
      <p>Our aim is to make it quick and easy for you to access your favourite websites. 
        Your bookmarks sync between your devices so you can access them on the go.
      </p>
      <div>
        <button onClick={setTab(0)}>Simple Bookmarking</button>
        <button onClick={setTab(1)}>Speedy Searching</button>
        <button onClick={setTab(2)}>Easy Sharing</button>
      </div>
      <div>
        <div>
          <div></div>
          <img src={list[tab].url} alt="" />
        </div>
        <h1>{list[tab].heading}</h1>
        <p>{list[tab].text}</p>
      </div>
    </section>
  )
}

const Main = () => {
  return (
    <main className="">
      <h2>Download the extension</h2>
      <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite 
        you’d like us to prioritize.
      </p>
      <div>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </main>
  )
}
const Card = ({}) => {
  return (
    <div></div>
  )
}

const Faqs = () => {
  const faqs = []
  return (
    <section className="">
      {faqs.map((faq) => (
        <FaqItem/>
      ))}
    </section>
  )
}

const FaqItem = ({question,answer}) => {
  return (
    <div></div>
  )
}
const Footer = () => {
  return (
    <footer className="">

    </footer>
  )
}
export default App
