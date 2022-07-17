async function subscribe ( email ) {
  return fetch(`/api/subscribe`, {
    body: JSON.stringify({ email: email }),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST'
	});
}

export default {
  subscribe
}