import React from 'react';
import { 
  Coffee, Book, MessageSquare, GraduationCap, 
  CheckCircle, Lightbulb, Clock, 
  Printer, Star, Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

const LessonDisplay = ({ lesson, onToggleFavorite, isFavorite }) => {
  if (!lesson) return null;

  const handlePrint = () => {
    window.print();
  };

  const sections = [
    { id: 'warmup', title: 'Warm-up', icon: Coffee, color: 'warmup', time: '5 min' },
    { id: 'vocabulary', title: 'Vocabulary', icon: Book, color: 'vocabulary', time: '10 min' },
    { id: 'idioms', title: 'Idioms', icon: MessageSquare, color: 'idioms', time: '10 min' },
    { id: 'grammar', title: 'Grammar', icon: GraduationCap, color: 'grammar', time: '10 min' },
    { id: 'activities', title: 'Activities', icon: Sparkles, color: 'activities', time: '20 min' },
    { id: 'wrapup', title: 'Wrap-up', icon: CheckCircle, color: 'wrapup', time: '5 min' },
    { id: 'tips', title: 'Teacher Tips', icon: Lightbulb, color: 'tips', time: null },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="lesson-view"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
        <div>
          <span style={{ background: '#eee', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {lesson.level} • {lesson.topic}
          </span>
          <h1 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>{lesson.title}</h1>
        </div>
        <div className="no-print" style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn" onClick={() => onToggleFavorite(lesson.id)} style={{ color: isFavorite ? '#ffc107' : '#ccc' }}>
            <Star fill={isFavorite ? "#ffc107" : "none"} size={20} />
            <span>{isFavorite ? 'Favorited' : 'Add to Favorites'}</span>
          </button>
          <button className="btn btn-primary" onClick={handlePrint}>
            <Printer size={20} />
            <span>Print Lesson</span>
          </button>
        </div>
      </div>

      <div className="lesson-grid">
        <section className="card">
          <SectionHeader info={sections[0]} />
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>"{lesson.warmup}"</p>
        </section>

        <section className="card">
          <SectionHeader info={sections[1]} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {lesson.vocabulary.map((v, i) => (
              <div key={i} style={{ padding: '1rem', border: '1px solid #eee', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>{v.word}</h4>
                  <span style={{ color: '#ffc107' }}>{v.difficulty}</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}><strong>Def:</strong> {v.definition}</p>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><em>"{v.example}"</em></p>
                <p style={{ fontSize: '0.95rem', fontWeight: 500, borderTop: '1px solid #f5f5f5', paddingTop: '0.5rem' }}>Q: {v.question}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <SectionHeader info={sections[2]} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem' }}>
            {lesson.idioms.map((id, i) => (
              <div key={i} style={{ padding: '1rem', background: '#fcfaff', borderRadius: '8px', border: '1px solid #f0e6ff' }}>
                <h4 style={{ color: 'var(--idioms-text)', marginBottom: '0.5rem' }}>{id.idiom}</h4>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Meaning:</strong> {id.meaning}</p>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><em>"{id.example}"</em></p>
                <p style={{ fontSize: '0.95rem', fontWeight: 500 }}>Practice: {id.question}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="card">
          <SectionHeader info={sections[3]} />
          <div style={{ padding: '1.5rem', background: '#f6fff7', borderRadius: '8px', border: '1px solid #e0f2e1' }}>
            <h4 style={{ color: 'var(--grammar-text)', marginBottom: '0.5rem' }}>{lesson.grammar.title}</h4>
            <p style={{ marginBottom: '1rem' }}>{lesson.grammar.explanation}</p>
            <div style={{ padding: '0.75rem', background: 'white', borderRadius: '6px', borderLeft: '4px solid var(--grammar-text)', marginBottom: '1rem' }}>
              <p><strong>Example:</strong> {lesson.grammar.example}</p>
            </div>
            <p style={{ fontWeight: 600 }}>Speaking Practice: {lesson.grammar.question}</p>
          </div>
        </section>

        <section className="card">
          <SectionHeader info={sections[4]} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {lesson.activities.map((act, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', background: '#fff9f0', borderRadius: '8px' }}>
                <div style={{ background: 'var(--activities-text)', color: 'white', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700, flexShrink: 0 }}>
                  {i + 1}
                </div>
                <p>{act}</p>
              </div>
            ))}
          </div>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem' }}>
          <section className="card">
            <SectionHeader info={sections[5]} />
            <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>{lesson.wrapup}</p>
          </section>

          <section className="card">
            <SectionHeader info={sections[6]} />
            <ul style={{ paddingLeft: '1.2rem' }}>
              {lesson.teacherTips.map((tip, i) => (
                <li key={i} style={{ marginBottom: '0.5rem', color: '#666' }}>{tip}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

const SectionHeader = ({ info }) => {
  const Icon = info.icon;
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div className={`section-${info.color}`} style={{ padding: '0.5rem', borderRadius: '8px' }}>
          <Icon size={20} />
        </div>
        <h3 style={{ fontSize: '1.25rem' }}>{info.title}</h3>
      </div>
      {info.time && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500 }}>
          <Clock size={14} />
          <span>{info.time}</span>
        </div>
      )}
    </div>
  );
};

export default LessonDisplay;
