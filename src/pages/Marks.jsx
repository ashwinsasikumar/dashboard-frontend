import styles from "../styles/Marks.module.css";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
export default function Marks() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.topbox}>
        <Button
          Name={"Main"}
          Click={() => navigate("/dashboard-frontend/Maind")}
        ></Button>
        <Button
          Name={"Academics"}
          Click={() => navigate("/dashboard-frontend/Academics")}
        ></Button>
        <IoMdNotificationsOutline className={styles.notify} size={30} />
        <IoSettingsOutline className={styles.settings} size={30} />
      </div>
      <h1>Marks Overview</h1>
      <h3>
        Stay on top of your academic progress with a detailed breakdown of your
        subject-wise performance.
      </h3>
      <h2>Overall Performance:</h2>
      <p> Average Percentage: 78%</p>
      <p>Top Scoring Subject: Operating Systems (90%)</p>
      <p>Subject That Needs Improvement: Database Management Systems (65%)</p>
      <div className={styles.points}>
        <h2> Upcoming Exams & Assignments:</h2>
        <p>Next Unit Test: March 10, 2025</p>
        <p>Assignment Due: Data Structures – March 5, 2025</p>
        <h4>Contact your subject faculty for guidance</h4>
        <h4>Visit the learning resources section for additional materials</h4>
      </div>
    </div>
  );
}
