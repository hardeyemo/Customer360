import { useState, useEffect, useRef } from "react";

const customersData = [
        { id: 1, name: "John Carter", lastMessage: "I want to book a haircut", time: "2 min ago" },
        { id: 2, name: "Sophia Williams", lastMessage: "Do you have spa appointments?", time: "10 min ago" },
        { id: 3, name: "Emma Watson", lastMessage: "Thanks for the service!", time: "1 hr ago" },
        { id: 4, name: "Michael Brown", lastMessage: "Can I reschedule my booking?", time: "2 hr ago" },
        { id: 5, name: "Daniel Smith", lastMessage: "Is the barber available today?", time: "3 hr ago" },
        { id: 6, name: "Olivia Taylor", lastMessage: "I want to book a spa session", time: "4 hr ago" },
        { id: 7, name: "Liam Anderson", lastMessage: "Do you have evening appointments?", time: "5 hr ago" },
        { id: 8, name: "Noah Martinez", lastMessage: "How much is a full massage?", time: "6 hr ago" },
        { id: 9, name: "Ava Johnson", lastMessage: "Thank you for the reminder", time: "7 hr ago" },
        { id: 10, name: "William Clark", lastMessage: "I just made a payment", time: "8 hr ago" },
        { id: 11, name: "Isabella Hall", lastMessage: "Can I book for tomorrow?", time: "9 hr ago" },
        { id: 12, name: "James Allen", lastMessage: "Please cancel my booking", time: "10 hr ago" },
        { id: 13, name: "Charlotte Young", lastMessage: "Do you have weekend slots?", time: "11 hr ago" },
        { id: 14, name: "Benjamin King", lastMessage: "What services do you offer?", time: "12 hr ago" },
        { id: 15, name: "Amelia Scott", lastMessage: "I'd like a VIP appointment", time: "13 hr ago" },
        { id: 16, name: "Henry Adams", lastMessage: "Are you open today?", time: "14 hr ago" },
        { id: 17, name: "Mia Baker", lastMessage: "Book a facial treatment please", time: "15 hr ago" },
        { id: 18, name: "Lucas Perez", lastMessage: "I need help with my order", time: "16 hr ago" },
        { id: 19, name: "Harper Evans", lastMessage: "The chatbot helped me book", time: "17 hr ago" },
        { id: 20, name: "Jack Turner", lastMessage: "Can I talk to a human agent?", time: "18 hr ago" },
    ];

const aiResponses = [
  "Got it! We’ll handle your request shortly.",
  "Thanks for your message! Let me check on that.",
  "I understand. I’ll process that for you.",
  "Sure! One moment while I check.",
  "Okay! I’ll take care of that right away."
];

export default function Conversations() {
  const [customers, setCustomers] = useState(customersData);
  const [activeChat, setActiveChat] = useState(customersData[0]);
  const [messages, setMessages] = useState(() => {
    const initial = {};
    customersData.forEach(c => initial[c.id] = []);
    return initial;
  });
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, activeChat]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input, time: "Just now" };

    setMessages(prev => ({
      ...prev,
      [activeChat.id]: [...(prev[activeChat.id] || []), userMessage],
    }));

    setInput("");

    setCustomers(prev =>
      prev.map(c =>
        c.id === activeChat.id
          ? { ...c, lastMessage: userMessage.text, time: "Just now" }
          : c
      )
    );

    setTimeout(() => {
      const aiMessage = {
        from: "ai",
        text: aiResponses[Math.floor(Math.random() * aiResponses.length)],
        time: "Just now"
      };

      setMessages(prev => ({
        ...prev,
        [activeChat.id]: [...(prev[activeChat.id] || []), aiMessage],
      }));

      setCustomers(prev =>
        prev.map(c =>
          c.id === activeChat.id
            ? { ...c, lastMessage: aiMessage.text, time: "Just now" }
            : c
        )
      );
    }, 600);
  };

  const filteredCustomers = customers.filter(
    c =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.lastMessage.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-screen bg-gray-50 flex flex-col md:flex-row">

      <div className="w-full md:w-1/3 bg-white border-r flex flex-col">
        <div className="p-4 border-b">
          <input
            type="text"
            placeholder="Search orders or customers..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          {filteredCustomers.map(chat => (
            <div
              key={chat.id}
              onClick={() => setActiveChat(chat)}
              className={`p-4 cursor-pointer border-b hover:bg-gray-50 ${activeChat.id === chat.id ? "bg-gray-100" : ""}`}
            >
              <p className="font-medium">{chat.name}</p>
              <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
              <p className="text-xs text-gray-400 mt-1">{chat.time}</p>
            </div>
          ))}
          {filteredCustomers.length === 0 && (
            <p className="text-center text-gray-400 mt-4">No conversations found.</p>
          )}
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div className="bg-white p-4 border-b">
          <h3 className="font-semibold">{activeChat.name}</h3>
        </div>

        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          {(messages[activeChat.id] || []).map((msg, idx) => (
            <div key={idx} className={`flex ${msg.from === "ai" ? "justify-end" : "justify-start"}`}>
              <div className={`px-4 py-2 rounded-lg max-w-xs ${msg.from === "ai" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}>
                <p>{msg.text}</p>
                <span className="text-xs text-gray-400 mt-1 block">{msg.time}</span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-white border-t flex gap-3">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSend()}
            className="border rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}



    