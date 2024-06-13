import React from "react";
import { useParams, Link } from "react-router-dom";
import detailCss from "../styles/Detail.module.css";
import foto from "../assets/vrGames.jpg";
import activities from "../../activities.json"; // Importeer de JSON-gegevens
import Activity from "../components/Activity"; // Importeer de Activity component

function getRandomActivities(currentTitle, num) {
	const filteredActivities = activities.filter((activity) => activity.title !== currentTitle);
	const shuffled = filteredActivities.sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
}

function Detail() {
	const { title } = useParams();
	const activity = activities.find((activity) => activity.title === title);

	if (!activity) {
		return <p>Activiteit niet gevonden</p>;
	}

	const randomActivities = getRandomActivities(title, 3);

	return (
		<>
			<div className={detailCss.header} style={{ backgroundColor: activity.backgroundColor }}>
				<img src={foto} alt="Header" />
				<h1>{activity.title}</h1>
			</div>
			<div className={detailCss.buttonBack}>
				<Link to="/Activities">Ga terug</Link>
			</div>

			<div className={detailCss.Containers}>
				<div className={detailCss.leftContainer}>
					<h1>Wat is er te doen?</h1>
					<h2>{activity.description}</h2>
				</div>
				<div className={detailCss.rightContainer}>
					<h1>Wanneer?</h1>
					{activity.uren.map((uur, index) => (
						<div key={index}>
							<div className={detailCss.hours}>
								<h2>
									{uur.start} - {uur.einde}
								</h2>
								<h2>{activity.locatie}</h2>
							</div>
							<hr />
						</div>
					))}
				</div>
			</div>
			<hr />
			<div className={detailCss.RandomActivity}>
				<h1>Andere activiteiten:</h1>
				<div className={detailCss.randomActivities}>
					{randomActivities.map((activity, index) => (
						<Activity key={index} activity={activity} />
					))}
				</div>
			</div>
		</>
	);
}

export default Detail;
