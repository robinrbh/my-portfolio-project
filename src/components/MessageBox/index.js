import React from "react"
import { Alert } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { clearMessage } from "../../store/appState/actions"
import { selectMessage } from "../../store/appState/selectors"

export default function MessageBox() {
	const message = useSelector(selectMessage)
	const dispatch = useDispatch()
	const showMessage = message !== null
	if (!showMessage) return null

	return (
		<Alert
			show={showMessage}
			variant={message.variant}
			dismissible={message.dismissable}
			onClose={message.dismissable ? () => dispatch(clearMessage()) : null}
		>
			{message.text}
		</Alert>
	)
}
