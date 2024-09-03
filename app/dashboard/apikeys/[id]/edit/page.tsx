import Form from "@/app/ui/apikeys/edit-form";
import Breadcrumbs from "@/app/ui/apikeys/breadcrumbs";
import { fetchApiKeyById, fetchModels } from "@/app/lib/data";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const [apikey, models] = await Promise.all([
    fetchApiKeyById(id),
    fetchModels(),
  ]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "ApiKeys", href: "/dashboard/apikeys" },
          {
            label: "Edit ApiKey",
            href: `/dashboard/apikeys/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form apikey={apikey} models={models} />
    </main>
  );
}
