# 🙏 भक्ति सागर | Bhakti Sagar

## Project Overview
- **Name**: Bhakti Sagar (भक्ति सागर)
- **Goal**: A one-stop religious/devotional video content app for Hindu devotees
- **No Login Required**: Users can directly access all content without any signup or login
- **Tech Stack**: Hono + TypeScript + TailwindCSS + Cloudflare Pages

## Features

### Completed Features
1. **God Selection Home Page** - Beautiful grid of 6 major Hindu deities:
   - 🙏 श्री कृष्ण (Shri Krishna)
   - 🏹 श्री राम (Shri Ram)
   - 🔱 शिव शंकर (Shiv Shankar)
   - 🦁 माँ दुर्गा (Maa Durga)
   - 🐘 श्री गणेश (Shri Ganesh)
   - 💪 हनुमान जी (Hanuman Ji)

2. **Three Content Categories per God**:
   - **लोक-कथा (Lok-Katha)** - Traditional folk tales & divine stories
   - **कहानियाँ (Kahaniya)** - Devotional stories & mythological tales
   - **भजन (Bhajans)** - Devotional songs, aartis & mantras

3. **Video Format** - All content in embedded YouTube video format
4. **Search Feature** - Search across all gods, categories and videos
5. **Video Player Modal** - Click-to-play video modal with auto-play
6. **Mobile Responsive** - Beautiful on all screen sizes
7. **Bilingual UI** - Hindi & English text throughout
8. **Spiritual Theme** - Om patterns, diya animations, warm orange/saffron theme

### Content Count
- **6 Gods** with **~13 videos each**
- **~78 total videos** across all categories
- Categories: 4 Lok-Katha + 4 Kahaniya + 5 Bhajans per god

## URLs & API Endpoints

### Pages
| Path | Description |
|------|-------------|
| `/` | Home page with god selection grid |
| `/god/:id` | God detail page with video tabs |

### API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/gods` | GET | List all gods with basic info |
| `/api/gods/:id` | GET | Get specific god with all videos |
| `/api/gods/:id/:category` | GET | Get videos by category (lok-katha/kahaniya/bhajans) |
| `/api/search?q=query` | GET | Search across all content |

### God IDs
- `shri-krishna`, `shri-ram`, `shiv-shankar`, `maa-durga`, `shri-ganesh`, `hanuman-ji`

## User Guide
1. Open the app - you land directly on the home page
2. Select your favorite deity from the beautiful grid
3. Browse content using tabs: लोक-कथा | कहानियाँ | भजन
4. Click any video thumbnail to watch it
5. Use the search bar to find specific content
6. Press ESC or click outside to close the video player

## Development

```bash
npm install
npm run build
npm run dev
```

## Deployment
- **Platform**: Cloudflare Pages
- **Status**: Ready for deployment
- **Last Updated**: 2026-02-08
