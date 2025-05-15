const root = ReactDOM.createRoot(document.getElementById("root"));

const main = (
  <main id="main" className="container py-3 m-4">
    <div className="row">
      <div className="col-4 border-end border-2 border-dark p-3 text">
        <h1 id="name"  className="fw-bolder text">Intisar Alosaimi</h1>
        <div id="contact" className="text-justify">
          <ul>
            <li> Email: Intisar.alotaibi@gmail.com</li>
            <li> Phone: +966 503088619</li>
            <li> LinkedIn: https://www.linkedin.com/in/intisar-alotaibi/</li>
          </ul>
        </div>

        <ul className="d-flex gap-1">
          <li className="badge text-bg-success">Web Developer</li>
          <li className="badge text-bg-success">solution Architect</li>
        </ul>
      </div>

      <div className="col-8 text-bg-light p-3">
        <h2 id="summary" className="fw-bold">Summary</h2>
        <p id="profile" className="text-justify">
          I am a dedicated IT graduate with a solid background in software
          development, cloud computing, and machine learning. I hold multiple
          AWS certifications, including Solutions Architect – Associate, and
          Machine Learning – Specialty, reflecting my deep interest and hands-on
          expertise in cloud and AI technologies. My practical experience
          includes working with React, Python, and AWS to build secure, scalable
          systems and intuitive web applications.
        </p>
        <h2 id="education"  className="fw-bold">Education</h2>
        <p id="edu">
          Saudi Electronic University (SEU), Riyadh. Graduated: June 2024
          Bachelor of Science in Information Technology (IT) GPA: 3.67/4
          (Excellent, Second-Class Honor)
        </p>
        <h2 id="certificates"  className="fw-bold">Certificates</h2>
        <p id="certs">
          Full-Stack JavaScript Developer Bootcamp – Tuwaiq Academy, Apr 2025 –
          July 10, 2025
          <br />
          AWS Certified Solutions Architect – Associate
          <br />
          AWS Certified Machine Learning – Specialty
          <br />
          AWS Certified Cloud Practitioner
        </p>
        <h2 id="experience"  className="fw-bold">Experience</h2>
        <p id="experience">
          IT Support Specialist (PMAH) – Riyadh, 2024 Supported IT
          infrastructure by troubleshooting software and hardware issues while
          managing support requests. Assisted in training new hires in
          department processes and contributed to improving workflow efficiency
          and user experience by designing a ticketing system and refining
          mock-up designs for an internal website.
        </p>
        <h2 id="skills"  className="fw-bold">Skills</h2>
        <div id="skill">
          <ul>
            <li>Web Development</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </div>
        <h2 id="project"  className="fw-bold">Projects</h2>
        <div id="projects">
          <p id="ProjectDetails">
            Project Lead | Hewaya Link (Senior Project) – Mar 2023 to Dec 2023 -
            Developed a full-stack web application using the MERN (MongoDB,
            Express.js, React.js, Node.js) stack. - Designed and implemented
            secure user authentication and an email verification system. -
            Developed and integrated a chatbot to handle frequently asked
            questions, improving user support. - Led UI/UX design and
            development to create an intuitive and user-friendly interface. -
            Implemented a user upload system utilizing a third-party cloud
            storage solution. - Designed and developed a gamified system for
            content sharing, incorporating levels, points, and rewards to
            enhance user engagement. - Managed the project timeline, coordinated
            team efforts, and ensured timely delivery.
          </p>
          <h2 id="languages"  className="fw-bold">Languages</h2>
          <p id="languages">Languages: English - fluent(IELTS: 7.5), Arabic</p>
        </div>
      </div>
    </div>
  </main>
);

root.render(main);
