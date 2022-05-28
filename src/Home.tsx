import React, { useState } from 'react';
import Loading from './Loading';
import Navbar from './navbar';
import './Home.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Comment from './Comment';
import Footer from './footer';
import Backtop from './Back_top';
const Home = () => {
  const [loader, setLoader] = useState(false);
  setTimeout(() => {
    setLoader(true);
  }, 2000);
  return (
    <>
      {loader ? (
        <>
          <Backtop />
          <section style={{ width: '100%', height: '100vh' ,background:'black'  }}>
            <Navbar logo={false} color="white" />
            <video
              className="cube"
              src="gallery/cube.mp4"
              autoPlay
              loop
              muted
            />
          </section>
          <section className="home_mobile">
            <img data-aos="zoom-in" src="gallery/home_mobile.jpg" alt="" />
            <div data-aos="zoom-in">
              <h1>MOBILE & COMPUTER</h1>
              <p className="lead">
                A mobile device is a general term for any type of handheld
                computer. These devices are designed to be extremely portable,
                and they can often fit in your hand. Some mobile devices—like
                tablets, e-readers, and smartphones—are powerful enough to do
                many of the same things you can do with a desktop or laptop
                computer.
              </p>
              <p className="lead">
                Like laptops, tablet computers are designed to be portable.
                However, they provide a different computing experience. The most
                obvious difference is that tablet computers don't have keyboards
                or touchpads. Instead, the entire screen is touch-sensitive,
                allowing you to type on a virtual keyboard and use your finger
                as a mouse pointer.
              </p>
              <Link to="/mo-co">
                <Button variant="contained" color="primary">
                  see more
                </Button>
              </Link>
            </div>
          </section>
          <section className="home_internet">
            <div data-aos="zoom-in" className="order-2 order-lg-1">
              <h1>INTERNET</h1>
              <p className="lead">
                The Internet (or internet)[a] is the global system of
                interconnected computer networks that uses the Internet protocol
                suite (TCP/IP)[b] to communicate between networks and devices.
                It is a network of networks that consists of private, public,
                academic, business, and government networks of local to global
                scope, linked by a broad array of electronic, wireless, and
                optical networking technologies. The Internet carries a vast
                range of information resources and services, such as the
                inter-linked hypertext documents and applications of the World
                Wide Web (WWW), electronic mail, telephony, and file sharing.
              </p>
              <p className="lead">
                The origins of the Internet date back to the development of
                packet switching and research commissioned by the United States
                Department of Defense in the 1960s to enable time-sharing of
                computers.[2] The primary precursor network, the ARPANET,
                initially served as a backbone for interconnection of regional
                academic and military networks in the 1970s.
              </p>
              <Link to="/internet">
                <Button variant="contained" color="primary">
                  see more
                </Button>
              </Link>
            </div>
            <img
              data-aos="zoom-in"
              className="order1 order-lg-2"
              src="gallery/home_internet.jpg"
              alt=""
            />
          </section>
          <section className="home_mobile">
            <img data-aos="zoom-in" src="gallery/strong_ai2.jpg" alt="" />
            <div data-aos="zoom-in">
              <h1>ARTIFICIAL INTELLIGENCE</h1>
              <p className="lead">
                Artificial intelligence (AI) refers to the simulation of human
                intelligence in machines that are programmed to think like
                humans and mimic their actions. The term may also be applied to
                any machine that exhibits traits associated with a human mind
                such as learning and problem-solving.
              </p>
              <p className="lead">
                The ideal characteristic of artificial intelligence is its
                ability to rationalize and take actions that have the best
                chance of achieving a specific goal. A subset of artificial
                intelligence is machine learning, which refers to the concept
                that computer programs can automatically learn from and adapt to
                new data without being assisted by humans. Deep learning
                techniques enable this automatic learning through the absorption
                of huge amounts of unstructured data such as text, images, or
                video.
              </p>
              <Link to="/ai">
                <Button variant="contained" color="primary">
                  see more
                </Button>
              </Link>
            </div>
          </section>
          <section>
            <Comment />
          </section>
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Home;
