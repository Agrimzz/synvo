import {
  IconMessageFilled,
  IconPhoneFilled,
  IconUserFilled,
} from "@tabler/icons-react"

export const navItems = [
  {
    name: "Messages",
    Icon: IconMessageFilled,
  },
  {
    name: "People",
    Icon: IconUserFilled,
  },
  {
    name: "Call",
    Icon: IconPhoneFilled,
  },
]

export const messageCards = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    time: "2024-10-24 14:30:00",
    lastMessage: "Hey! How are you?",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    time: "2024-10-24 14:20:00",
    lastMessage: "Looking forward to our meeting.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    time: "2024-10-24 13:50:00",
    lastMessage: "Can you review my code?",
  },
  {
    id: 4,
    name: "Emily Davis",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    time: "2024-10-24 13:45:00",
    lastMessage: "I'll send you the documents.",
  },
  {
    id: 5,
    name: "Robert Brown",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    time: "2024-10-24 13:30:00",
    lastMessage: "Let's catch up later.",
  },
  {
    id: 6,
    name: "Sophia Martinez",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    time: "2024-10-24 13:15:00",
    lastMessage: "The project is almost done.",
  },
  {
    id: 7,
    name: "David Lee",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    time: "2024-10-24 12:55:00",
    lastMessage: "Do you have the final report?",
  },
  {
    id: 8,
    name: "Olivia Williams",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    time: "2024-10-24 12:35:00",
    lastMessage: "Can we schedule a call?",
  },
  {
    id: 9,
    name: "James Wilson",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    time: "2024-10-24 12:20:00",
    lastMessage: "Thanks for the help earlier!",
  },
  {
    id: 10,
    name: "Ava Thompson",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    time: "2024-10-24 9:10:00",
    lastMessage: "Let's grab lunch tomorrow.",
  },
]

export const conversation = {
  conversation_id: 1,
  is_group: false,
  conversation_name: "Chat with John Doe",
  created_at: "2024-10-24 14:30:00",
  created_by: 1,
  participants: [
    {
      participant_id: 1,
      user_id: 1,
      username: "John Doe",
      profile_picture_url: "https://randomuser.me/api/portraits/men/1.jpg",
      joined_at: "2024-10-24 14:30:00",
    },
    {
      participant_id: 2,
      user_id: 0,
      username: "You",
      profile_picture_url: null,
      joined_at: "2024-10-24 14:30:00",
    },
  ],
  messages: [
    {
      message_id: 1,
      message_text: "Hey! How are you?",
      sent_at: "2024-10-24 14:30:00",
      sender: {
        user_id: 1,
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        username: "John Doe",
      },
      media_file: null,
    },
    {
      message_id: 2,
      message_text: "I'm doing great! How about you?",
      sent_at: "2024-10-24 14:32:00",
      sender: {
        user_id: 0,
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        username: "You",
      },
      media_file: null,
    },
    {
      message_id: 3,
      message_text: "Glad to hear! Just working on a new project.",
      sent_at: "2024-10-24 14:34:00",
      sender: {
        user_id: 1,
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        username: "John Doe",
      },
      media_file: null,
    },
    {
      message_id: 4,
      message_text: "Sounds exciting! Need any help?",
      sent_at: "2024-10-24 14:35:00",
      sender: {
        user_id: 0,
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        username: "You",
      },
      media_file: null,
    },
    {
      message_id: 5,
      message_text: "I might take you up on that! I'll keep you posted.",
      sent_at: "2024-10-24 14:37:00",
      sender: {
        user_id: 1,
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        username: "John Doe",
      },
      media_file: null,
    },
  ],
}
