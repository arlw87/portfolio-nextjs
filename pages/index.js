import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeLayout from "../components/Layout/HomeLayout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

//This is the home page

export default function Home(props) {
  const { projects } = props;

  console.log("Projects", projects);

  return <HomeLayout projects={projects}></HomeLayout>;
}

//This information is for the MyWork section but
//getStaticProps can only be run in a page
export async function getStaticProps() {
  //get files from the content/non-clinical folder
  const files = fs.readdirSync(path.join("content", "Projects"));

  //get pages and front matter
  const projects = files.map((filename) => {
    const slug = filename.replace(".md", "");

    //get front matter
    const markdownWithMatter = fs.readFileSync(
      path.join("content", "Projects", filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(markdownWithMatter);

    return {
      title: frontMatter.title,
      summary: frontMatter.summary,
      tech: frontMatter.tech,
    };
  });

  return {
    props: {
      projects,
    },
  };
}
