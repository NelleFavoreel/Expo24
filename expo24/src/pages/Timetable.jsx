import Timer from "../components/Timer";
import style from "../styles/Timetable.module.css";
import { Outlet, Link } from "react-router-dom";

function Timetable() {
	return (
		<>
			<div className={style.glassPanel}>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<div className={style.glass}></div>
				<h1 className={style.titleActivities}>TIMETABLE</h1>
			</div>
			<div className={style.switch}>
			<Link to="/Timetable">TIMETABLE</Link>
			<Link to="/Activities">OVERZICHT</Link>
			</div>
			<div className={style.timetableWrapper}>
				<div className={style.list}>
					<div className={style.makerspaceTitle}>
						<h1>MAKERSPACE</h1>
					</div>
					<p className={style.activityLiveCoding}>LIVE CODING</p>
					<p className={style.activityPrinting}>3D PRINTING</p>
					<p className={style.activityApple}>APPLE VISION PRO</p>
					<p className={style.activityGames}>3D-GAMES</p>
					<p className={style.activityFrontend}>FRONTEND</p>
					<p className={style.activityBackend}>BACKEND</p>
					<p className={style.activityLasercut}>LASERCUT</p>

					<div className={style.meetupTitle}>
						<h1>MEETUP</h1>
					</div>
					<p className={style.activityMeetup}>MEETUP</p>

					<div className={style.galleryTitle}>
						<h1>GALLERY</h1>
					</div>
					<p className={style.activityEindwerken}>EINDWERKEN</p>

					<div className={style.tuinTitle}>
						<h1>TUIN</h1>
					</div>
					<p className={style.activityBBQ}>BBQ</p>
					<p className={style.activityDrankje}>DRANKJE + MUZIEK</p>
					<p className={style.activitySlotshow}>SLOTSHOW</p>
				</div>
				<div className={style.timetable}>
					<p className={style.hour}>
						<span className={style.timespan}>17.00</span>
					</p>
					<p className={style.hour}>
						<span className={style.timespan}>17:30</span>
					</p>
					<p className={style.hour}>
						<span className={style.timespan}>18:00</span>
					</p>
					<p className={style.hour}>
						<span className={style.timespan}>18:30</span>
					</p>
					<p className={style.hour}>
						<span className={style.timespan}>19:00</span>
					</p>
					<p className={style.hour}>
						<span className={style.timespan}>19:30</span>
					</p>
					<p className={style.hour}>
						<span className={style.timespan}>20:00</span>
					</p>
					<p className={style.hour}>
						<span className={style.timespan}>20:30</span>
					</p>
					<p className={style.hour}>
						<span className={style.timespan}>21:00</span>
					</p>

					<div className={`${style.liveCoding} ${style.liveCoding1}`}></div>
					<div className={`${style.liveCoding} ${style.liveCoding2}`}></div>
					<div className={`${style.liveCoding} ${style.liveCoding3}`}></div>
					<div className={`${style.liveCoding} ${style.liveCoding4}`}></div>
					<div className={`${style.liveCoding} ${style.liveCoding5}`}></div>

					<div className={`${style.printing} ${style.printing1}`}></div>
					<div className={`${style.printing} ${style.printing2}`}></div>
					<div className={`${style.printing} ${style.printing3}`}></div>
					<div className={`${style.printing} ${style.printing4}`}></div>
					<div className={`${style.printing} ${style.printing5}`}></div>

					<div className={style.apple}></div>
					<div className={style.games}></div>
					<div className={style.frontend}></div>
					<div className={style.backend}></div>
					<div className={style.lasercut}></div>

					<div className={style.meetup}></div>

					<div className={style.eindwerken}></div>

					<div className={style.BBQ}></div>
					<div className={style.Drankje}></div>
					<div className={style.Slotshow}></div>
				</div>
			</div>
		</>
	);
}

export default Timetable;
