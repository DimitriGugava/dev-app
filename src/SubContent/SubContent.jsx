import "./SubContent.css";

const SubContent = () => {
  return (
    <div className="subContent_Container">
      <div className="subContent_Header_Box">
        <img className="subContent_Company_Logo" />
        <div className="subContent_Company_NameWeb_Box">
          <a className="subContent_Company_Name">Scoot</a>
          <a className="subContent_Company_Website">scoot.com</a>
        </div>
        <button className="subContent_Company_Website_Button">
          <a className="subContent_Company_Website_Button_Text">Company Site</a>
        </button>
      </div>

      <div className="subContent_Company_SubContainet">
        <div className="subContent_Company_SubContainet_Info_Box">
          <div className="subContent_Company_SubContainet_Info_Box_HeaderBox">
            <a className="subContent_Company_SubContainet_Info_Box_HeaderBox_TimeText">
              1w ago
            </a>
            <div className="subContent_Company_SubContainet_Info_Box_HeaderBox_Dot"></div>
            <a className="subContent_Company_SubContainet_Info_Box_HeaderBox_TimeText">
              Part Time
            </a>
          </div>
          <a className="subContent_Company_SubContainet_Info_Box_RoleTitle">
            Senior Software Engineer
          </a>

          <a className="subContent_Company_SubContainet_Info_Box_Location">
            United Kingdrom
          </a>
        </div>

        <button className="subContent_Button">Apply Now</button>
        <a className="subContent_Job_Description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas,
          ante et vulputate volutpat, eros pede semper est, vitae luctus metus
          libero eu augue. Morbi purus libero, faucibus adipiscing, commodo
          quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
          tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a
          ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien
          ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus
          sed, urna.
        </a>

        <div className="subContent_Job_Requirements_Box">
          <a className="subContent_Job_Requirements_Box_Header">Requirements</a>
          <a className="subContent_Job_Requirements_Box_Text">
            Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna
            a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
            libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
            varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna.
            Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget,
            gravida vitae, ultricies ac, leo. Integer leo pede, ornare a,
            lacinia eu, vulputate vel, nisl.
          </a>
        </div>
        <ul className="subContent_Job_Requirements_Bullet_Points">
          <li className="subContent_Job_Requirements_Bullet_Points_Text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </li>
          <li className="subContent_Job_Requirements_Bullet_Points_Text">
            Aliquam tincidunt mauris eu risus.
          </li>
          <li className="subContent_Job_Requirements_Bullet_Points_Text">
            Vestibulum auctor dapibus neque.
          </li>
          <li className="subContent_Job_Requirements_Bullet_Points_Text">
            Nunc dignissim risus id metus.
          </li>
          <li className="subContent_Job_Requirements_Bullet_Points_Text">
            Cras ornare tristique elit.
          </li>
          <li className="subContent_Job_Requirements_Bullet_Points_Text">
            Vivamus vestibulum ntulla nec ante.
          </li>
          <li className="subContent_Job_Requirements_Bullet_Points_Text">
            Praesent placerat risus quis eros.
          </li>
          <li className="subContent_Job_Requirements_Bullet_Points_Text">
            Fusce pellentesque suscipit nibh.
          </li>
        </ul>
        <div className="subContent_Job_Description">
          <a className="subContent_Job_Description_Header">What You Will Do</a>
          <a className="subContent_Job_Description_Text">
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
            luctus metus libero eu augue. Morbi purus libero, faucibus
            adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
            elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
            volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
            pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
            fermentum et, dapibus sed, urna.
          </a>
          <ol className="subContent_Job_Description_ListBox">
            <li className="subContent_Job_Description_ListBox_Text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            </li>
            <li className="subContent_Job_Description_ListBox_Text">
              Aliquam tincidunt mauris eu risus.
            </li>
            <li className="subContent_Job_Description_ListBox_Text">
              Vestibulum auctor dapibus neque.
            </li>
            <li className="subContent_Job_Description_ListBox_Text">
              Nunc dignissim risus id metus.
            </li>
          </ol>
        </div>
        <div className="subContent_Apply_Button_Box">
          <button className="subContent_Apply_Button">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default SubContent;
