import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

function App() {
	const dispatch = useDispatch()
	const persons = useSelector((state) => state.persons.persons)

	const randomIntFromInterval = (min, max) => {
		// min and max included
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	useEffect(() => {
		console.log(persons)
	}, [])

	return (
		<div className='App'>
			<div className='App__title'>
				<h1>🥳App to practice Redux!</h1>
				<small>and thunk</small>😏
			</div>
			<div className='App__container'>
				<div className='App__sidebar left'>
					<div className='block'>
						<div className='block__title'>Controls #1</div>
						<div className='block__content'>content</div>
					</div>
				</div>
				<div className='App__content'>
					<div className='content'>
						<div className='content__title'>Here is Store data. Change it!</div>
						<div className='content__data'>
							<div className='content__list'>
								{persons.map((el) => (
									<div className='person' key={el.id}>
										<div
											className='person__img'
											style={{
												backgroundImage: `url(${el.picture})`,
											}}
										></div>
										<div className='person__content'>
											<div className='person__name'>{el.name}</div>
											<div className='person__description'>
												{el.description}
											</div>
											<div className='person__salary'>${el.salary}</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className='App__sidebar right'>
					<div className='block'>
						<div className='block__title'>Controls #2</div>
						<div className='block__content'>
							<button disabled>Add person</button>
							<button
								onClick={() =>
									dispatch({
										type: 'CHANGE_SALARY_RANDOMLY',
										payload: {
											personId: 1,
											newSalary: randomIntFromInterval(300, 2500),
										},
									})
								}
							>
								Change salary (#1)
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
