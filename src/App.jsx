import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar.jsx';
import LessonDisplay from './components/LessonDisplay.jsx';
import LaunchScreen from './components/LaunchScreen.jsx';
import IntroVideo from './components/IntroVideo.jsx';
import lessonsData, { curriculum } from './data/lessons.js';
import logo from './assets/Logo.png';
import {
  ChevronRight,
  ArrowLeft,
  Search as SearchIcon,
  Copy,
  Check,
  Layout,
  AlertCircle,
  Menu,
  BookOpenCheck,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const MotionDiv = motion.div;
  const [appPhase, setAppPhase] = useState('launch');
  const [currentView, setView] = useState('home');
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('teacher_favs');
    return saved ? JSON.parse(saved) : [];
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [createLevel, setCreateLevel] = useState(curriculum[0]?.level ?? '');
  const [createTopic, setCreateTopic] = useState('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const levels = curriculum;

  const lessonsForLevel = useMemo(() => {
    if (!selectedLevel) {
      return [];
    }
    return lessonsData.filter((lesson) => lesson.level === selectedLevel);
  }, [selectedLevel]);

  useEffect(() => {
    localStorage.setItem('teacher_favs', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favoriteId) => favoriteId !== id) : [...prev, id],
    );
  };

  const filteredLessons = useMemo(() => {
    if (!searchQuery) {
      return [];
    }
    const q = searchQuery.toLowerCase();
    return lessonsData.filter(
      (lesson) =>
        lesson.title.toLowerCase().includes(q) ||
        lesson.topic.toLowerCase().includes(q) ||
        lesson.level.toLowerCase().includes(q) ||
        lesson.objective.toLowerCase().includes(q) ||
        lesson.vocabulary.some((vocabularyItem) => vocabularyItem.word.toLowerCase().includes(q)) ||
        lesson.idioms.some((idiomItem) => idiomItem.idiom.toLowerCase().includes(q)) ||
        lesson.grammar.title.toLowerCase().includes(q),
    );
  }, [searchQuery]);

  const openLesson = (lesson) => {
    setSelectedLevel(lesson.level);
    setSelectedLesson(lesson);
    setView('lesson');
    setIsMobileOpen(false);
  };

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    setSelectedLesson(null);
    setView('lessons');
    setIsMobileOpen(false);
  };

  const handleCopyPrompt = () => {
    const prompt = `Create a 1-hour English conversation lesson.\n\nLevel: ${createLevel}\nTopic: ${createTopic}\n\nInclude:\n1 warm-up question\n3 vocabulary words (definition, example, speaking question)\n2 idioms (meaning, example, practice question)\n1 grammar rule (explanation, example, speaking practice)\n5 conversation activities\n1 wrap-up question\n2-3 teacher tips\n\nVocabulary must include difficulty markers (⭐, ⭐⭐, ⭐⭐⭐).`;

    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (appPhase === 'launch') {
    return <LaunchScreen onStart={() => setAppPhase('video')} />;
  }

  if (appPhase === 'video') {
    return <IntroVideo onComplete={() => setAppPhase('app')} />;
  }

  return (
    <div className="main-layout">
      {/* Mobile Header */}
      <div className="mobile-header no-print">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src={logo} alt="Logo" style={{ height: '30px' }} />
          <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--primary)' }}>Academy</span>
        </div>
        <button className="btn" style={{ padding: '0.5rem' }} onClick={() => setIsMobileOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay for mobile sidebar */}
      <div 
        className={`overlay no-print ${isMobileOpen ? 'visible' : ''}`} 
        onClick={() => setIsMobileOpen(false)} 
      />

      <Sidebar 
        currentView={currentView} 
        setView={(v) => { setView(v); setIsMobileOpen(false); }} 
        isMobileOpen={isMobileOpen}
      />
      
      <main className="content-area">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <MotionDiv 
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <h1 style={{ marginBottom: '2rem' }}>Choose Level</h1>
              <div className="grid-levels">
                {levels.map((level) => (
                  <div
                    key={level.level}
                    className="card"
                    onClick={() => handleLevelSelect(level.level)}
                    style={{ cursor: 'pointer', textAlign: 'center', padding: '3rem 2rem' }}
                  >
                    <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>{level.level}</h2>
                    <p style={{ color: 'var(--text-muted)' }}>{level.audience}</p>
                    <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                      {level.lessonCount} lessons
                    </p>
                    <div style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>
                      <ChevronRight size={32} style={{ margin: '0 auto' }} />
                    </div>
                  </div>
                ))}
              </div>
            </MotionDiv>
          )}

          {currentView === 'lessons' && (
            <MotionDiv
              key="lessons"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <button className="btn" onClick={() => setView('home')} style={{ marginBottom: '1.5rem', background: 'none' }}>
                <ArrowLeft size={18} />
                <span>Back to Levels</span>
              </button>
              <h1 style={{ marginBottom: '0.75rem' }}>{selectedLevel}</h1>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                {lessonsForLevel.length} lessons ready to teach
              </p>

              <div className="grid-lessons">
                {lessonsForLevel.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="card lesson-card"
                    onClick={() => openLesson(lesson)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'flex-start' }}>
                      <div>
                        <span className="lesson-chip">{lesson.sequenceLabel}</span>
                        <h3 style={{ marginTop: '0.85rem' }}>{lesson.title}</h3>
                        <p style={{ marginTop: '0.5rem', color: 'var(--text-muted)' }}>{lesson.objective}</p>
                      </div>
                      <BookOpenCheck size={22} color="var(--primary)" />
                    </div>
                  </div>
                ))}
              </div>
            </MotionDiv>
          )}

          {currentView === 'lesson' && selectedLesson && (
            <MotionDiv 
              key="lesson"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <button className="btn no-print" onClick={() => setView('lessons')} style={{ marginBottom: '1.5rem', background: 'none' }}>
                <ArrowLeft size={18} />
                <span>Back to Lessons</span>
              </button>
              <LessonDisplay 
                key={selectedLesson.id}
                lesson={selectedLesson} 
                onToggleFavorite={toggleFavorite} 
                isFavorite={favorites.includes(selectedLesson.id)} 
              />
            </MotionDiv>
          )}

          {currentView === 'search' && (
            <MotionDiv 
              key="search"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h1 style={{ marginBottom: '1.5rem' }}>Search Lessons</h1>
              <div className="card" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <SearchIcon size={24} color="#999" />
                <input 
                  type="text" 
                  placeholder="Search topic, vocabulary, grammar..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ flex: 1, border: 'none', outline: 'none', fontSize: '1.1rem' }}
                />
              </div>

              <div style={{ marginTop: '2rem' }}>
                {searchQuery && (
                  <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Found {filteredLessons.length} results</p>
                )}
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {filteredLessons.map((lesson) => (
                    <div 
                      key={lesson.id} 
                      className="card" 
                      onClick={() => openLesson(lesson)}
                      style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)' }}>{lesson.level.toUpperCase()}</span>
                        <h3 style={{ marginTop: '0.25rem' }}>{lesson.title}</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>{lesson.topic} • {lesson.sequenceLabel}</p>
                      </div>
                      <ChevronRight size={20} color="#ccc" />
                    </div>
                  ))}
                  {searchQuery && filteredLessons.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '4rem' }}>
                      <AlertCircle size={48} color="#ccc" style={{ margin: '0 auto 1rem' }} />
                      <h3>No lessons found</h3>
                      <p color="#666">Try searching for a different keyword</p>
                    </div>
                  )}
                </div>
              </div>
            </MotionDiv>
          )}

          {currentView === 'favorites' && (
            <MotionDiv 
              key="favorites"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h1 style={{ marginBottom: '2rem' }}>My Favorites</h1>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {favorites.map((favId) => {
                  const lesson = lessonsData.find((savedLesson) => savedLesson.id === favId);
                  if (!lesson) return null;
                  return (
                    <div 
                      key={lesson.id} 
                      className="card" 
                      onClick={() => openLesson(lesson)}
                      style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)' }}>{lesson.level.toUpperCase()}</span>
                        <h3 style={{ marginTop: '0.25rem' }}>{lesson.title}</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>{lesson.topic} • {lesson.sequenceLabel}</p>
                      </div>
                      <ChevronRight size={20} color="#ccc" />
                    </div>
                  );
                })}
                {favorites.length === 0 && (
                  <div style={{ textAlign: 'center', padding: '4rem' }}>
                    <Layout size={48} color="#ccc" style={{ margin: '0 auto 1rem' }} />
                    <h3>No favorites yet</h3>
                    <p color="#666">Save lessons to access them quickly here</p>
                  </div>
                )}
              </div>
            </MotionDiv>
          )}

          {currentView === 'create' && (
            <MotionDiv 
              key="create"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>Create New Lesson</h1>
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                  Generate a custom lesson prompt to use with an AI assistant.
                </p>
                
                <div className="card">
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Target Level</label>
                    <select 
                      value={createLevel} 
                      onChange={(e) => setCreateLevel(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }}
                    >
                      {levels.map((level) => <option key={level.level} value={level.level}>{level.level}</option>)}
                    </select>
                  </div>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Lesson Topic</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Artificial Intelligence, Cooking, Future..."
                      value={createTopic}
                      onChange={(e) => setCreateTopic(e.target.value)}
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }}
                    />
                  </div>

                  <div style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.9rem', whiteSpace: 'pre-wrap', border: '1px dashed #ccc' }}>
                    {`Create a 1-hour English conversation lesson.\n\nLevel: ${createLevel}\nTopic: ${createTopic || '[Type a topic]'}\n\nInclude:\n1 warm-up question...`}
                  </div>

                  <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleCopyPrompt}>
                    {copied ? <Check size={20} /> : <Copy size={20} />}
                    <span>{copied ? 'Copied Prompt!' : 'Copy AI Prompt'}</span>
                  </button>
                </div>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
