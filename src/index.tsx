import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('/api/*', cors())

// ============================================
// DATA: Curated Religious Video Content
// ============================================

interface VideoItem {
  id: string
  title: string
  titleHi: string
  description: string
  youtubeId: string
  duration: string
  category: 'lok-katha' | 'kahaniya' | 'bhajans'
}

https://github.com/0-Aman/bhakti-sagar.gitinterface GodData {
  id: string
  name: string
  nameHi: string
  emoji: string
  color: string
  gradient: string
  description: string
  descriptionHi: string
  image: string
  videos: VideoItem[]
}

const godsData: GodData[] = [
  {
    id: 'shri-krishna',
    name: 'Shri Krishna',
    nameHi: 'श्री कृष्ण',
    emoji: '🙏',
    color: '#1a237e',
    gradient: 'from-blue-900 via-blue-700 to-blue-500',
    description: 'Lord of Love, Wisdom & Divine Play',
    descriptionHi: 'प्रेम, ज्ञान और दिव्य लीला के भगवान',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Bhagavan_Vishnu_as_Lord_Krishna_with_flute.jpg/250px-Bhagavan_Vishnu_as_Lord_Krishna_with_flute.jpg',
    videos: [
      // Lok-Katha
      { id: 'k-lk-1', title: 'Krishna Leela - Complete Story', titleHi: 'कृष्ण लीला - सम्पूर्ण कथा', description: 'The complete divine story of Lord Krishna from birth to Vrindavan', youtubeId: 'QjGbFEaWFJo', duration: '45:00', category: 'lok-katha' },
      { id: 'k-lk-2', title: 'Govardhan Leela', titleHi: 'गोवर्धन लीला', description: 'When Krishna lifted the Govardhan mountain', youtubeId: 'u62mUJaDjKc', duration: '25:00', category: 'lok-katha' },
      { id: 'k-lk-3', title: 'Kalia Naag Leela', titleHi: 'कालिया नाग लीला', description: 'Krishna defeats the serpent Kalia in Yamuna river', youtubeId: '4pHQsjMRxXo', duration: '20:00', category: 'lok-katha' },
      { id: 'k-lk-4', title: 'Makhan Chor Leela', titleHi: 'माखन चोर लीला', description: 'Naughty Krishna stealing butter - beloved tales', youtubeId: 'xhf6yvxV-lE', duration: '18:00', category: 'lok-katha' },
      // Kahaniya
      { id: 'k-kh-1', title: 'Krishna Sudama Friendship', titleHi: 'कृष्ण सुदामा की मित्रता', description: 'The beautiful story of true friendship between Krishna and Sudama', youtubeId: 'ggVLcAKKajY', duration: '30:00', category: 'kahaniya' },
      { id: 'k-kh-2', title: 'Bhagavad Gita Saar', titleHi: 'भगवद गीता सार', description: 'The essence of Bhagavad Gita teachings', youtubeId: 'zBrMHMdDEaI', duration: '55:00', category: 'kahaniya' },
      { id: 'k-kh-3', title: 'Radha Krishna Prem Katha', titleHi: 'राधा कृष्ण प्रेम कथा', description: 'The divine love story of Radha and Krishna', youtubeId: 'g1R6kF3XqWY', duration: '35:00', category: 'kahaniya' },
      { id: 'k-kh-4', title: 'Draupadi Cheer Haran', titleHi: 'द्रौपदी चीर हरण', description: 'How Krishna saved Draupadi\'s honor', youtubeId: 'Q9FVo0WG3qo', duration: '22:00', category: 'kahaniya' },
      // Bhajans
      { id: 'k-bh-1', title: 'Achyutam Keshavam', titleHi: 'अच्युतम केशवम', description: 'Popular Krishna bhajan - Achyutam Keshavam Krishna Damodaram', youtubeId: 'RtV6FcKbavQ', duration: '8:00', category: 'bhajans' },
      { id: 'k-bh-2', title: 'Hare Krishna Maha Mantra', titleHi: 'हरे कृष्ण महामंत्र', description: 'The divine Hare Krishna Maha Mantra chanting', youtubeId: 'rVnbi0pnOK0', duration: '15:00', category: 'bhajans' },
      { id: 'k-bh-3', title: 'Aarti Kunj Bihari Ki', titleHi: 'आरती कुंजबिहारी की', description: 'Most popular aarti of Lord Krishna', youtubeId: '_YJuMeyX9EI', duration: '6:00', category: 'bhajans' },
      { id: 'k-bh-4', title: 'Govind Bolo Hari Gopal Bolo', titleHi: 'गोविंद बोलो हरि गोपाल बोलो', description: 'Beautiful devotional bhajan of Krishna', youtubeId: 'pMBo-oLh5bE', duration: '10:00', category: 'bhajans' },
      { id: 'k-bh-5', title: 'Radhe Radhe Barsane Wali Radhe', titleHi: 'राधे राधे बरसाने वाली राधे', description: 'Devoted bhajan for Radha Rani', youtubeId: 'PB7ecwMiaxA', duration: '7:00', category: 'bhajans' },
    ]
  },
  {
    id: 'shri-ram',
    name: 'Shri Ram',
    nameHi: 'श्री राम',
    emoji: '🏹',
    color: '#e65100',
    gradient: 'from-orange-900 via-orange-600 to-orange-400',
    description: 'Maryada Purushottam - The Ideal Man',
    descriptionHi: 'मर्यादा पुरुषोत्तम - आदर्श पुरुष',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Rama_with_bow.jpg/220px-Rama_with_bow.jpg',
    videos: [
      // Lok-Katha
      { id: 'r-lk-1', title: 'Sampurna Ramayan', titleHi: 'सम्पूर्ण रामायण', description: 'Complete Ramayan - the divine journey of Lord Ram', youtubeId: 'oiVeTSwFr9Y', duration: '2:30:00', category: 'lok-katha' },
      { id: 'r-lk-2', title: 'Ram Vanvas Katha', titleHi: 'राम वनवास कथा', description: 'The exile of Lord Ram - 14 years in forest', youtubeId: 'EqxhAfFP_Os', duration: '40:00', category: 'lok-katha' },
      { id: 'r-lk-3', title: 'Lanka Dahan', titleHi: 'लंका दहन', description: 'Hanuman burns Lanka - epic tale', youtubeId: 'tqKqpSF_jCM', duration: '25:00', category: 'lok-katha' },
      { id: 'r-lk-4', title: 'Ram Setu Nirman', titleHi: 'राम सेतु निर्माण', description: 'Building of the bridge to Lanka', youtubeId: 'Z8FMoI4bXBU', duration: '20:00', category: 'lok-katha' },
      // Kahaniya
      { id: 'r-kh-1', title: 'Ram Bhakt Shabari', titleHi: 'राम भक्त शबरी', description: 'Shabari\'s undying devotion for Lord Ram', youtubeId: '1l_AaBbYl3g', duration: '18:00', category: 'kahaniya' },
      { id: 'r-kh-2', title: 'Sita Swayamvar', titleHi: 'सीता स्वयंवर', description: 'How Lord Ram won Sita\'s hand', youtubeId: 'kYnEDaIXcRQ', duration: '30:00', category: 'kahaniya' },
      { id: 'r-kh-3', title: 'Ram Lakshman Parshuram Samvad', titleHi: 'राम लक्ष्मण परशुराम संवाद', description: 'The encounter of Ram-Lakshman with Parshuram', youtubeId: 'HxYFg8k4k7U', duration: '15:00', category: 'kahaniya' },
      { id: 'r-kh-4', title: 'Ahilya Uddhar', titleHi: 'अहिल्या उद्धार', description: 'How Lord Ram liberated Ahilya from curse', youtubeId: 'D7C0u2dXkTk', duration: '12:00', category: 'kahaniya' },
      // Bhajans
      { id: 'r-bh-1', title: 'Shri Ram Chandra Kripalu', titleHi: 'श्री रामचंद्र कृपालु', description: 'Most beloved Ram bhajan by Tulsidas', youtubeId: 'Fy-2KAtb-cI', duration: '10:00', category: 'bhajans' },
      { id: 'r-bh-2', title: 'Hanuman Chalisa', titleHi: 'हनुमान चालीसा', description: 'The powerful Hanuman Chalisa recitation', youtubeId: 'AETFvQonfhc', duration: '12:00', category: 'bhajans' },
      { id: 'r-bh-3', title: 'Ram Aarti - Aarti Shri Raghuvar Ji Ki', titleHi: 'आरती श्री रघुवर जी की', description: 'Divine aarti of Lord Ram', youtubeId: 'bXX3Vr5wNMo', duration: '6:00', category: 'bhajans' },
      { id: 'r-bh-4', title: 'Hey Ram Hey Ram', titleHi: 'हे राम हे राम', description: 'Peaceful Ram dhun for meditation', youtubeId: 'z6Y5FqloZu0', duration: '30:00', category: 'bhajans' },
      { id: 'r-bh-5', title: 'Mangal Bhavan Amangal Hari', titleHi: 'मंगल भवन अमंगल हारी', description: 'Famous Ramayan chaupai', youtubeId: 'GwW2HW4l1Kg', duration: '8:00', category: 'bhajans' },
    ]
  },
  {
    id: 'shiv-shankar',
    name: 'Shiv Shankar',
    nameHi: 'शिव शंकर',
    emoji: '🔱',
    color: '#1b5e20',
    gradient: 'from-emerald-900 via-emerald-600 to-teal-500',
    description: 'The Destroyer & Transformer - Mahadev',
    descriptionHi: 'संहारक और परिवर्तक - महादेव',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Shiva_Bangalore.jpg/230px-Shiva_Bangalore.jpg',
    videos: [
      // Lok-Katha
      { id: 's-lk-1', title: 'Shiv Puran Katha', titleHi: 'शिव पुराण कथा', description: 'Complete Shiv Puran stories', youtubeId: 'b0j1ZZPHZ1I', duration: '1:30:00', category: 'lok-katha' },
      { id: 's-lk-2', title: 'Shiv Parvati Vivah', titleHi: 'शिव पार्वती विवाह', description: 'The divine marriage of Shiva and Parvati', youtubeId: 'C3nNFQ0kkw0', duration: '35:00', category: 'lok-katha' },
      { id: 's-lk-3', title: 'Samudra Manthan', titleHi: 'समुद्र मंथन', description: 'Churning of the ocean - Neelkanth story', youtubeId: 'RCBtPH-TaKY', duration: '25:00', category: 'lok-katha' },
      { id: 's-lk-4', title: 'Tripurasur Vadh', titleHi: 'त्रिपुरासुर वध', description: 'Shiva destroys the three demon cities', youtubeId: '6mvSCf6xPOA', duration: '20:00', category: 'lok-katha' },
      // Kahaniya
      { id: 's-kh-1', title: 'Ganesh Ji Ka Janam', titleHi: 'गणेश जी का जन्म', description: 'How Lord Ganesha was born - Shiv Parvati story', youtubeId: '3n_-hEFaopg', duration: '20:00', category: 'kahaniya' },
      { id: 's-kh-2', title: 'Bhasmasur Ki Kahani', titleHi: 'भस्मासुर की कहानी', description: 'The tale of Bhasmasur and Lord Shiva', youtubeId: 'T2XWyGEuF60', duration: '15:00', category: 'kahaniya' },
      { id: 's-kh-3', title: 'Shiv Ke 12 Jyotirling', titleHi: 'शिव के 12 ज्योतिर्लिंग', description: 'Stories behind all 12 Jyotirlingas', youtubeId: '0sHLIBcRFz4', duration: '45:00', category: 'kahaniya' },
      { id: 's-kh-4', title: 'Kailash Mansarovar Rahasya', titleHi: 'कैलाश मानसरोवर रहस्य', description: 'Mysteries of Mount Kailash', youtubeId: 'BOlG3IkFfDw', duration: '25:00', category: 'kahaniya' },
      // Bhajans
      { id: 's-bh-1', title: 'Om Namah Shivaya Dhun', titleHi: 'ॐ नमः शिवाय धुन', description: 'Peaceful Om Namah Shivaya chanting', youtubeId: 'WjWDPHhFvbI', duration: '30:00', category: 'bhajans' },
      { id: 's-bh-2', title: 'Shiv Tandav Stotram', titleHi: 'शिव तांडव स्तोत्रम', description: 'Powerful Shiv Tandav Stotram', youtubeId: 'JQPP0AB9sFU', duration: '8:00', category: 'bhajans' },
      { id: 's-bh-3', title: 'Bholenath Aarti', titleHi: 'भोलेनाथ आरती', description: 'Om Jai Shiv Omkara - Shiv Aarti', youtubeId: 'uqULmM2OISI', duration: '6:00', category: 'bhajans' },
      { id: 's-bh-4', title: 'Mahamrityunjaya Mantra', titleHi: 'महामृत्युंजय मंत्र', description: 'Powerful healing mantra - 108 times', youtubeId: 'ZJh_e7P3clQ', duration: '45:00', category: 'bhajans' },
      { id: 's-bh-5', title: 'Namo Namo Shankara', titleHi: 'नमो नमो शंकरा', description: 'Devotional Shiva bhajan', youtubeId: '1PZdxajEGXk', duration: '5:00', category: 'bhajans' },
    ]
  },
  {
    id: 'maa-durga',
    name: 'Maa Durga',
    nameHi: 'माँ दुर्गा',
    emoji: '🦁',
    color: '#b71c1c',
    gradient: 'from-red-900 via-red-600 to-rose-500',
    description: 'The Supreme Goddess of Power & Protection',
    descriptionHi: 'शक्ति और रक्षा की सर्वोच्च देवी',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Durga_Mahishasura-mardini.JPG/220px-Durga_Mahishasura-mardini.JPG',
    videos: [
      // Lok-Katha
      { id: 'd-lk-1', title: 'Maa Durga Ki Utpatti', titleHi: 'माँ दुर्गा की उत्पत्ति', description: 'Origin story of Goddess Durga', youtubeId: 'qFDlnpQ_Hck', duration: '35:00', category: 'lok-katha' },
      { id: 'd-lk-2', title: 'Mahishasur Mardini Katha', titleHi: 'महिषासुर मर्दिनी कथा', description: 'Durga slays the buffalo demon Mahishasur', youtubeId: 'mLZ7jWwcVkQ', duration: '30:00', category: 'lok-katha' },
      { id: 'd-lk-3', title: 'Nav Durga Ki Katha', titleHi: 'नव दुर्गा की कथा', description: 'Stories of all nine forms of Durga', youtubeId: '0y3FdtSO0Xk', duration: '40:00', category: 'lok-katha' },
      { id: 'd-lk-4', title: 'Maa Kali Avatar', titleHi: 'माँ काली अवतार', description: 'When Durga took the fierce form of Kali', youtubeId: 'hsgILPCZ3ks', duration: '22:00', category: 'lok-katha' },
      // Kahaniya
      { id: 'd-kh-1', title: 'Vaishno Devi Ki Kahani', titleHi: 'वैष्णो देवी की कहानी', description: 'The miraculous story of Vaishno Devi temple', youtubeId: 'A8xC3a1M4DI', duration: '25:00', category: 'kahaniya' },
      { id: 'd-kh-2', title: 'Jai Santoshi Maa', titleHi: 'जय संतोषी माँ', description: 'Story of Goddess Santoshi Maa', youtubeId: 'kkLh9Qhqby0', duration: '20:00', category: 'kahaniya' },
      { id: 'd-kh-3', title: 'Maa Lakshmi Ki Katha', titleHi: 'माँ लक्ष्मी की कथा', description: 'Divine stories of Goddess Lakshmi', youtubeId: 'wF7n0a0fepQ', duration: '28:00', category: 'kahaniya' },
      { id: 'd-kh-4', title: 'Maa Saraswati Ki Katha', titleHi: 'माँ सरस्वती की कथा', description: 'Stories of the Goddess of Knowledge', youtubeId: 'IKk1CYlCE6A', duration: '18:00', category: 'kahaniya' },
      // Bhajans
      { id: 'd-bh-1', title: 'Durga Chalisa', titleHi: 'दुर्गा चालीसा', description: 'Shri Durga Chalisa with meaning', youtubeId: 'GvlphJXzE5E', duration: '12:00', category: 'bhajans' },
      { id: 'd-bh-2', title: 'Ambe Tu Hai Jagdambe Kali', titleHi: 'अम्बे तू है जगदम्बे काली', description: 'Famous Durga aarti', youtubeId: 'GJjM0ER7kOQ', duration: '7:00', category: 'bhajans' },
      { id: 'd-bh-3', title: 'Ya Devi Sarvabhuteshu', titleHi: 'या देवी सर्वभूतेषु', description: 'Sacred Durga mantra chanting', youtubeId: 'VRr0Br53RJk', duration: '15:00', category: 'bhajans' },
      { id: 'd-bh-4', title: 'Om Jai Ambe Gauri', titleHi: 'ॐ जय अम्बे गौरी', description: 'Traditional Durga Aarti', youtubeId: 'xjLPF26GQNA', duration: '6:00', category: 'bhajans' },
      { id: 'd-bh-5', title: 'Aigiri Nandini', titleHi: 'ऐगिरी नंदिनी', description: 'Mahishasura Mardini Stotram', youtubeId: 'SewJHZtgCFo', duration: '10:00', category: 'bhajans' },
    ]
  },
  {
    id: 'shri-ganesh',
    name: 'Shri Ganesh',
    nameHi: 'श्री गणेश',
    emoji: '🐘',
    color: '#ff6f00',
    gradient: 'from-amber-800 via-orange-500 to-yellow-400',
    description: 'Vighnaharta - Remover of Obstacles',
    descriptionHi: 'विघ्नहर्ता - बाधाओं को दूर करने वाले',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Ganesha-Bali.jpg/220px-Ganesha-Bali.jpg',
    videos: [
      // Lok-Katha
      { id: 'g-lk-1', title: 'Ganesh Ji Ki Sampurna Katha', titleHi: 'गणेश जी की सम्पूर्ण कथा', description: 'Complete story of Lord Ganesha', youtubeId: 'GGYb2T2WpcQ', duration: '40:00', category: 'lok-katha' },
      { id: 'g-lk-2', title: 'Ganesh Chaturthi Vrat Katha', titleHi: 'गणेश चतुर्थी व्रत कथा', description: 'The story behind Ganesh Chaturthi celebration', youtubeId: 'uBh7IjH-A-I', duration: '20:00', category: 'lok-katha' },
      { id: 'g-lk-3', title: 'Ganesh Ji Ka Vivah', titleHi: 'गणेश जी का विवाह', description: 'Marriage stories of Lord Ganesha', youtubeId: 'HmA9K65o7-k', duration: '18:00', category: 'lok-katha' },
      { id: 'g-lk-4', title: 'Ganesh Ji Aur Chand Ki Kahani', titleHi: 'गणेश जी और चाँद की कहानी', description: 'Why we don\'t look at the moon on Ganesh Chaturthi', youtubeId: 'hVwC0X94pBk', duration: '15:00', category: 'lok-katha' },
      // Kahaniya
      { id: 'g-kh-1', title: 'Ganesh Ji Ka Elephant Head', titleHi: 'गणेश जी को हाथी का सिर कैसे मिला', description: 'How Ganesha got the elephant head', youtubeId: '3n_-hEFaopg', duration: '15:00', category: 'kahaniya' },
      { id: 'g-kh-2', title: 'Ganesh Ji Aur Kubera', titleHi: 'गणेश जी और कुबेर', description: 'When Ganesha taught Kubera a lesson about pride', youtubeId: 'JFiY46JjZ3c', duration: '12:00', category: 'kahaniya' },
      { id: 'g-kh-3', title: 'Prithvi Pradakshina', titleHi: 'पृथ्वी प्रदक्षिणा', description: 'Ganesha circles his parents - smartest solution', youtubeId: 'jHGfTW7j4yQ', duration: '10:00', category: 'kahaniya' },
      { id: 'g-kh-4', title: 'Ganesh Ji - Pratham Pujya', titleHi: 'गणेश जी - प्रथम पूज्य', description: 'Why Ganesha is worshipped first', youtubeId: 'N0jjn1Ds2G8', duration: '14:00', category: 'kahaniya' },
      // Bhajans
      { id: 'g-bh-1', title: 'Ganesh Aarti - Jai Ganesh Deva', titleHi: 'जय गणेश देवा', description: 'Most popular Ganesh aarti', youtubeId: 'o0jD6P27ZsE', duration: '5:00', category: 'bhajans' },
      { id: 'g-bh-2', title: 'Vakratunda Mahakaya Mantra', titleHi: 'वक्रतुंड महाकाय मंत्र', description: 'Powerful Ganesh mantra chanting', youtubeId: 'h0aF8LCJM0k', duration: '15:00', category: 'bhajans' },
      { id: 'g-bh-3', title: 'Deva Shri Ganesha', titleHi: 'देवा श्री गणेशा', description: 'Popular devotional Ganesh song', youtubeId: 'HimGBYsLQXo', duration: '4:00', category: 'bhajans' },
      { id: 'g-bh-4', title: 'Ganpati Bappa Morya', titleHi: 'गणपति बप्पा मोरया', description: 'Energetic Ganpati bhajan', youtubeId: 'GfKs9smaOxQ', duration: '6:00', category: 'bhajans' },
      { id: 'g-bh-5', title: 'Shendur Lal Chadhayo', titleHi: 'शेंदूर लाल चढ़ायो', description: 'Traditional Ganesh aarti in Marathi', youtubeId: 'GnbFLi6qpQI', duration: '5:00', category: 'bhajans' },
    ]
  },
  {
    id: 'hanuman-ji',
    name: 'Hanuman Ji',
    nameHi: 'हनुमान जी',
    emoji: '💪',
    color: '#e53935',
    gradient: 'from-red-800 via-red-500 to-orange-400',
    description: 'Sankat Mochan - The Mighty Devotee of Ram',
    descriptionHi: 'संकट मोचन - राम के परम भक्त',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Hanuman_in_Terra_Cotta.jpg/220px-Hanuman_in_Terra_Cotta.jpg',
    videos: [
      // Lok-Katha
      { id: 'h-lk-1', title: 'Hanuman Ji Ki Sampurna Katha', titleHi: 'हनुमान जी की सम्पूर्ण कथा', description: 'Complete life story of Lord Hanuman', youtubeId: 'VwYGGea0A6Q', duration: '50:00', category: 'lok-katha' },
      { id: 'h-lk-2', title: 'Hanuman Ji Ka Janam', titleHi: 'हनुमान जी का जन्म', description: 'The divine birth of Hanuman', youtubeId: '1yFZKsBi_-c', duration: '20:00', category: 'lok-katha' },
      { id: 'h-lk-3', title: 'Sanjeevani Booti Katha', titleHi: 'संजीवनी बूटी कथा', description: 'Hanuman brings Sanjeevani mountain to save Lakshman', youtubeId: 'sJP7OUNkE_s', duration: '22:00', category: 'lok-katha' },
      { id: 'h-lk-4', title: 'Hanuman Lanka Dahan', titleHi: 'हनुमान लंका दहन', description: 'When Hanuman set Lanka on fire', youtubeId: 'tqKqpSF_jCM', duration: '25:00', category: 'lok-katha' },
      // Kahaniya
      { id: 'h-kh-1', title: 'Hanuman Surya Ko Nigal Gaye', titleHi: 'हनुमान सूर्य को निगल गए', description: 'Baby Hanuman swallows the Sun', youtubeId: 'vn_2lRj7T08', duration: '12:00', category: 'kahaniya' },
      { id: 'h-kh-2', title: 'Hanuman Ji Ka Seena Chira', titleHi: 'हनुमान जी का सीना चीरा', description: 'When Hanuman opened his chest showing Ram-Sita', youtubeId: 'x7MgBqnROkA', duration: '10:00', category: 'kahaniya' },
      { id: 'h-kh-3', title: 'Panchmukhi Hanuman Katha', titleHi: 'पंचमुखी हनुमान कथा', description: 'Story of five-faced Hanuman form', youtubeId: 'UhQ8OMn2E9g', duration: '18:00', category: 'kahaniya' },
      { id: 'h-kh-4', title: 'Hanuman Aur Bhima', titleHi: 'हनुमान और भीम', description: 'Meeting between Hanuman and Bhima', youtubeId: 'oEqd88VYQ8s', duration: '15:00', category: 'kahaniya' },
      // Bhajans
      { id: 'h-bh-1', title: 'Hanuman Chalisa', titleHi: 'हनुमान चालीसा', description: 'Shri Hanuman Chalisa - most powerful prayer', youtubeId: 'AETFvQonfhc', duration: '10:00', category: 'bhajans' },
      { id: 'h-bh-2', title: 'Bajrang Baan', titleHi: 'बजरंग बाण', description: 'Powerful Bajrang Baan path', youtubeId: '7k55NBXGbM8', duration: '12:00', category: 'bhajans' },
      { id: 'h-bh-3', title: 'Hanuman Aarti', titleHi: 'हनुमान आरती', description: 'Aarti Keeje Hanuman Lala Ki', youtubeId: 'o-sCLzZ5HhQ', duration: '5:00', category: 'bhajans' },
      { id: 'h-bh-4', title: 'Sankat Mochan Naam Tiharo', titleHi: 'संकट मोचन नाम तिहारो', description: 'Devotional Hanuman bhajan', youtubeId: 'ypDiaBjqrDw', duration: '8:00', category: 'bhajans' },
      { id: 'h-bh-5', title: 'Jai Hanuman Gyan Gun Sagar', titleHi: 'जय हनुमान ज्ञान गुण सागर', description: 'Opening verse of Hanuman Chalisa - Extended', youtubeId: 'jVHr_1vU8cE', duration: '15:00', category: 'bhajans' },
    ]
  }
]

// ============================================
// API ROUTES
// ============================================

// Get all gods list
app.get('/api/gods', (c) => {
  const gods = godsData.map(g => ({
    id: g.id,
    name: g.name,
    nameHi: g.nameHi,
    emoji: g.emoji,
    color: g.color,
    gradient: g.gradient,
    description: g.description,
    descriptionHi: g.descriptionHi,
    image: g.image,
    videoCount: g.videos.length
  }))
  return c.json({ gods })
})

// Get specific god with all videos
app.get('/api/gods/:id', (c) => {
  const id = c.req.param('id')
  const god = godsData.find(g => g.id === id)
  if (!god) {
    return c.json({ error: 'God not found' }, 404)
  }
  return c.json({ god })
})

// Get videos by category for a specific god
app.get('/api/gods/:id/:category', (c) => {
  const id = c.req.param('id')
  const category = c.req.param('category') as 'lok-katha' | 'kahaniya' | 'bhajans'
  const god = godsData.find(g => g.id === id)
  if (!god) {
    return c.json({ error: 'God not found' }, 404)
  }
  const videos = god.videos.filter(v => v.category === category)
  return c.json({ god: { id: god.id, name: god.name, nameHi: god.nameHi, emoji: god.emoji, color: god.color, gradient: god.gradient }, videos })
})

// Search across all content
app.get('/api/search', (c) => {
  const query = (c.req.query('q') || '').toLowerCase()
  if (!query || query.length < 2) {
    return c.json({ results: [] })
  }
  const results: any[] = []
  godsData.forEach(god => {
    god.videos.forEach(video => {
      if (
        video.title.toLowerCase().includes(query) ||
        video.titleHi.includes(query) ||
        video.description.toLowerCase().includes(query) ||
        god.name.toLowerCase().includes(query) ||
        god.nameHi.includes(query)
      ) {
        results.push({
          ...video,
          godId: god.id,
          godName: god.name,
          godNameHi: god.nameHi,
          godEmoji: god.emoji
        })
      }
    })
  })
  return c.json({ results })
})

// ============================================
// HTML PAGES
// ============================================

const headHTML = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>भक्ति सागर | Bhakti Sagar - Divine Video Collection</title>
    <meta name="description" content="Watch devotional lok-katha, kahaniya and bhajans of your favorite gods - Krishna, Ram, Shiv, Durga, Ganesh, Hanuman">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🙏</text></svg>">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.0/css/all.min.css" rel="stylesheet">
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              hindi: ['Noto Sans Devanagari', 'sans-serif'],
              english: ['Poppins', 'sans-serif'],
            },
            animation: {
              'float': 'float 3s ease-in-out infinite',
              'glow': 'glow 2s ease-in-out infinite alternate',
              'slideUp': 'slideUp 0.6s ease-out',
              'fadeIn': 'fadeIn 0.5s ease-out',
              'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
              float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
              },
              glow: {
                '0%': { boxShadow: '0 0 5px rgba(255,165,0,0.3)' },
                '100%': { boxShadow: '0 0 20px rgba(255,165,0,0.6), 0 0 40px rgba(255,165,0,0.3)' },
              },
              slideUp: {
                '0%': { opacity: '0', transform: 'translateY(30px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
              },
              fadeIn: {
                '0%': { opacity: '0' },
                '100%': { opacity: '1' },
              },
            }
          }
        }
      }
    </script>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: 'Poppins', 'Noto Sans Devanagari', sans-serif; }
      
      .om-pattern {
        background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='30' y='35' text-anchor='middle' font-size='16' fill='%23ffffff10'%3Eॐ%3C/text%3E%3C/svg%3E");
      }
      
      .god-card {
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .god-card:hover {
        transform: translateY(-8px) scale(1.02);
      }
      
      .video-card {
        transition: all 0.3s ease;
      }
      .video-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0,0,0,0.15);
      }
      
      .tab-btn.active {
        border-bottom-color: currentColor;
        font-weight: 700;
      }
      
      .stagger-1 { animation-delay: 0.1s; }
      .stagger-2 { animation-delay: 0.2s; }
      .stagger-3 { animation-delay: 0.3s; }
      .stagger-4 { animation-delay: 0.4s; }
      .stagger-5 { animation-delay: 0.5s; }
      .stagger-6 { animation-delay: 0.6s; }
      
      .diya-glow {
        filter: drop-shadow(0 0 8px rgba(255, 165, 0, 0.5));
      }
      
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

      .video-modal {
        backdrop-filter: blur(8px);
      }

      @keyframes diyas {
        0%, 100% { opacity: 0.7; }
        50% { opacity: 1; }
      }
      .diya-anim { animation: diyas 2s ease-in-out infinite; }
    </style>
`

// Home page
app.get('/', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="hi">
<head>${headHTML}</head>
<body class="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 min-h-screen">

  <!-- Header -->
  <header class="bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 om-pattern text-white shadow-xl relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
    <div class="relative max-w-6xl mx-auto px-4 py-6 md:py-8">
      <div class="text-center">
        <div class="flex items-center justify-center gap-3 mb-2">
          <span class="text-3xl md:text-4xl diya-anim">🪔</span>
          <h1 class="text-3xl md:text-5xl font-bold font-hindi tracking-wide">भक्ति सागर</h1>
          <span class="text-3xl md:text-4xl diya-anim" style="animation-delay: 1s">🪔</span>
        </div>
        <p class="text-orange-100 text-sm md:text-base font-english mt-1">Bhakti Sagar - Your Divine Video Collection</p>
        <p class="text-orange-200/80 text-xs md:text-sm mt-2 font-hindi">लोक-कथा • कहानियाँ • भजन — सब एक जगह</p>
      </div>
      
      <!-- Search Bar -->
      <div class="mt-5 max-w-lg mx-auto relative">
        <input 
          type="text" 
          id="searchInput"
          placeholder="🔍 खोजें... भजन, कथा, कहानियाँ" 
          class="w-full px-5 py-3 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white placeholder-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-white/25 transition-all text-sm"
          oninput="handleSearch(this.value)"
        >
        <div id="searchResults" class="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl max-h-80 overflow-y-auto scrollbar-hide z-50 hidden"></div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="max-w-6xl mx-auto px-4 py-8">
    
    <!-- Greeting Section -->
    <div class="text-center mb-8 animate-fadeIn">
      <h2 class="text-xl md:text-2xl font-hindi text-gray-800 font-semibold">🙏 अपने इष्ट देव चुनें</h2>
      <p class="text-gray-500 text-sm mt-1 font-english">Select your favorite deity to explore devotional content</p>
      <div class="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mt-3 rounded-full"></div>
    </div>

    <!-- Gods Grid -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6" id="godsGrid">
      <!-- Filled by JavaScript -->
    </div>

    <!-- Featured Section -->
    <div class="mt-12 text-center animate-fadeIn">
      <div class="bg-gradient-to-r from-orange-100 via-amber-50 to-orange-100 rounded-2xl p-6 md:p-8 border border-orange-200/50">
        <h3 class="font-hindi text-lg md:text-xl text-orange-800 font-semibold mb-2">✨ भक्ति सागर में आपका स्वागत है ✨</h3>
        <p class="text-gray-600 text-sm md:text-base max-w-2xl mx-auto font-hindi leading-relaxed">
          यहाँ आपको मिलेंगे आपके प्रिय भगवान की <strong>लोक-कथाएँ</strong>, <strong>कहानियाँ</strong> और <strong>भजन</strong> — सब कुछ वीडियो में। 
          कोई लॉगिन नहीं, कोई साइनअप नहीं — बस चुनें और देखें! 
        </p>
        <div class="flex flex-wrap justify-center gap-4 mt-4 text-2xl">
          <span class="diya-anim">🪔</span>
          <span class="diya-anim" style="animation-delay:0.3s">🙏</span>
          <span class="diya-anim" style="animation-delay:0.6s">📿</span>
          <span class="diya-anim" style="animation-delay:0.9s">🔔</span>
          <span class="diya-anim" style="animation-delay:1.2s">🪷</span>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-gradient-to-r from-orange-800 via-red-800 to-orange-900 text-orange-200 mt-12">
    <div class="max-w-6xl mx-auto px-4 py-6 text-center">
      <p class="font-hindi text-lg">🙏 जय श्री राम • हर हर महादेव • जय श्री कृष्ण 🙏</p>
      <p class="text-orange-300/60 text-xs mt-2 font-english">Bhakti Sagar &copy; 2026 — Made with devotion</p>
    </div>
  </footer>

  <script>
    // Load gods on page load
    async function loadGods() {
      try {
        const res = await fetch('/api/gods');
        const data = await res.json();
        const grid = document.getElementById('godsGrid');
        
        grid.innerHTML = data.gods.map((god, i) => \`
          <a href="/god/\${god.id}" class="god-card block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-white border border-gray-100 animate-slideUp stagger-\${i + 1} cursor-pointer group">
            <div class="relative h-44 md:h-56 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-t \${god.gradient} opacity-80 z-10"></div>
              <img src="\${god.image}" alt="\${god.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onerror="this.style.display='none'">
              <div class="absolute inset-0 z-20 flex flex-col items-center justify-center text-white p-4">
                <span class="text-4xl md:text-5xl mb-2 animate-float">\${god.emoji}</span>
                <h3 class="text-xl md:text-2xl font-bold font-hindi drop-shadow-lg">\${god.nameHi}</h3>
                <p class="text-white/80 text-xs md:text-sm font-english mt-1">\${god.name}</p>
              </div>
            </div>
            <div class="p-3 md:p-4 text-center">
              <p class="text-gray-600 text-xs md:text-sm font-hindi">\${god.descriptionHi}</p>
              <div class="flex items-center justify-center gap-1 mt-2 text-orange-500">
                <i class="fas fa-play-circle text-sm"></i>
                <span class="text-xs font-english font-medium">\${god.videoCount} Videos</span>
              </div>
            </div>
          </a>
        \`).join('');
      } catch (err) {
        console.error('Error loading gods:', err);
      }
    }

    // Search functionality
    let searchTimeout;
    async function handleSearch(query) {
      clearTimeout(searchTimeout);
      const resultsDiv = document.getElementById('searchResults');
      
      if (query.length < 2) {
        resultsDiv.classList.add('hidden');
        return;
      }
      
      searchTimeout = setTimeout(async () => {
        try {
          const res = await fetch('/api/search?q=' + encodeURIComponent(query));
          const data = await res.json();
          
          if (data.results.length === 0) {
            resultsDiv.innerHTML = '<div class="p-4 text-center text-gray-500 font-hindi text-sm">कोई परिणाम नहीं मिला 🙁</div>';
          } else {
            resultsDiv.innerHTML = data.results.map(r => \`
              <a href="/god/\${r.godId}?play=\${r.youtubeId}&cat=\${r.category}" class="flex items-center gap-3 p-3 hover:bg-orange-50 transition-colors border-b border-gray-100 last:border-0">
                <img src="https://img.youtube.com/vi/\${r.youtubeId}/mqdefault.jpg" class="w-20 h-14 rounded-lg object-cover flex-shrink-0">
                <div class="min-w-0">
                  <p class="text-sm font-hindi font-medium text-gray-800 truncate">\${r.titleHi}</p>
                  <p class="text-xs text-gray-500 font-english truncate">\${r.godEmoji} \${r.godName} • \${r.category === 'lok-katha' ? 'लोक-कथा' : r.category === 'kahaniya' ? 'कहानियाँ' : 'भजन'}</p>
                </div>
              </a>
            \`).join('');
          }
          resultsDiv.classList.remove('hidden');
        } catch (err) {
          console.error('Search error:', err);
        }
      }, 300);
    }

    // Close search on click outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#searchInput') && !e.target.closest('#searchResults')) {
        document.getElementById('searchResults').classList.add('hidden');
      }
    });

    loadGods();
  </script>
</body>
</html>`)
})

// God detail page
app.get('/god/:id', (c) => {
  const id = c.req.param('id')
  const god = godsData.find(g => g.id === id)
  if (!god) {
    return c.html(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Not Found</title></head><body><h1>God not found</h1><a href="/">Go Home</a></body></html>`, 404)
  }
  
  return c.html(`<!DOCTYPE html>
<html lang="hi">
<head>${headHTML}</head>
<body class="bg-gray-50 min-h-screen">

  <!-- Hero Header -->
  <header class="bg-gradient-to-r ${god.gradient} om-pattern text-white relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
    <div class="relative max-w-6xl mx-auto px-4 py-5">
      <!-- Back Button -->
      <a href="/" class="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-4 transition-colors group">
        <i class="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
        <span class="font-english">Back to Home</span>
      </a>
      
      <div class="flex items-center gap-4">
        <div class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl md:text-4xl animate-float border-2 border-white/30">
          ${god.emoji}
        </div>
        <div>
          <h1 class="text-2xl md:text-4xl font-bold font-hindi">${god.nameHi}</h1>
          <p class="text-white/70 text-sm md:text-base font-english">${god.name}</p>
          <p class="text-white/60 text-xs mt-1 font-hindi">${god.descriptionHi}</p>
        </div>
      </div>
    </div>
  </header>

  <!-- Category Tabs -->
  <div class="bg-white shadow-sm sticky top-0 z-40">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex gap-0">
        <button onclick="switchTab('lok-katha')" data-tab="lok-katha" class="tab-btn flex-1 py-3 md:py-4 text-center font-hindi text-sm md:text-base border-b-3 border-transparent transition-all hover:bg-orange-50" style="border-bottom: 3px solid transparent;">
          <i class="fas fa-book-open mr-1"></i> लोक-कथा
        </button>
        <button onclick="switchTab('kahaniya')" data-tab="kahaniya" class="tab-btn flex-1 py-3 md:py-4 text-center font-hindi text-sm md:text-base border-b-3 border-transparent transition-all hover:bg-orange-50" style="border-bottom: 3px solid transparent;">
          <i class="fas fa-scroll mr-1"></i> कहानियाँ
        </button>
        <button onclick="switchTab('bhajans')" data-tab="bhajans" class="tab-btn flex-1 py-3 md:py-4 text-center font-hindi text-sm md:text-base border-b-3 border-transparent transition-all hover:bg-orange-50" style="border-bottom: 3px solid transparent;">
          <i class="fas fa-music mr-1"></i> भजन
        </button>
      </div>
    </div>
  </div>

  <!-- Video Content -->
  <main class="max-w-6xl mx-auto px-4 py-6">
    <div id="videoGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      <!-- Filled by JavaScript -->
    </div>
    
    <!-- Empty state -->
    <div id="emptyState" class="hidden text-center py-12">
      <span class="text-5xl">🙏</span>
      <p class="text-gray-500 mt-4 font-hindi">इस श्रेणी में अभी कोई वीडियो नहीं है</p>
    </div>
  </main>

  <!-- Video Player Modal -->
  <div id="videoModal" class="fixed inset-0 bg-black/80 video-modal z-50 hidden items-center justify-center p-4">
    <div class="bg-white rounded-2xl overflow-hidden w-full max-w-4xl shadow-2xl animate-slideUp">
      <div class="flex items-center justify-between px-4 py-3 bg-gray-50 border-b">
        <h3 id="modalTitle" class="font-hindi text-sm md:text-base font-semibold text-gray-800 truncate mr-4"></h3>
        <button onclick="closeModal()" class="w-8 h-8 rounded-full bg-gray-200 hover:bg-red-100 hover:text-red-600 flex items-center justify-center transition-colors flex-shrink-0">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="relative bg-black" style="padding-top: 56.25%;">
        <iframe id="videoFrame" class="absolute inset-0 w-full h-full" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="px-4 py-3">
        <p id="modalDesc" class="text-gray-600 text-sm font-english"></p>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-400 mt-8">
    <div class="max-w-6xl mx-auto px-4 py-4 text-center">
      <a href="/" class="text-orange-400 hover:text-orange-300 font-hindi text-sm"><i class="fas fa-home mr-1"></i> भक्ति सागर होम पेज</a>
      <p class="text-gray-500 text-xs mt-2 font-english">Bhakti Sagar &copy; 2026</p>
    </div>
  </footer>

  <script>
    const godId = '${god.id}';
    const godColor = '${god.color}';
    let allVideos = [];
    let currentTab = 'lok-katha';

    // Load all videos for this god
    async function loadVideos() {
      try {
        const res = await fetch('/api/gods/' + godId);
        const data = await res.json();
        allVideos = data.god.videos;
        
        // Check URL params for auto-play and category
        const params = new URLSearchParams(window.location.search);
        const playId = params.get('play');
        const cat = params.get('cat');
        
        if (cat) {
          currentTab = cat;
        }
        
        switchTab(currentTab);
        
        if (playId) {
          const video = allVideos.find(v => v.youtubeId === playId);
          if (video) {
            setTimeout(() => openModal(video.youtubeId, video.titleHi, video.description), 500);
          }
        }
      } catch (err) {
        console.error('Error loading videos:', err);
      }
    }

    function switchTab(tab) {
      currentTab = tab;
      
      // Update tab styles
      document.querySelectorAll('.tab-btn').forEach(btn => {
        const isActive = btn.dataset.tab === tab;
        btn.style.borderBottomColor = isActive ? godColor : 'transparent';
        btn.style.color = isActive ? godColor : '#6b7280';
        btn.style.fontWeight = isActive ? '700' : '500';
      });

      // Filter & render videos
      const videos = allVideos.filter(v => v.category === tab);
      const grid = document.getElementById('videoGrid');
      const empty = document.getElementById('emptyState');
      
      if (videos.length === 0) {
        grid.innerHTML = '';
        empty.classList.remove('hidden');
        return;
      }
      
      empty.classList.add('hidden');
      
      const categoryLabels = {
        'lok-katha': { icon: 'fas fa-book-open', label: 'लोक-कथा', labelEn: 'Lok-Katha' },
        'kahaniya': { icon: 'fas fa-scroll', label: 'कहानियाँ', labelEn: 'Stories' },
        'bhajans': { icon: 'fas fa-music', label: 'भजन', labelEn: 'Bhajans' }
      };
      const catInfo = categoryLabels[tab];
      
      grid.innerHTML = videos.map((video, i) => \`
        <div class="video-card bg-white rounded-xl overflow-hidden shadow-md cursor-pointer animate-slideUp stagger-\${Math.min(i + 1, 6)} group" onclick="openModal('\${video.youtubeId}', '\${video.titleHi.replace(/'/g, "\\\\'")}', '\${video.description.replace(/'/g, "\\\\'")}')">
          <div class="relative overflow-hidden">
            <img 
              src="https://img.youtube.com/vi/\${video.youtubeId}/hqdefault.jpg" 
              alt="\${video.title}" 
              class="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            >
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
              <div class="w-14 h-14 rounded-full bg-red-600/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100 shadow-lg">
                <i class="fas fa-play text-white text-lg ml-1"></i>
              </div>
            </div>
            <div class="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded font-english">
              <i class="far fa-clock mr-1"></i>\${video.duration}
            </div>
            <div class="absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-hindi text-white" style="background-color: \${godColor}cc">
              <i class="\${catInfo.icon} mr-1"></i>\${catInfo.label}
            </div>
          </div>
          <div class="p-3 md:p-4">
            <h3 class="font-hindi font-semibold text-gray-800 text-sm md:text-base leading-snug line-clamp-2">\${video.titleHi}</h3>
            <p class="text-gray-500 text-xs mt-1 font-english line-clamp-2">\${video.description}</p>
          </div>
        </div>
      \`).join('');
    }

    function openModal(youtubeId, title, desc) {
      document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/' + youtubeId + '?autoplay=1&rel=0';
      document.getElementById('modalTitle').textContent = title;
      document.getElementById('modalDesc').textContent = desc;
      const modal = document.getElementById('videoModal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      document.getElementById('videoFrame').src = '';
      const modal = document.getElementById('videoModal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      document.body.style.overflow = '';
    }

    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    // Close modal on backdrop click
    document.getElementById('videoModal').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) closeModal();
    });

    loadVideos();
  </script>
</body>
</html>`)
})

export default app
