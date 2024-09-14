export async function fetchApiKeyById(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api_keys/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

export async function fetchModels() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/llm_models`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return data.items;
}
