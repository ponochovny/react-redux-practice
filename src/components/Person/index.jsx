import { useDispatch } from 'react-redux'
import { modalState } from '../../store/reducers/mainReducer'
import { setPersonDataToChange } from '../../store/reducers/personsReducer'
import './index.scss'

const Person = ({ data: person }) => {
	const dispatch = useDispatch()

	const setDataToChange = () => {
		dispatch(setPersonDataToChange(person))
		dispatch(modalState({ value: true }))
	}

	return (
		<div className='person' key={person.id}>
			<div
				className='person__img'
				style={{
					backgroundImage: `url(${person.picture})`,
				}}
			></div>
			<div className='person__content'>
				<div className='person__name'>{person.name}</div>
				<div className='person__description'>{person.description}</div>
				<div className='person__salary'>${person.salary}</div>
			</div>
			<div className='person__controls'>
				<button onClick={setDataToChange}>Change data</button>
			</div>
		</div>
	)
}

export default Person
