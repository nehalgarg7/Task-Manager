import "../css/AboutMe.css";

function AboutMe() {
  return (
    <>
      <div className="details">
        <div className="companyDetails">
          <h2>
            This is an assignment given by{" "}
            <span id="companyName">AulaCube Technologies</span>.
          </h2>
        </div>

        <div className="user-details">
          <table>
            <thead>
              <td colSpan="2">
                {" "}
                <span id="Mydetail">My Details</span>{" "}
              </td>
            </thead>
            <tr>
              <td>
                <strong>Name</strong>
              </td>
              <td>Nehal Garg</td>
            </tr>
            <tr>
              <td>
                <strong>Email</strong>
              </td>
              <td>
                <a href="mailto:nehalgarg37@gmail.com">nehalgarg37@gmail.com</a>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Phone No </strong>
              </td>
              <td>7759800660, 8094189739</td>
            </tr>
            <tr></tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
