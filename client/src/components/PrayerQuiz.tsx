import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, RotateCcw, Trophy } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  category: "wudu" | "salah";
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How many steps are there in Wudu?",
    category: "wudu",
    options: ["5 steps", "6 steps", "8 steps", "10 steps"],
    correctAnswer: 2,
    explanation:
      "Wudu consists of 8 main steps: Niyyah (intention), washing hands, rinsing mouth, rinsing nose, washing face, washing arms, wiping head, and washing feet.",
  },
  {
    id: 2,
    question: "What is the first step of Wudu?",
    category: "wudu",
    options: ["Wash hands", "Niyyah (Intention)", "Rinse mouth", "Wash face"],
    correctAnswer: 1,
    explanation:
      "Niyyah (intention) is the first step of Wudu. You make the intention in your heart to perform Wudu for prayer.",
  },
  {
    id: 3,
    question: "How many times should you wash your hands in Wudu?",
    category: "wudu",
    options: ["Once", "Twice", "Three times", "Four times"],
    correctAnswer: 2,
    explanation:
      "In Wudu, you should wash your hands three times, starting with the right hand. This ensures thorough cleansing.",
  },
  {
    id: 4,
    question: "Which body part is wiped (not washed) in Wudu?",
    category: "wudu",
    options: ["Face", "Head", "Feet", "Arms"],
    correctAnswer: 1,
    explanation:
      "The head is wiped once with wet hands during Wudu. This is different from washing, which is done for other body parts.",
  },
  {
    id: 5,
    question: "When performing Wudu, which hand should you start with?",
    category: "wudu",
    options: ["Left hand", "Right hand", "Both hands together", "It doesn't matter"],
    correctAnswer: 1,
    explanation:
      "In Wudu, you should start with the right hand for washing hands, arms, and feet. This is part of the Sunnah (practice of the Prophet).",
  },
  {
    id: 6,
    question: "What is the first position in Salah prayer?",
    category: "salah",
    options: ["Ruku (Bowing)", "Sujud (Prostration)", "Niyyah (Intention)", "Qiyam (Standing)"],
    correctAnswer: 2,
    explanation:
      "Niyyah (intention) is the first step of Salah. You intend in your heart to pray the specific prayer (Fajr, Dhuhr, Asr, Maghrib, or Isha).",
  },
  {
    id: 7,
    question: "What do you say when starting Salah?",
    category: "salah",
    options: ["Bismillah", "Allahu Akbar", "Subhanallah", "Alhamdulillah"],
    correctAnswer: 1,
    explanation:
      "You say 'Allahu Akbar' (Allah is the Greatest) while raising your hands to your ears to begin Salah. This marks the beginning of your prayer.",
  },
  {
    id: 8,
    question: "How many main positions are there in Salah?",
    category: "salah",
    options: ["5 positions", "6 positions", "7 positions", "8 positions"],
    correctAnswer: 2,
    explanation:
      "There are 7 main positions in Salah: Niyyah, Takbir, Qiyam, Ruku, Qawmah, Sujud, and Tashahhud.",
  },
  {
    id: 9,
    question: "What is Ruku in Salah?",
    category: "salah",
    options: ["Standing position", "Bowing position", "Prostration position", "Sitting position"],
    correctAnswer: 1,
    explanation:
      "Ruku is the bowing position in Salah where you bend forward with your hands on your knees and your back parallel to the ground.",
  },
  {
    id: 10,
    question: "How many Fard (obligatory) rak'ahs are there in total for all 5 daily prayers?",
    category: "salah",
    options: ["12 rak'ahs", "15 rak'ahs", "17 rak'ahs", "20 rak'ahs"],
    correctAnswer: 2,
    explanation:
      "There are 17 Fard rak'ahs in total for all 5 daily prayers: Fajr (2), Dhuhr (4), Asr (4), Maghrib (3), and Isha (4).",
  },
  {
    id: 11,
    question: "Which prayer has 3 Fard rak'ahs?",
    category: "salah",
    options: ["Fajr", "Dhuhr", "Asr", "Maghrib"],
    correctAnswer: 3,
    explanation:
      "Maghrib (sunset prayer) is unique as it has 3 Fard rak'ahs, while all other prayers have either 2 or 4 Fard rak'ahs.",
  },
  {
    id: 12,
    question: "What is Sujud in Salah?",
    category: "salah",
    options: ["Standing upright", "Bowing forward", "Prostration on the ground", "Sitting position"],
    correctAnswer: 2,
    explanation:
      "Sujud is the prostration position where your forehead, nose, hands, knees, and toes touch the ground. It is performed twice in each rak'ah.",
  },
];

interface UserAnswer {
  questionId: number;
  selectedAnswer: number;
}

export default function PrayerQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "wudu" | "salah">("all");
  const [quizStarted, setQuizStarted] = useState(false);

  const filteredQuestions =
    selectedCategory === "all"
      ? quizQuestions
      : quizQuestions.filter((q) => q.category === selectedCategory);

  const question = filteredQuestions[currentQuestion];

  const handleAnswerClick = (answerIndex: number) => {
    if (showResult) return;

    const newAnswer: UserAnswer = {
      questionId: question.id,
      selectedAnswer: answerIndex,
    };

    setUserAnswers([...userAnswers, newAnswer]);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResult(false);
    setQuizComplete(false);
    setQuizStarted(false);
  };

  const calculateScore = () => {
    let correct = 0;
    userAnswers.forEach((answer) => {
      const q = filteredQuestions.find((q) => q.id === answer.questionId);
      if (q && q.correctAnswer === answer.selectedAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const score = calculateScore();
  const totalQuestions = userAnswers.length;
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  if (!quizStarted) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <Card className="p-8 bg-gradient-to-br from-[#2C5AA0]/5 to-[#20B2AA]/5 border-2 border-[#2C5AA0]/20">
          <div className="text-center">
            <Trophy className="w-16 h-16 text-[#D4A574] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#2C5AA0] mb-4">Test Your Knowledge</h2>
            <p className="text-gray-700 mb-8">
              Take this interactive quiz to test your understanding of Wudu and Salah. You'll get
              immediate feedback on each answer.
            </p>

            <div className="space-y-4 mb-8">
              <p className="text-sm font-semibold text-gray-600">Select Quiz Category:</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  onClick={() => {
                    setSelectedCategory("all");
                    setQuizStarted(true);
                  }}
                  className="bg-[#2C5AA0] hover:bg-[#2C5AA0]/90 text-white flex-1"
                >
                  All Questions (12)
                </Button>
                <Button
                  onClick={() => {
                    setSelectedCategory("wudu");
                    setQuizStarted(true);
                  }}
                  variant="outline"
                  className="border-[#20B2AA] text-[#20B2AA] hover:bg-[#20B2AA]/10 flex-1"
                >
                  Wudu Only (5)
                </Button>
                <Button
                  onClick={() => {
                    setSelectedCategory("salah");
                    setQuizStarted(true);
                  }}
                  variant="outline"
                  className="border-[#E8A8A8] text-[#E8A8A8] hover:bg-[#E8A8A8]/10 flex-1"
                >
                  Salah Only (7)
                </Button>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-l-4 border-[#2C5AA0]">
              <p className="text-sm text-gray-700">
                <strong>How it works:</strong> Answer each question by clicking on one of the four
                options. You'll receive immediate feedback with an explanation for the correct
                answer.
              </p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  if (quizComplete) {
    const performanceMessage =
      percentage >= 90
        ? "Excellent! You have mastered the material."
        : percentage >= 80
          ? "Very Good! You have a strong understanding."
          : percentage >= 70
            ? "Good! You understand the basics well."
            : percentage >= 60
              ? "Fair. Review the material and try again."
              : "Keep studying! Review the lesson and retake the quiz.";

    return (
      <div className="w-full max-w-2xl mx-auto">
        <Card className="p-8 bg-gradient-to-br from-[#20B2AA]/10 to-[#E8A8A8]/10 border-2 border-[#20B2AA]/30">
          <div className="text-center">
            <Trophy className="w-20 h-20 text-[#D4A574] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-[#2C5AA0] mb-2">Quiz Complete!</h2>
            <p className="text-gray-700 mb-8">Here's how you performed:</p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg border-2 border-[#2C5AA0]/20">
                <p className="text-sm text-gray-600 mb-1">Score</p>
                <p className="text-3xl font-bold text-[#2C5AA0]">
                  {score}/{totalQuestions}
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-[#20B2AA]/20">
                <p className="text-sm text-gray-600 mb-1">Percentage</p>
                <p className="text-3xl font-bold text-[#20B2AA]">{percentage}%</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-[#E8A8A8]/20">
                <p className="text-sm text-gray-600 mb-1">Category</p>
                <p className="text-lg font-bold text-[#E8A8A8] capitalize">
                  {selectedCategory === "all" ? "All" : selectedCategory}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#2C5AA0]/10 to-[#20B2AA]/10 p-6 rounded-lg mb-8 border-l-4 border-[#2C5AA0]">
              <p className="text-lg font-semibold text-[#2C5AA0] mb-2">Performance Analysis</p>
              <p className="text-gray-700">{performanceMessage}</p>
            </div>

            <div className="space-y-3">
              <Button
                onClick={handleRestartQuiz}
                className="w-full bg-[#2C5AA0] hover:bg-[#2C5AA0]/90 text-white"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Retake Quiz
              </Button>
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                variant="outline"
                className="w-full border-[#20B2AA] text-[#20B2AA] hover:bg-[#20B2AA]/10"
              >
                Back to Lesson
              </Button>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  const isAnswerCorrect =
    showResult &&
    userAnswers[currentQuestion] &&
    userAnswers[currentQuestion].selectedAnswer === question.correctAnswer;
  const selectedAnswer =
    userAnswers[currentQuestion] && userAnswers[currentQuestion].selectedAnswer;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-semibold text-gray-700">
            Question {currentQuestion + 1} of {filteredQuestions.length}
          </p>
          <Badge variant="outline" className="text-[#2C5AA0] border-[#2C5AA0]">
            {selectedCategory === "all" ? "All Categories" : selectedCategory.toUpperCase()}
          </Badge>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-[#2C5AA0] to-[#20B2AA] h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / filteredQuestions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <Card className="p-8 border-2 border-[#2C5AA0]/20 mb-6">
        <h3 className="text-2xl font-bold text-[#2C5AA0] mb-6">{question.question}</h3>

        {/* Answer Options */}
        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correctAnswer;
            let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all";

            if (!showResult) {
              buttonClass += " border-gray-200 hover:border-[#2C5AA0] hover:bg-[#2C5AA0]/5 cursor-pointer";
            } else {
              if (isCorrect) {
                buttonClass += " border-green-500 bg-green-50 cursor-default";
              } else if (isSelected && !isCorrect) {
                buttonClass += " border-red-500 bg-red-50 cursor-default";
              } else {
                buttonClass += " border-gray-200 bg-gray-50 cursor-default";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={showResult}
                className={buttonClass}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-800">{option}</span>
                  {showResult && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showResult && (
          <div
            className={`p-4 rounded-lg border-l-4 ${
              isAnswerCorrect
                ? "bg-green-50 border-green-500"
                : "bg-blue-50 border-[#2C5AA0]"
            }`}
          >
            <p className="font-semibold text-gray-800 mb-2">
              {isAnswerCorrect ? "✓ Correct!" : "Explanation:"}
            </p>
            <p className="text-gray-700 text-sm">{question.explanation}</p>
          </div>
        )}
      </Card>

      {/* Navigation Buttons */}
      {showResult && (
        <div className="flex gap-3">
          <Button
            onClick={handleNextQuestion}
            className="flex-1 bg-[#2C5AA0] hover:bg-[#2C5AA0]/90 text-white"
          >
            {currentQuestion === filteredQuestions.length - 1 ? "See Results" : "Next Question"}
          </Button>
          <Button
            onClick={handleRestartQuiz}
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </div>
      )}

      {!showResult && (
        <p className="text-center text-sm text-gray-600">Click an answer to continue</p>
      )}
    </div>
  );
}
