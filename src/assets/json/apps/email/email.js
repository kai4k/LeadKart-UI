import brand5 from "/assets/images/brands/img-05.png"
import brand6 from "/assets/images/brands/img-06.png"
import brand9 from "/assets/images/brands/img-09.png"

import user10 from "/assets/images/avatar/user-10.png"
import user11 from "/assets/images/avatar/user-11.png"
import user12 from "/assets/images/avatar/user-12.png"
import user13 from "/assets/images/avatar/user-13.png"
import user14 from "/assets/images/avatar/user-14.png"
import user15 from "/assets/images/avatar/user-15.png"
import user16 from "/assets/images/avatar/user-16.png"
import user17 from "/assets/images/avatar/user-17.png"
import user18 from "/assets/images/avatar/user-18.png"
import user19 from "/assets/images/avatar/user-19.png"


const emailData = [
    {
      "id": 1,
      "sender": "Armand Noto",
      "email": "armand@example.com",
      "date": "15 June, 01:22AM",
      "subject": "Report - Domiex Projects",
      "message": "Please see the project status in the pdf I attached. The project looks good, and we are confident that we will complete it on time.",
      "avatarImage": user11,
      "badges": ["Inbox", "Team Meetings", "Developers"],
      "type": "drafts",
      "replies": [
        {
          "id": 101,
          "sender": "Lena Meyer",
          "email": "lena@example.com",
          "avatarImage": user18,
          "date": "15 June, 02:00AM",
          "subject": "Re: Report - Domiex Projects",
          "message": "Thanks, Armand. The status looks good. Let's discuss the next steps in our upcoming meeting."
        }
      ]
    },
    {
      "id": 2,
      "sender": "Sherry Shannon",
      "email": "sherry@example.com",
      "date": "14 May, 11:05AM",
      "subject": "Happy New Years, Shopia",
      "message": "Thank you, Shopia, for always believing in our subscriptions. As a token of appreciation, here is a voucher that you can use in our application.",
      "avatarImage": user13,
      "badges": ["Developers", "Inbox"],
      "type": "inbox",
      "replies": [
        {
          "id": 102,
          "sender": "Ryan Carter",
          "email": "ryan@example.com",
          "avatarImage": user10,
          "date": "14 May, 12:00PM",
          "subject": "Re: Happy New Years, Shopia",
          "message": "Thank you, Sherry! I appreciate the gesture. I'll definitely use the voucher."
        }
      ]
    },
    {
      "id": 3,
      "sender": "Joyce Moore",
      "email": "joyce@example.com",
      "date": "26 June, 05:19PM",
      "subject": "Photographer for our wedding",
      "message": "Hi Shopia! I took a look at your portfolio and it looks amazing.",
      "avatarImage": user18,
      "badges": ["Photographer", "Inbox"],
      "type": "sent",
      "replies": [
        {
          "id": 103,
          "sender": "Emily White",
          "email": "emily@example.com",
          "avatarImage": user15,
          "date": "26 June, 06:00PM",
          "subject": "Re: Photographer for our wedding",
          "message": "Thank you, Joyce! I’d love to discuss your wedding plans further."
        }
      ]
    },
    {
      "id": 4,
      "sender": "Barbara Sutton",
      "email": "barbara@example.com",
      "date": "10 May, 10:58AM",
      "subject": "You have a new subscriber",
      "message": "Hey! You've just got a new subscriber on your channel",
      "avatarText": "BS",
      "avatarColor": "red",
      "badges": ["Application", "Inbox"],
      "type": "inbox",
      "replies": [
        {
          "id": 104,
          "sender": "Lucas Meyer",
          "email": "lucas@example.com",
          "avatarImage": user17,
          "date": "10 May, 11:30AM",
          "subject": "Re: You have a new subscriber",
          "message": "Great news, Barbara! Let’s keep the momentum going."
        }
      ]
    },
    {
      "id": 5,
      "sender": "Walter Rosenbloom",
      "email": "walter@example.com",
      "date": "14 June, 05:33PM",
      "subject": "Following up on my proposal",
      "message": "Please see the project status in the pdf I attached. The project looks good, and we are confident that we will complete it on time.",
      "avatarText": "WR",
      "avatarColor": "sky",
      "badges": ["Application", "Inbox"],
      "type": "starred",
      "replies": [
        {
          "id": 105,
          "sender": "Anna Klein",
          "email": "anna@example.com",
          "avatarImage": user19,
          "date": "14 June, 06:00PM",
          "subject": "Re: Following up on my proposal",
          "message": "Thanks, Walter. I'll review the proposal and get back to you soon."
        }
      ]
    },
    {
      "id": 6,
      "sender": "Rachel Green",
      "email": "rachel@example.com",
      "date": "01 July, 02:45PM",
      "subject": "Project Update",
      "message": "Hey team, here is the latest update on the project status.",
      "avatarText": "RG",
      "avatarColor": "yellow",
      "badges": ["Developers", "Inbox"],
      "type": "starred",
      "replies": [
        {
          "id": 106,
          "sender": "Michael Brown",
          "email": "michael@example.com",
          "avatarImage": user16,
          "date": "01 July, 03:15PM",
          "subject": "Re: Project Update",
          "message": "Thanks, Rachel. The update is very helpful."
        }
      ]
    },
    {
      "id": 7,
      "sender": "John Doe",
      "email": "john@example.com",
      "date": "03 July, 11:15AM",
      "subject": "Meeting Reminder",
      "message": "Don't forget about the meeting tomorrow at 10 AM.",
      "avatarImage": user12,
      "badges": ["Team Meetings", "Important"],
      "type": "sent",
      "replies": [
        {
          "id": 107,
          "sender": "Sophia Turner",
          "email": "sophia@example.com",
          "date": "03 July, 11:45AM",
          "subject": "Re: Meeting Reminder",
          "message": "Thanks, John! I'll be there."
        }
      ]
    },
    {
      "id": 8,
      "sender": "Emily White",
      "email": "emily@example.com",
      "date": "05 July, 09:30AM",
      "subject": "Draft - New Marketing Plan",
      "message": "Please review the attached draft of the new marketing plan.",
      "avatarText": "EW",
      "avatarColor": "green",
      "badges": ["Marketing", "Drafts"],
      "type": "drafts",
      "replies": [
        {
          "id": 108,
          "sender": "Liam Scott",
          "email": "liam@example.com",
          "date": "05 July, 10:00AM",
          "subject": "Re: Draft - New Marketing Plan",
          "message": "Looks good, Emily. I have a few suggestions, let's discuss them."
        }
      ]
    },
    {
      "id": 9,
      "sender": "Mike Johnson",
      "email": "mike@example.com",
      "date": "07 July, 08:00AM",
      "subject": "Spam Alert",
      "message": "This is a spam email. Please ignore.",
      "avatarImage": user14,
      "badges": ["Spam"],
      "type": "spam",
      "replies": []
    },
    {
      "id": 10,
      "sender": "Alice Cooper",
      "email": "alice@example.com",
      "date": "09 July, 04:25PM",
      "subject": "Deleted Email",
      "message": "This email has been moved to trash.",
      "avatarText": "AC",
      "avatarColor": "red",
      "badges": ["Trash"],
      "type": "trash",
      "replies": []
    },
    {
      "id": 11,
      "sender": "Robert Brown",
      "email": "robert@example.com",
      "date": "11 July, 12:50PM",
      "subject": "Important Notice",
      "message": "Please read the important notice attached.",
      "avatarImage": user15,
      "badges": ["Important"],
      "type": "important",
      "replies": [
        {
          "id": 109,
          "sender": "Olivia Davis",
          "email": "olivia@example.com",
          "avatarImage": user12,
          "date": "11 July, 01:30PM",
          "subject": "Re: Important Notice",
          "message": "Got it, Robert. I'll review the notice."
        }
      ]
    },
    {
      "id": 12,
      "sender": "Sophie Turner",
      "email": "sophie@example.com",
      "date": "13 July, 10:00AM",
      "subject": "Weekly Update on Domiex Admin & Dashboard Projects",
      "message": "Please find the weekly update attached. Let me know if you need any more details.",
      "avatarImage": user17,
      "badges": ["Team Meetings", "Developers"],
      "type": "team",
      "replies": [
        {
          "id": 110,
          "sender": "Nathan Hill",
          "email": "nathan@example.com",
          "avatarImage": user18,
          "date": "13 July, 10:40AM",
          "subject": "Re: Weekly Update on Domiex Admin & Dashboard Projects",
          "message": "Thanks, Sophie! I’ve marked my calendar."
        }
      ]
    }
  ]

const userMailsData = [
    {
      "image": brand5,
      "name": "Domiex",
      "email": "shopia@domiex.com"
    },
    {
      "image": brand6,
      "name": "SRBThemes Account",
      "email": "shopia@example.com"
    },
    {
      "image": brand9,
      "name": "Global World",
      "email": "world@global.com"
    }
  ]
  export { emailData, userMailsData }