import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import { addNewCar } from "../../store/cars/actions"

export default function AddNewCarForm() {
	const history = useHistory()
	const dispatch = useDispatch()

	const [brand, setBrand] = useState("")
	const [model, setModel] = useState("")
	const [bhp, setBHP] = useState("")
	const [description, setDescription] = useState("")
	const [gearbox, setGearbox] = useState("")
	const [imageUrl, setImageUrl] = useState("")

	function submitForm(event) {
		event.preventDefault()

		dispatch(addNewCar(brand, model, bhp, description, gearbox, imageUrl))
	}
	return (
		<div>
			<Form className="mt-5">
				<h3>Add new car</h3>
				<Form.Group controlId="formBasicBrand">
					<Form.Label>Brand</Form.Label>
					<Form.Control
						value={brand}
						onChange={(event) => setBrand(event.target.value)}
						type="text"
						placeholder="Brand"
						required
					/>
				</Form.Group>

				<Form.Group controlId="formBasicModel">
					<Form.Label>Model</Form.Label>
					<Form.Control
						value={model}
						onChange={(event) => setModel(event.target.value)}
						type="text"
						placeholder="Model"
						required
					/>
				</Form.Group>

				<Form.Group controlId="formBasicModel">
					<Form.Label>BHP</Form.Label>
					<Form.Control
						value={bhp}
						onChange={(event) => setBHP(event.target.value)}
						type="number"
						placeholder="bhp"
						required
					/>
				</Form.Group>

				<Form.Group controlId="formBasicModel">
					<Form.Label>Description</Form.Label>
					<Form.Control
						value={description}
						onChange={(event) => setDescription(event.target.value)}
						type="text"
						placeholder="description"
						required
					/>
				</Form.Group>

				<Form.Group controlId="formBasicModel">
					<Form.Label>Gearbox</Form.Label>
					<Form.Control
						value={gearbox}
						onChange={(event) => setGearbox(event.target.value)}
						type="text"
						placeholder="gearbox"
						required
					/>
				</Form.Group>

				<Form.Group controlId="formBasicModel">
					<Form.Label>Image URL:</Form.Label>
					<Form.Control
						value={imageUrl}
						onChange={(event) => setImageUrl(event.target.value)}
						type="text"
						placeholder="A link to an image of your choice"
						required
					/>
				</Form.Group>

				<Form.Group className="mt-5">
					<Button variant="dark" type="submit" onClick={submitForm}>
						Add new car
					</Button>
				</Form.Group>
			</Form>
		</div>
	)
}
