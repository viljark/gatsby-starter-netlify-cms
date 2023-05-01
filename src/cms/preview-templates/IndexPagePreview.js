import React from "react";
import { IndexPageTemplate } from "../../templates";

const IndexPagePreview = ({ entry, widgetFor }) => (
  <IndexPageTemplate
    html={widgetFor("body")}
    heroImage={entry.getIn(["data", "heroImage"])}
    hero={entry.getIn(["data", "hero"])}
    picture1={entry.getIn(["data", "picture1"])}
    isFormActive={entry.getIn(["data", "isFormActive"])}
    notActiveDescription={entry.getIn(["data", "notActiveDescription"])}
	disabledWeeks={entry.getIn(["data", "disabledWeeks"])}
	formDescription={entry.getIn(["data", "formDescription"])}
    formTitle={entry.getIn(["data", "formTitle"])}
    footer={{
      text: entry.getIn(["data", "footer", "text"]),
      email: entry.getIn(["data", "footer", "email"]),
      telephone: entry.getIn(["data", "footer", "telephone"]),
      telephoneName: entry.getIn(["data", "footer", "telephoneName"]),
      telephone2: entry.getIn(["data", "footer", "telephone2"]),
      telephone2Name: entry.getIn(["data", "footer", "telephone2Name"]),
      address: entry.getIn(["data", "footer", "address"])
    }}
  />
);

export default IndexPagePreview;
