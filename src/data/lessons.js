const LESSONS_PER_LEVEL = 100;

const INTERMEDIATE_TITLES = [
  'Travel experiences',
  'Cultural traditions',
  'Music and emotions',
  'Dream jobs',
  'Education systems',
  'Technology in daily life',
  'Artificial intelligence',
  'Climate change',
  'Social media influence',
  'Future of transportation',
  'Healthy lifestyle habits',
  'Food and global cuisines',
  'Movies and storytelling',
  'Online learning',
  'Space exploration',
  'Hobbies and free time',
  'Urban vs. rural living',
  'Friendship and trust',
  'Relationships and communication',
  'Dealing with stress',
  'Personal growth',
  'Courage and fear',
  'Time management',
  'Public speaking',
  'Personal finance basics',
  'Cultural differences in communication',
  'Work-life balance',
  'Remote work culture',
  'Leadership styles',
  'Teamwork and collaboration',
  'Creativity and innovation',
  'The meaning of success',
  'Failure and resilience',
  'Self-discipline',
  'Motivation and inspiration',
  'Influencers and fame',
  'Online privacy',
  'The power of storytelling',
  'Art and creativity',
  'Fashion and identity',
  'Gender equality',
  'Education reform',
  'The role of media',
  'Mental health awareness',
  'Travel dreams',
  'Personal heroes',
  'Learning a new language',
  'Volunteering and community service',
  'Environmental protection',
  'Plastic pollution',
  'Renewable energy',
  'Globalization',
  'Cultural stereotypes',
  'Crime and punishment',
  'Freedom of speech',
  'Internet addiction',
  'Digital detox',
  'Mindfulness and meditation',
  'Happiness and life satisfaction',
  'Body image and confidence',
  'Social inequality',
  'Poverty and education',
  'Immigration and diversity',
  'Ethics in technology',
  'Robots and automation',
  'The gig economy',
  'Entrepreneurship',
  'Consumerism',
  'Advertising and persuasion',
  'Fake news and misinformation',
  'Space tourism',
  'Human relationships in the digital era',
  'The psychology of motivation',
  'Decision-making',
  'Conflict resolution',
  'Cultural taboos',
  'Parenting styles',
  'Education vs. experience',
  'Censorship and freedom',
  'Global health issues',
  'Vaccines and public trust',
  'Urban development',
  'The future of cities',
  'E-sports and gaming',
  'Sports and teamwork',
  'Music genres and trends',
  'Art in modern society',
  'Cinema and culture',
  'Sustainability and lifestyle',
  'Future of education',
  'Cultural festivals',
  'Moral dilemmas',
  'Superstitions around the world',
  'Language and identity',
  'The future of work',
  'Digital citizenship',
  'Science and society',
  'Ethical consumer choices',
  'Climate solutions',
  'Tradition and modern life',
];

const LEVEL_CONFIGS = [
  createLevelConfig('Kids Starter', 'Early vocabulary builders', [
    'My family',
    'My school day',
    'Colors around us',
    'Animals and pets',
    'Food I like',
    'My favorite toys',
    'Weather today',
    'At the playground',
    'My classroom',
    'Happy and sad feelings',
  ]),
  createLevelConfig('Kids Explorer', 'Growing speakers', [
    'After-school hobbies',
    'Best friends',
    'Birthday parties',
    'Family trips',
    'Healthy snacks',
    'Sports day',
    'Story books',
    'Helping at home',
    'Fun science',
    'Dream adventures',
  ]),
  createLevelConfig('Kids Champions', 'Confident kid communicators', [
    'Teamwork',
    'Big dreams',
    'Helping others',
    'Amazing inventions',
    'Nature and animals',
    'School projects',
    'Favorite games',
    'Travel and places',
    'Art and imagination',
    'Being brave',
  ]),
  createLevelConfig('Basic', 'Everyday conversation', [
    'Food and restaurants',
    'Shopping',
    'Daily routines',
    'Health habits',
    'Weather and seasons',
    'Travel plans',
    'Jobs and work',
    'Friends and family',
    'Entertainment',
    'Technology basics',
  ]),
  {
    level: 'Intermediate',
    audience: 'Fluent social speakers',
    lessonTitles: INTERMEDIATE_TITLES,
  },
  createLevelConfig('Advanced', 'High-level discussion', [
    'Global politics',
    'Ethics in science',
    'Innovation and disruption',
    'Leadership in crisis',
    'Philosophy and meaning',
    'Media and power',
    'Economic systems',
    'Psychology and behavior',
    'Sustainability',
    'Future societies',
  ]),
];

const LESSON_FOCUSES = [
  'building confidence',
  'sharing opinions clearly',
  'asking follow-up questions',
  'supporting ideas with examples',
  'comparing different viewpoints',
  'using new vocabulary in speech',
  'speaking more naturally',
  'using target grammar accurately',
  'expanding discussion length',
  'reflecting on personal experience',
];

const ACTIVITY_STYLES = [
  'pair discussion',
  'roleplay',
  'problem-solving task',
  'mini debate',
  'story challenge',
  'opinion exchange',
  'question carousel',
  'partner interview',
];

const GRAMMAR_PATTERNS = [
  'present perfect for experience',
  'comparatives and superlatives',
  'first conditional',
  'reported speech',
  'modal verbs for advice',
  'passive voice',
  'relative clauses',
  'present perfect continuous',
];

const IDIOM_BANK = [
  'break the ice',
  'on the same page',
  'think outside the box',
  'hit the road',
  'a breath of fresh air',
  'keep an open mind',
  'in the spotlight',
  'learn the ropes',
  'go the extra mile',
  'read between the lines',
];

function createLevelConfig(level, audience, seeds) {
  const lessonTitles = Array.from({ length: LESSONS_PER_LEVEL }, (_, index) => {
    const seed = seeds[index % seeds.length];
    const unit = Math.floor(index / seeds.length) + 1;
    return `${seed} ${unit}`;
  });

  return { level, audience, lessonTitles };
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function extractKeywords(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .split(/\s+/)
    .filter((word) => word.length > 3)
    .slice(0, 3);
}

function buildVocabulary(title, lessonNumber) {
  const keywords = extractKeywords(title);
  const baseWords = [...keywords, 'discussion', 'opinion', 'example'];
  return Array.from({ length: 3 }, (_, index) => {
    const word = baseWords[(lessonNumber + index) % baseWords.length];
    return {
      word: word.charAt(0).toUpperCase() + word.slice(1),
      difficulty: index === 0 ? '⭐' : index === 1 ? '⭐⭐' : '⭐⭐⭐',
      definition: `Useful language for talking about ${title.toLowerCase()}.`,
      example: `We used "${word}" while discussing ${title.toLowerCase()} in class.`,
      question: `How can you use "${word}" in a sentence about ${title.toLowerCase()}?`,
    };
  });
}

function buildIdioms(title, lessonNumber) {
  return Array.from({ length: 2 }, (_, index) => {
    const idiom = IDIOM_BANK[(lessonNumber + index) % IDIOM_BANK.length];
    return {
      idiom,
      meaning: `A useful expression for lessons about ${title.toLowerCase()}.`,
      example: `This idiom can help students discuss ${title.toLowerCase()} in a natural way.`,
      question: `When could you use "${idiom}" while talking about ${title.toLowerCase()}?`,
    };
  });
}

function buildGrammar(title, lessonNumber) {
  const grammarTitle = GRAMMAR_PATTERNS[(lessonNumber - 1) % GRAMMAR_PATTERNS.length];
  return {
    title: grammarTitle.charAt(0).toUpperCase() + grammarTitle.slice(1),
    explanation: `Lesson ${lessonNumber} practices ${grammarTitle} through speaking tasks about ${title.toLowerCase()}.`,
    example: `Students use ${grammarTitle} while discussing ${title.toLowerCase()}.`,
    question: `Can you make your own sentence about ${title.toLowerCase()} using this grammar pattern?`,
  };
}

function buildActivities(title, lessonNumber) {
  return Array.from({ length: 5 }, (_, index) => {
    const style = ACTIVITY_STYLES[(lessonNumber + index) % ACTIVITY_STYLES.length];
    return `${style.charAt(0).toUpperCase() + style.slice(1)} focused on ${title.toLowerCase()}.`;
  });
}

function buildLesson(levelConfig, title, lessonNumber) {
  const focus = LESSON_FOCUSES[(lessonNumber - 1) % LESSON_FOCUSES.length];
  return {
    id: `${slugify(levelConfig.level)}-${String(lessonNumber).padStart(3, '0')}`,
    level: levelConfig.level,
    topic: title,
    title,
    sequence: lessonNumber,
    sequenceLabel: `Lesson ${lessonNumber}`,
    audience: levelConfig.audience,
    objective: `Practice ${title.toLowerCase()} while ${focus}.`,
    warmup: `What do you already think or know about ${title.toLowerCase()}?`,
    vocabulary: buildVocabulary(title, lessonNumber),
    idioms: buildIdioms(title, lessonNumber),
    grammar: buildGrammar(title, lessonNumber),
    activities: buildActivities(title, lessonNumber),
    wrapup: `What is one important idea from today’s lesson on ${title.toLowerCase()}?`,
    teacherTips: [
      `Start with one simple example related to ${title.toLowerCase()}.`,
      `Encourage students to reuse the target vocabulary during speaking tasks.`,
      `Add follow-up questions if the class needs more speaking time.`,
    ],
  };
}

const lessons = LEVEL_CONFIGS.flatMap((levelConfig) =>
  levelConfig.lessonTitles.map((title, index) => buildLesson(levelConfig, title, index + 1)),
);

export const curriculum = LEVEL_CONFIGS.map((levelConfig) => ({
  level: levelConfig.level,
  audience: levelConfig.audience,
  lessonCount: levelConfig.lessonTitles.length,
}));

export default lessons;
