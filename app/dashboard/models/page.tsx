import { Model } from "@/app/lib/definitions";
import { Card } from "@/app/ui/models/cards";
import clsx from "clsx";

export default async function Page() {
  const res = await fetch(
    "http://localhost:8001/api/v1/llm_models",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  const models: Model[] = data.items;
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">Models</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {models.map((model) => {
          return (
            <Card
              key={model.id}
              name={model.name as "custom" | "others"}
              display_name={model.display_name}
              instance={model.instance}
              online={true}
              type="LLM"
              properties="Public"
            />
          );
        })}
      </div>
    </div>
  );
}
