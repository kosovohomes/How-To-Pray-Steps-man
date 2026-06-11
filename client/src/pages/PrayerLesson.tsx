import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Heart, Droplet, Moon, Sun, Clock, BookOpen } from "lucide-react";
import PrayerQuiz from "@/components/PrayerQuiz";

export default function PrayerLesson() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#2C5AA0] to-[#20B2AA] text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">How to Pray: A Complete Guide</h1>
          <p className="text-xl opacity-90">Learn Wudu (Ablution) and Salah (Prayer) Step by Step</p>
          <p className="text-sm opacity-75 mt-2">With detailed infographics and comprehensive instructions</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        {/* Navigation Tabs */}
        <Tabs defaultValue="wudu" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-white border border-gray-200">
            <TabsTrigger value="wudu" className="flex items-center gap-2">
              <Droplet className="w-4 h-4" />
              <span className="hidden sm:inline">Wudu</span>
            </TabsTrigger>
            <TabsTrigger value="salah" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Salah</span>
            </TabsTrigger>
            <TabsTrigger value="prayers" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="hidden sm:inline">5 Prayers</span>
            </TabsTrigger>
            <TabsTrigger value="rakahs" className="flex items-center gap-2">
              <Moon className="w-4 h-4" />
              <span className="hidden sm:inline">Rak'ahs</span>
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Quiz</span>
            </TabsTrigger>
          </TabsList>

          {/* WUDU TAB */}
          <TabsContent value="wudu" className="space-y-8">
            <div className="grid grid-cols-1 gap-8">
              {/* Wudu Infographic */}
              <Card className="p-6 border-2 border-[#20B2AA]/20 shadow-lg">
                <h2 className="text-3xl font-bold text-[#2C5AA0] mb-6 flex items-center gap-2">
                  <Droplet className="w-8 h-8 text-[#20B2AA]" />
                  The 8 Steps of Wudu (Ablution)
                </h2>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663741330274/hXSrfHQKHR26LMfxT9Sbp2/wudu-steps-english-gsJVxi9SA9RhjdgifoSFJJ.webp"
                  alt="8 Steps of Wudu"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </Card>

              {/* Wudu Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-[#F5F1E8] to-white border-l-4 border-[#2C5AA0]">
                  <h3 className="text-xl font-bold text-[#2C5AA0] mb-4">What is Wudu?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Wudu (ablution) is the ritual purification performed before prayer. It is a physical and spiritual cleansing that prepares the body and mind for communication with Allah. Wudu is obligatory before performing Salah and is considered one of the most important prerequisites for prayer.
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-[#E8A8A8]/10 to-white border-l-4 border-[#E8A8A8]">
                  <h3 className="text-xl font-bold text-[#2C5AA0] mb-4">When is Wudu Required?</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#20B2AA] font-bold">•</span>
                      <span>Before every obligatory prayer (Fard)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#20B2AA] font-bold">•</span>
                      <span>Before voluntary prayers (Sunnah/Nafl)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#20B2AA] font-bold">•</span>
                      <span>When touching the Quran</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#20B2AA] font-bold">•</span>
                      <span>After using the bathroom</span>
                    </li>
                  </ul>
                </Card>
              </div>

              {/* Wudu Steps Breakdown */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#2C5AA0]">Detailed Steps of Wudu</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      step: 1,
                      name: "Niyyah (Intention)",
                      description: "Make the intention in your heart to perform Wudu for prayer. You can say it aloud or silently.",
                      color: "from-blue-50 to-blue-100",
                    },
                    {
                      step: 2,
                      name: "Wash Hands",
                      description: "Wash both hands up to the wrists three times, starting with the right hand. Ensure water reaches between fingers.",
                      color: "from-teal-50 to-teal-100",
                    },
                    {
                      step: 3,
                      name: "Rinse Mouth",
                      description: "Take water into your mouth and rinse it thoroughly three times. This cleanses the mouth for recitation.",
                      color: "from-rose-50 to-rose-100",
                    },
                    {
                      step: 4,
                      name: "Rinse Nose",
                      description: "Breathe in water through the nose and blow it out three times. Use your left hand to assist.",
                      color: "from-amber-50 to-amber-100",
                    },
                    {
                      step: 5,
                      name: "Wash Face",
                      description: "Wash your entire face three times, from forehead to chin and ear to ear. Include the beard if you have one.",
                      color: "from-green-50 to-green-100",
                    },
                    {
                      step: 6,
                      name: "Wash Arms",
                      description: "Wash both arms up to and including the elbows three times, starting with the right arm.",
                      color: "from-indigo-50 to-indigo-100",
                    },
                    {
                      step: 7,
                      name: "Wipe Head",
                      description: "Wipe your head once with wet hands. You can wipe the entire head or just a portion of it.",
                      color: "from-purple-50 to-purple-100",
                    },
                    {
                      step: 8,
                      name: "Wash Feet",
                      description: "Wash both feet up to and including the ankles three times, starting with the right foot. Ensure water reaches between toes.",
                      color: "from-cyan-50 to-cyan-100",
                    },
                  ].map((item) => (
                    <Card key={item.step} className={`p-4 bg-gradient-to-br ${item.color} border-l-4 border-[#2C5AA0]`}>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2C5AA0] text-white flex items-center justify-center font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">{item.name}</h4>
                          <p className="text-sm text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* SALAH TAB */}
          <TabsContent value="salah" className="space-y-8">
            <div className="grid grid-cols-1 gap-8">
              {/* Salah Positions Infographic */}
              <Card className="p-6 border-2 border-[#E8A8A8]/20 shadow-lg">
                <h2 className="text-3xl font-bold text-[#2C5AA0] mb-6 flex items-center gap-2">
                  <Heart className="w-8 h-8 text-[#E8A8A8]" />
                  The 7 Main Positions of Salah Prayer
                </h2>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663741330274/hXSrfHQKHR26LMfxT9Sbp2/salah-positions-english-i2oYDUJyxiGGVutGobBy9G.webp"
                  alt="7 Positions of Salah"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </Card>

              {/* Salah Overview */}
              <Card className="p-6 bg-gradient-to-br from-[#F5F1E8] to-white border-l-4 border-[#E8A8A8]">
                <h3 className="text-2xl font-bold text-[#2C5AA0] mb-4">What is Salah?</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Salah is the Islamic prayer performed five times daily at prescribed times. It is the second pillar of Islam and is a direct connection between the believer and Allah. Each prayer consists of one or more rak'ahs (cycles), where each rak'ah includes standing, recitation, bowing, prostration, and sitting.
                </p>
                <div className="bg-[#2C5AA0]/5 p-4 rounded-lg border-l-4 border-[#2C5AA0]">
                  <p className="text-sm text-gray-700">
                    <strong>Key Point:</strong> Prayer is not just physical movements; it is a spiritual practice that requires presence of mind, sincere intention, and connection with the Divine.
                  </p>
                </div>
              </Card>

              {/* Salah Positions Breakdown */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#2C5AA0]">Understanding Each Position</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      position: 1,
                      name: "Niyyah (Intention)",
                      description: "Intend in your heart to pray the specific prayer (Fajr, Dhuhr, Asr, Maghrib, or Isha). The intention must be clear and sincere.",
                      arabic: "النية",
                    },
                    {
                      position: 2,
                      name: "Takbir (Opening)",
                      description: "Raise your hands to your ears and say 'Allahu Akbar' (Allah is the Greatest). This marks the beginning of your prayer.",
                      arabic: "التكبير",
                    },
                    {
                      position: 3,
                      name: "Qiyam (Standing)",
                      description: "Stand upright with your hands crossed at chest level. Recite Surah Al-Fatiha and another Surah from the Quran.",
                      arabic: "القيام",
                    },
                    {
                      position: 4,
                      name: "Ruku (Bowing)",
                      description: "Bow forward with your hands on your knees, keeping your back parallel to the ground. Say 'Subhana Rabbiyal Azeem' (Glory be to my Lord, the Greatest).",
                      arabic: "الركوع",
                    },
                    {
                      position: 5,
                      name: "Qawmah (Rising)",
                      description: "Rise from bowing to the standing position. Say 'Sami'a Allahu liman hamidah' (Allah hears those who praise Him).",
                      arabic: "القومة",
                    },
                    {
                      position: 6,
                      name: "Sujud (Prostration)",
                      description: "Prostrate with your forehead, nose, hands, knees, and toes touching the ground. Say 'Subhana Rabbiyal A'la' (Glory be to my Lord, the Most High).",
                      arabic: "السجود",
                    },
                    {
                      position: 7,
                      name: "Tashahhud (Testimony)",
                      description: "Sit between prostrations or at the end of prayer. Recite the testimony of faith and send blessings upon the Prophet Muhammad.",
                      arabic: "التشهد",
                    },
                  ].map((item) => (
                    <Card key={item.position} className="p-4 bg-white border-2 border-[#20B2AA]/20 hover:border-[#20B2AA]/50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#E8A8A8] text-white flex items-center justify-center font-bold text-sm">
                            {item.position}
                          </div>
                          <h4 className="font-bold text-gray-800">{item.name}</h4>
                        </div>
                        <Badge variant="outline" className="text-[#2C5AA0] border-[#2C5AA0]">
                          {item.arabic}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-700">{item.description}</p>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Important Notes */}
              <Card className="p-6 bg-gradient-to-r from-[#20B2AA]/10 to-[#E8A8A8]/10 border-l-4 border-[#20B2AA]">
                <h3 className="text-xl font-bold text-[#2C5AA0] mb-4">Important Notes About Salah</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-[#20B2AA] font-bold">✓</span>
                    <span>Always face the Qibla (direction of the Kaaba in Mecca) during prayer</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#20B2AA] font-bold">✓</span>
                    <span>Maintain proper body covering (Satr): Men from navel to below knees, Women entire body except hands and face</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#20B2AA] font-bold">✓</span>
                    <span>Perform Wudu before every prayer to maintain ritual purity</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#20B2AA] font-bold">✓</span>
                    <span>Pray at the prescribed times for each prayer</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#20B2AA] font-bold">✓</span>
                    <span>Concentrate and be present during prayer (Khushu) for spiritual benefit</span>
                  </li>
                </ul>
              </Card>
            </div>
          </TabsContent>

          {/* FIVE DAILY PRAYERS TAB */}
          <TabsContent value="prayers" className="space-y-8">
            <div className="grid grid-cols-1 gap-8">
              {/* Daily Prayers Infographic */}
              <Card className="p-6 border-2 border-[#D4A574]/20 shadow-lg">
                <h2 className="text-3xl font-bold text-[#2C5AA0] mb-6 flex items-center gap-2">
                  <Clock className="w-8 h-8 text-[#D4A574]" />
                  The 5 Daily Islamic Prayers
                </h2>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663741330274/hXSrfHQKHR26LMfxT9Sbp2/daily-prayers-english-LQBmYRkyszVLM4xFd9WP78.webp"
                  alt="5 Daily Prayers"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </Card>

              {/* Prayer Times and Details */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#2C5AA0]">Prayer Times and Details</h3>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    {
                      name: "Fajr",
                      arabic: "الفجر",
                      time: "Before Sunrise",
                      fard: 2,
                      sunnah: 2,
                      total: 4,
                      description: "The dawn prayer, performed before sunrise. It marks the beginning of the Islamic day.",
                      icon: "🌙",
                    },
                    {
                      name: "Dhuhr",
                      arabic: "الظهر",
                      time: "Midday (After Zawal)",
                      fard: 4,
                      sunnah: 6,
                      total: 10,
                      description: "The noon prayer, performed after the sun passes its zenith. It is the longest prayer of the day.",
                      icon: "☀️",
                    },
                    {
                      name: "Asr",
                      arabic: "العصر",
                      time: "Late Afternoon",
                      fard: 4,
                      sunnah: 4,
                      total: 8,
                      description: "The afternoon prayer, performed in the late afternoon before sunset.",
                      icon: "🌤️",
                    },
                    {
                      name: "Maghrib",
                      arabic: "المغرب",
                      time: "Just After Sunset",
                      fard: 3,
                      sunnah: 2,
                      total: 5,
                      description: "The sunset prayer, performed just after the sun sets. It has 3 Fard rak'ahs (unique among the five prayers).",
                      icon: "🌅",
                    },
                    {
                      name: "Isha",
                      arabic: "العشاء",
                      time: "After Nightfall",
                      fard: 4,
                      sunnah: 2,
                      total: 6,
                      description: "The night prayer, performed after the sun has completely set and darkness has fallen.",
                      icon: "🌙",
                    },
                  ].map((prayer) => (
                    <Card key={prayer.name} className="p-6 bg-white border-l-4 border-[#2C5AA0] hover:shadow-lg transition-shadow">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-start">
                        <div>
                          <div className="text-4xl mb-2">{prayer.icon}</div>
                          <h4 className="text-2xl font-bold text-[#2C5AA0]">{prayer.name}</h4>
                          <p className="text-sm text-[#20B2AA] font-semibold">{prayer.arabic}</p>
                          <p className="text-xs text-gray-600 mt-1">{prayer.time}</p>
                        </div>
                        <div className="md:col-span-2">
                          <p className="text-gray-700 mb-3">{prayer.description}</p>
                        </div>
                        <div className="bg-gradient-to-br from-[#2C5AA0]/5 to-[#20B2AA]/5 p-4 rounded-lg">
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Fard:</span>
                              <span className="font-bold text-[#2C5AA0]">{prayer.fard} rak'ahs</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Sunnah:</span>
                              <span className="font-bold text-[#E8A8A8]">{prayer.sunnah} rak'ahs</span>
                            </div>
                            <div className="flex justify-between border-t pt-2">
                              <span className="font-bold text-gray-700">Total:</span>
                              <span className="font-bold text-[#20B2AA]">{prayer.total} rak'ahs</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Key Information */}
              <Card className="p-6 bg-gradient-to-r from-[#E8A8A8]/10 to-[#20B2AA]/10">
                <h3 className="text-xl font-bold text-[#2C5AA0] mb-4">Total Daily Prayer Rak'ahs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border-l-4 border-[#2C5AA0]">
                    <p className="text-sm text-gray-600">Total Fard Rak'ahs</p>
                    <p className="text-3xl font-bold text-[#2C5AA0]">17</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-[#E8A8A8]">
                    <p className="text-sm text-gray-600">Total Sunnah Muakkadah</p>
                    <p className="text-3xl font-bold text-[#E8A8A8]">12</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-[#20B2AA]">
                    <p className="text-sm text-gray-600">Combined Total</p>
                    <p className="text-3xl font-bold text-[#20B2AA]">29</p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* RAK'AHS BREAKDOWN TAB */}
          <TabsContent value="rakahs" className="space-y-8">
            <div className="grid grid-cols-1 gap-8">
              {/* Rak'ahs Table Infographic */}
              <Card className="p-6 border-2 border-[#1B5E3F]/20 shadow-lg">
                <h2 className="text-3xl font-bold text-[#2C5AA0] mb-6 flex items-center gap-2">
                  <Moon className="w-8 h-8 text-[#1B5E3F]" />
                  Daily Prayers: Fard & Sunnah Rak'ahs Breakdown
                </h2>
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663741330274/hXSrfHQKHR26LMfxT9Sbp2/rakat-breakdown-english-77NrbjPNrpzQ6aWYGV5KzX.webp"
                  alt="Rak'ahs Breakdown"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </Card>

              {/* Understanding Rak'ahs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 bg-gradient-to-br from-[#F5F1E8] to-white border-l-4 border-[#2C5AA0]">
                  <h3 className="text-xl font-bold text-[#2C5AA0] mb-4">What is a Rak'ah?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A rak'ah (plural: rak'ahs) is one complete cycle or unit of prayer. Each rak'ah consists of standing, recitation, bowing (ruku), rising, two prostrations (sujud), and sitting. All five daily prayers are measured in rak'ahs, which determine the length and structure of each prayer.
                  </p>
                </Card>

                <Card className="p-6 bg-gradient-to-br from-[#20B2AA]/10 to-white border-l-4 border-[#20B2AA]">
                  <h3 className="text-xl font-bold text-[#2C5AA0] mb-4">Types of Prayers</h3>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div>
                      <p className="font-bold text-[#2C5AA0]">Fard (Obligatory)</p>
                      <p>Compulsory prayers that must be performed. Missing them is considered a grave sin.</p>
                    </div>
                    <div>
                      <p className="font-bold text-[#E8A8A8]">Sunnah Muakkadah (Strongly Recommended)</p>
                      <p>Highly emphasized prayers that the Prophet regularly performed.</p>
                    </div>
                    <div>
                      <p className="font-bold text-[#1B5E3F]">Sunnah Ghair Muakkadah (Optional)</p>
                      <p>Optional prayers that the Prophet occasionally performed.</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Detailed Prayer Breakdown */}
              <Card className="p-6 bg-white border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-[#2C5AA0] mb-6">Detailed Rak'ah Breakdown for Each Prayer</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gradient-to-r from-[#2C5AA0] to-[#20B2AA] text-white">
                        <th className="px-4 py-3 text-left">Prayer</th>
                        <th className="px-4 py-3 text-center">Fard</th>
                        <th className="px-4 py-3 text-center">Sunnah Muakkadah</th>
                        <th className="px-4 py-3 text-center">Sunnah Ghair Muakkadah</th>
                        <th className="px-4 py-3 text-center">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Fajr", fard: 2, muakkadah: 2, ghair: 0, total: 4 },
                        { name: "Dhuhr", fard: 4, muakkadah: 4, ghair: 2, total: 10 },
                        { name: "Asr", fard: 4, muakkadah: 0, ghair: 2, total: 6 },
                        { name: "Maghrib", fard: 3, muakkadah: 0, ghair: 2, total: 5 },
                        { name: "Isha", fard: 4, muakkadah: 2, ghair: 2, total: 8 },
                      ].map((prayer, idx) => (
                        <tr
                          key={prayer.name}
                          className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                        >
                          <td className="px-4 py-3 font-bold text-[#2C5AA0]">{prayer.name}</td>
                          <td className="px-4 py-3 text-center bg-[#E8A8A8]/10 font-bold text-[#2C5AA0]">
                            {prayer.fard}
                          </td>
                          <td className="px-4 py-3 text-center bg-[#20B2AA]/10 font-bold text-[#20B2AA]">
                            {prayer.muakkadah}
                          </td>
                          <td className="px-4 py-3 text-center bg-[#1B5E3F]/10 font-bold text-[#1B5E3F]">
                            {prayer.ghair}
                          </td>
                          <td className="px-4 py-3 text-center font-bold text-white bg-[#2C5AA0] rounded">
                            {prayer.total}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-gradient-to-r from-[#2C5AA0]/10 to-[#20B2AA]/10 font-bold">
                        <td className="px-4 py-3">TOTAL</td>
                        <td className="px-4 py-3 text-center text-[#2C5AA0]">17</td>
                        <td className="px-4 py-3 text-center text-[#20B2AA]">8</td>
                        <td className="px-4 py-3 text-center text-[#1B5E3F]">8</td>
                        <td className="px-4 py-3 text-center text-[#2C5AA0]">33</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>

              {/* Important Notes */}
              <Card className="p-6 bg-gradient-to-r from-[#D4A574]/10 to-[#E8A8A8]/10 border-l-4 border-[#D4A574]">
                <h3 className="text-xl font-bold text-[#2C5AA0] mb-4">Important Notes</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-[#D4A574] font-bold">→</span>
                    <span>
                      <strong>Fajr:</strong> The 2 Sunnah rak'ahs are performed before the Fard rak'ahs
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#D4A574] font-bold">→</span>
                    <span>
                      <strong>Dhuhr:</strong> 4 Sunnah Muakkadah before Fard, 2 Sunnah Ghair Muakkadah after Fard
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#D4A574] font-bold">→</span>
                    <span>
                      <strong>Asr:</strong> 4 Sunnah Muakkadah before Fard, 2 Sunnah Ghair Muakkadah after
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#D4A574] font-bold">→</span>
                    <span>
                      <strong>Maghrib:</strong> 2 Sunnah Ghair Muakkadah after the Fard rak'ahs
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#D4A574] font-bold">→</span>
                    <span>
                      <strong>Isha:</strong> 2 Sunnah Muakkadah after Fard, 2 Sunnah Ghair Muakkadah after
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[#D4A574] font-bold">→</span>
                    <span>
                      Performing Sunnah prayers brings additional reward and blessings, though only Fard prayers are obligatory
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          </TabsContent>

          {/* QUIZ TAB */}
          <TabsContent value="quiz" className="space-y-8">
            <div className="grid grid-cols-1 gap-8">
              <Card className="p-6 bg-gradient-to-br from-[#D4A574]/10 to-[#E8A8A8]/10 border-2 border-[#D4A574]/20">
                <h2 className="text-3xl font-bold text-[#2C5AA0] mb-2 flex items-center gap-2">
                  <BookOpen className="w-8 h-8 text-[#D4A574]" />
                  Test Your Knowledge
                </h2>
                <p className="text-gray-700 mb-6">
                  Take this interactive quiz to assess your understanding of Wudu and Salah. You can choose to answer all questions or focus on a specific category.
                </p>
              </Card>

              <PrayerQuiz />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer Section */}
      <div className="bg-gradient-to-r from-[#2C5AA0] to-[#20B2AA] text-white py-12 px-4 mt-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Begin Your Prayer Journey</h2>
          <p className="text-lg opacity-90 mb-6">
            May Allah accept from us all our prayers and guide us on the straight path.
          </p>
          <p className="text-sm opacity-75">
            "Indeed, prayer prohibits immorality and wrongdoing." - Quran 29:45
          </p>
        </div>
      </div>
    </div>
  );
}
