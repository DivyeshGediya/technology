import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Ai.css';
import Backtop from './Back_top';
import Footer from './footer';
import Loading from './Loading';
import Navbar from './navbar';

const Ai = () => {
  const [loader, setLoader] = useState<boolean>(false);
  setTimeout(() => {
    setLoader(true);
  }, 2000);
  const [state, setState] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      if (state) {
        setState(false);
      } else {
        setState(true);
      }
    }, 2000);
  }, [state]);
  return (
    <>
      {loader ? (
        <div>
          <Backtop />
          <section style={{ width: '100%', height: '100vh' }}>
            <Navbar color="black" logo={true} />
            <img className="cube" src="gallery/ai1.jpg" alt="" />
            <div className="cube robot" data-aos="zoom-in">
              <img
                className={`${state ? 'robotpng' : 'r_Ani'}`}
                src="gallery/r4.png"
                alt=""
                width="5%"
              />
              <img
                className={`${state ? 'robotpng' : 'r_Ani'}`}
                src="gallery/r5.png"
                alt=""
                width="6%"
              />
              <img
                className={`${state ? 'robotpng' : 'r_Ani'}`}
                src="gallery/r1.png"
                alt=""
                width="9%"
              />
              <img
                className={`${state ? 'robotpng' : 'r_Ani'}`}
                src="gallery/r6.png"
                alt=""
                width="6%"
              />
              <img
                className={`${state ? 'robotpng' : 'r_Ani'}`}
                src="gallery/r7.png"
                alt=""
                width="5%"
              />
            </div>
          </section>
          <section className="type_section">
            <h1 data-aos="zoom-in" className="mt-5 display-1">
              Two Types of Artificial intelligence
            </h1>
            <div className="two_type">
              <div data-aos="zoom-in">
                <h2>Weak Ai</h2>
                <img src="gallery/weak_ai.jpg" alt="" width="100%" />
              </div>
              <div data-aos="zoom-in">
                <h2>Srong Ai</h2>
                <img src="gallery/strong_ai.jpg" alt="" width="100%" />
              </div>
            </div>
          </section>
          <section style={{ position: 'relative' }}>
            <img src="gallery/ai4.jpg" alt="" width="100%" height="70%" />
            <div style={{ position: 'absolute', top: '0', width: '100%' }}>
              <img
                data-aos="zoom-in"
                style={{ margin: '3%' }}
                src="gallery/ai_svg1.png"
                alt=""
                width="20%"
              />
              <img
                data-aos="zoom-in"
                style={{ margin: '3%', position: 'absolute', right: '0' }}
                src="gallery/ai_svg2.png"
                alt=""
                width="23%"
              />
              <img
                data-aos="zoom-in"
                style={{
                  margin: '5%',
                  position: 'absolute',
                  left: '0',
                  top: '120%',
                }}
                src="gallery/ai_svg4.png"
                alt=""
                width="35%"
              />
              <img
                data-aos="zoom-in"
                style={{ position: 'absolute', right: '0', top: '150%' }}
                src="gallery/ai_svg3.png"
                alt=""
                width="37%"
              />
            </div>
          </section>
          <section className="sophia_section">
            <div className='order-2 order-lg-1' data-aos="zoom-in">
              <h1>Sophia Saudi Arabia</h1>
              <p className="lead">
                In 2017, social robot Sophia was given citizenship of Saudi
                Arabia – the first robot to be given legal personhood anywhere
                in the world. Bestowed with this great gift, Sophia has embarked
                on a distinguished career in marketing. Sophia’s creator, David
                Hanson, argues that the opportunity was used to “speak out on
                women’s rights”, a statement that sits somewhat awkwardly in
                Saudi Arabia, a country in which women have only just been given
                the right to drive and where “male guardianship” still exists,
                meaning many women have to ask permission from male relatives or
                partners to leave the house, get a passport, get married or even
                file police reports for domestic violence or sexual assault. The
                citizenship stunt seemed more akin to a marketing campaign – for
                Sophia and Saudi Arabia – than it did a genuine statement on
                humanity, dignity or personhood.Since obtaining personhood,
                Sophia has gone on a whistle-stop marketing tour – CES, the
                Digital World Exposition, the Creative Industry Summit – and has
                used her Twitter account to promote tourism in Abu Dhabi, a
                smartphone, a Channel 4 show, and a credit card.
              </p>
            </div>
            <video className='order-1 order-lg-2' width="50%" controls autoPlay loop muted data-aos="zoom-in">
              <source src="gallery/Sophia video.mp4" type="video/mp4" />
            </video>
          </section>
          <section className="neuralink_section">
            <img src="gallery/Neuralink.jpeg" alt="" data-aos="zoom-in" />
            <div className="p-5" data-aos="zoom-in">
              <h1>Neuralink Technology</h1>
              <p className="lead">
                Neuralink is developing two bits of equipment. The first is a
                chip that would be implanted in a person's skull, with
                electrodes fanning out into their brain.The chip Neuralink is
                developing is about the size of a coin, and would be embedded in
                a patients' skull. From the chip an array of tiny wires, each
                roughly 20 times thinner than a human hair, fan out into the
                patient's brain. The wires are equipped with 1,024 electrodes
                which are able to both monitor brain activity and,
                theoretically, electrically stimulate the brain. This data is
                all transmitted wirelessly via the chip to computers where it
                can be studied by researchers.
              </p>
              <a href="https://neuralink.com/" target="_blank">
                <Button variant="contained" color="primary">
                  see more
                </Button>
              </a>
            </div>
          </section>
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default Ai;
