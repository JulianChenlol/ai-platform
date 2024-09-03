import { BanknotesIcon } from "@heroicons/react/24/outline";

const iconMap = {
  custom: BanknotesIcon,
  others: BanknotesIcon,
};

export function Card({
  name,
  display_name,
  instance,
  online,
  type,
  properties,
}: {
  name: "custom" | "others";
  display_name: string;
  instance: string;
  online: boolean;
  type: "LLM";
  properties: "Public" | "Private";
}) {
  const Icon = iconMap[name];
  const labels = [type, properties];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="relative ml-2">
        <h3 className=" text-lg font-medium">{display_name}</h3>
        <button className="text-xs font-medium text-green-400 underline absolute top-0 right-2">
          {online ? "Online" : "Offline"}
        </button>
      </div>
      <h3 className="ml-2 text-sm font-medium">{instance}</h3>
      <div className="flex gap-2 mt-2">
        {labels.map((label) => (
          <label
            key={label}
            children={label}
            className="ml-2 text-xs font-medium bg-green-100 text-green-400 shadow-sm p-1 rounded-lg"
          ></label>
        ))}
      </div>
      {Icon ? <Icon className="mt-2 ml-2 h-5 w-5 text-gray-700" /> : null}
    </div>
  );
}
