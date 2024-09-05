export function FloatingForm({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="absolute right-[calc(50%_-_10rem)] bottom-[calc(50%_-_10rem)] z-10">
      {isOpen && (
        <div className="mt-4 p-6 bg-white rounded-lg shadow-lg w-80">
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-2 border border-gray-300 rounded h-24"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
