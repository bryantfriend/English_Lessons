import React, { useState, useEffect, useMemo } from 'react';
import Sidebar from './components/Sidebar.jsx';
import LessonDisplay from './components/LessonDisplay.jsx';
import LaunchScreen from './components/LaunchScreen.jsx';
import IntroVideo from './components/IntroVideo.jsx';
import lessonsData from './data/lessons.json';
import logo from './assets/Logo.png';
import { 
  ChevronRight, ArrowLeft, Search as SearchIcon, 
  Copy, Check, Layout, AlertCircle, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  const [appPhase, setAppPhase] = useState('launch'); // launch, video, app
  const [currentView, setView] = useState('home'); 
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('teacher_favs');
    return saved ? JSON.parse(saved) : [];
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [createLevel, setCreateLevel] = useState('Intermediate');
  const [createTopic, setCreateTopic] = useState('');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const levels = ['Kids', 'Basic', 'Intermediate', 'Advanced'];
  
  const topics = useMemo(() => {
    if (!selectedLevel) return [];
    const levelLessons = lessonsData.filter(l => l.level === selectedLevel);
    return [...new Set(levelLessons.map(l => l.topic))];
  }, [selectedLevel]);

  useEffect(() => {
    localStorage.setItem('teacher_favs', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const filteredLessons = useMemo(() => {
    if (!searchQuery) return [];
    const q = searchQuery.toLowerCase();
    return lessonsData.filter(l => 
      l.title.toLowerCase().includes(q) ||
      l.topic.toLowerCase().includes(q) ||
      l.vocabulary.some(v => v.word.toLowerCase().includes(q)) ||
      l.idioms.some(i => i.idiom.toLowerCase().includes(q)) ||
      l.grammar.title.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    setView('topic');
  };

  const handleTopicSelect = (topic) => {
    const lesson = lessonsData.find(l => l.level === selectedLevel && l.topic === topic);
    if (lesson) {
      setSelectedLesson(lesson);
      setView('lesson');
      setIsMobileOpen(false);
    }
  };

  const handleCopyPrompt = () => {
    const prompt = `Create a 1-hour English conversation lesson.\n\nLevel: ${createLevel}\nTopic: ${createTopic}\n\nInclude:\n1 warm-up question\n3 vocabulary words (definition, example, speaking question)\n2 idioms (meaning, example, practice question)\n1 grammar rule (explanation, example, speaking practice)\n5 conversation activities\n1 wrap-up question\n2–3 teacher tips\n\nVocabulary must include difficulty markers (⭐, ⭐⭐, ⭐⭐⭐).`;
    
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
        setIsMobileOpen={setIsMobileOpen}
      />
      
      <main className="content-area">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <h1 style={{ marginBottom: '2rem' }}>Choose Level</h1>
              <div className="grid-levels">
                {levels.map(level => (
                  <div key={level} className="card" onClick={() => handleLevelSelect(level)} style={{ cursor: 'pointer', textAlign: 'center', padding: '3rem 2rem' }}>
                    <h2 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>{level}</h2>
                    <p style={{ color: 'var(--text-muted)' }}>100 Lessons</p>
                    <div style={{ marginTop: '1.5rem', color: 'var(--primary)' }}>
                      <ChevronRight size={32} style={{ margin: '0 auto' }} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {currentView === 'topic' && (
            <motion.div 
              key="topic"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <button className="btn" onClick={() => setView('home')} style={{ marginBottom: '1.5rem', background: 'none' }}>
                <ArrowLeft size={18} />
                <span>Back to Levels</span>
              </button>
              <h1 style={{ marginBottom: '2rem' }}>{selectedLevel} Topics</h1>
              <div className="grid-topics">
                {topics.map(topic => (
                  <div key={topic} className="card" onClick={() => handleTopicSelect(topic)} style={{ cursor: 'pointer', padding: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem' }}>{topic}</h3>
                    <ChevronRight size={18} style={{ marginTop: '0.5rem', color: '#ccc' }} />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {currentView === 'lesson' && selectedLesson && (
            <motion.div 
              key="lesson"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <button className="btn no-print" onClick={() => setView('topic')} style={{ marginBottom: '1.5rem', background: 'none' }}>
                <ArrowLeft size={18} />
                <span>Back to Topics</span>
              </button>
              <LessonDisplay 
                lesson={selectedLesson} 
                onToggleFavorite={toggleFavorite} 
                isFavorite={favorites.includes(selectedLesson.id)} 
              />
            </motion.div>
          )}

          {currentView === 'search' && (
            <motion.div 
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
                  {filteredLessons.map(lesson => (
                    <div 
                      key={lesson.id} 
                      className="card" 
                      onClick={() => { setSelectedLesson(lesson); setView('lesson'); }}
                      style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)' }}>{lesson.level.toUpperCase()}</span>
                        <h3 style={{ marginTop: '0.25rem' }}>{lesson.title}</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>{lesson.topic}</p>
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
            </motion.div>
          )}

          {currentView === 'favorites' && (
            <motion.div 
              key="favorites"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h1 style={{ marginBottom: '2rem' }}>My Favorites</h1>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {favorites.map(favId => {
                  const lesson = lessonsData.find(l => l.id === favId);
                  if (!lesson) return null;
                  return (
                    <div 
                      key={lesson.id} 
                      className="card" 
                      onClick={() => { setSelectedLesson(lesson); setView('lesson'); }}
                      style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                      <div>
                        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)' }}>{lesson.level.toUpperCase()}</span>
                        <h3 style={{ marginTop: '0.25rem' }}>{lesson.title}</h3>
                        <p style={{ fontSize: '0.9rem', color: '#666' }}>{lesson.topic}</p>
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
            </motion.div>
          )}

          {currentView === 'create' && (
            <motion.div 
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
                      {levels.map(l => <option key={l} value={l}>{l}</option>)}
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
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
