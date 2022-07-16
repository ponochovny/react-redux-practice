import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalState } from '../../store/reducers/mainReducer'
import {
	changePersonData,
	clearPersonDataToChange,
} from '../../store/reducers/personsReducer'
import './index.scss'

function Modal({ isActive }) {
	const dispatch = useDispatch()
	const personToChange = useSelector((state) => state.persons.personToChange)

	const [tempPersonToChangeData, setTempPersonToChangeData] = useState(null)

	const [classesList, setClassesList] = useState(['Modal'])

	const setClasses = (bool, className) => {
		const list = [...classesList]

		const cond1 = bool && !list.includes(className)
		const cond2 = !bool && list.includes(className)
		if (cond1) list.push(className)
		if (cond2) list.pop(className)
		if (!cond1 && !cond2) return

		setClassesList(list)
	}

	const closeModal = () => {
		dispatch(modalState({ value: false }))

		if (personToChange !== null) {
			setTimeout(() => {
				dispatch(clearPersonDataToChange())
			}, 150)
		}
	}

	const onSubmit = (e) => {
		e.preventDefault()

		if (tempPersonToChangeData !== null)
			dispatch(changePersonData(tempPersonToChangeData))

		closeModal()
	}

	useEffect(() => setClasses(isActive, 'active'))
	// eslint-disable-next-line
	useEffect(() => {
		setClasses(isActive, 'active')

		if (isActive && personToChange !== null) {
			setTempPersonToChangeData({ ...personToChange })
		}
		// eslint-disable-next-line
	}, [isActive])

	return (
		<div className={classesList.join(' ')}>
			<div className='backdrop' onClick={closeModal}></div>
			<div className='Modal__window'>
				<div className='Modal__title'>Modal</div>
				<div className='Modal__form'>
					{personToChange !== null && tempPersonToChangeData !== null && (
						<form onSubmit={onSubmit} className='form'>
							<div className='form__fieldset fieldset'>
								<div className='fieldset__label'>Name</div>
								<input
									type='text'
									className='fieldset__input'
									value={tempPersonToChangeData?.name}
									onChange={(e) =>
										setTempPersonToChangeData({
											...tempPersonToChangeData,
											name: e.target.value,
										})
									}
								/>
							</div>
							<div className='form__fieldset fieldset'>
								<div className='fieldset__label'>Salary</div>
								<input
									type='number'
									className='fieldset__input'
									value={tempPersonToChangeData?.salary}
									onChange={(e) =>
										setTempPersonToChangeData({
											...tempPersonToChangeData,
											salary: e.target.value,
										})
									}
								/>
							</div>
							<div className='form__fieldset fieldset'>
								<div className='fieldset__label'>Description</div>
								<textarea
									className='fieldset__textarea'
									value={tempPersonToChangeData?.description}
									onChange={(e) =>
										setTempPersonToChangeData({
											...tempPersonToChangeData,
											description: e.target.value,
										})
									}
								/>
							</div>
							<button>Change</button>
						</form>
					)}
				</div>
			</div>
		</div>
	)
}

export default Modal
