import styles from "../styles/Academics.module.css";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
export default function Academics() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.topbox}>
          <Button
            Name={"Main"}
            Click={() => navigate("/dashboard-frontend/Maind")}
          ></Button>
          <Button
            Name={"Marks"}
            Click={() => navigate("/dashboard-frontend/Marks")}
          ></Button>
          <IoMdNotificationsOutline className={styles.notify} size={30} />
          <IoSettingsOutline className={styles.settings} size={30} />
        </div>
        <h1>Academics Overview</h1>
        <h4>
          Stay on top of your courses, syllabus, and study materials all in one
          place.
        </h4>
        <p>
          Download lecture slides, reference books, and additional reading
          materials.
        </p>
        <p> • 📂 Mathematics (PDF, PPTs)</p>
        <p> • 📂 Programming Notes (C, Java, Python)</p>
        <p> • 📂 Research Papers & eBooks</p>
        <div className={styles.points}>
          <p>
            Data Structures and Algorithms – Learn about sorting, searching,
            trees, graphs, and dynamic programming.
          </p>
          <p>
            Operating Systems – Understanding processes, memory management, and
            file systems.
          </p>
          <p>
            Web Development – HTML, CSS, JavaScript, and React for modern web
            applications.
          </p>
          <p>
            Computer Networks – Explore network topologies, protocols, and
            security.
          </p>
          <p>
            Mathematics for CS – Linear algebra, probability, and discrete math
            concepts.
          </p>
          <h3> Attendance Summary</h3>
          <p>Overall Attendance: 87%</p>
        </div>
      </div>
    </div>
  );
}
