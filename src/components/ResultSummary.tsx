export default function ResultSummary() {
	return (
		<div className="flex text-white bg-white shadow-lg rounded-3xl">
			<div className="flex flex-col items-center justify-center max-w-xs gap-10 p-8 bg-gradient-to-t from-blue-600 to-sky-600 rounded-3xl">
				<h1 className="text-xl font-semibold">Your Result</h1>
				<p className="flex flex-col items-center justify-center w-48 h-48 gap-2 text-gray-400 rounded-full bg-gradient-to-t from-transparent to-blue-950/40">
					<span className="text-6xl font-bold text-white">76</span> of 100
				</p>
				<p className="flex flex-col items-center gap-2 text-sm text-center">
					<span className="text-2xl font-semibold">Great</span>
					You scored higher than 65% of the people who have taken these tests.
				</p>
			</div>
			<div className="flex flex-col gap-8 p-8 text-gray-950">
				<h2 className="text-xl font-semibold">Summary</h2>
				<div className="flex flex-col gap-2 w-60">
					<div className="flex justify-between p-4 rounded-md bg-red-500/10">
						<div className="flex items-center gap-1 font-bold text-red-600">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 16 16"
							>
								<path
									fill="currentColor"
									d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41L4.157 8.5z"
								/>
							</svg>
							Reaction
						</div>
						<div>
							<span className="font-bold">80</span> / 100
						</div>
					</div>
					<div className="flex justify-between p-4 rounded-md bg-yellow-500/10">
						<div className="flex items-center gap-1 font-bold text-yellow-600">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 28 28"
							>
								<path
									fill="currentColor"
									d="M13 4c-1.91 0-3.457 1.387-3.844 3.188C6.824 7.604 5 9.55 5 12c0 .246.027.465.063.688C4.418 13.636 4 14.753 4 16c0 1.797.895 3.309 2.156 4.406c-.09.356-.156.711-.156 1.094c0 2.473 2.027 4.5 4.5 4.5h.063c.582 1.129 1.59 2 2.937 2a3.49 3.49 0 0 0 2.5-1.063A3.49 3.49 0 0 0 18.5 28c1.348 0 2.355-.871 2.938-2h.062c2.348 0 4.273-1.828 4.469-4.125H26c0-.063-.027-.125-.031-.188c.004-.062.031-.125.031-.187c0-.371-.133-.688-.219-1.031C27.078 19.367 28 17.829 28 16c0-1.246-.418-2.363-1.063-3.313c.036-.222.063-.44.063-.687c0-2.45-1.824-4.395-4.156-4.813C22.457 5.388 20.91 4 19 4c-1.2 0-2.266.559-3 1.406C15.266 4.56 14.2 4 13 4zm0 2c1.117 0 2 .883 2 2v2c0 1.668-1.332 3-3 3v2c1.133 0 2.16-.39 3-1.031V24.5c0 .84-.66 1.5-1.5 1.5a1.47 1.47 0 0 1-1.469-1.219l-.187-.968l-.969.156A2.487 2.487 0 0 1 8 21.5c0-.309.05-.598.156-.875c.008-.023.024-.04.031-.063a2.468 2.468 0 0 1 1.813-1.5l-.406-1.968A4.452 4.452 0 0 0 7 18.656A3.958 3.958 0 0 1 6 16a3.9 3.9 0 0 1 .875-2.469l.313-.375l-.094-.5A2.858 2.858 0 0 1 7 12c0-1.668 1.332-3 3-3h1V8c0-1.117.883-2 2-2zm6 0c1.117 0 2 .883 2 2v1h1c1.668 0 3 1.332 3 3c0 .215-.04.422-.094.656l-.093.5l.312.375A3.9 3.9 0 0 1 26 16c0 1.2-.512 2.27-1.344 3c-.683-.605-1.554-1-2.531-1c-.945 0-1.797.336-2.469.906l1.282 1.532A1.806 1.806 0 0 1 22.125 20c.965 0 1.734.723 1.844 1.656C23.887 22.973 22.836 24 21.5 24c-.09 0-.2-.004-.375-.031l-.969-.157l-.187.97A1.47 1.47 0 0 1 18.5 26c-.84 0-1.5-.66-1.5-1.5V13.969A4.915 4.915 0 0 0 20 15v-2c-1.668 0-3-1.332-3-3V8c0-1.117.883-2 2-2z"
								/>
							</svg>
							Memory
						</div>
						<div>
							<span className="font-bold">92</span> / 100
						</div>
					</div>
					<div className="flex justify-between p-4 rounded-md bg-green-500/10">
						<div className="flex items-center gap-1 font-bold text-green-600">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 22 22"
							>
								<path
									fill="currentColor"
									d="M12 15q.325 0 .537-.213t.213-.537v-8.5q0-.325-.213-.537T12 5q-.325 0-.537.213t-.213.537v8.5q0 .325.213.537T12 15Zm-2.75-2q.325 0 .537-.213T10 12.25v-4.5q0-.325-.213-.537T9.25 7q-.325 0-.537.213T8.5 7.75v4.5q0 .325.213.537T9.25 13Zm-2.5-2q.325 0 .537-.213t.213-.537v-.5q0-.325-.213-.537T6.75 9q-.325 0-.537.213T6 9.75v.5q0 .325.213.537T6.75 11Zm8 2q.325 0 .537-.213t.213-.537v-4.5q0-.325-.213-.537T14.75 7q-.325 0-.537.213T14 7.75v4.5q0 .325.213.537t.537.213Zm2.5-2q.325 0 .537-.213T18 10.25v-.5q0-.325-.213-.537T17.25 9q-.325 0-.537.213t-.213.537v.5q0 .325.213.537t.537.213ZM2 19.575V4q0-.825.588-1.413T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.588 1.413T20 18H6l-2.3 2.3q-.475.475-1.088.213T2 19.575Zm2-2.4L5.175 16H20V4H4v13.175ZM4 4v13.175V4Z"
								/>
							</svg>
							Verbal
						</div>
						<div>
							<span className="font-bold">61</span> / 100
						</div>
					</div>
					<div className="flex justify-between p-4 rounded-md bg-violet-500/10">
						<div className="flex items-center gap-1 font-bold text-violet-600">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
							>
								<path
									fill="currentColor"
									d="M12 6.5a9.77 9.77 0 0 1 8.82 5.5c-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12A9.77 9.77 0 0 1 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5s4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5z"
								/>
							</svg>
							Visual
						</div>
						<div>
							<span className="font-bold">72</span> / 100
						</div>
					</div>
				</div>
				<button className="p-2 text-white transition duration-300 rounded-full bg-sky-700 hover:bg-sky-800 hover:-translate-y-1">
					Continue
				</button>
			</div>
		</div>
	);
}
