import React, { useEffect, useState } from "react"
import { Card, Col, Row, Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { fetchCars } from "../../store/cars/actions"
import { selectCars } from "../../store/cars/selectors"
import { fetchRacers } from "../../store/racer/actions"
import { selectVendorToken } from "../../store/vendor/selectors"
import { selectVendor } from "../../store/vendorsDetails/selectors"
import UploadLogoForm from "../../components/UploadLogoForm/UploadLogoForm"

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

	const displayEditLink = editMode === false

	useEffect(() => {
		if (!token) {
			history.push("/")
		}
		dispatch(fetchCars())
		dispatch(fetchRacers())
	}, [dispatch, history])

	return (
		<>
			<h1>Welcome, {vendor.name}</h1>
			<Row style={{ marginBottom: "20px" }}>
				<Col sm={10}>
					<Card style={{ marginBottom: "20px" }}>
						<Card.Body>
							<h3>Description</h3>
							{vendor.description}
							{/* <Link>change your description</Link> */}
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
					<Card style={{ marginBottom: "20px" }}>
						<Card.Body>
							<img width="150px" src={vendor.imageUrl} />
						</Card.Body>
						<Card.Body>
							{displayEditLink ? (
								<Link onClick={() => setEditMode(true)}>change your logo</Link>
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
