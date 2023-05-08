import "./Content.css";
import companylogo from "../icons/companylogo.svg";
const Content = () => {
  return (
    <div className="content_Container">
      <div className="content_Box">
        <img className="companylogo" src={companylogo} />
        <div className="content_Content_SubBox">
          <div className="content_Content_Header_Content">
            <a className="content_Time_Added">5h ago</a>
            <div className="content_Dot"></div>
            <a className="content_Job_Type">Full Time</a>
          </div>
          <a className="content_Position">Senior Software Engineer</a>
          <a className="content_Company_Name">Scoot</a>
          <a className="content_country">United Kingdom</a>
        </div>
      </div>
    </div>
  );
};

export default Content;
