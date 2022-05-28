import React, { useState } from 'react';
import Demo from './Demo';
import Navbar from './navbar';
import './Mo_Co.css';
import Footer from './footer';
import Backtop from './Back_top';
import Loading from './Loading';

const Mobile = () => {
  const [loader, setLoader] = useState(false);
  setTimeout(() => {
    setLoader(true);
  }, 2000);
  return (
    <>
      {loader ? (
        <>
          <div>
            <Backtop />
            <Navbar logo={false} color="white" />
            <section style={{ width: '100%', height: '85vh' }}>
              <img className="cube" src="gallery/mo_co4.jpg" alt="" />
            </section>
            <section>
              <Demo />
            </section>
            <section className="processer">
              <h1 data-aos="zoom-in" className="pro_title">
                Processor
              </h1>
              <div className="processor1">
                <img data-aos="zoom-in" src="gallery/processor1.png" alt="" />
                <div data-aos="zoom-in" className="processor_text">
                  <h1>The basic elements of a processor</h1>
                  <ul className="lead">
                    <li>
                      The arithmetic logic unit (ALU), which carries out
                      arithmetic and logic operationson the operands in
                      instructions.{' '}
                    </li>
                    <li>
                      The floating point unit (FPU), also known as a math
                      coprocessor or numeric coprocessor, a specialized
                      coprocessorthat manipulates numbers more quickly than the
                      basic microprocessor circuitry can.
                    </li>
                    <li>
                      Registers, which hold instructions and other data.
                      Registers supply operands to the ALU and store the results
                      of operations.
                    </li>
                    <li>
                      L1 and L2cache memory. Their inclusion in the CPU saves
                      time compared to having to get data from random access
                      memory (RAM).
                    </li>
                  </ul>
                </div>
              </div>

              <div className="processor1">
                <img
                  data-aos="zoom-in"
                  className="order-1 order-lg-2"
                  src="gallery/processer2.png"
                  alt=""
                />
                <div
                  data-aos="zoom-in"
                  className="processor_text order-2 order-lg-1"
                >
                  <h1>CPU Operations</h1>
                  <ul className="lead">
                    <li>
                      Fetch- is the operation which receives instructions from
                      program memory from a systems RAM.
                    </li>
                    <li>
                      Decode- is where the instruction is converted to
                      understand which other parts of the CPU are needed to
                      continue the operation. This is performed by the
                      instruction decoder
                    </li>
                    <li>
                      Execute- is where the operation is performed. Each part of
                      the CPU that is needed is activated to carry out the
                      instructions.
                    </li>
                    <li>
                      The design complexity of CPUs increased as various
                      technologies facilitated building smaller and more
                      reliable electronic devices.{' '}
                    </li>
                    <li>
                      Transistorized CPUs during the 1950s and 1960s no longer
                      had to be built out of bulky, unreliable and fragile
                      switching elements like vacuum tubes and relays.
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="display">
              <h1 data-aos="zoom-in" className="pro_title">
                Display Types
              </h1>
              <img
                data-aos="zoom-in"
                src="gallery/display.png"
                alt=""
                width="100%"
              />
              <div className="display_text">
                <ul data-aos="zoom-in">
                  <li>Cathode ray tube display (CRT)</li>
                  <li>Light-emitting diode display (LED)</li>
                  <li>Electroluminescent display (ELD)</li>
                  <li>Electronic paper, E Ink</li>
                  <li>Plasma display panel (PDP)</li>
                  <li>
                    Liquid crystal display (LCD)
                    <dd className="mx-3">
                      High-Performance Addressing display (HPA)
                    </dd>
                    <dd className="mx-3">Thin-film transistor display (TFT)</dd>
                  </li>
                  <li>Organic light-emitting diode display (OLED)</li>
                </ul>
                <ul data-aos="zoom-in">
                  <li>Digital Light Processing display (DLP)</li>
                  <li>
                    Surface-conduction electron-emitter display (SED)
                    (experimental)
                  </li>
                  <li>Field emission display (FED) (experimental)</li>
                  <li>Laser TV (forthcoming)</li>
                  <li>Carbon nanotubes (experimental)</li>
                  <li>Quantum dot display (QLED)</li>
                  <li>Interferometric modulator display (IMOD)</li>
                  <li>Digital microshutter display (DMS)</li>
                  <li>microLED (in development)</li>
                </ul>
              </div>
            </section>
            <section className="vrback">
              <div>
                <img
                  data-aos="zoom-in"
                  src="gallery/mo_co5.jpg"
                  alt=""
                  width="100%"
                />
                <div className="vr_text">
                  <h1>Virtual Reality Headset</h1>
                  <p className="lead">
                    The Sega VR, announced in 1991 and seen in early 1993 at the
                    Winter CES, was never released for consoles,[4] but was
                    utilized for the Sega VR-1 motion simulator arcade
                    attraction in 1994.[5][6] Another early VR headset, the
                    Forte VFX1, was announced at CES in 1994. The VFX-1 has
                    stereoscopic displays, 3-axis head-tracking, and stereo
                    headphones.[7] Sony, another pioneer, released the Glasstron
                    in 1997, which has an optional positional sensor, allowing
                    the wearer to view the surroundings, with the perspective
                    moving as the user's head moves, giving a deep sense of
                    immersion. These VR headsets gave MechWarrior 2 players a
                    new visual perspective of seeing the battlefield from inside
                    the cockpit of their craft. However, these early headsets
                    failed commercially due to their limited technology,[8][9]
                    and they were described by John Carmack as like "looking
                    through toilet paper tubes".[10]
                  </p>
                </div>
              </div>
            </section>
            <Footer />
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Mobile;
