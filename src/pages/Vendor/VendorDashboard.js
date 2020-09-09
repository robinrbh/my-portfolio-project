import React, { useEffect, useState } from "react"
import { Card, Col, Row, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import UploadLogoForm from "../../components/UploadLogoForm/UploadLogoForm"
import { fetchCars } from "../../store/cars/actions"
import { selectCars } from "../../store/cars/selectors"
import { fetchRacers } from "../../store/racer/actions"
import { selectLogo, selectVendorToken } from "../../store/vendor/selectors"
import { selectVendor } from "../../store/vendorsDetails/selectors"

export default function Vendor() {
	const dispatch = useDispatch()
	const vendor = useSelector(selectVendor)
	const cars = useSelector(selectCars)

	const [editMode, setEditMode] = useState(false)

	const bookings = !vendor.cars
		? null
		: vendor.cars.flatMap((car) => {
				return car.bookings
		  })

	const token = useSelector(selectVendorToken)
	const history = useHistory()
	const logo = useSelector(selectLogo)

	const displayEditLink = editMode === false

	useEffect(() => {
		if (!token) {
			history.push("/")
		}
		dispatch(fetchCars())
		dispatch(fetchRacers())
	}, [dispatch, history, token, logo])

	return (
		<>
			<h1>Welcome, {vendor.name}</h1>
			<Row>
				<Col sm={10}>
					<Card>
						<Card.Body>
							<h3>Description</h3>
							{vendor.description}
						</Card.Body>
					</Card>

					<Card>
						<Card.Body>
							<h3>Bookings</h3>
							{bookings === null ? (
								<p>You have no bookings yet</p>
							) : (
								<Table striped bordered hover>
									<thead>
										<tr>
											<th>Customer</th>
											<th>Racecar</th>
											<th>Location</th>
											<th>Contact</th>
										</tr>
									</thead>
									<tbody>
										{bookings.map((booking) => {
											return (
												<>
													<tr>
														<td>{booking.racer.name}</td>
														<td>
															{booking.car.brand} {booking.car.model}
														</td>
														<td>{booking.track.name}</td>
														<td>{booking.racer.email}</td>
													</tr>
												</>
											)
										})}
									</tbody>
								</Table>
							)}
						</Card.Body>
					</Card>
				</Col>
				<Col sm={2}>
					<Card>
						<Card.Body>
							<img alt="logo" width="150px" src={logo} />
						</Card.Body>
						<Card.Body>
							{displayEditLink ? (
								<a href="#" onClick={() => setEditMode(true)}>
									Change your logo
								</a>
							) : null}
							{editMode ? (
								<div>
									<UploadLogoForm />
								</div>
							) : null}
						</Card.Body>
					</Card>
					<Card>
						<Card.Body>
							<h3>Your cars</h3>
							{!cars[0]
								? "Loading..."
								: cars.map((car) => {
										if (vendor.id === car.vendorId)
											return (
												<div key={car.id}>
													<p>
														<Link to={`/cars/${car.id}`}>
															{car.brand} {car.model}
														</Link>
													</p>
												</div>
											)
								  })}
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	)
}
