import { useEffect, useState } from "react";

const Header = () => {
  const [meg, setMeg] = useState("");

  const [messages, setMessages] = useState([
    { user: "Kumar Nkl", text: "Hi Dinesh, How are you?", time: "01:45AM" },
  ]);

  const [count, setCount] = useState("");

  const EnteredMeg = (e) => {
    setMeg(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (meg.trim() !== "") {
      const newMessage = {
        user: "User",
        text: meg,
        time: "Now",
      };

      setMessages([...messages, newMessage]);
      setMeg("");
    }
  };

  return (
    <div>
      <section class="bg-white max-w-md mx-auto">
        <div class="bg-emerald-700 text-white px-3 py-5 flex items-center justify-between">
          <h4 class="font-semibold">WhatsApp</h4>

          <div class="flex items-center space-x-2">
            <a
              href="https://github.com/dineshdevelope/WhatsApp-UI"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
                class="cursor-pointer"
              >
                <title>Gitup</title>
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
                ></path>
              </svg>
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              class="fill-current cursor-pointer"
            >
              <title>Search</title>
              <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0c.41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              class="fill-current cursor-pointer"
            >
              <title>Menu</title>
              <path d="M12 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0-6a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m0 6a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m0 6a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1Z" />
            </svg>
          </div>
        </div>
        <ul class="bg-emerald-700 text-white px-3 py-2 flex items-center space-x-4 justify-between">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              class="fill-current w-6 cursor-pointer"
            >
              <path d="M12 18q2.075 0 3.538-1.462Q17 15.075 17 13q0-2.075-1.462-3.538Q14.075 8 12 8Q9.925 8 8.463 9.462Q7 10.925 7 13q0 2.075 1.463 3.538Q9.925 18 12 18Zm0-2q-1.25 0-2.125-.875T9 13q0-1.25.875-2.125T12 10q1.25 0 2.125.875T15 13q0 1.25-.875 2.125T12 16Zm6-6q.425 0 .712-.288Q19 9.425 19 9t-.288-.713Q18.425 8 18 8t-.712.287Q17 8.575 17 9t.288.712Q17.575 10 18 10ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V7q0-.825.588-1.412Q3.175 5 4 5h3.15L8.7 3.325q.15-.15.337-.238Q9.225 3 9.425 3h5.15q.2 0 .388.087q.187.088.337.238L16.85 5H20q.825 0 1.413.588Q22 6.175 22 7v12q0 .825-.587 1.413Q20.825 21 20 21Z" />
            </svg>
          </li>

          <li class="flex items-center flex-1 justify-between">
            <div class="uppercase font-medium text-sm flex items-center space-x-2 relative">
              <span class="cursor-pointer">Chats</span>
              <span class="bg-white text-emerald-700 rounded-full w-5 h-5 p-0.5 text-xs flex items-center justify-center">
                14
              </span>
              <div class="absolute right-1 top-8 w-full h-1 bg-white"></div>
            </div>
            <div class="uppercase font-medium text-sm flex items-center space-x-2">
              <a href="status.html">
                <span class="cursor-pointer text-gray-900">Status</span>
              </a>
            </div>
            <div class="uppercase font-medium text-sm flex items-center space-x-2">
              <a href="calls.html">
                <span class="cursor-pointer text-gray-900">Calls</span>
              </a>
            </div>
          </li>
        </ul>

        <div className="space-y-4 m-5">
          {messages.map((message, index) => (
            <div
              key={index}
              className="flex items-center px-3 py-3 space-x-4 hover:bg-green-100 cursor-pointer"
            >
              <div>
                <img
                  src={`https://ui-avatars.com/api/?name=${message.user}&background=random&color=fff`}
                  alt={message.user}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">{message.user}</h4>
                <p className="text-gray-600 text-sm">{message.text}</p>
              </div>
              <div className="flex flex-col items-center space-y-1 pr-2">
                <span className="text-green-700 font-medium text-sm">
                  {message.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Input form for sending messages */}
        <div className="space-x-5 m-5">
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              className="bg-gray-300 rounded p-2 text-black font-serif outline-none w-full "
              placeholder="Enter your message"
              value={meg}
              onChange={EnteredMeg}
            />
          </form>
        </div>

        <div class="py-3 text-green-900 flex justify-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path
                fill="#12dd03"
                d="M6 22q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h1V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Zm6-5q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2Z"
              />
            </svg>
          </div>
          <div>
            <p class="text-xs">
              Your personal messages are
              <span class="text-emerald-900">end-to-end encrypted</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
