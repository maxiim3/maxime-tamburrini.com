import { ProjectsModel } from "../models/ProjectsModel"
import { ProjectComponent } from "./ProjectComponent"

export function Main(props: { projects: ProjectsModel[] }) {
	const { projects } = props

	return (
		<main>
			<article className="projects">
				<section className="projectsHeader">
					<h2>Work & Projects</h2>
					<div className={"projectsHeader__searchBar"}>
						<label htmlFor="filter"></label>
						<input
							id={"filter"}
							type="text"
							placeholder={"Search for #tags, technos..."}
						/>
					</div>
					<div className="projectsHeader__orderBy">
						<label htmlFor="order">Order by name, year..</label>
						<button>{"<>"}</button>
					</div>
				</section>
				<section className="projectContainer">
					{projects.map(project => (
						<ProjectComponent
							key={project.getId()}
							project={project}
						/>
					))}
				</section>
			</article>
		</main>
	)
}