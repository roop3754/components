import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './css/reset.css'; 
import './css/index.css';

function App() {
  
  const galleryImages = [
    
    {index: 0, url: "https://images.unsplash.com/photo-1577593955252-4b1df9467b58?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {index: 1, url: "https://plus.unsplash.com/premium_photo-1682621097202-eca012076ff2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {index: 2, url: "https://plus.unsplash.com/premium_photo-1666901328578-7fcbe821735e?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {index: 3, url: "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
  ];

  const bannerTitle = "Mastering React Components";
  const bannerDescription = "This project demonstrates prop-drilling, component architecture, and dynamic styling using React.";

  return (
    <div className="App">
      <Header />
      <main>
        <Banner 
          title={bannerTitle} 
          text={bannerDescription}/>

        <Gallery images={galleryImages} />
      </main>

      <Footer />
    </div>
  );
}

export default App;

