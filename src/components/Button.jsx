import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import styles from "../styles/Button.module.css";
export default function BasicButtons({ Name, Click }) {
  return (
    <Stack spacing={2} direction="row">
      <div className={styles.allbutton}>
        <Button variant="contained" onClick={Click}>
          {Name}
        </Button>
      </div>
    </Stack>
  );
}
