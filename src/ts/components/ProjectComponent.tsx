import { ProjectsModel } from "../models/ProjectsModel"

export function ProjectComponent(props: { project: ProjectsModel }) {
	const { name, tags, context, techno, year, repo, url, preview } = props.project
	return (
		<article
			className={"projectComponent"}
			key={name}>
			<h3 className={"projectComponent__title"}>{name}</h3>
			<ul className="projectComponent__tags">
				{tags.map(tag => (
					<li key={tag}>{tag}</li>
				))}
			</ul>
			<ul>
				{techno.map(tech => (
					<li key={tech}>{tech}</li>
				))}
			</ul>
			<p className="projectComponent__year">{year}</p>
			<a
				className="projectComponent__url"
				href={url}>
				Lien vers le site
			</a>
			<a
				className="projectComponent__github"
				href={repo}>
				Repo sur github <span>iconGithbub</span>
			</a>
			<p className={"projectComponent__context"}>{context}</p>
			<section className="projectComponent__preview">
				<img
					src={preview}
					alt="preview du projet"
				/>
			</section>
		</article>
	)
}