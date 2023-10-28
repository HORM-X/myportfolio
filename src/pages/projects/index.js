import PageDescription from "@/components/PageDescription";

export default function ProjectsPage() {
  return (
    <section>
      <PageDescription
        title="Projects"
        description="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology"
      />

      {/*      {projects.map((project) => (
        <ProjectItem key={project._id} />
      ))}*/}
    </section>
  );
}

{
  /*
export async function getServerSideProps() {
  return {
    props: {
      projects: [],
    },
  };
}
*/
}
