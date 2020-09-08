import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Container, CardDeck, Card } from "react-bootstrap"
import { fetchCars } from "../../store/cars/actions"
import { selectCars } from "../../store/cars/selectors"
import Car from "../../components/Car"

export default function Cars() {
	const dispatch = useDispatch()
	const cars = useSelector(selectCars)

	useEffect(() => {
		dispatch(fetchCars())
	}, [dispatch])

	return (
		<>
			<Container>
				<h1>Cars for rent</h1>
				{cars.isAvailable === false ? (
					"Unfortunately there are no cars available at this time."
				) : (
					<CardDeck style={{ display: "block" }}>
						{cars.map((car, i) => {
							return (
								<Card
									style={{
										display: "inline-block",
										width: "500px",
										marginBottom: "20px",
									}}
									key={i}
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
				)}
			</Container>
		</>
	)
}
