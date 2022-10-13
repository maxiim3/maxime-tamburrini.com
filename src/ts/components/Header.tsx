export function Header() {
	return (
		<header className={"header"}>
			<h1 className={"header__title"}>
				<span className="header__title__bracket header__title__bracket--open">{"{"}</span>
				Maxime Tamburrini
				<span className={"header__title__type"}> : ReactDeveloper</span>
				<span className="header__title__bracket header__title__bracket--close">{"}"}</span>
			</h1>
			<p className={"header__sub"}>I develop Web Apps</p>
		</header>
	)
}