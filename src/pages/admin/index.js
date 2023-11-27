import PageDescription from "@/components/PageDescription";
import ProjectItem from "@/components/ProjectItem";

export default function AdminPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/projects");
      const responseJson = await response.json();
      setProjects(responseJson);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <PageDescription
        title="Admin"
        description="Here you will be able to add and update your project"
      />
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Button variant="contained" size="large"></Button>
      </div>
      {projects.map((project) => (
        <ProjectItem key={project._id} project={project} />
      ))}
    </section>
  );
}
