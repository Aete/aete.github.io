export const QRcity = {
  title: "QR City",
  people: ["Seunggyun Han", "Tae Jung Jung ", "Jun Hyung Jae ", "Jun Gyu Bang"],
  awarded: "Final Project at SKKU Design Modeling Class(Spring Semester, 2013)",
  description: `
    <iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameborder="0" height="315"
    src="https://www.youtube.com/embed/SgDSiHKZPd0"
    width="560" ></iframe>
    <h3>Objective</h3>
    <p>In this project, we wanted to make urban design tool that gives designer not only digital experience,
        but also analogue(sense of touch, tactile) experience.</p>
    <p>In design process, we do not communicate with each other through the mouse. People usually
        communicate with moving, turning, and tearing things with a pencil, pen, and hand. It is very
        inspiring way.</p>
    <p>On the other hand, for urban design (or large-scale buildings), it is essential to understand contact
        as well as appearance. Sometimes the physical, social and economic contexts determine most of the
        design of the site and buildings. </p>
    <p>What we wanted to create was a digital tool that could show the various contexts of cities and a
        platform in which many participants could evolve esign by doing things with their hands. Using AR
        technology, User checks entire shape and context of urban environment in digital display, and
        modifies by moving and changing QR markers </p>
    <img src="image/qrcity/qrcity0.jpg">
    <h3>Process</h3>
    <p>Programming Language : Processing</p>
    <p>QR City is simple program that detects QR markers in given image and creates buildings according to
        makers' position and pattern.
        Programming code was written in Processing, and we used OpenGL, NYAR4PSG, and GSvideo processing
        libraries</p>
    <p>We set every marker(1-100) has its own building information(usage, height, and etc.). Different
        color(red, yellow and etc.) means different usage.</p>
    <img src="image/qrcity/qrcity1.jpg">
    <p> The program detects the markers on the webcam and displays the unique building by calculation. Users
        can erase QR-markers and background when they finish.</p>
    <img src="image/qrcity/qrcity2.jpg">
    <h3>Possibility</h3>
    <p>We thought that ‘QR City’ could be developed as sustainable urban design tool, if there were any
        related data to use. For example, it could be developed for 'zero energy neighborhood' design tool
        with information about energy consumption of buildings and amount of sunshine. </p>
    <p>If we use data such as water, waste, and traffic, program can be developed as powerful tool for
        designing sustainable urban environment.</p>
    <img src="image/qrcity/qrcity3.jpg">
    `,
};
