import React, { useState } from 'react';
import {
  Coffee, Book, MessageSquare, GraduationCap,
  CheckCircle, Lightbulb, Clock,
  Printer, Star, Sparkles, ChevronDown, ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const LessonDisplay = ({ lesson, onToggleFavorite, isFavorite }) => {
  const MotionDiv = motion.div;
  const [openSections, setOpenSections] = useState({});

  if (!lesson) return null;

  const handlePrint = () => {
    window.print();
  };

  const timing = lesson.teacherMode?.timing ?? {};
  const sections = [
    { id: 'teacher-mode', title: 'Teacher Mode', icon: Lightbulb, color: 'tips', time: lesson.teacherMode?.timing?.total ?? null },
    { id: 'warmup', title: 'Warm-up', icon: Coffee, color: 'warmup', time: timing.warmup ?? '5 min' },
    { id: 'vocabulary', title: 'Vocabulary', icon: Book, color: 'vocabulary', time: timing.vocabulary ?? '10 min' },
    { id: 'idioms', title: 'Idioms & Expressions', icon: MessageSquare, color: 'idioms', time: timing.idioms ?? '10 min' },
    { id: 'grammar', title: 'Grammar', icon: GraduationCap, color: 'grammar', time: timing.grammar ?? '10 min' },
    { id: 'activities', title: 'Activities', icon: Sparkles, color: 'activities', time: timing.activities ?? '20 min' },
    { id: 'wrapup', title: 'Wrap-up', icon: CheckCircle, color: 'wrapup', time: timing.wrapup ?? '5 min' },
    { id: 'tips', title: 'Teacher Tips', icon: Lightbulb, color: 'tips', time: null },
  ];

  const sectionIds = sections.filter((section) => section.id !== 'teacher-mode' || lesson.teacherMode).map((section) => section.id);

  const toggleSection = (sectionId) => {
    setOpenSections((current) => ({
      ...current,
      [sectionId]: !current[sectionId],
    }));
  };

  const expandAll = () => {
    setOpenSections(Object.fromEntries(sectionIds.map((id) => [id, true])));
  };

  const collapseAll = () => {
    setOpenSections({});
  };

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="lesson-view"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', gap: '1.5rem', flexWrap: 'wrap' }}>
        <div>
          <span style={{ background: '#eee', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {lesson.level} • {lesson.topic} • {lesson.sequenceLabel}
          </span>
          <h1 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>{lesson.title}</h1>
          {lesson.objective && (
            <p style={{ marginTop: '0.75rem', maxWidth: '720px', color: 'var(--text-muted)', fontSize: '1rem' }}>
              {lesson.objective}
            </p>
          )}
        </div>
        <div className="no-print" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn" onClick={expandAll}>
            <ChevronDown size={20} />
            <span>Expand All</span>
          </button>
          <button className="btn" onClick={collapseAll}>
            <ChevronRight size={20} />
            <span>Collapse All</span>
          </button>
          <button className="btn" onClick={() => onToggleFavorite(lesson.id)} style={{ color: isFavorite ? '#ffc107' : '#ccc' }}>
            <Star fill={isFavorite ? '#ffc107' : 'none'} size={20} />
            <span>{isFavorite ? 'Favorited' : 'Add to Favorites'}</span>
          </button>
          <button className="btn btn-primary" onClick={handlePrint}>
            <Printer size={20} />
            <span>Print Lesson</span>
          </button>
        </div>
      </div>

      <div className="lesson-grid">
        {lesson.teacherMode && (
          <CollapsibleSection
            info={sections[0]}
            isOpen={Boolean(openSections['teacher-mode'])}
            onToggle={() => toggleSection('teacher-mode')}
            className="teacher-mode-card"
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
              <div>
                <p className="teacher-mode-label">Teacher Mode</p>
                <h2 style={{ fontSize: '1.6rem' }}>Lesson Guide</h2>
              </div>
              <div className="teacher-mode-total">
                <Clock size={16} />
                <span>Total: {lesson.teacherMode.timing.total}</span>
              </div>
            </div>

            <div className="teacher-mode-grid">
              <div className="teacher-panel">
                <h3>Timing By Section</h3>
                <div className="teacher-timing-list">
                  {sections.slice(1, 7).map((section) => (
                    <div key={section.id} className="teacher-timing-row">
                      <span>{section.title}</span>
                      <strong>{section.time}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="teacher-panel">
                <h3>Materials Needed</h3>
                <ul className="teacher-list">
                  {lesson.teacherMode.materials.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="teacher-panel teacher-panel-wide">
                <h3>Step-By-Step Procedure</h3>
                <div className="teacher-procedure-list">
                  {lesson.teacherMode.procedure.map((step, index) => (
                    <div key={index} className="teacher-procedure-row">
                      <div className="teacher-step-badge">{index + 1}</div>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="teacher-panel">
                <h3>Differentiation Support</h3>
                <ul className="teacher-list">
                  {lesson.teacherMode.differentiation.support.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="teacher-panel">
                <h3>Differentiation Challenge</h3>
                <ul className="teacher-list">
                  {lesson.teacherMode.differentiation.challenge.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="teacher-panel">
                <h3>Extension Idea</h3>
                <p>{lesson.teacherMode.extension}</p>
              </div>

              <div className="teacher-panel">
                <h3>Homework</h3>
                <p>{lesson.teacherMode.homework}</p>
              </div>

              <div className="teacher-panel teacher-panel-wide teacher-panel-accent">
                <h3>Quick Assessment / Exit Ticket</h3>
                <p>{lesson.teacherMode.exitTicket}</p>
              </div>
            </div>
          </CollapsibleSection>
        )}

        <CollapsibleSection
          info={sections[1]}
          isOpen={Boolean(openSections.warmup)}
          onToggle={() => toggleSection('warmup')}
        >
          <p style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>"{lesson.warmup}"</p>
          {lesson.starterActivity && (
            <div style={{ marginTop: '1rem', padding: '1rem', borderRadius: '10px', background: '#f8fbff', border: '1px solid #d7e6fb' }}>
              <p style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--warmup-text)', marginBottom: '0.45rem' }}>
                Optional Starter Activity
              </p>
              <p>{lesson.starterActivity}</p>
            </div>
          )}
        </CollapsibleSection>

        <CollapsibleSection
          info={sections[2]}
          isOpen={Boolean(openSections.vocabulary)}
          onToggle={() => toggleSection('vocabulary')}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {lesson.vocabulary.map((v, i) => (
              <div key={i} style={{ padding: '1rem', border: '1px solid #eee', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '0.65rem' }}>{v.word}</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.6rem' }}>
                  <strong>Definition:</strong> {v.definition}
                </p>
                <p style={{ fontSize: '0.92rem', marginBottom: '0.6rem' }}>
                  <strong>Example:</strong> {v.example}
                </p>
                <p style={{ fontSize: '0.92rem', fontWeight: 500 }}>
                  Practice: {v.question}
                </p>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        <CollapsibleSection
          info={sections[3]}
          isOpen={Boolean(openSections.idioms)}
          onToggle={() => toggleSection('idioms')}
        >
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
        </CollapsibleSection>

        <CollapsibleSection
          info={sections[4]}
          isOpen={Boolean(openSections.grammar)}
          onToggle={() => toggleSection('grammar')}
        >
          <div style={{ padding: '1.5rem', background: '#f6fff7', borderRadius: '8px', border: '1px solid #e0f2e1' }}>
            <h4 style={{ color: 'var(--grammar-text)', marginBottom: '0.5rem' }}>{lesson.grammar.title}</h4>
            <p style={{ marginBottom: '1rem' }}>{lesson.grammar.explanation}</p>
            {lesson.grammar.structure && (
              <div style={{ padding: '0.75rem', background: 'white', borderRadius: '6px', borderLeft: '4px solid var(--grammar-text)', marginBottom: '1rem' }}>
                <p><strong>Structure:</strong> {lesson.grammar.structure}</p>
              </div>
            )}
            {lesson.grammar.teachingTip && (
              <div style={{ padding: '0.85rem', background: '#ffffff', borderRadius: '6px', border: '1px dashed #cde6cf', marginBottom: '1rem' }}>
                <p style={{ color: 'var(--text-muted)' }}><strong>Teaching Note:</strong> {lesson.grammar.teachingTip}</p>
              </div>
            )}
            <div style={{ marginBottom: '1rem' }}>
              <p style={{ fontWeight: 700, marginBottom: '0.6rem' }}>Examples</p>
              <div style={{ display: 'grid', gap: '0.6rem' }}>
                {lesson.grammar.examples.map((example, index) => (
                  <div
                    key={index}
                    style={{ padding: '0.75rem', background: 'white', borderRadius: '6px', borderLeft: '4px solid var(--grammar-text)' }}
                  >
                    <p>{example}</p>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontWeight: 600 }}>Speaking Practice: {lesson.grammar.question}</p>
          </div>
        </CollapsibleSection>

        <CollapsibleSection
          info={sections[5]}
          isOpen={Boolean(openSections.activities)}
          onToggle={() => toggleSection('activities')}
        >
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
        </CollapsibleSection>

        <CollapsibleSection
          info={sections[6]}
          isOpen={Boolean(openSections.wrapup)}
          onToggle={() => toggleSection('wrapup')}
        >
          <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>{lesson.wrapup}</p>
        </CollapsibleSection>

        <CollapsibleSection
          info={sections[7]}
          isOpen={Boolean(openSections.tips)}
          onToggle={() => toggleSection('tips')}
        >
          <ul style={{ paddingLeft: '1.2rem' }}>
            {lesson.teacherTips.map((tip, i) => (
              <li key={i} style={{ marginBottom: '0.5rem', color: '#666' }}>{tip}</li>
            ))}
          </ul>
        </CollapsibleSection>
      </div>
    </MotionDiv>
  );
};

const CollapsibleSection = ({ info, isOpen, onToggle, children, className = '' }) => {
  const Icon = info.icon;
  return (
    <section className={`card accordion-card ${className}`.trim()}>
      <button className="accordion-trigger" onClick={onToggle} type="button">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className={`section-${info.color}`} style={{ padding: '0.5rem', borderRadius: '8px' }}>
            <Icon size={20} />
          </div>
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: '1.25rem' }}>{info.title}</h3>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {info.time && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500 }}>
              <Clock size={14} />
              <span>{info.time}</span>
            </div>
          )}
          {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </div>
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </section>
  );
};

export default LessonDisplay;
