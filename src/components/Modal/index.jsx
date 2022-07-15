import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { modalState } from '../../store/reducers/mainReducer'
import './index.scss'

function Modal({ isActive }) {
	const dispatch = useDispatch()

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

	useEffect(() => {
		setClasses(isActive, 'active')
	})
	useEffect(() => {
		setClasses(isActive, 'active')
	}, [isActive])

	return (
		<div className={classesList.join(' ')}>
			<div
				className='backdrop'
				onClick={() => dispatch(modalState({ value: false }))}
			></div>
			<div className='Modal__window'>
				<div className='Modal__title'>Modal</div>
				<div className='Modal__form'>
					<form onSubmit={(e) => e.preventDefault()} className='form'>
						<div className='form__fieldset fieldset'>
							<div className='fieldset__label'>Name</div>
							<input type='text' className='fieldset__input' />
						</div>
						<div className='form__fieldset fieldset'>
							<div className='fieldset__label'>Salary</div>
							<input type='number' className='fieldset__input' />
						</div>
						<div className='form__fieldset fieldset'>
							<div className='fieldset__label'>Description</div>
							<textarea className='fieldset__textarea' />
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Modal
