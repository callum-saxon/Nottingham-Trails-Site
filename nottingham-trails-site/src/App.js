import React, { useEffect, useState } from 'react';
import './App.css';
import appstoreButton from './images/appstore-button.png';
import playstoreButton from './images/playstore-button.png';
import appHome from './images/app-home.png';
import appMap from './images/app-map.png';
import appTours from './images/app-tours.png';
import logo from './images/nottingham-trails-logo.png';
import tourPlannerImage1 from './images/tour-planner-image-1.png';
import tourPlannerImage2 from './images/tour-planner-image-2.png';
import achievementshome from './images/achievements-home.png';
import featureImage1 from './images/feature-image-1.png';
import featureImage2 from './images/feature-image-2.png';
import featureImage3 from './images/feature-image-3.png';
import nottinghamcity from './images/Nottingham+city+Council+logo.png';
import fundedbyukgov from './images/funded-by-UK-government-logo.png';
import leveluplogo from './images/Powered-by-Levelling-Up-Blue-Writing.png';
import phslogo from './images/Pathway-Housing-Solutions-Building-Futures-big.png';

function App() {
  
  useEffect(() => {
    const images = document.querySelectorAll('.tour-planner-image-1, .tour-planner-image-2');

    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      images.forEach(image => {
        const speed = image.dataset.speed;
        image.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const images = document.querySelectorAll('.app-image');
    images.forEach(image => image.classList.add('spring-up'));
  }, []);

  const FaqItem = ({ question, answer, isOpen, onClick }) => (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="faq-title-container">
        <h3>{question}</h3>
        <span className="toggle-sign">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && <p>{answer}</p>}
    </div>
  );

  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqContent = [
    {
      question: "What is Nottingham Trails?",
      answer: "Nottingham Trails is a virtual tour app designed to help you explore the rich history and landmarks of Nottingham. Whether you’re a visitor or a local, our app provides guided tours, custom adventures, and interactive features to enhance your experience.",
    },
    {
      question: "How do I download the app?",
      answer: "You can download Nottingham Trails from the Apple App Store or the Google Play Store. Just search for 'Nottingham Trails' and install it on your device.",
    },
    {
      question: "Is Nottingham Trails free?",
      answer: "Nottingham Trails offers a free version with basic features. For a more enriched experience, including unlimited tours, offline access, and exclusive content, you can subscribe to our premium plans.",
    },
    {
      question: "What features are included in the premium version?",
      answer: "The premium version includes everything in the free version, plus unlimited virtual tours, exclusive premium tours, an interactive map with offline access, a full AI tour guide, audio guides, multimedia content, and advanced achievements and badges.",
    },
    {
      question: "How does the AI Tour Guide work?",
      answer: "Our AI Tour Guide is designed to provide real-time assistance during your tours. It answers your questions, offers additional information, and helps you navigate through Nottingham's landmarks, ensuring a seamless and informative experience.",
    },
    {
      question: "Can I create my own custom tours?",
      answer: "Yes! Nottingham Trails allows you to create custom virtual tours tailored to your interests. Choose from a variety of landmarks, set your preferences, and let the app guide you through your personalized adventure.",
    },
    {
      question: "Is there offline access?",
      answer: "Offline access is available with our premium subscription. This feature allows you to download maps and content, so you can explore Nottingham even without an internet connection.",
    },
    {
      question: "How do achievements and badges work?",
      answer: "Achievements and badges are awarded as you explore Nottingham, complete tours, and participate in quizzes. Collect them as milestones to track your progress and celebrate your journey through the city.",
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="header-left">
          <img src={logo} alt="Nottingham Trails Logo" className="logo" />
          <nav className="header-nav">
            <div className="nav-button" onClick={() => scrollToSection('features')}>Features</div>
            <div className="nav-button" onClick={() => scrollToSection('about-us')}>Premium</div>
            <div className="nav-button" onClick={() => scrollToSection('about-us')}>Partners</div>
            <div className="nav-button" onClick={() => scrollToSection('about-us')}>FAQs</div>
            <div className="nav-button" onClick={() => scrollToSection('contact-us')}>Contact Us</div>
          </nav>
        </div>
        <div className="header-right">
          <div className="nav-button" onClick={() => scrollToSection('download')}>Get The App</div>
        </div>
        <div className="header-line"></div>
      </header>
      <div className="main-content" id="download">
        <p className="app-description">
          Discover Nottingham with our virtual tours.<br />Download Nottingham Trails today.
        </p>
        <div className="app-buttons">
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
            <img src={appstoreButton} alt="Download on the App Store" className="store-button-img" />
          </a>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img src={playstoreButton} alt="Get it on Google Play" className="store-button-img" />
          </a>
        </div>
        <div className="app-images-container">
          <div className="app-image-wrapper">
            <img src={appTours} alt="App Tours" className="app-image left" />
            <img src={appHome} alt="App Home" className="app-image center" />
            <img src={appMap} alt="App Map" className="app-image right" />
          </div>
        </div>
      </div>

      <section id="features" className="section-features">
        <h2>In-App Features</h2>
        <p>
          Explore the Features of Nottingham Trails
        </p>
        <div className="features-cards">
          <div className="feature-card">
            <img src={featureImage1} alt="Custom Virtual Tours" className="feature-card-image" />
            <div className="card-content">
              <h3>Custom Virtual Tours</h3>
              <p>Explore Nottingham’s landmarks with guided tours, or create your own custom virtual adventure with custom virtual tours.</p>
            </div>
          </div>
          <div className="feature-card">
            <img src={featureImage2} alt="Virtual AI Tour Guide" className="feature-card-image" />
            <div className="card-content">
              <h3>Virtual AI Tour Guide</h3>
              <p>Get answers on the go with our AI tour guide, ready to assist with any questions during your journey.</p>
            </div>
          </div>
          <div className="feature-card">
            <img src={featureImage3} alt="Quizzes" className="feature-card-image" />
            <div className="card-content">
              <h3>Quizzes</h3>
              <p>Test your knowledge with fun quizzes on Nottingham's landmarks. Perfect for making learning fun for the whole family.</p>
            </div>
          </div>
        </div>
        <p className="more-features">+ Much More</p>
      </section>

      <section id="tour-planner" className="section-tour-planner">
        <div className="section-line"></div>
        <div className="tour-planner-content">
          <div className="tour-planner-text">
            <h2>Tour Planner</h2>
            <p className="tour-planner-title">Personalised Weekly Adventures.</p>
            <p className="tour-planner-description">
              Not sure where to start? Let our AI Tour Planner customise your week with a perfect blend of must-see landmarks and hidden gems. Whether you prefer a relaxed stroll or an adventurous exploration, it adjusts to your preferences and keeps your schedule on track.
            </p>
            <a href="#your-link-here" className="tour-planner-button">Plan Your Week →</a>
          </div>
          <div className="tour-planner-images glow-wrapper">
            <img src={tourPlannerImage1} alt="Tour Planner" className="tour-planner-image-1" data-speed="0.1" />
            <img src={tourPlannerImage2} alt="Tour Planner" className="tour-planner-image-2" data-speed="0.15" />
          </div>
        </div>
        <div className="section-line"></div>
      </section>

      <section id="get-info" className="section-get-info">
        <div className="get-info-content">
          <div className="get-info-text">
            <h2>Get Info</h2>
            <p className="get-info-title">"So Much To Learn!"</p>
            <p className="get-info-description">
              Explore Nottingham at your own pace with our app's guided tours and quick insights. Dive deep or skim the surface—it's your journey.<br/>Nottingham Trails is your gateway to endless learning.
            </p>
            <a href="#your-link-here" className="get-info-button">Unlock the Secrets →</a>
          </div>
        </div>
        <div className="get-info-image">
          <div class="glow-wrapper">
            <img src={appHome} alt="Tour Planner" className="get-info-image-1" />
          </div>
        </div>
        <div className="section-line"></div>
      </section>

      <section id="achievements" className="section-achievements">
        <div className="achievements-content">
          <div className="achievements-image">
            <div class="glow-wrapper">
              <img src={achievementshome} alt="Tour Planner" className="achievements-image-1" />
            </div>
          </div>
          <div className="achievements-text">
            <h2>Achievements</h2>
            <p className="get-info-title">Celebrate Your Exploration</p>
            <p className="achievements-description">
              Celebrate your journey through Nottingham with every achievement! Earn badges for attending live tours, exploring new areas, and mastering quizzes. Each badge marks a milestone in your adventure.<br/> Start collecting and let your achievements tell your story!
            </p>
            <a href="#your-link-here" className="achievements-button">Start Collecting →</a>
          </div>
        </div>
        <div className="section-line"></div>
      </section>

      <section id="premium-features" className="section-premium-features">
        <h2>Access Premium Features</h2>
        <p>Flexible pricing plans to suit you best</p>
        <div className="premium-cards-wrapper">
          <div className="premium-cards">
            <div className="premium-card">
              <h3>Basic</h3>
              <p className="price">Free<span className="price-duration">/ forever</span></p>
              <p>Get started with essential features.</p>
              <a href="#get-started" className="premium-button">Get started</a>
              <ul className="features-list">
                <li>Access to basic features</li>
                <li>Limited virtual tours</li>
                <li>Basic map access</li>
                <li>Text-based information</li>
                <li>Single custom tour</li>
                <li>Limited achievements and badges</li>
                <li><span className="feature-limit">No offline access</span></li>
                <li><span className="feature-limit">Ads included</span></li>
              </ul>
            </div>
            <div className="premium-card">
              <h3>Monthly Subscription</h3>
              <p className="price">£6.99<span className="price-duration">/ month</span></p>
              <p>Enhance your experience.</p>
              <a href="#get-started" className="premium-button">Select Plan</a>
              <ul className="features-list">
                <li>Everything in Free plus...</li>
                <li>Unlimited virtual tours</li>
                <li>Exclusive premium tours</li>
                <li>Interactive map with offline access</li>
                <li>Full AI tour guide</li>
                <li>Audio guides and multimedia content</li>
                <li>Multiple custom tours</li>
                <li>Advanced achievements and badges</li>
                <li><span className="feature-bonus">Ad-free experience</span></li>
              </ul>
            </div>
            <div className="premium-card premium-card-special">
              <div className="discount-badge">Launch Discount!<br/>30% OFF</div>
              <h3>One-time Purchase</h3>
              <p className="price">
                £17.49<span className="original-price">£24.99</span>
                <span className="price-duration">/ single payment</span>
              </p>
              <p>Full access with no recurring fees.</p>
              <a href="#get-started" className="premium-button">Select Plan</a>
              <ul className="features-list">
                <li>Everything in Monthly Subscription.</li>
                <li>Non-recurring Billing.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-line"></div>

      <section id="partners" className="section-partners">
        <div className="partners-content">
          <h2>Our Partners</h2>
          <p>We are proud to collaborate with leading organisations to bring the best experiences to you.</p>
          <div className="partners-logos">
            <div className="partner">
              <img src={nottinghamcity} alt="Nottingham City Council" className="partner-logo" />
            </div>
            <div className="partner">
              <img src={fundedbyukgov} alt="UK Government" className="partner-logo" />
            </div>
            <div className="partner">
              <img src={leveluplogo} alt="Levelling Up" className="partner-logo" />
            </div>
          </div>
        </div>
      </section>

      <div className="section-line"></div>

      <section id="faq" className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqContent.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaqIndex === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
      </section>

      <div className="section-line"></div>
      
      <section id="footer" className="footer-section">
        <div className="footer-top">
          <div className="footer-logo-text">
            <img src={logo} alt="Nottingham Trails Logo" className="footer-logo-img" />
            <p className="footer-slogan">Explore Nottingham like never before.</p>
          </div>
          <div className="footer-contact-links">
            <div className="footer-listen">
              <h3>Find us at:</h3>
              <p>Instagram</p>
              <p>X</p>
            </div>
            <div className="footer-links">
              <h3>Explore</h3>
              <ul>
                <li><a href="#features" onClick={() => scrollToSection('features')}>Features</a></li>
                <li><a href="#premium-features" onClick={() => scrollToSection('premium-features')}>Premium</a></li>
                <li><a href="#partners" onClick={() => scrollToSection('partners')}>Partners</a></li>
                <li><a href="#about-us" onClick={() => scrollToSection('about-us')}>About Us</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h3>Contact</h3>
              <a href="mailto:info@nottinghamtrails.app">info@nottinghamtrails.app</a>
              <a href="#contact-us" className="contact-button">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>We are a <img src={phslogo} alt="Pathway Housing Solutions Logo" className="footer-bottom-logo-img" /> company</p>
          <p>© 2024 Nottingham Trails. All rights reserved.</p>
        </div>
      </section>


      <section id="about-us" className="section-about">
        {/* Add your "The Story" section content here */}
      </section>
      <section id="contact-us" className="section-contact">
        {/* Add your "Contact Us" section content here */}
      </section>
    </div>
  );
}

export default App;
