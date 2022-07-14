import './App.scss'

function App() {
	return (
		<div className='App'>
			<div className="App__title">
				<h1>App to practice Redux!</h1><small>and thunk</small>
			</div>
			<div className="App__container">
				<div className="App__sidebar left">
					<div className="block">
						<div className="block__title">Controls #1</div>
						<div className="block__content">
content
						</div>
					</div>
				</div>
				<div className="App__content">
					<div className="content">
						<div className="content__title">Here is Store data. Change it!</div>
						<div className="content__data">
<div className="content__list">
	<div className="person">
		<div className="person__img" style={{backgroundImage: `url(${'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'})`}}></div>
		<div className="person__content">
			<div className="person__name">Name</div>
			<div className="person__description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet fugiat ut</div>
			<div className="person__salary">500$</div>
		</div>
	</div>
</div>
						</div>
					</div>
				</div>
				<div className="App__sidebar right">
					<div className="block">
						<div className="block__title">Controls #2</div>
						<div className="block__content">
<button>Add person</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
