import './App.scss'
import { useSelector } from 'react-redux'
import Modal from './components/Modal'
import Person from './components/Person'
import ChangePerson from './components/Controls/ChangePerson'

function App() {
	const persons = useSelector((state) => state.persons.persons)
	const isModalOpened = useSelector((state) => state.main.isModalOpened)

	return (
		<>
			<Modal isActive={isModalOpened} />
			<div className='App'>
				<div className='App__title'>
					<h1>🥳App to practice Redux!</h1>
					<small>and thunk</small>😏
				</div>
				<div className='App__container'>
					<div className='App__content'>
						<div className='content'>
							<div className='content__title'>
								Here is Store data. Change it!
							</div>
							<div className='content__data'>
								<div className='content__list'>
									{persons.map((el) => (
										<Person data={el} key={el.id} />
									))}
								</div>
							</div>
						</div>
					</div>
					<div className='App__sidebar right'>
						<div className='block'>
							<div className='block__title'>Controls</div>
							<div className='block__content'>
								<ChangePerson val='1' />
								<ChangePerson val='2' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
