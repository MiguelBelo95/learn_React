import ProjectsBar from "./components/ProjectsBar.jsx";
// import ProjectsPage from "./components/Projectspage.jsx";
import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import ShowProject from "./components/ShowProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  const [projectState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });
  // const [currentProjects, setCurrentProjects] = useState({});
  // const [activeNewProject, setActiveNewProject] = useState(false);
  // const [displayProject, setDisplayProject] = useState(false);

  function createNewProject() {
    setActiveNewProject(true);
    closeProject();
  }

  function deleteProject(projectId) {
    setProjectsState((prevProjects) => {
      return {
        selectedProjectId: null,
        prevProjects.filter((project) => project.id !== projectId);
      }
    });
    disablenewProject();
    closeProject();
  }



  function disablenewProject() {
    setActiveNewProject(false);
  }

  function handleStartAddProject(newProject) {
    disablenewProject();
    closeProject();
    setCurrentProjects(prevProjects => {
      const projectData = {
        ...newProject,
        id: Math.random(),
      }

      return {
        ...prevProjects,
        projectData,
        tasks: []
      }
    });
  }

  function showProject(index) {
    const project = currentProjects[index];
    setDisplayProject(project);
    disablenewProject();
  }

  function closeProject() {
    setDisplayProject(null);
  }

  function handleAddTask(text, projectId) {
    setCurrentProjects(prevProjects => {
      const newTask = {
        text: text,
        projectId: projectId,
        id: Math.random()
      }

      return [
        ...prevProjects,
        { tasks: [newTask, ...prevProjects.tasks] }
      ]
    });

  }

  console.log(currentProjects);

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id)
      }
    });
  }



  return (
    <main className="h-screen my-8 flex gap-8 ">
      <ProjectsBar
        createProject={createNewProject}
        projects={currentProjects}
        displayProject={showProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {!activeNewProject && !displayProject && <NoProjectSelected addProject={createNewProject} />}
      {activeNewProject && <NewProject cancel={disablenewProject} save={handleStartAddProject} />}
      {displayProject && <ShowProject
        onAddTask={handleAddTask}
        project={displayProject}
        onDeleteTask={handleDeleteTask}
        deleteProject={deleteProject}
        tasks={projectState.tasks} />}
    </main>
  );
}

export default App;
