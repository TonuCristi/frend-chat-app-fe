import ChatListItem from "./ChatListItem";

import type { Chat } from "../../../../types/chat.type";

const chats: Chat[] = [
  { id: "1", text: "Hi, how are you?", user: "John Snow" },
  { id: "2", text: "Are you coming tonight?", user: "Daenerys Targaryen" },
  { id: "3", text: "Let's meet tomorrow.", user: "Tyrion Lannister" },
  { id: "4", text: "Did you finish the project?", user: "Arya Stark" },
  { id: "5", text: "Call me when you're free.", user: "Sansa Stark" },
  { id: "6", text: "Check your email.", user: "Bran Stark" },
  { id: "7", text: "I'll send you the files.", user: "Jaime Lannister" },
  { id: "8", text: "Where are you now?", user: "Cersei Lannister" },
  { id: "9", text: "Let's grab a coffee.", user: "Ned Stark" },
  { id: "10", text: "Good morning!", user: "Robb Stark" },
  { id: "11", text: "Can you help me?", user: "Samwell Tarly" },
  { id: "12", text: "I’m on my way.", user: "Jorah Mormont" },
  { id: "13", text: "See you soon.", user: "Theon Greyjoy" },
  { id: "14", text: "Thanks a lot!", user: "Brienne of Tarth" },
  { id: "15", text: "No problem.", user: "Podrick Payne" },
  { id: "16", text: "What’s up?", user: "Sandor Clegane" },
  { id: "17", text: "Let’s start now.", user: "Gregor Clegane" },
  { id: "18", text: "I’ll be late.", user: "Varys" },
  { id: "19", text: "Don’t forget!", user: "Littlefinger" },
  { id: "20", text: "Sounds good.", user: "Gendry" },
  { id: "21", text: "See you later.", user: "Missandei" },
  { id: "22", text: "I agree with you.", user: "Grey Worm" },
  { id: "23", text: "That’s interesting.", user: "Daario Naharis" },
  { id: "24", text: "Tell me more.", user: "Melisandre" },
  { id: "25", text: "I’m busy now.", user: "Stannis Baratheon" },
  { id: "26", text: "Let’s talk later.", user: "Renly Baratheon" },
  { id: "27", text: "Great idea!", user: "Ygritte" },
  { id: "28", text: "Be careful.", user: "Tormund Giantsbane" },
  { id: "29", text: "I trust you.", user: "Hodor" },
  { id: "30", text: "Welcome!", user: "Khal Drogo" },
];

export default function ChatsList() {
  return (
    <ul className="scrollbar flex flex-col gap-2 overflow-y-auto pr-2">
      {chats.map((chat) => (
        <li key={chat.id}>
          <ChatListItem chat={chat} />
        </li>
      ))}
    </ul>
  );
}
