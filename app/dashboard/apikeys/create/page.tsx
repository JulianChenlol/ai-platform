import Form from "@/app/ui/apikeys/create-form";
import Breadcrumbs from "@/app/ui/apikeys/breadcrumbs";
import { fetchModels } from "@/app/lib/data";

export default async function Page() {
  const models = await fetchModels();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "ApiKeys", href: "/dashboard/apikeys" },
          {
            label: "Create ApiKey",
            href: "/dashboard/apikeys/create",
            active: true,
          },
        ]}
      />
      <Form models={models} />
    </main>
  );
}
