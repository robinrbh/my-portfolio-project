import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { Jumbotron, CardColumns, Container } from "react-bootstrap"
import { fetchCars } from "../../store/cars/actions"
import { selectCars } from "../../store/cars/selectors"
import Car from "../../components/Car"

export default function Cars() {
	const dispatch = useDispatch()
	const cars = useSelector(selectCars)
	console.log(cars)
	// console.log("Artworks:", artworks)

	useEffect(() => {
		dispatch(fetchCars())
	}, [dispatch])

	return (
		<>
			<h1>Cars for rent</h1>
			<Container>
				<CardColumns style={{ display: "block", maxWidth: "1000px" }}>
					{cars.map((car) => {
						return (
							<Car
								key={car.id}
								id={car.id}
								brand={car.brand}
								imageUrl={car.imageUrl}
							/>
						)
					})}
				</CardColumns>
			</Container>
		</>
	)
}
