export type Result = {
  result: string;
};
async function handleResponse(res: Response) {
  const data = await res.json()
  if (!res.ok) {
    throw data
  }
  return data
}

const host = (path: string) => `https://myapi.testing.com${path}`

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export async function postMyAddress(values: unknown): Promise<Result> {
  const res = await fetch(host('/my/address'), {
    method: 'POST',
    body: JSON.stringify(values),
    headers,
  })
  return handleResponse(res)
}