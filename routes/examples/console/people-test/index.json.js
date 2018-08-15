import { people } from "./_people.js";

const contents = JSON.stringify(people);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
