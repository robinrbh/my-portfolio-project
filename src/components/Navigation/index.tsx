import React from "react"
import LoginButton from "../LoginButton"

export default function Sidebar() {
	return (
		<div
			style={{
				width: "100%",
				borderBottom: "1px solid #000",
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<div className="menu" style={{ padding: "20px" }}>
				Home My Dashboard My Profile
			</div>
			<div style={{ display: "flex", padding: "20px" }}>
				<LoginButton />
			</div>
		</div>
	)
}
