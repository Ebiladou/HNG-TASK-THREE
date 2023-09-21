import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import Deer from '../assets/deer.jpg'; 
import Wolf from '../assets/wolves.jpg'; 
import Orange from '../assets/oranges.jpg'; 
import Apple from '../assets/apple.jpg'; 
import SunsetRock from '../assets/sunset-rock.jpg'; 
import Sunset from '../assets/sunset.jpg'; 

function Section() {
  { /**const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: Deer, tag: 'nature' },
    { src: Wolf, tag: 'nature' },
    { src: Orange, tag: 'food' },
    { src: Apple, tag: 'food' },
    { src: SunsetRock, tag: 'soothing' },
    { src: Sunset, tag: 'soothing' },
    
  ];

  useEffect(() => {
    const h2Elements = document.querySelectorAll('.animated-text h2');

    function animateImage(index) {
      const currentTag = h2Elements[index].textContent.toLowerCase();
      const filteredImages = images.filter((img) => img.tag === currentTag);
      const randomImages = filteredImages.slice(0, 2);

      gsap.from('.animated-image-container img', {
        opacity: 0,
        transform: 'translateY(50px)',
        duration: 0.5,
        ease: 'power2.out',
        stagger: 0.2,
        onComplete: () => {
          gsap.to('.animated-image-container', {
            x: '100%',
            duration: 0.5,
            ease: 'power2.in',
            onComplete: () => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % h2Elements.length);
              setTimeout(() => {
                animateImage(currentIndex);
              }, 500);
            },
          });
        },
      });

      setImageElements(randomImages.map((img) => <img src={img.src} alt="image" />));
    }

    animateImage(currentIndex);
  }, [currentIndex]);
const [imageElements, setImageElements] = useState([]); **/}

  const h2Elements = ['Nature images', 'Food collage', 'Soothing frames'];

  return (
    <div className='section-container'>
      <div className="animated-text">
        <h1>Get your next...</h1>
        {h2Elements.map((text, index) => (
          <h2 key={index}>{text}</h2>
        ))}
      </div>
      <div className="animated-image">
        <div className="animated-image-container">
        </div>
      </div>
    </div>
  );
}

export default Section;