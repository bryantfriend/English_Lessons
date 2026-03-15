const LEVEL_CONFIGS = [
  {
    level: 'Kids Starter',
    audience: 'Early vocabulary builders',
    topics: [
      createTopicTemplate('Animals', 'animal friends', 'Present simple with "have" and "like"', ['Puppy', 'Jungle', 'Feather'], ['Busy as a bee', 'Copycat']),
      createTopicTemplate('Colors', 'colors and art', 'There is / There are', ['Rainbow', 'Bright', 'Paint'], ['Green thumb', 'Paint the town red']),
      createTopicTemplate('Family', 'family life', 'Possessive adjectives', ['Cousin', 'Care', 'Home'], ['Like father, like son', 'Runs in the family']),
      createTopicTemplate('School', 'school routines', 'Can / Can\'t for ability', ['Backpack', 'Teacher', 'Library'], ['Learn the ropes', 'Top of the class']),
      createTopicTemplate('Playtime', 'games and toys', 'Imperatives for instructions', ['Puzzle', 'Bounce', 'Team'], ['In the game', 'Level up']),
      createTopicTemplate('Nature', 'outdoor discoveries', 'Adjectives and opposites', ['Forest', 'Sunny', 'River'], ['Fresh as a daisy', 'Out of the woods']),
    ],
  },
  {
    level: 'Kids Explorer',
    audience: 'Growing speakers',
    topics: [
      createTopicTemplate('Hobbies', 'after-school hobbies', 'Like / Enjoy + -ing', ['Practice', 'Collection', 'Creative'], ['Have a blast', 'Couch potato']),
      createTopicTemplate('Friends', 'friendship and teamwork', 'Present continuous', ['Helpful', 'Share', 'Invite'], ['Buddy up', 'Stick together']),
      createTopicTemplate('Food', 'mealtimes and snacks', 'Some / Any', ['Crunchy', 'Snack', 'Healthy'], ['Full of beans', 'Piece of cake']),
      createTopicTemplate('Travel', 'family trips and adventures', 'Past simple regular verbs', ['Ticket', 'Map', 'Journey'], ['Hit the road', 'On the go']),
      createTopicTemplate('Storytime', 'books and imagination', 'Sequencing words', ['Chapter', 'Hero', 'Adventure'], ['Page-turner', 'Happy ending']),
      createTopicTemplate('Science Fun', 'simple science wonders', 'Because / So', ['Experiment', 'Rocket', 'Magnet'], ['Light-bulb moment', 'Blast off']),
    ],
  },
  {
    level: 'Kids Champions',
    audience: 'Confident kid communicators',
    topics: [
      createTopicTemplate('Sports', 'sports and movement', 'Comparatives', ['Champion', 'Practice', 'Goal'], ['Keep your eye on the ball', 'In the running']),
      createTopicTemplate('Creativity', 'art and making things', 'Future with going to', ['Design', 'Invent', 'Imagine'], ['Think outside the box', 'Draw a blank']),
      createTopicTemplate('Helping Others', 'kindness and community', 'Should / Shouldn\'t', ['Volunteer', 'Kindness', 'Community'], ['Lend a hand', 'Heart of gold']),
      createTopicTemplate('Tech for Kids', 'technology and digital life', 'Must / Mustn\'t', ['Robot', 'Screen', 'Code'], ['Push the button', 'Rule of thumb']),
      createTopicTemplate('World Around Us', 'places and cultures', 'Question forms', ['Culture', 'Planet', 'Explore'], ['Small world', 'Open doors']),
      createTopicTemplate('Big Dreams', 'future goals', 'Want to / Hope to', ['Dream', 'Career', 'Plan'], ['Reach for the stars', 'Big idea']),
    ],
  },
  {
    level: 'Basic',
    audience: 'Everyday conversation',
    topics: [
      createTopicTemplate('Food', 'food and restaurants', 'Countable and uncountable nouns', ['Ingredient', 'Delicious', 'Cuisine'], ['Piece of cake', 'Spill the beans']),
      createTopicTemplate('Daily Life', 'daily routines', 'Present simple', ['Routine', 'Usually', 'Schedule'], ['Clockwork', 'Rise and shine']),
      createTopicTemplate('Shopping', 'buying and prices', 'This / That / These / Those', ['Receipt', 'Discount', 'Cashier'], ['Shop around', 'Cost an arm and a leg']),
      createTopicTemplate('Health', 'health habits', 'Have to / Don\'t have to', ['Exercise', 'Balance', 'Checkup'], ['Back on your feet', 'Under the weather']),
      createTopicTemplate('Work', 'jobs and responsibilities', 'Adverbs of frequency', ['Task', 'Office', 'Customer'], ['Learn the ropes', 'Hands full']),
      createTopicTemplate('Weather', 'weather and seasons', 'Present continuous for now', ['Forecast', 'Cloudy', 'Storm'], ['Under the weather', 'Come rain or shine']),
    ],
  },
  {
    level: 'Intermediate',
    audience: 'Fluent social speakers',
    topics: [
      createTopicTemplate('Travel', 'travel and culture', 'Present perfect for experiences', ['Destination', 'Itinerary', 'Wanderlust'], ['Hit the road', 'Off the beaten path']),
      createTopicTemplate('Relationships', 'friendship and family dynamics', 'Used to', ['Supportive', 'Boundary', 'Connection'], ['On the same page', 'Break the ice']),
      createTopicTemplate('Media', 'news and entertainment', 'Reported speech', ['Headline', 'Review', 'Audience'], ['Word of mouth', 'In the spotlight']),
      createTopicTemplate('Environment', 'nature and sustainability', 'First conditional', ['Climate', 'Recycle', 'Conservation'], ['Go green', 'Tip of the iceberg']),
      createTopicTemplate('Career', 'work and ambition', 'Present perfect continuous', ['Promotion', 'Deadline', 'Skillset'], ['Climb the ladder', 'Think on your feet']),
      createTopicTemplate('Culture', 'society and traditions', 'Relative clauses', ['Heritage', 'Festival', 'Custom'], ['Melting pot', 'Pass down']),
    ],
  },
  {
    level: 'Advanced',
    audience: 'High-level discussion',
    topics: [
      createTopicTemplate('Technology', 'technology and innovation', 'Passive voice for processes', ['Ubiquitous', 'Innovation', 'Automate'], ['On the same wavelength', 'Cutting edge']),
      createTopicTemplate('Leadership', 'leadership and influence', 'Cleft sentences', ['Vision', 'Delegate', 'Strategy'], ['Call the shots', 'Lead by example']),
      createTopicTemplate('Ethics', 'moral decision-making', 'Modal verbs for deduction', ['Integrity', 'Dilemma', 'Accountability'], ['Gray area', 'Cross the line']),
      createTopicTemplate('Global Issues', 'international challenges', 'Conditionals review', ['Diplomacy', 'Crisis', 'Policy'], ['At stake', 'Common ground']),
      createTopicTemplate('Innovation', 'design and progress', 'Participle clauses', ['Prototype', 'Disrupt', 'Iteration'], ['Raise the bar', 'Game changer']),
      createTopicTemplate('Psychology', 'behavior and mindset', 'Inversion for emphasis', ['Resilience', 'Bias', 'Perception'], ['Mind over matter', 'Read between the lines']),
    ],
  },
];

const LESSONS_PER_TOPIC = 100;

const LESSON_FOCUSES = [
  'building confidence',
  'asking follow-up questions',
  'sharing personal examples',
  'describing reasons clearly',
  'comparing ideas',
  'telling short stories',
  'working with a partner',
  'using target grammar naturally',
  'noticing new vocabulary',
  'speaking in full sentences',
];

const ACTIVITY_STYLES = [
  'pair discussion',
  'roleplay',
  'problem-solving task',
  'mini debate',
  'story challenge',
  'picture prompt',
  'question carousel',
  'choice and justify task',
];

function createTopicTemplate(topic, subject, grammarTitle, vocabularyWords, idioms) {
  return {
    topic,
    subject,
    grammarTitle,
    vocabularyWords,
    idioms,
  };
}

function rotate(list, offset) {
  return list.map((_, index) => list[(index + offset) % list.length]);
}

function buildVocabulary(topic, lessonNumber, words) {
  return rotate(words, lessonNumber % words.length).slice(0, 3).map((word, index) => ({
    word: `${word} ${lessonNumber}`,
    difficulty: index === 0 ? '⭐' : index === 1 ? '⭐⭐' : '⭐⭐⭐',
    definition: `${word} language for talking about ${topic.toLowerCase()} in lesson ${lessonNumber}.`,
    example: `We used "${word.toLowerCase()}" while discussing ${topic.toLowerCase()} in class today.`,
    question: `How can you use "${word.toLowerCase()}" when you talk about ${topic.toLowerCase()}?`,
  }));
}

function buildIdioms(topic, lessonNumber, idioms) {
  return rotate(idioms, lessonNumber % idioms.length).slice(0, 2).map((idiom, index) => ({
    idiom,
    meaning: `An expression teachers can connect to ${topic.toLowerCase()} conversations.`,
    example: `In lesson ${lessonNumber}, we can use "${idiom.toLowerCase()}" while talking about ${topic.toLowerCase()}.`,
    question: `Can you think of a time this idiom fits a ${topic.toLowerCase()} situation?`,
    difficulty: index + 1,
  }));
}

function buildActivities(topic, subject, lessonNumber) {
  const activitySeed = rotate(ACTIVITY_STYLES, lessonNumber % ACTIVITY_STYLES.length);
  return [
    `Warm pair discussion about ${subject} with a focus on lesson ${lessonNumber}.`,
    `Guided ${activitySeed[0]} where students compare their own experiences with ${topic.toLowerCase()}.`,
    `Small-group ${activitySeed[1]} using the target grammar and at least two new words.`,
    `Creative ${activitySeed[2]}: students solve a ${topic.toLowerCase()} challenge together.`,
    `Reflection ${activitySeed[3]} where students explain what they learned from the topic.`,
  ];
}

function buildGrammar(grammarTitle, topic, lessonNumber) {
  return {
    title: `${grammarTitle} ${lessonNumber}`,
    explanation: `Lesson ${lessonNumber} practices ${grammarTitle.toLowerCase()} through ${topic.toLowerCase()} speaking tasks.`,
    example: `This is lesson ${lessonNumber}, and we are using ${grammarTitle.toLowerCase()} to talk about ${topic.toLowerCase()}.`,
    question: `Can you make your own sentence about ${topic.toLowerCase()} using this grammar pattern?`,
  };
}

function buildLesson(levelConfig, topicConfig, lessonNumber) {
  const focus = LESSON_FOCUSES[(lessonNumber - 1) % LESSON_FOCUSES.length];
  return {
    id: `${slugify(levelConfig.level)}-${slugify(topicConfig.topic)}-${String(lessonNumber).padStart(3, '0')}`,
    level: levelConfig.level,
    topic: topicConfig.topic,
    title: `${topicConfig.topic} Lesson ${lessonNumber}`,
    sequence: lessonNumber,
    sequenceLabel: `Lesson ${lessonNumber}`,
    audience: levelConfig.audience,
    objective: `Practice ${topicConfig.subject} while ${focus}.`,
    warmup: `What comes to mind when you think about ${topicConfig.subject}, and how does it connect to your life?`,
    vocabulary: buildVocabulary(topicConfig.topic, lessonNumber, topicConfig.vocabularyWords),
    idioms: buildIdioms(topicConfig.topic, lessonNumber, topicConfig.idioms),
    grammar: buildGrammar(topicConfig.grammarTitle, topicConfig.topic, lessonNumber),
    activities: buildActivities(topicConfig.topic, topicConfig.subject, lessonNumber),
    wrapup: `What is one new idea from ${topicConfig.topic.toLowerCase()} lesson ${lessonNumber} that you want to remember?`,
    teacherTips: [
      `Model one strong answer before students begin the ${topicConfig.topic.toLowerCase()} discussion.`,
      `Pause after each activity so learners can reuse the vocabulary from lesson ${lessonNumber}.`,
      `Stretch the lesson by adding partner follow-up questions if students finish early.`,
    ],
  };
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const lessons = LEVEL_CONFIGS.flatMap((levelConfig) =>
  levelConfig.topics.flatMap((topicConfig) =>
    Array.from({ length: LESSONS_PER_TOPIC }, (_, index) =>
      buildLesson(levelConfig, topicConfig, index + 1),
    ),
  ),
);

export const curriculum = LEVEL_CONFIGS.map((levelConfig) => ({
  level: levelConfig.level,
  audience: levelConfig.audience,
  topics: levelConfig.topics.map((topicConfig) => ({
    topic: topicConfig.topic,
    lessonCount: LESSONS_PER_TOPIC,
  })),
  lessonCount: levelConfig.topics.length * LESSONS_PER_TOPIC,
}));

export const lessonsByLevel = curriculum.reduce((map, levelConfig) => {
  map[levelConfig.level] = levelConfig.topics;
  return map;
}, {});

export default lessons;
