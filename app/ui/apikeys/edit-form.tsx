"use client";

import { ModelField, ApiKeyForm } from "@/app/lib/definitions";
import {
  CheckIcon,
  ClockIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/app/ui/button";

import { updateApiKey } from "@/app/lib/actions";

export default function EditApiKeyForm({
  apikey,
  models,
}: {
  apikey: ApiKeyForm;
  models: ModelField[];
}) {
  console.log(apikey);
  const updateApiKeyWithId = updateApiKey.bind(null, apikey.id);
  return (
    <form action={updateApiKeyWithId}>
      {/* <input type="hidden" name="id" value={apikey.id} /> */}
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Model Name */}
        <div className="mb-4">
          <label htmlFor="model" className="mb-2 block text-sm font-medium">
            Choose model
          </label>
          <div className="relative">
            <select
              id="model"
              name="modelId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue={apikey.model_id}
            >
              <option value="" disabled>
                Select a model
              </option>
              {models.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.display_name}
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* ApiKey Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the apikey status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  id="inactive"
                  name="active"
                  type="radio"
                  value="inactive"
                  defaultChecked={!apikey.active}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="inactive"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Inactive <ClockIcon className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="active"
                  name="active"
                  type="radio"
                  value="active"
                  defaultChecked={apikey.active}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="active"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Avtive <CheckIcon className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/apikeys"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit ApiKey</Button>
      </div>
    </form>
  );
}
