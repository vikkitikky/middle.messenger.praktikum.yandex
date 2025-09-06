const PageNames = {
  NotFound: 'NotFoundPage',
  SomethingWentWrong: 'SomethingWentWrongPage',
  SignIn: 'SignIn',
  Chats: 'Chats',
  SignUp: 'SignUp',
  Settings: 'Settings',
}

const mockData = {
  [PageNames.NotFound]: {
    title: '404',
    titleSize: 'large',
    errorDescription: 'Не туда попали',
    goBack: '/',
    linkContent: 'Назад, к чатам!',
    errorImage: '/cloud.png',
    errorImageAlt: 'not found image'
  },
  [PageNames.SomethingWentWrong]: {
    title: '500',
    titleSize: 'large',
    errorDescription: 'Уже чиним',
    goBack: '/',
    errorImage: '/comet.png',
    errorImageAlt: 'something wrong image'
  },
  [PageNames.SignIn]: {
    title: 'Sign in',
    modalId: 'signIn',
    size: 'large',
    svg: '/bubble.png',
    inputs: [
      {
        type: 'text',
        name: 'login',
        placeholder: 'Login',
      },
      {
        type: 'password',
        name: 'password',
        placeholder: 'Password',
      }
    ],
    buttonName: 'sign-in',
    buttonTitle: 'Sign in',
    link: '/sign-up',
    linkTitle: 'Sign up',
    linkId: 'sign-up'
  },
  [PageNames.SignUp]: {
    title: 'Sign up',
    modalId: 'signUp',
    size: 'large',
    svg: '/bubble.png',
    inputs: [
      {
        type: 'text',
        name: 'first_name',
        placeholder: 'First name',
      },
      {
        type: 'text',
        name: 'second_name',
        placeholder: 'Second name',
      },
      {
        type: 'text',
        name: 'login',
        placeholder: 'Login',
      },
      {
        type: 'email',
        name: 'email',
        placeholder: 'Email',
      },
      {
        type: 'password',
        name: 'password',
        placeholder: 'Password',
      },
      {
        type: 'tel',
        name: 'phone',
        placeholder: 'Phone',
      },
    ],
    buttonName: 'sign-up',
    buttonTitle: 'Sign up',
    link: '/sign-in',
    linkTitle: 'Sign in',
    linkId: 'sign-in',
  },
  [PageNames.Settings]: {
    modalId: 'settings',
    inputs: [
      {
        type: 'url',
        name: 'avatar',
        placeholder: 'Avatar link',
      },
      {
        type: 'text',
        name: 'first_name',
        placeholder: 'First name',
      },
      {
        type: 'text',
        name: 'second_name',
        placeholder: 'Second name',
      },
      {
        type: 'text',
        name: 'display_name',
        placeholder: 'Display name',
      },
      {
        type: 'text',
        name: 'login',
        placeholder: 'Login',
      },
      {
        type: 'email',
        name: 'email',
        placeholder: 'Email',
      },
      {
        type: 'tel',
        name: 'phone',
        placeholder: 'Phone',
      },
      {
        type: 'password',
        name: 'oldPassword',
        placeholder: 'Old password',
      },
      {
        type: 'password',
        name: 'newPassword',
        placeholder: 'New password',
      },
    ],
    buttonName: 'apply',
    buttonTitle: 'Apply',
  },
  [PageNames.Chats]: {
    chats: [
      {
        chatId: 1,
        username: "Alice",
        initials: "AL",
        avatarColor: "#9B59B6",
        lastMessage: "Привет! Давно не виделись, как твои дела за последние недели?",
        time: "2025-08-30T10:12:00",
        lastMessageFrom: "Alice"
      },
      {
        chatId: 2,
        username: "Bob",
        initials: "BO",
        avatarColor: "#4ECDC4",
        lastMessage: "Я тут подумал, может завтра встретимся на кофе и обсудим проект?",
        time: "2025-08-30T09:45:00",
        lastMessageFrom: "owner"
      },
      {
        chatId: 3,
        username: "Charlie",
        initials: "CH",
        avatarColor: "#FFD93D",
        lastMessage: "Всё ок, спасибо, что спросил. На работе немного суматошно было.",
        time: "2025-08-29T18:20:00",
        lastMessageFrom: "Charlie"
      },
      {
        chatId: 4,
        username: "Diana",
        initials: "DI",
        avatarColor: "#9B59B6",
        lastMessage: "Спасибо! Я обязательно посмотрю и дам знать свои мысли по документу.",
        time: "2025-08-29T17:30:00",
        lastMessageFrom: "owner"
      },
      {
        chatId: 5,
        username: "Eve",
        initials: "EV",
        avatarColor: "#4ECDC4",
        lastMessage: "До встречи! Не забудь взять с собой те файлы, о которых мы говорили.",
        time: "2025-08-29T16:15:00",
        lastMessageFrom: "Eve"
      },
      {
        chatId: 6,
        username: "Frank",
        initials: "FR",
        avatarColor: "#FFD93D",
        lastMessage: "Понял, буду готов и принесу все материалы на встречу.",
        time: "2025-08-28T14:10:00",
        lastMessageFrom: "owner"
      },
      {
        chatId: 7,
        username: "Grace",
        initials: "GR",
        avatarColor: "#9B59B6",
        lastMessage: "Принято. Я немного задержусь, но скоро буду на месте.",
        time: "2025-08-28T13:05:00",
        lastMessageFrom: "Grace"
      },
      {
        chatId: 8,
        username: "Hank",
        initials: "HA",
        avatarColor: "#4ECDC4",
        lastMessage: "Спасибо за информацию! Теперь понятно, что нужно делать дальше.",
        time: "2025-08-28T12:00:00",
        lastMessageFrom: "owner"
      },
      {
        chatId: 9,
        username: "Ivy",
        initials: "IV",
        avatarColor: "#FFD93D",
        lastMessage: "Ок, я проверю все детали и дам обратную связь до конца дня.",
        time: "2025-08-27T20:45:00",
        lastMessageFrom: "Ivy"
      },
      {
        chatId: 10,
        username: "Jack",
        initials: "JA",
        avatarColor: "#9B59B6",
        lastMessage: "Хорошо, тогда начнем с того, что у нас есть по текущему проекту.",
        time: "2025-08-27T19:30:00",
        lastMessageFrom: "owner"
      },
      {
        chatId: 11,
        username: "Kate",
        initials: "KA",
        avatarColor: "#4ECDC4",
        lastMessage: "До завтра. Надеюсь, успеем обсудить все вопросы.",
        time: "2025-08-27T18:15:00",
        lastMessageFrom: "Kate"
      },
      {
        chatId: 12,
        username: "Leo",
        initials: "LE",
        avatarColor: "#FFD93D",
        lastMessage: "Ясно, тогда буду ждать твоего ответа по почте.",
        time: "2025-08-26T15:00:00",
        lastMessageFrom: "owner"
      },
      {
        chatId: 13,
        username: "Mia",
        initials: "MI",
        avatarColor: "#9B59B6",
        lastMessage: "Супер! Давай тогда начнем с самого важного пункта.",
        time: "2025-08-26T14:00:00",
        lastMessageFrom: "Mia"
      },
      {
        chatId: 14,
        username: "Nick",
        initials: "NI",
        avatarColor: "#4ECDC4",
        lastMessage: "Принял. Я подготовлю все данные, чтобы обсудить их на встрече.",
        time: "2025-08-26T13:00:00",
        lastMessageFrom: "owner"
      },
      {
        chatId: 15,
        username: "Olivia",
        initials: "OL",
        avatarColor: "#FFD93D",
        lastMessage: "Спасибо! Твоя помощь действительно ценна в этой ситуации.",
        time: "2025-08-25T11:45:00",
        lastMessageFrom: "Olivia"
      },
      {
        chatId: 16,
        username: "Paul",
        initials: "PA",
        avatarColor: "#9B59B6",
        lastMessage: "Ок, понял. Я тогда сразу начну с первого пункта списка.",
        time: "2025-08-25T10:30:00",
        lastMessageFrom: "owner"
      },
      {
        chatId: 17,
        username: "Quinn",
        initials: "QU",
        avatarColor: "#4ECDC4",
        lastMessage: "Будет сделано. Я постараюсь завершить всё к концу недели.",
        time: "2025-08-24T09:15:00",
        lastMessageFrom: "Quinn"
      },
      {
        chatId: 18,
        username: "Rachel",
        initials: "RA",
        avatarColor: "#FFD93D",
        lastMessage: "Спасибо! Твои советы действительно помогли мне разобраться.",
        time: "2025-08-24T08:00:00",
        lastMessageFrom: "owner"
      },
      {
        chatId: 19,
        username: "Steve",
        initials: "ST",
        avatarColor: "#9B59B6",
        lastMessage: "Понял тебя. Я тогда начну работать над этим прямо сегодня.",
        time: "2025-08-23T21:45:00",
        lastMessageFrom: "Steve"
      },
      {
        chatId: 20,
        username: "Tina",
        initials: "TI",
        avatarColor: "#4ECDC4",
        lastMessage: "До связи! Буду на связи, если что-то изменится.",
        time: "2025-08-23T20:30:00",
        lastMessageFrom: "owner"
      },
      {
        chatId: 21,
        username: "Uma",
        initials: "UM",
        avatarColor: "#FFD93D",
        lastMessage: "Отлично, тогда мы готовы к следующему шагу в проекте.",
        time: "2025-08-22T19:15:00",
        lastMessageFrom: "Uma"
      },
      {
        chatId: 22,
        username: "Victor",
        initials: "VI",
        avatarColor: "#9B59B6",
        lastMessage: "Согласен. Давай тогда распределим задачи между всеми участниками.",
        time: "2025-08-22T18:00:00",
        lastMessageFrom: "owner"
      },
      {
        chatId: 23,
        username: "Wendy",
        initials: "WE",
        avatarColor: "#4ECDC4",
        lastMessage: "Спасибо за помощь! Это сильно ускорило процесс и сэкономило время.",
        time: "2025-08-21T16:45:00",
        lastMessageFrom: "Wendy"
      },
    ]
  },
  Links: [
    {
      path: '/sign-in',
      title: 'Sign in',
      id: 'signIn'
    },
    {
      path: '/sign-up',
      title: 'Sign up',
      id: 'signUp'
    },
    {
      path: '/chats',
      title: 'Chats',
      id: 'chats'
    },
    {
      path: '/settings',
      title: 'Settings',
      id: 'settings'
    },
    {
      path: '/broken',
      title: '500',
      id: 'broken'
    },
    {
      path: '/not-found',
      title: '404',
      id: 'notFound'
    },
  ]
}

export {
  mockData,
  PageNames,
}
