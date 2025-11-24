export type TriviaQuestion = {
  question: string;
  answer: string;
  options: string[];
};

export const triviaQuestions: TriviaQuestion[] = [
  {
    question: "What is my favourite food?",
    answer: "Tres Leches",
    options: ["Sushi", "Tres Leches", "Baklava", "Peking Duck"],
  },
  {
    question: "Where was I born?",
    answer: "Ottawa",
    options: ["Ottawa", "Kingston", "Toronto", "Dublin"],
  },
  {
    question: "What is my favourite food?",
    answer: "Tres Leches",
    options: ["Sushi", "Tres Leches", "Baklava", "Peking Duck"],
  },
  {
    question: "What is my dog's name?",
    answer: "Arlo",
    options: ["Arlo", "Hugo", "Ralph", "Owen"],
  },
  {
    question: "What is my favourite programming language?",
    answer: "Python",
    options: ["TypeScript", "Go", "Python", "Ruby"],
  },
  {
    question: "What is my favourite kind of moon?",
    answer: "Blood moon",
    options: ["Beaver moon", "Worm moon", "Pink moon", "Blood moon"],
  },
  {
    question: "Where haven't I lived?",
    answer: "Ottawa",
    options: ["Montreal", "Kingston", "Toronto", "Ottawa"],
  },
  {
    question: "How do I cook a steak?",
    answer: "Reverse sear",
    options: ["Reverse sear", "Pan fry", "Bake", "Grill"],
  },
  {
    question: "What is my favourite season?",
    answer: "Spring",
    options: ["Winter", "Spring", "Summer", "Fall"],
  },
  {
    question: "Can you use your dev tools?",
    answer: "Yes",
    options: ["Yes", "Yeah", "Yup", "Of course"],
  },
];
