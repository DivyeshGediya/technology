import React, { useState } from 'react';
import Backtop from './Back_top';
import Navbar from './navbar';
import './internet.css';
import { Button } from '@mui/material';
import Footer from './footer';
import Loading from './Loading';

const Internet = () => {
  const [loader, setLoader] = useState(false);
  setTimeout(() => {
    setLoader(true);
  }, 2000);
  const tableData = [
    { type: 'Cable', range: 'Up to 100 Mbps' },
    { type: 'Dial-up', range: 'Up to 56 Kbps' },
    { type: 'DSL', range: 'Up to 200 Mbps' },
    { type: 'Fiber-optic', range: 'Up to 2,000 Mbps' },
    { type: 'Fixed wireless', range: 'Up to 100 Mbps' },
    { type: 'Satellite', range: 'Up to 100 Mbps' },
  ];
  return (
    <>
      {loader ? (
        <div>
          <Backtop />
          <Navbar color="white" logo={false} back={'rgba(0,0,0,0.92)'} />
          <div className="internet">
            <embed
              className="internet_web"
              src="http://internet-map.net/#5-121.22834722756258-47.51044612356302"
              title="internet"
            />
          </div>
          <div className="what_internet">
            <div data-aos="zoom-in">
              <h1>What is Internet</h1>
              <p className="lead">
                Internet, a system architecture that has revolutionized
                communications and methods of commerce by allowing various
                computer networks around the world to interconnect. Sometimes
                referred to as a “network of networks,” the Internet emerged in
                the United States in the 1970s but did not become visible to the
                general public until the early 1990s. By 2020, approximately 4.5
                billion people, or more than half of the world’s population,
                were estimated to have access to the Internet. The Internet
                provides a capability so powerful and general that it can be
                used for almost any purpose that depends on information, and it
                is accessible by every individual who connects to one of its
                constituent networks. It supports human communication via social
                media, electronic mail (e-mail), “chat rooms,” newsgroups, and
                audio and video transmission and allows people to work
                collaboratively at many different locations. It supports access
                to digital information by many applications, including the World
                Wide Web. The Internet has proved to be a spawning ground for a
                large and growing number of “e-businesses” (including
                subsidiaries of traditional “brick-and-mortar” companies) that
                carry out most of their sales and services over the Internet.
              </p>
              <a href="https://www.submarinecablemap.com/" target='_blank'>
                <Button variant="contained" color="primary">
                  see internet map
                </Button>
              </a>
            </div>
            <img data-aos="zoom-in" src="gallery/internet1.jpg" alt="" />
          </div>
          <div className="what_internet">
            <img data-aos="zoom-in" src="gallery/internet_cable.jpg" alt="" />
            <div data-aos="zoom-in" className="speedtable">
              <h1>Internet Speed</h1>
              <div>
                <table>
                  <thead>
                    <tr className="tablehead">
                      <th>Internet type</th>
                      <th>Speed range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((v, i) => (
                      <tr key={i} className="tabletd">
                        <td>{v.type}</td>
                        <td>{v.range}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <a href="https://fast.com/" target='_blank'>
                <Button variant="contained" color="primary">
                  Check Your Speed
                </Button>
              </a>
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Internet;
