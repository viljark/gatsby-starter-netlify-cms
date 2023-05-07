import React from "react"
import {FaBuilding, FaEnvelope} from "react-icons/fa"

export const OrderingForm = ({active, notActiveDescription, heading, description, disabledWeeks}) => {
	const today = new Date()
	const year = today.getFullYear()

// Find the start of the first week to show (either today or June 1)
	let firstWeekStart
	if (today >= new Date(year, 5, 1)) {
		firstWeekStart = new Date(today.getTime())
		while (firstWeekStart.getDay() !== 1) {
			firstWeekStart.setDate(firstWeekStart.getDate() + 1)
		}
	} else {
		firstWeekStart = new Date(year, 5, 1)
		while (firstWeekStart.getDay() !== 1) {
			firstWeekStart.setDate(firstWeekStart.getDate() - 1)
		}
	}

// Find the end of the last week to show (August 31)
	const lastWeekEnd = new Date(year, 7, 31)
	while (lastWeekEnd.getDay() !== 0) {
		lastWeekEnd.setDate(lastWeekEnd.getDate() + 1)
	}
	const lastWeekStart = new Date(lastWeekEnd.getTime())
	lastWeekStart.setDate(lastWeekStart.getDate() - 6)


	const weeks = []

// Add options for each week between the first and last weeks
	let weekStart = new Date(firstWeekStart.getTime())

	while (weekStart <= lastWeekStart) {
		const weekEnd = new Date(weekStart.getTime())
		weekEnd.setDate(weekEnd.getDate() + 6)
		const monthFormatOptions = {month: "long"}
		const label = `${weekStart.getDate()}. ${weekStart.toLocaleString(
			"et-EE",
			monthFormatOptions
		)} - ${weekEnd.getDate()}. ${weekEnd.toLocaleString(
			"et-EE",
			monthFormatOptions
		)}`
		const value = `${weekStart.toISOString()}_${weekEnd.toISOString()}`
		weeks.push({label, value})
		weekStart.setDate(weekStart.getDate() + 7)
	}

	function strToNumArr(str) {
		if (!str) return []

		const numArr = str.replace(/\./g, ',')
			.split(',')
			.filter(Boolean)
			.map(s => parseInt(s.trim(), 10))

		return numArr.filter(val => !isNaN(val))
	}

	const disabledWeekNumbers = strToNumArr(disabledWeeks)

	return (
		<div className="content box" id="tellimine">
			<h3 className="">
				{heading || "Mesilasemade tellimine"}
			</h3>
			{active && <div>
				<p>
					{description || "Siia täpsem kirjeldus"}
				</p>
				<form name="Tellimus" method="POST" action="/submitForm" data-netlify="true"
					  netlify-honeypot="mitte-inimestele">
					<p className="mitte-inimestele">
						<label>Ära seda täida kui sa oled inimene: <input name="mitte-inimestele" /></label>
					</p>
					<input type="hidden" name="form-name" value="Tellimus" />
					<div className="field">
						<label className="label">Mesilasemade arv</label>
						<div className="control">
							<input required={true} name="emadeArv" className="input" type="text" placeholder="" />
						</div>
					</div>
					<div className="field">
						<label className="label">Kättesaamise aeg</label>
						<div className="control">
							<div className="select">
								<select name="kättesaamiseAeg" required defaultValue={""}>
									<option value="">-- Vali kättesaamise aeg --</option>
									{weeks.map((week, index) => (
										<option disabled={disabledWeekNumbers.includes(index + 1)}
												key={index} value={week.label}>
											{week.label} {disabledWeekNumbers.includes(index + 1) ? '(broneeritud)' : ''}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>
					<div className="field">
						<label className="label">Nimi</label>
						<div className="control">
							<input required={true} name="nimi" className="input" type="text" placeholder="" />
						</div>
					</div>
					<div className="field">
						<label className="label">Telefoni number</label>
						<div className="control">
							<input required={true} name="telefon" className="input" type="text" placeholder="" />
						</div>
					</div>
					<div className="field">
						<label className="label">E-maili aadress</label>
						<div className="control has-icons-left">
							<input required={true} name="email" className="input" type="email" placeholder="" />
							<span className="icon is-small is-left">
							  <FaEnvelope />
							</span>
						</div>
						<p className="help">Vajalik arve edastamiseks</p>
					</div>
					<div className="field">
						<label className="label">Aadress või pakiautomaadi aadress</label>
						<div className="control has-icons-left">
							<input required={true} name="aadress" className="input" type="text" placeholder="" />
							<span className="icon is-small is-left">
                        <FaBuilding />
                      </span>
						</div>
					</div>

					<div className="field">
						<label className="label">Saatmisviis</label>
						<div className="control">
							<div className="select">
								<select required={true} name="saatmisviis" defaultValue={""}>
									<option value={""}>-- Vali saatmisviis --</option>
									<option value={"Omniva"}>Omniva pakiautomaat</option>
									<option value={"Smartpost"}>Smartpost</option>
									<option value={"Tulen ise järele"}>Tulen ise järele</option>
									<option value={"?"}>?</option>
								</select>
							</div>
						</div>
					</div>

					<div className="field">
						<label className="label">Lisainfo</label>
						<div className="control">
							<textarea name="lisainfo" className="textarea" placeholder="" />
						</div>
					</div>
					<div className="field is-grouped">
						<div className="control">
							<button className="button is-primary">Saada tellimus</button>
						</div>
					</div>
				</form>
			</div>}
			{!active &&
				<article className="message is-warning">
					<div className="message-body">
						{notActiveDescription}
					</div>
				</article>
			}
		</div>
	)
}
