import "./Content.css";
import data from "../data.json";

const Content = () => {
  return (
    <div className="content_Container">
      {data.map((job) => (
        <div className="content_Box" key={job.id}>
          <img className="companylogo" src={job.logo} />
          <div className="content_Content_SubBox">
            <div className="content_Content_Header_Content">
              <a className="content_Time_Added">{job.postedAt}</a>
              <div className="content_Dot"></div>
              <a className="content_Job_Type">{job.contract}</a>
            </div>
            <a className="content_Position">{job.position}</a>
            <a className="content_Company_Name">{job.company}</a>
            <a className="content_country">{job.location}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
