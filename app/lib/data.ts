export async function fetchApiKeyById(id: string) {
  const res = await fetch(`http://localhost:8001/api/v1/api_keys/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}

export async function fetchModels() {
  const res = await fetch(
    "http://localhost:8001/api/v1/llm_models",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  return data.items;
}

