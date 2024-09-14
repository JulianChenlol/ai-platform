import { ApiKey } from "@/app/lib/definitions";
import ApiKeyStatus from "@/app/ui/apikeys/status";
import { CreateApiKey } from "@/app/ui/apikeys/buttons";
import { DeleteApiKey, UpdateApiKey } from "@/app/ui/apikeys/buttons";

export default async function Page() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/1/apikeys`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await res.json();
  const apikeys: ApiKey[] = data;
  return (
    <div className="mt-6 flow-root">
      <CreateApiKey />
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {apikeys?.map((apikey) => (
              <div
                key={apikey.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{apikey.key}</p>
                    </div>
                  </div>
                  <ApiKeyStatus status={apikey.active} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex justify-end gap-2">
                    <UpdateApiKey id={apikey.id} />
                    <DeleteApiKey id={apikey.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  ApiKey
                </th>

                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {apikeys?.map((apikey) => (
                <tr
                  key={apikey.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{apikey.key}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <ApiKeyStatus status={apikey.active} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateApiKey id={apikey.id} />
                      <DeleteApiKey id={apikey.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
