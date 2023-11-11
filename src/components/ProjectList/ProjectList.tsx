/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import styles from "./ProjectList.module.css";

export type Project = {
  name: string;
  url: string;
  description: string;
  image?: string;
};

export default function ProjectList({
  projects,
  markdown = false,
  double = false,
}: {
  projects: Project[];
  markdown?: boolean;
  double?: boolean;
}) {
  const router = useRouter();
  return (
    <div
      className={`${styles.ProjectList} ${
        double ? styles.ProjectListDoubleWide : ""
      }`}
    >
      {projects.map((project, i) => (
        <a
          key={i}
          className={`${styles.ProjectListProject} notInline`}
          href={project.url}
          target="_blank"
        >
          {project.image ? (
            <img
              alt=""
              aria-hidden="true"
              src={project.image}
              className={styles.ProjectListProjectImage}
            />
          ) : (
            <></>
          )}
          <div className={styles.ProjectListProjectDescription}>
            <p className={styles.ProjectListProjectDescriptionTitle}>
              {project.name}
            </p>
            <p className={styles.ProjectListProjectDescriptionDescription}>
              {markdown ? (
                <ReactMarkdown
                  remarkPlugins={[remarkBreaks]}
                  rehypePlugins={[rehypeRaw]}
                  allowedElements={["br"]}
                  unwrapDisallowed
                >
                  {project.description.replace(/\n/gi, "&nbsp;\n")}
                </ReactMarkdown>
              ) : (
                project.description
              )}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
