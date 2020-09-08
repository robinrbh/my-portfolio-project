import React, { useEffect, useState } from "react"
import { Col, Container, Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { fetchCarById } from "../../store/carDetails/actions"
import { selectCarDetails } from "../../store/carDetails/selectors"
import { selectRacer, selectRacerToken } from "../../store/racer/selectors"
import { bookCar } from "../../store/cars/actions"

export default function BookACar() {
	const dispatch = useDispatch()
	const { id } = useParams()
	const car = useSelector(selectCarDetails)
	const racer = useSelector(selectRacer)
	const token = useSelector(selectRacerToken)
	const [location, setLocation] = useState("")

	useEffect(() => {
		dispatch(fetchCarById(id))
	}, [dispatch, id])

	function submitForm(event) {
		event.preventDefault()
		if (location !== null && location !== "Choose...") {
			// dispatch(bookCar(location))
			console.log(location)
		}
	}

	return (
		<Container>
			{!token ? (
				"You need to be logged in as a Racer to book this car."
			) : (
				<>
					<h3 className="mt-5 mb-5">
						Book the {car.brand} {car.model}
					</h3>
					<p>
						Hi {racer.name}, really awesome that you'd like to book this amazing{" "}
						{car.brand}! To let the vendor know on which track it should be
						driven, please choose your favorite location below!
					</p>
					<Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
						<Form.Group>
							<Form.Label>Location</Form.Label>
							<Form.Control
								value={location}
								as="select"
								defaultValue="Choose..."
								onChange={(event) => setLocation(event.target.value)}
							>
								<option>Choose...</option>
								{!car.tracks
									? "Loading..."
									: car.tracks.map((track) => {
											console.log(track)
											return <option>{track.name}</option>
									  })}
							</Form.Control>
						</Form.Group>
						<Form.Group className="mt-5">
							<Button variant="primary" type="submit" onClick={submitForm}>
								Book this car!
							</Button>
						</Form.Group>
					</Form>
				</>
			)}
		</Container>
	)
}
