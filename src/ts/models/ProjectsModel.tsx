export class ProjectsModel {
	private readonly _name: string
	private readonly _techno: string[]
	private readonly _tags: string[]
	private readonly _year: number
	private readonly _url: string
	private readonly _repo: string
	private readonly _context: string
	private readonly _preview: string

	getId(): number {
		return Math.ceil(Math.random() * 10000)
	}

	get name(): string {
		return this._name
	}

	get techno(): string[] {
		return this._techno
	}

	get tags(): string[] {
		return this._tags
	}

	get year(): number {
		return this._year
	}

	get url(): string {
		return this._url
	}

	get repo(): string {
		return this._repo
	}

	get context(): string {
		return this._context
	}

	get preview(): string {
		return this._preview
	}

	constructor(project: ProjectType) {
		this._name = project.name
		this._techno = project.techno
		this._tags = project.tags
		this._year = project.year
		this._url = project.url
		this._repo = project.repo
		this._context = project.context
		this._preview = project.preview
	}
}

export type ProjectType = {
	name: string
	techno: string[]
	tags: string[]
	year: number
	url: string
	repo: string
	context: string
	preview: string
}