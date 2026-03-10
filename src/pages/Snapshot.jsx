import { useState, useRef, useEffect } from "react";
import { Send, Edit2, Trash2, Check, X } from "lucide-react";

export default function Snapshot({ onClose }) {
  const [messages, setMessages] = useState([
    { id: 1, sender: "client", text: "Hello, I would like to book an appointment." },
    { id: 2, sender: "support", text: "Sure! What time works best for you?" },
  ]);

  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg = { id: Date.now(), sender: "client", text: input };
    setMessages(prev => [...prev, newMsg]);
    setInput("");
    setTimeout(() => {
      const aiReply = {
        id: Date.now() + 1,
        sender: "support",
        text: "AI: Got it! I’ll handle your request shortly."
      };
      setMessages(prev => [...prev, aiReply]);
    }, 700);
  };

  const startEditing = (msg) => {
    setEditingId(msg.id);
    setEditingText(msg.text);
  };
  const saveEdit = (id) => {
    if (!editingText.trim()) return;
    setMessages(messages.map(msg => msg.id === id ? { ...msg, text: editingText } : msg));
    setEditingId(null);
    setEditingText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  const deleteMessage = (id) => {
    setMessages(messages.filter(msg => msg.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="absolute top-0 right-0 h-screen w-full md:w-96 bg-white shadow-xl flex flex-col">
      <div className="flex justify-between items-center p-4 border-b">
        <div>
          <h2 className="font-semibold text-lg flex items-center gap-2">
            🌐 360 Snapshot
          </h2>
          <p className="text-xs text-gray-500 mt-1">Last Update: 2024-01-25 | 12 Remarks</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs">Marco Silva</span>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition">
            <X size={18} />
          </button>
        </div>
      </div>

      <div className="bg-indigo-50 rounded-lg p-4 m-4 text-gray-700">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-sm">AI Summary</h3>
          <span className="text-xs text-gray-400">20:01</span>
        </div>
        <p className="leading-relaxed text-sm">
          Bas Janssen booked a 14:30 slot via WhatsApp chatbot. This is his fifth visit this year placing him in the "Silver" loyalty tier. He prefers chair 3 with barber Ahmed.
        </p>
        <p className="mt-2 text-xs text-indigo-600 cursor-pointer hover:underline">
          Ask ChatGPT
        </p>
      </div>

      <div className="px-4 text-sm text-gray-700 border-b pb-3">
        <p className="text-xs text-gray-400">Remark 1 · 24 May 2025 | 14:24PM</p>
        <p className="mt-1">
          Mentioned trying beard-oil sample last visit — interested in full bottle next time.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "support" ? "justify-end" : "justify-start"}`}
          >
            <div className="relative max-w-[70%]">
              {editingId === msg.id ? (
                <div className="flex items-center gap-2">
                  <input
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    className="px-3 py-2 rounded-lg border w-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <button onClick={() => saveEdit(msg.id)} className="text-green-600 hover:text-green-700">
                    <Check size={18} />
                  </button>
                  <button onClick={cancelEdit} className="text-red-600 hover:text-red-700">
                    <X size={18} />
                  </button>
                </div>
              ) : (
                <>
                  <div className={`px-4 py-2 rounded-lg text-sm ${msg.sender === "support" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}>
                    {msg.text}
                  </div>
                  <div className="absolute -top-4 right-0 flex gap-2 text-gray-500">
                    <button onClick={() => startEditing(msg)} className="hover:text-indigo-600">
                      <Edit2 size={14} />
                    </button>
                    <button onClick={() => deleteMessage(msg.id)} className="hover:text-red-600">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <div className="flex items-center gap-2 p-4 border-t">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={sendMessage}
          className="bg-indigo-600 p-2 rounded-lg text-white hover:bg-indigo-700 transition-colors"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}