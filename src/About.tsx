import React, { useState } from 'react';
import './About.css';
import Backtop from './Back_top';
import Comment from './Comment';
import Footer from './footer';
import Loading from './Loading';
import Navbar from './navbar';

const About = () => {
  const [loader, setLoader] = useState<boolean>(false);
  setTimeout(() => {
    setLoader(true);
  }, 2000);
  return (
    <>
      {loader ? (
        <div>
          <Backtop />
          <section className="about">
            {/* <img src="gallery/about5.jpg" alt="" width='100%' /> */}
            <Navbar color="white" logo={false} />
          </section>
          <section className="our_team">
            <img
              data-aos="zoom-in"
              src="gallery/about_who.png"
              alt=""
              width="50%"
            />
            <div data-aos="zoom-in">
              <h1>Who We Are</h1>
              <p className="lead">
                We are a bunch of creative professional nerds. We've been
                helping companies make or save money with their products by
                providing viscous technical solutions with innovative UI and UX.
              </p>
              <p className="lead">
                At Technology we are aware that creating client-oriented
                software takes a mixture of technical excellence and clear
                communication. We know that every client is unique and we strive
                to deliver an individual, innovative and affordable solution
                every time and to follow it through with an outstanding delivery
                which is both on time and within budget.
              </p>
            </div>
          </section>
          <section>
            <Comment />
          </section>
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default About;
