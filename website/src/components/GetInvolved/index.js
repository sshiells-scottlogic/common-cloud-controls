import React from "react";
import HomeSection from "../HomeSection";
import styles from "./styles.module.css";

export default function GetInvolved() {
  const links = [
    {
      href: "https://github.com/finos/common-cloud-controls",
      label: "View on GitHub",
      desc: "Browse source, open issues, and submit pull requests.",
    },
    {
      href: "https://github.com/finos/common-cloud-controls#2-join-finos-ccc-project-meetings",
      label: "Join a CCC Meeting",
      desc: "Attend a community meeting and meet the team.",
    },
    {
      href: "https://www.finos.org/common-cloud-controls-project",
      label: "FINOS Project Page",
      desc: "Learn more about the project on the FINOS website.",
    },
    {
      href: "https://github.com/finos/common-cloud-controls/issues",
      label: "Report a Website Issue",
      desc: "Report a bug, request a feature, or start a discussion.",
    },
  ];

  return (
    <HomeSection title="Get Involved">
      <p
        style={{
          fontSize: "1.1rem",
          lineHeight: 1.7,
          maxWidth: "700px",
          margin: "0 auto 1rem",
        }}
      >
        Common Cloud Controls is an open project — contributions, feedback, and
        participation are welcome.
      </p>

      <ul className={styles.getInvolvedList} style={{ maxWidth: "900px", margin: "0 auto" }}>
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.getInvolvedLink}
            >
              <span className={styles.getInvolvedLabel}>{link.label}</span>
              <span className={styles.getInvolvedDesc}>{link.desc}</span>
            </a>
          </li>
        ))}
      </ul>
    </HomeSection>
  );
}