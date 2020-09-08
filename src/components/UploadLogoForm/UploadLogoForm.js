import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { uploadLogo } from "../../store/vendor/actions"

export default function UploadLogoForm() {
	const [logo, setLogo] = useState("")
	const [loading, setLoading] = useState(false)
	const dispatch = useDispatch()

	const uploadImage = async (e) => {
		const files = e.target.files
		const data = new FormData()
		data.append("file", files[0])

		data.append("upload_preset", "darwin")
		setLoading(true)
		const res = await fetch(
			"http://api.cloudinary.com/v1_1/robinrbh/image/upload",
			{
				method: "POST",
				body: data,
			}
		)
		const file = await res.json()
		setLoading(false)

		const newLogo = file.secure_url
		dispatch(uploadLogo(newLogo))
	}

	return (
		<Form.Group>
			<Form.File
				type="file"
				name="file"
				placeholder="upload a logo"
				onChange={uploadImage}
			/>
			{loading ? <p>Loading...</p> : null}
		</Form.Group>
	)
}
