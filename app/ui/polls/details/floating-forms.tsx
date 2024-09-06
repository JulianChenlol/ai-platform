import Image from "next/image";
export function FloatingForm({ isOpen }: { isOpen: boolean }) {
  const question = "Question";
  const data = [
    {
      id: 1,
      title: "Yes",
      checked: false,
    },
    {
      id: 2,
      title: "No",
      checked: false,
    },
  ];
  return (
    <div className="absolute right-1/4 bottom-1/8 w-1/2 h-3/4 z-10">
      {isOpen && (
        <div className="mt-4 p-6 bg-white rounded-lg shadow-lg w-full h-full">
          <div className="flex h-3/4 flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-3/5 bg-gray-50 content-center">
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/next.svg"
                alt="Next.js Logo"
                width={140}
                height={140}
                priority
              />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">{question}</h2>
                <form>
                  <div className="flex-col">
                    {data.map((item) => (
                      <div key={item.id}>
                        <button
                          type="button"
                          id="option1"
                          name="vote"
                          value="option1"
                          className="mr-2 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold md:w-72 rounded text-left px-2"
                        >
                          {item.title}
                        </button>
                      </div>
                    ))}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex h-1/4 flex-col md:flex-row md:overflow-hidden bg-blue-50"></div>
        </div>
      )}
    </div>
  );
}
