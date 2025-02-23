import styles from "../styles/Maind.module.css";
import login from "../store/store";
import { LuClock2 } from "react-icons/lu";
import Button from "../components/Button";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineCalendarToday } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import React from "react";
import Chart from "../components/Chart";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaMedal } from "react-icons/fa";
export default function Maind() {
  const navigate = useNavigate();
  const { username } = login();
  return (
    <div>
      <div className={styles.topcontainer}>
        <h1 className={styles.name}>Welcome {username}</h1>
        <div className={styles.button1}>
          <Button Name={"Login"} Click={() => navigate("/dashboard-frontend")} />
          <Button Name={"Academics"} Click={() => navigate("/dashboard-frontend/Academics")} />
          <Button Name={"Marks"} Click={() => navigate("/dashboard-frontend/Marks")} />
          <IoSearchOutline className={styles.search} size={30} />
          <IoMdNotificationsOutline className={styles.notify} size={30} />
          <IoSettingsOutline className={styles.settings} size={30} />
        </div>
      </div>
      <div className={styles.attendance}>
        <h3>Attendance Overview</h3>
        <div className={styles.attendanceRow}>
          <div className={styles.attendanceItem}>
            <div
              className={styles.iconBox}
              style={{ backgroundColor: "green" }}
            >
              <LuClock2 size={36} className={styles.clockalign} />
            </div>
            <p>Total Days</p>
            <h2>11</h2>
          </div>

          <div className={styles.attendanceItem}>
            <div className={styles.iconBox} style={{ backgroundColor: "blue" }}>
              <LuClock2 size={36} className={styles.clockalign} />
            </div>
            <p>On Duty</p>
            <h2>1</h2>
          </div>

          <div className={styles.attendanceItem}>
            <div
              className={styles.iconBox}
              style={{ backgroundColor: "orange" }}
            >
              <MdOutlineCalendarToday size={36} className={styles.clockalign} />
            </div>
            <p>Present Days</p>
            <h2>7.5</h2>
          </div>

          <div className={styles.attendanceItem}>
            <div className={styles.iconBox} style={{ backgroundColor: "red" }}>
              <BiLogOutCircle size={36} className={styles.clockalign} />
            </div>
            <p>Leave</p>
            <h2>2.5</h2>
          </div>

          <div className={styles.attendanceItem}>
            <div
              className={styles.iconBox}
              style={{ backgroundColor: "purple" }}
            >
              <LuClock2 size={36} className={styles.clockalign} />
            </div>
            <p>Percentage</p>
            <h2>77.3%</h2>
          </div>
        </div>
      </div>
      <div className={styles.rp}>
        <h2>Reward points</h2>
        <div className={styles.rpcontainer}>
          <div className={styles.rpiconbox}>
            <FaMedal size={30} className={styles.rplogo} />
            <h4 className={styles.rpcount}>1400</h4>
          </div>
        </div>
      </div>
      <div className={styles.barchart}>
        <h2 className={styles.barname}>Student's Marks Chart</h2>
        <Chart />
      </div>
      <div className={styles.contentcontainer}>
        <h3>
          Track your academic progress, manage courses, and stay updated with
          the latest announcements
        </h3>
        <h5>
          1️⃣ Academics – View enrolled courses, syllabus, and study materials
        </h5>
        <h5>2️⃣ Marks & Grades – Check exam scores and progress reports</h5>
        <h5>3️⃣ Attendance – Track daily and overall attendance percentage</h5>
        <h5>4️⃣ Assignments & Submissions – View and submit assignments</h5>
        <h5>
          5️⃣ Notifications & Announcements – Stay updated with important alerts
        </h5>
        <h5>6️⃣ Profile & Settings – Edit personal details and preferences</h5>
        <p>Current GPA: 3.8</p>
        <p> Completed Courses: 5 out of 6</p>
        <p className={styles.quote}>
          “Education is the most powerful weapon which you can use to change the
          world.” – Nelson Mandela
        </p>
      </div>
    </div>
  );
}
