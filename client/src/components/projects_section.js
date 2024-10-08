import React, { useState } from 'react';
import './projects_section.css';
import inventoryhome from '../screens/inventory-homepage.jpg';
import paracacheHome from '../screens/paracache_home.png'
import certificate1 from '../screens/hackerrank.png'; 
import certificate2 from '../screens/bootcamp.png'; 
import emotune from '../screens/Emotune.jpg'
import paracache from '../screens/paracache.jpg'
import inventory from '../screens/inventory.jpg'
import olympics from '../screens/olympics.jpeg'
import ipl from '../screens/ipl2.jpg'
import nueral_style_transfer from '../screens/nueral_style_transfer.jpeg'
import paintdefect from '../screens/paint_defect.jpg'
import emotune_homepage from '../screens/emotune_homepage.png'
// import './certificate.css'; 

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const Projects = () => {
  const [activeTab, setActiveTab] = useState('project');

  const projects = {
    project: [
      { url:emotune , name: 'Emotune:Emotion Based Music Recommendation' },
      { url: paracache, name: 'Paracache Simulator' },
      { url: inventory, name: 'Inventory Management' },
      { url: olympics, name: 'Olympics Insight Hub: Comprehensive Data Analysis Across All Events' },
      { url: ipl, name: '"Complete IPL Data Breakdown: Trends, Records, and Performance Analysis"' },
      { url: nueral_style_transfer, name: 'ArtFusion: Transformative Neural Style for Artistic Masterpieces' },
      { url: paintdefect, name: 'Paint Defect Detection Using YOLO v8' },
    ],
    MiniDescription: [
      { url:emotune_homepage , Title: 'Emotune:Emotion Based Music Recommendation',p_link:"https://github.com/Sidharth-k-2004/codefusion",name:"Emotune: Emotion-Based Music Recommendation is a web app designed to personalize the music experience by recommending songs based on the user's emotions. The app uses a CNN model to analyze facial expressions in real-time, detecting the user's emotional state. It then connects with the Spotify API to recommend songs that match the user's mood, whether it's happiness, sadness, or excitement. Emotune enhances user interaction by dynamically adjusting music selections according to how the user feels, making music streaming more intuitive and enjoyable. This feature can be integrated into existing apps like Spotify to elevate user experience." },
      { url: paracache, Title: 'Paracache Simulator',p_link:"https://github.com/Sidharth-k-2004/paracache-simulator-direct-mapping",name:"Paracache Simulator is an advanced tool designed to simulate and optimize parallel caching strategies in distributed computing systems. It allows users to model various caching mechanisms, analyze their impact on system performance, and optimize data access processes. A key improvement in this simulator is the addition of write-back and write-through cache options, which are not available in existing Paracache implementations. These options enable users to explore different write policies and their effects on cache performance and system efficiency. With this enhanced flexibility, Paracache Simulator provides valuable insights for developers and researchers working on high-performance computing and distributed systems, offering a detailed analysis of cache behavior under various conditions." },
      { url: inventoryhome,Title:'Streamlined inventory management with voice detection and and advanced image detection',p_link:"https://github.com/Sidharth-k-2004/Bhashini-Sprint-Streamlined_Inventory", name :' User-Friendly Interface: Our app offers an intuitive and easy-to-use interface, allowing users to manage their inventory efficiently without any hassle. Voice Command Integration: Say goodbye to tedious manual data entry! Our app enables users to manage their inventory using simple voice commands, making the process faster and more convenient. Stock Level Alerts: Never run out of stock again! Our app provides real-time alerts based on the stock level, ensuring that users are always informed and prepared to restock inventory as needed. Manual Inventory Management: Need to make quick adjustments? Our app allows users to manually add, remove, or modify inventory items with ease, providing flexibility and control over the inventory management process. Multilingual Support: Breaking language barriers! Our app supports communication in multiple languages, catering to smaller shops and businesses that may not be proficient in managing inventory using computers in a single language. Accessibility for Smaller Shops: Empowering smaller businesses! Our app levels the playing field by providing advanced inventory management tools in an accessible and user-friendly format, allowing smaller shops to compete more effectively in the market.' },
      { url: olympics, Title: 'Olympics Insight Hub: Comprehensive Data Analysis Across All Events',p_link:"https://github.com/Sidharth-k-2004/olympics-data-analysis",name:"Olympics Insight Hub: Comprehensive Data Analysis Across All Events is a robust analytics platform designed to provide in-depth insights into the Olympic Games' extensive dataset. This hub aggregates and analyzes data from various Olympic events, including athlete performances, medal tallies, and historical trends. Users can explore interactive visualizations, detailed statistics, and comprehensive reports that illuminate key patterns and highlights from past and present Games. The platform aims to enhance understanding and appreciation of the Olympics by offering data-driven insights into athletes' achievements, national performances, and event-specific statistics. Whether for sports enthusiasts, researchers, or media professionals, the Olympics Insight Hub serves as an invaluable resource for exploring the rich history and dynamics of the Olympic Games."},
      { url: ipl, Title: 'Complete IPL Data Breakdown: Trends, Records, and Performance Analysis',p_link:"",name:"Complete IPL Data Breakdown: Trends, Records, and Performance Analysis is an extensive analytical platform dedicated to the Indian Premier League (IPL), providing users with a thorough examination of historical and current data related to the tournament. This tool offers detailed insights into player performances, team statistics, match outcomes, and trend analysis over the years. Users can explore various metrics such as batting and bowling averages, win-loss records, and key performance indicators (KPIs) through interactive visualizations and comprehensive reports. Designed for cricket enthusiasts, analysts, and professionals, the platform enhances the understanding of IPL dynamics by uncovering patterns and records that shape the tournament's history. Whether for casual fans or serious analysts, the Complete IPL Data Breakdown serves as an essential resource for exploring the excitement and intricacies of one of cricket's most popular leagues." },
      { url: paintdefect, Title: 'Paint Defect Detection Using YOLO v8',p_link:"",name:"Paint Defect Detection Using YOLO v8 is an innovative project that leverages advanced deep learning techniques to identify and classify various paint defects on vehicles. Utilizing the YOLO (You Only Look Once) v8 model, this system enables real-time detection of issues such as scratches, dents, swirl marks,stain and corrosion on car surfaces. By training the model on a comprehensive dataset of annotated images, the project aims to enhance the accuracy and efficiency of defect identification, assisting mechanics and vehicle owners in maintaining the aesthetic quality of their cars. The user-friendly interface allows for easy integration into existing workflows, making it a valuable tool for automotive professionals and enthusiasts. Through its precise detection capabilities, this project not only improves repair processes but also contributes to better customer satisfaction by ensuring that vehicles are returned in pristine condition." },
      
    ],
    Certificates: [
      
      { url: certificate1, name:'HackerRank intermediate certification' },
      { url: certificate2, name: 'python and machine learning' }
      
    ],
  };
  const renderProjects = () => {
    return (
      <div className="grid-container">
        {projects.project.map((project, index) => (
          <div className="grid-item" key={index}>
            <img src={project.url} alt={`Project ${index + 1}`} />
            <div className="text">{project.name}</div>
          </div>
        ))}
      </div>
    );
  };

  const PDFViewer = () => {
    const [imageVisible, setImageVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
  
    const handleImageClick = (image) => {
      setSelectedImage(image);
      setImageVisible(true);
    };
  
    const handleCloseImageViewer = () => {
      setImageVisible(false);
    };
  
    return (
      <div className="pdf-viewer">
      {projects.Certificates.map((certificate, index) => (
        <div className="box" key={index} onClick={() => handleImageClick(certificate.url)}>
          <div className="box-content">
            <img src={certificate.url} alt={certificate.name} className="certificate-image" />
            <div className="certificate-text">{certificate.name}</div>
          </div>
        </div>
      ))}

      {imageVisible && (
        <div className="pdf-overlay" onClick={handleCloseImageViewer}>
          <div className="pdf-wrapper">
            <img src={selectedImage} alt="Selected Image" className="fullscreen-image" />
          </div>
        </div>
      )}
    </div>
    );
  };


  const renderDescriptions = () => {
    return (
        <div className="list-container">
            {projects.MiniDescription.map((project, index) => (
                <div className="list-item" key={index}>
                    <img src={project.url} alt={`Project ${index + 1}`} className="list-image" />
                    <div className="list-text">
                        <h3 className='list-text-header'>{project.Title}</h3>
                        <p className='list-text-para'>{project.name}</p>
                        {project.p_link && (
                            <a href={project.p_link} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
                                View
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};


  return (
    <div className="projects">
      <h1>Projects</h1>
      <p>Projects are a great way to demonstrate skills and experience. Below are some of my works, showcasing various skills in web development, Android, and machine learning.</p>
      <div className="tabs">
        <div className={`tab ${activeTab === 'project' ? 'active' : ''}`} onClick={() => setActiveTab('project')}>Project</div>
        <div className={`tab ${activeTab === 'MiniDescription' ? 'active' : ''}`} onClick={() => setActiveTab('MiniDescription')}>Description</div>
        <div className={`tab ${activeTab === 'KnowMore' ? 'active' : ''}`} onClick={() => setActiveTab('KnowMore')}>Certificate</div>
      </div>
      <div className="tab-content">
        {activeTab === 'project' ? renderProjects() : (activeTab === 'MiniDescription' ? renderDescriptions() : <PDFViewer />)}
      </div>
    </div>
  );
};

export default Projects;
