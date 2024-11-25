import { render } from "@react-email/render";
import { version as userVersion } from "react-dom";
import { version } from "../node_modules/@react-email/render/node_modules/react-dom";
import React from "react";

console.log("user: react-dom", userVersion);
console.log("@react-email/render: react-dom version", version);

await render(<h1>Hello world!</h1>);
