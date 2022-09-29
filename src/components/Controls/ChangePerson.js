import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { changeRandomPersonSalary } from '../../store/reducers/personsSlice'

const randomIntFromInterval = (min, max) => {
	// min and max included
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function ChangePerson({ val }) {
	const dispatch = useDispatch()

	return (
		<div>
			<button
				onClick={() =>
					dispatch(
						changeRandomPersonSalary({
							newSalary: randomIntFromInterval(300, 2500),
						})
					)
				}
			>
				Change salary
			</button>
		</div>
	)
}

export default memo(ChangePerson)
