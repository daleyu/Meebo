export async function fetchApi<Res>(
  path: string,
  method: "PATCH" | "POST",
  body?: any // TODO improve type
): Promise<Res> {
  const res = await fetch(path, {
    method,
    ...(body && {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }),
  });
  const json = await res.json();
  return json;
}
