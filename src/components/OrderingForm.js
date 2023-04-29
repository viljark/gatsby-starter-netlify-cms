import React from "react";
import { FaBuilding, FaEnvelope } from "react-icons/fa";

export const OrderingForm = ({ active, notActiveDescription, heading, description }) =>{ 
  const today = new Date();
  const year = today.getFullYear();

  // Find the first Monday of the year
  const firstDayOfYear = new Date(year, 0, 1);
  const firstMonday = new Date(
    year,
    0,
    7 - (firstDayOfYear.getDay() + 6) % 7
  );

  // Find the current week number and start date
  const currentWeekNumber = getWeekNumber(today, firstMonday);
  let currentWeekStart = new Date(firstMonday.getTime());
  currentWeekStart.setDate(currentWeekStart.getDate() + (currentWeekNumber - 1) * 7);

  // Adjust current week's start date to the nearest Monday
  while (currentWeekStart.getDay() !== 1) {
    currentWeekStart.setDate(currentWeekStart.getDate() + 1);
  }

  // Initialize empty array of weeks
  const weeks = [];

  // Add options for each remaining week of the year
  for (let i = currentWeekNumber; i <= 52; i++) {
    const weekStart = new Date(firstMonday.getTime());
    weekStart.setDate(weekStart.getDate() + (i - 1) * 7);

    // Add one day to start on a Monday
    weekStart.setDate(weekStart.getDate() + 1);

    const weekEnd = new Date(weekStart.getTime());
    weekEnd.setDate(weekEnd.getDate() + 6);

    // Subtract one day to end on a Sunday
    weekEnd.setDate(weekEnd.getDate());

    if (i === currentWeekNumber) {
      // Adjust current week's end date to the nearest Sunday
      while (weekEnd.getDay() !== 0) {
        weekEnd.setDate(weekEnd.getDate() + 1);
      }

      // Adjust current week's start date to the nearest Monday
      while (currentWeekStart.getDay() !== 1) {
        currentWeekStart.setDate(currentWeekStart.getDate() + 1);
      }

      // Add one day to current week's start date
      currentWeekStart.setDate(currentWeekStart.getDate() + 1);
    }

    const monthFormatOptions = { month: "long" };
    const label = `${weekStart.getDate()}. ${weekStart.toLocaleString(
      "et-EE",
      monthFormatOptions
    )} - ${weekEnd.getDate()}. ${weekEnd.toLocaleString(
      "et-EE",
      monthFormatOptions
    )}`;

    const value = `${weekStart.toISOString()}_${weekEnd.toISOString()}`;
    weeks.push({ label, value });
  }

  function getWeekNumber(date, firstMonday) {
    const daysSinceFirstMonday = Math.floor(
      (date.getTime() - firstMonday.getTime()) / (1000 * 60 * 60 * 24)
    );
    return 1 + Math.floor(daysSinceFirstMonday / 7);
  }
  
 return (
  <div className="content box" id="tellimine">
    <h3 className="">
      {heading || "Mesilasemade tellimine"}
    </h3>
    {active && <div>
      <p>
        {description || "Siia täpsem kirjeldus"}
      </p>
      <form name="Tellimus" method="POST" action="/submitForm" data-netlify="true" netlify-honeypot="mitte-inimestele">
        <p className="mitte-inimestele">
          <label>Ära seda täida kui sa oled inimene: <input name="mitte-inimestele"/></label>
        </p>
        <input type="hidden" name="form-name" value="Tellimus" />
        <div className="field">
          <label className="label">Mesilasemade arv</label>
          <div className="control">
            <input required={true} name="emadeArv" className="input" type="text" placeholder=""/>
          </div>
        </div>
        <div className="field">
          <label className="label">Kättesaamise aeg</label>
          <div className="control">
            <div className="select">
            <select name="kättesaamiseAeg" required defaultValue={""}>
              <option value="">-- Vali kättesaamise aeg --</option>
              {weeks.map((week, index) => (
                <option key={index} value={week.label}>
                  {week.label}
                </option>
              ))}
            </select>
            </div>
          </div>
        </div>
        <div className="field">
          <label className="label">Nimi</label>
          <div className="control">
            <input required={true} name="nimi" className="input" type="text" placeholder=""/>
          </div>
        </div>
        <div className="field">
          <label className="label">Telefoni number</label>
          <div className="control">
            <input required={true} name="telefon" className="input" type="text" placeholder=""/>
          </div>
        </div>
        <div className="field">
          <label className="label">E-maili aadress</label>
          <div className="control has-icons-left">
            <input required={true} name="email" className="input" type="email" placeholder=""/>
            <span className="icon is-small is-left">
              <FaEnvelope/>
            </span>
          </div>
          <p className="help">Vajalik arve edastamiseks</p>
        </div>
        <div className="field">
          <label className="label">Aadress või pakiautomaadi aadress</label>
          <div className="control has-icons-left">
            <input required={true} name="aadress" className="input" type="text" placeholder=""/>
            <span className="icon is-small is-left">
                        <FaBuilding/>
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
            <textarea name="lisainfo" className="textarea" placeholder=""/>
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
)};
