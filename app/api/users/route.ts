import fs from "fs";

export async function POST(request: Request) {
  const data = await request.json();
  const db = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  db.push(data);
  fs.writeFileSync("db.json", JSON.stringify(db));
  return Response.json({ ok: true });
}
