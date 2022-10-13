import { useEffect, useState } from "react"
import { ProjectsModel, ProjectType } from "./models/ProjectsModel"
import { Header } from "./components/Header"
import { Main } from "./components/Main"

function App() {
	const [projects, setProjects] = useState<ProjectsModel[]>([])
	useEffect(() => {
		fetch("api/project.json")
			.then(resp => {
				if (resp.ok) return resp.json()
				throw new Error("Fetch Error...")
			})
			.then(async data => {
				const Projects: ProjectsModel[] = []
				await data.projects.forEach((project: ProjectType) =>
					Projects.push(new ProjectsModel(project))
				)
				if (Projects.length === 0) throw new Error("Error during Object Modeling")

				return setProjects(Projects)
			})
			.catch(reason => console.warn(reason))
	}, [setProjects])

	return (
		<>
			<Header />
			<Main projects={projects} />
		</>
	)
}

// todo JSON Update : populate json with real data
// todo Responsive
// todo get ready for deployment on branch deploy then build, push and deploy on hostinger

// todo implement filter
// todo implement orderBy
// todo add techno components
// todo todo animation SVG
// todo animate onScroll

export default App
