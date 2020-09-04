import React, { useEffect } from "react"
import { fetchVendorById } from "../../store/vendorsDetails/actions"
import { selectVendorDetails } from "../../store/vendorsDetails/selectors"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Container, Row, Col, CardDeck, Card } from "react-bootstrap"
import Car from "../../components/Car"

export default function VendorDetails() {
	const { id } = useParams()
	const dispatch = useDispatch()

	const vendor = useSelector(selectVendorDetails)
	console.log("vendor", vendor)

	useEffect(() => {
		dispatch(fetchVendorById(id))
	}, [dispatch, id])

	return (
		<>
			<Container>
				<Row>
					<Col sm={2}>
						<img src={vendor.imageUrl} style={{ width: "150px" }} />
					</Col>
					<Col sm={10}>
						<h3>{vendor.businessName}</h3>
						<p>{vendor.description}</p>
					</Col>
				</Row>
				<Row>
					<h3>Cars for rent @ {vendor.businessName}</h3>
				</Row>
				<Row>
					<CardDeck style={{ display: "block" }}>
						{!vendor.cars
							? "Loading..."
							: vendor.cars.map((car) => {
									return (
										<Card
											style={{
												display: "inline-block",
												width: "360px",
												marginBottom: "20px",
											}}
										>
											<Car
												key={car.id}
												id={car.id}
												brand={car.brand}
												model={car.model}
												gearbox={car.gearbox}
												bhp={car.bhp}
												imageUrl={car.imageUrl}
											/>
										</Card>
									)
							  })}
					</CardDeck>
				</Row>
				<Row>
					Reviews
					{!vendor.ratings
						? "Loading..."
						: vendor.ratings.map((rating) => {
								return "Hello"
						  })}
				</Row>
			</Container>
		</>
	)
}
