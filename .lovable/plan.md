

# Plan: Add 4 New Features to NeuroNet AI Website

## Features Overview

1. **Video Demo Section** - Product walkthrough video embed section
2. **Multi-language Support** - Hindi/English toggle
3. **Cookie Consent Banner** - GDPR compliant cookie notice
4. **AI Chatbot Widget** - Floating AI support chatbot

---

## 1. Video Demo Section

**What:** A new section between ProductPreview and Differentiation sections with an embedded YouTube/video player.

**Files:**
- Create `src/components/sections/VideoDemoSection.tsx` - Section with heading, description, and responsive video embed (YouTube iframe or HTML5 video)
- Edit `src/pages/Index.tsx` - Add VideoDemoSection between ProductPreviewSection and DifferentiationSection

**Design:** Glass card styling matching existing sections, 16:9 aspect ratio video container, centered layout.

---

## 2. Multi-language Support (Hindi/English)

**What:** Language toggle in navbar, React Context for translations, Hindi + English support across all major sections.

**Files:**
- Create `src/contexts/LanguageContext.tsx` - Context with `language`, `setLanguage`, and `t()` translation function
- Create `src/translations/en.ts` and `src/translations/hi.ts` - Translation strings for all sections (Hero, Problem, FAQ, etc.)
- Edit `src/components/Navbar.tsx` - Add language toggle button (EN/HI)
- Edit all section components to use `t()` instead of hardcoded strings

**Note:** This is the most complex feature. All visible text in major sections will need translation keys.

---

## 3. Cookie Consent Banner

**What:** Bottom-fixed banner showing cookie notice with Accept/Decline buttons, persisted in localStorage.

**Files:**
- Create `src/components/CookieConsent.tsx` - Fixed bottom banner with message, Accept and Decline buttons, localStorage persistence
- Edit `src/components/Layout.tsx` - Add CookieConsent component

**Behavior:** Shows on first visit, hides after user action, remembers choice in localStorage.

---

## 4. AI Chatbot Widget

**What:** Floating chat bubble (bottom-right) that opens a chat panel. Uses Lovable AI (via edge function) for responses.

**Files:**
- Create `supabase/functions/chat/index.ts` - Edge function calling Lovable AI Gateway with streaming
- Create `src/components/ChatWidget.tsx` - Floating button + expandable chat panel with message history, input, and streaming responses
- Edit `src/components/Layout.tsx` - Add ChatWidget component
- Deploy edge function

**Tech:** Uses Lovable AI Gateway (google/gemini-3-flash-preview), streaming SSE responses, system prompt tailored to NeuroNet AI support.

---

## Implementation Order

1. Cookie Consent Banner (simplest, standalone)
2. Video Demo Section (standalone section)
3. AI Chatbot Widget (needs edge function + frontend)
4. Multi-language Support (touches many files, do last)

