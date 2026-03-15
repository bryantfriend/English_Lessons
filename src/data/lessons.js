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
  'building confidence through sharper examples',
  'sharing opinions with more vivid detail',
  'asking stronger follow-up questions',
  'backing ideas with personal stories',
  'comparing viewpoints in a nuanced way',
  'using fresh vocabulary in natural speech',
  'sounding more fluent and expressive',
  'using grammar accurately in conversation',
  'stretching answers beyond first reactions',
  'reflecting more deeply on the topic',
];

const DEFAULT_GRAMMAR = [
  'present perfect for experience',
  'comparatives and superlatives',
  'first conditional',
  'reported speech',
  'modal verbs for advice and obligation',
  'passive voice',
  'relative clauses',
  'present perfect continuous',
  'second conditional',
  'discourse markers for opinion',
];

const VOCAB_SUFFIXES = [
  'mindset',
  'routine',
  'challenge',
  'habit',
  'choice',
  'pattern',
  'strategy',
  'moment',
  'perspective',
  'signal',
  'spark',
  'shift',
  'goal',
  'skill',
  'tool',
  'story',
  'detail',
  'rhythm',
  'connection',
  'breakthrough',
];

const KIDS_FUN_MODES = [
  'charades round',
  'treasure hunt',
  'sticker challenge',
  'guessing game',
  'drawing race',
  'roleplay corner',
  'movement game',
  'story circle',
  'show-and-tell moment',
  'mystery bag challenge',
];

const FALLBACK_THEME = {
  warmups: [
    'What makes this topic interesting in real life?',
    'Where do you notice this topic around you?',
    'What is one strong opinion you already have about this topic?',
  ],
  vocabulary: ['insight', 'turning point', 'real-world angle', 'hidden pressure', 'new perspective', 'practical choice'],
  idioms: ['find your footing', 'see the bigger picture', 'open a new door', 'shift the balance', 'draw a clear line', 'change the game'],
  grammar: DEFAULT_GRAMMAR,
  adultActivities: [
    'Students rank three realistic scenarios connected to the topic and defend their order.',
    'Pairs roleplay a short situation where two people disagree about the topic but must reach a decision.',
    'Small groups create a headline, slogan, or short campaign message tied to the topic.',
    'Students respond to a surprising what-if question and support their answers with examples.',
    'Pairs interview each other and report back the most interesting answer they heard.',
  ],
  kidsActivities: [
    'Play a quick mime-and-guess round using topic words.',
    'Students draw part of the topic, then explain their picture in one or two sentences.',
    'Run a classroom corner game where children move to the answer they choose and explain why.',
    'Use a toy, prop, or classroom object to invent a mini story about the topic.',
    'Finish with a team challenge where everyone adds one idea to build a silly or creative answer.',
  ],
  teacherTips: [
    'Model one vivid answer first so students hear the tone and level of detail you want.',
    'Pause after each activity for one extra follow-up question to deepen the conversation.',
    'Keep a visible board list of strong phrases students can recycle later in the lesson.',
  ],
  wrapups: [
    'What idea from this lesson would you use again in a real conversation?',
    'Which part of today’s topic felt most surprising or memorable?',
    'What new thought will stay with you after this lesson?',
  ],
};

function themeProfile(overrides) {
  return { ...FALLBACK_THEME, ...overrides };
}

const THEME_PROFILES = {
  family: themeProfile({
    vocabulary: ['family tradition', 'sibling promise', 'weekend routine', 'home teamwork', 'birthday memory', 'family snapshot'],
    idioms: ['home is where the heart is', 'all in the family', 'stick together through thick and thin', 'lend a hand at home'],
    warmups: ['Who makes your home feel fun, calm, or interesting?', 'What is one family habit you would never want to lose?'],
    kidsActivities: ['Students build a paper family tree and introduce one person with a fun fact.', 'Pairs use puppets or toy voices to act out a family conversation.'],
  }),
  education: themeProfile({
    vocabulary: ['classroom routine', 'group project', 'homework planner', 'reading corner', 'science table', 'school memory'],
    idioms: ['learn the ropes', 'top of the class', 'hit the books', 'pass with flying colors'],
    warmups: ['What part of the school day feels fastest and what part feels slowest?', 'If you could redesign one classroom rule, what would it be?'],
    kidsActivities: ['Run a pretend teacher game where students give funny but clear classroom instructions.', 'Teams race to organize picture cards into a perfect school day order.'],
  }),
  colors: themeProfile({
    vocabulary: ['color splash', 'rainbow shade', 'paint mix', 'bright pattern', 'favorite hue', 'art wall'],
    idioms: ['paint the town red', 'green with envy', 'see life in color', 'true colors'],
    kidsActivities: ['Play a color hunt where children race to point at objects around the room.', 'Students invent a superhero whose powers come from one color.'],
  }),
  animals: themeProfile({
    vocabulary: ['animal shelter', 'jungle trail', 'pet trick', 'wild habitat', 'soft paw', 'night safari'],
    idioms: ['busy as a bee', 'copycat', 'let the cat out of the bag', 'eagle eye'],
    kidsActivities: ['Students do animal walks across the room and classmates guess the animal.', 'Play a sound-and-motion challenge using pets, farm animals, and jungle animals.'],
  }),
  food: themeProfile({
    vocabulary: ['street snack', 'flavor mix', 'family recipe', 'spice level', 'shared meal', 'kitchen secret'],
    idioms: ['piece of cake', 'spill the beans', 'full of beans', 'bring home the bacon'],
    warmups: ['What food instantly changes your mood?', 'What meal tells a story about your family or culture?'],
    adultActivities: ['Students design a dream menu for a themed restaurant and explain every choice.', 'Pairs compare two food traditions and decide which would surprise a visitor more.'],
    kidsActivities: ['Create a pretend restaurant with silly menu items and roleplay customer orders.', 'Use picture cards to build the funniest balanced lunchbox possible.'],
  }),
  toys: themeProfile({
    vocabulary: ['toy shelf', 'building blocks', 'puzzle piece', 'favorite gadget', 'pretend quest', 'game rules'],
    idioms: ['level up', 'in the game', 'play it by ear', 'move the pieces'],
    kidsActivities: ['Students invent a brand-new toy and give it powers, rules, and a name.', 'Play a mystery toy bag game using clues before the reveal.'],
  }),
  weather: themeProfile({
    vocabulary: ['rainy morning', 'storm cloud', 'sunny break', 'windy day', 'forecast chart', 'umbrella plan'],
    idioms: ['come rain or shine', 'under the weather', 'weather the storm', 'brighten the day'],
    adultActivities: ['Students plan an event that must survive wild weather changes.', 'Pairs compare how weather affects mood, energy, and plans in different places.'],
    kidsActivities: ['Do a weather dance where each movement matches sun, rain, wind, or snow.', 'Students become TV weather reporters and present a funny forecast.'],
  }),
  playground: themeProfile({
    vocabulary: ['slide turn', 'swing race', 'tag game', 'team cheer', 'playground rule', 'recess plan'],
    idioms: ['jump right in', 'take turns', 'play fair', 'keep the game going'],
    kidsActivities: ['Children invent a brand-new playground game and teach the class the rules.', 'Use cones or paper markers for a mini obstacle course speaking challenge.'],
  }),
  feelings: themeProfile({
    vocabulary: ['happy dance', 'calm corner', 'butterfly feeling', 'brave breath', 'kind smile', 'stormy mood'],
    idioms: ['on cloud nine', 'butterflies in your stomach', 'keep your chin up', 'heart full of joy'],
    kidsActivities: ['Students pull an emotion card and act it out with face, voice, and movement.', 'Create an emotions wheel and spin it to tell a short story.'],
    teacherTips: ['Name and model feelings clearly, then let students copy the sentence pattern.', 'Use drawings, faces, and movement so children connect words to emotion quickly.', 'Celebrate small answers so shy students feel safe joining in.'],
  }),
  hobbies: themeProfile({
    vocabulary: ['creative hobby', 'weekend project', 'practice streak', 'quiet hobby', 'outdoor hobby', 'skill swap'],
    idioms: ['have a blast', 'find your groove', 'do your own thing', 'keep the fun rolling'],
  }),
  friends: themeProfile({
    vocabulary: ['trust circle', 'secret handshake', 'loyal friend', 'inside joke', 'kind choice', 'team spirit'],
    idioms: ['stick together', 'have each other’s back', 'meet halfway', 'break the ice'],
    kidsActivities: ['Pairs create a friendship badge and explain what makes a great teammate.', 'Play a compliment toss game with a soft ball or paper ball.'],
  }),
  birthday: themeProfile({
    vocabulary: ['party hat', 'birthday wish', 'surprise plan', 'cake table', 'party guest', 'gift clue'],
    idioms: ['the life of the party', 'make a wish', 'light up the room', 'save the best for last'],
    kidsActivities: ['Students plan the funniest birthday party theme and present it like a TV ad.', 'Run a party invitation roleplay with secret surprise rules.'],
  }),
  travel: themeProfile({
    vocabulary: ['travel journal', 'hidden alley', 'passport stamp', 'window seat', 'local custom', 'missed connection'],
    idioms: ['hit the road', 'off the beaten path', 'catch the travel bug', 'pack light, dream big'],
    warmups: ['What place changed the way you see the world?', 'What kind of trip creates the best stories later?'],
    adultActivities: ['Students compare two trip plans and defend which would create better memories.', 'Pairs roleplay a traveler convincing a skeptical friend to join an unusual journey.'],
    kidsActivities: ['Turn the room into an airport or train station and roleplay a mini trip.', 'Children create a map to an imaginary place and explain what happens there.'],
  }),
  sports: themeProfile({
    vocabulary: ['team huddle', 'winning streak', 'practice drill', 'fair play', 'game plan', 'final whistle'],
    idioms: ['keep your eye on the ball', 'in the running', 'step up to the plate', 'play your heart out'],
    kidsActivities: ['Students invent a crazy new sport with three funny rules and one challenge.', 'Use a soft ball for a quick question-and-catch speaking game.'],
  }),
  story: themeProfile({
    vocabulary: ['plot twist', 'main character', 'cliffhanger ending', 'magic object', 'story clue', 'hero choice'],
    idioms: ['turn the page', 'happy ending', 'steal the scene', 'tell the whole story'],
    adultActivities: ['Students retell a short story from the villain’s point of view.', 'Pairs build a three-part story using random prompts and one required emotion.'],
    kidsActivities: ['Story circle: each child adds one silly sentence to continue the adventure.', 'Students draw a mystery character and invent the character’s secret mission.'],
  }),
  science: themeProfile({
    vocabulary: ['rocket launch', 'lab discovery', 'curious question', 'tiny magnet', 'bubble reaction', 'science clue'],
    idioms: ['light-bulb moment', 'blast off', 'test the waters', 'spark an idea'],
    kidsActivities: ['Do a prediction game before a simple science demo or pretend experiment.', 'Students become young scientists and explain a funny invention.'],
  }),
  dreams: themeProfile({
    vocabulary: ['dream board', 'future plan', 'big goal', 'bold step', 'secret wish', 'next chapter'],
    idioms: ['reach for the stars', 'follow your dream', 'aim high', 'make it happen'],
  }),
  health: themeProfile({
    vocabulary: ['energy boost', 'sleep routine', 'healthy swap', 'stress signal', 'mindful break', 'daily movement'],
    idioms: ['back on your feet', 'feel in top shape', 'listen to your body', 'keep balance'],
    warmups: ['What healthy habit actually feels realistic in a busy week?', 'When does self-care feel easy, and when does it feel hard?'],
  }),
  jobs: themeProfile({
    vocabulary: ['dream role', 'career path', 'team leader', 'workplace skill', 'job interview', 'office challenge'],
    idioms: ['climb the ladder', 'learn the ropes', 'call the shots', 'wear many hats'],
  }),
  entertainment: themeProfile({
    vocabulary: ['crowd reaction', 'favorite scene', 'backstage moment', 'soundtrack choice', 'fan theory', 'spotlight moment'],
    idioms: ['in the spotlight', 'steal the show', 'set the scene', 'raise the curtain'],
  }),
  shopping: themeProfile({
    vocabulary: ['impulse buy', 'smart bargain', 'shopping list', 'price tag', 'wish item', 'store display'],
    idioms: ['shop around', 'cost an arm and a leg', 'worth every penny', 'window shopping'],
  }),
  technology: themeProfile({
    vocabulary: ['smart device', 'screen habit', 'digital shortcut', 'privacy setting', 'future tool', 'notification overload'],
    idioms: ['change the game', 'push the button', 'stay one step ahead', 'plug into the future'],
    warmups: ['What piece of technology quietly shapes your routine the most?', 'Where is technology helping us, and where is it getting too close?'],
  }),
  media: themeProfile({
    vocabulary: ['media narrative', 'headline bias', 'public reaction', 'viral clip', 'source check', 'attention economy'],
    idioms: ['read between the lines', 'make headlines', 'frame the story', 'shift the narrative'],
  }),
  culture: themeProfile({
    vocabulary: ['cultural ritual', 'shared symbol', 'local custom', 'festival rhythm', 'social norm', 'heritage link'],
    idioms: ['small world', 'walk in someone else’s shoes', 'cross a bridge', 'open a new door'],
  }),
  environment: themeProfile({
    vocabulary: ['carbon footprint', 'cleanup effort', 'green habit', 'wild coastline', 'plastic trail', 'energy shift'],
    idioms: ['go green', 'tip of the iceberg', 'turn the tide', 'leave a lighter footprint'],
  }),
  money: themeProfile({
    vocabulary: ['budget plan', 'saving habit', 'money leak', 'smart investment', 'shared expense', 'financial cushion'],
    idioms: ['save for a rainy day', 'make ends meet', 'money talks', 'stretch your budget'],
  }),
  city: themeProfile({
    vocabulary: ['busy skyline', 'public square', 'rush-hour crowd', 'quiet suburb', 'local corner', 'city rhythm'],
    idioms: ['a city that never sleeps', 'move with the crowd', 'find your corner', 'build from the ground up'],
  }),
  psychology: themeProfile({
    vocabulary: ['inner drive', 'mental pattern', 'choice trigger', 'stress response', 'self-talk', 'mindset shift'],
    idioms: ['mind over matter', 'change your tune', 'get inside your own head', 'see the bigger picture'],
  }),
  ethics: themeProfile({
    vocabulary: ['moral gray zone', 'ethical choice', 'public trust', 'hard trade-off', 'personal principle', 'social cost'],
    idioms: ['cross the line', 'draw a clear line', 'do the right thing', 'weigh the cost'],
  }),
};

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

function normalizeTitle(title) {
  return title.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');
}

function extractKeywords(title) {
  return normalizeTitle(title)
    .split(/\s+/)
    .filter((word) => word.length > 2 && !['the', 'and', 'for', 'with', 'vs'].includes(word));
}

function inferThemeKey(title) {
  const normalized = normalizeTitle(title);

  if (/(family|parent|home)/.test(normalized)) return 'family';
  if (/(school|classroom|education|learning|student)/.test(normalized)) return 'education';
  if (/(color|paint)/.test(normalized)) return 'colors';
  if (/(animal|pet|jungle)/.test(normalized)) return 'animals';
  if (/(food|snack|meal|cuisine|restaurant)/.test(normalized)) return 'food';
  if (/(toy|game)/.test(normalized)) return 'toys';
  if (/(weather|storm|sunny|rain)/.test(normalized)) return 'weather';
  if (/(playground|recess)/.test(normalized)) return 'playground';
  if (/(feeling|emotion|happy|sad|fear|stress|mindfulness|mental health|motivation|confidence)/.test(normalized)) return 'feelings';
  if (/(hobby|free time)/.test(normalized)) return 'hobbies';
  if (/(friend|trust|relationship|communication)/.test(normalized)) return 'friends';
  if (/(birthday|party)/.test(normalized)) return 'birthday';
  if (/(travel|trip|transportation|tourism|space tourism)/.test(normalized)) return 'travel';
  if (/(sport|teamwork|e sports|gaming)/.test(normalized)) return 'sports';
  if (/(story|movie|cinema|book|music|art|fashion)/.test(normalized)) return 'story';
  if (/(science|robot|artificial intelligence|technology|digital|privacy|automation)/.test(normalized)) return 'technology';
  if (/(job|career|work|entrepreneurship|gig economy|leadership)/.test(normalized)) return 'jobs';
  if (/(media|news|influencers|advertising|misinformation)/.test(normalized)) return 'media';
  if (/(culture|festival|tradition|language|globalization|stereotypes|taboos)/.test(normalized)) return 'culture';
  if (/(climate|environment|plastic|energy|sustainability)/.test(normalized)) return 'environment';
  if (/(finance|consumerism|poverty|inequality)/.test(normalized)) return 'money';
  if (/(city|urban|rural|cities|development)/.test(normalized)) return 'city';
  if (/(psychology|decision|growth|resilience|success|discipline)/.test(normalized)) return 'psychology';
  if (/(ethic|moral|censorship|freedom|crime|punishment|vaccines)/.test(normalized)) return 'ethics';
  return null;
}

function getThemeProfile(title) {
  const themeKey = inferThemeKey(title);
  return THEME_PROFILES[themeKey] ?? FALLBACK_THEME;
}

function toTitleCase(value) {
  return value
    .split(' ')
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(' ');
}

function makeUniqueText(baseText, usedSet, fallbacks) {
  const base = baseText.trim();
  if (!usedSet.has(base.toLowerCase())) {
    usedSet.add(base.toLowerCase());
    return base;
  }

  for (const fallback of fallbacks) {
    const candidate = fallback.trim();
    if (!usedSet.has(candidate.toLowerCase())) {
      usedSet.add(candidate.toLowerCase());
      return candidate;
    }
  }

  let counter = 2;
  while (true) {
    const candidate = `${base} ${counter}`;
    if (!usedSet.has(candidate.toLowerCase())) {
      usedSet.add(candidate.toLowerCase());
      return candidate;
    }
    counter += 1;
  }
}

function buildVocabulary(title, lessonNumber, usedVocabulary) {
  const profile = getThemeProfile(title);
  const keywords = extractKeywords(title);
  const anchor = keywords[0] ?? 'topic';
  const accent = keywords[1] ?? keywords[0] ?? 'idea';
  const lessonSlug = slugify(title).replace(/-\d+$/, '');
  const pool = profile.vocabulary;

  return Array.from({ length: 3 }, (_, index) => {
    const seed = pool[(lessonNumber + index) % pool.length];
    const suffix = VOCAB_SUFFIXES[(lessonNumber * 3 + index) % VOCAB_SUFFIXES.length];
    const baseWord = `${seed} ${suffix}`;
    const uniqueWord = makeUniqueText(baseWord, usedVocabulary, [
      `${anchor} ${seed}`,
      `${accent} ${seed}`,
      `${lessonSlug} ${seed}`,
    ]);

    return {
      word: toTitleCase(uniqueWord),
      difficulty: index === 0 ? '⭐' : index === 1 ? '⭐⭐' : '⭐⭐⭐',
      definition: `Language for discussing ${title.toLowerCase()} with more detail and personality.`,
      example: `A strong speaker might mention "${uniqueWord}" when talking about ${title.toLowerCase()}.`,
      question: `How could you use "${uniqueWord}" in your own idea about ${title.toLowerCase()}?`,
    };
  });
}

function buildIdioms(title, lessonNumber, usedIdioms) {
  const profile = getThemeProfile(title);
  const keywords = extractKeywords(title);
  const anchor = keywords[0] ?? 'topic';
  const accent = keywords[1] ?? 'life';
  const pool = profile.idioms;

  return Array.from({ length: 2 }, (_, index) => {
    const seed = pool[(lessonNumber + index) % pool.length];
    const tailored = makeUniqueText(seed, usedIdioms, [
      `${seed} in ${anchor}`,
      `${seed} around ${accent}`,
      `${seed} for ${slugify(title).replace(/-/g, ' ')}`,
    ]);

    return {
      idiom: toTitleCase(tailored),
      meaning: `An expression that helps students talk naturally about ${title.toLowerCase()}.`,
      example: `Use "${tailored}" when the discussion turns to ${title.toLowerCase()} and real-life choices.`,
      question: `When would "${tailored}" fit a real conversation about ${title.toLowerCase()}?`,
    };
  });
}

function buildGrammar(title, lessonNumber) {
  const profile = getThemeProfile(title);
  const pool = profile.grammar ?? DEFAULT_GRAMMAR;
  const grammarTitle = pool[(lessonNumber - 1) % pool.length];

  return {
    title: toTitleCase(grammarTitle),
    explanation: `Lesson ${lessonNumber} uses ${grammarTitle} to make discussion about ${title.toLowerCase()} clearer and more precise.`,
    example: `Students use ${grammarTitle} while giving opinions and examples about ${title.toLowerCase()}.`,
    question: `Can you build one strong sentence about ${title.toLowerCase()} using ${grammarTitle}?`,
  };
}

function buildWarmup(title, lessonNumber, level) {
  const profile = getThemeProfile(title);
  const prompt = profile.warmups[lessonNumber % profile.warmups.length];

  if (level.startsWith('Kids')) {
    return `${prompt} Give one fun example or act it out in a silly way.`;
  }

  return `${prompt} Give a specific example, not just a general opinion.`;
}

function buildActivities(title, lessonNumber, level) {
  const profile = getThemeProfile(title);
  const baseActivities = level.startsWith('Kids') ? profile.kidsActivities : profile.adultActivities;

  return Array.from({ length: 5 }, (_, index) => {
    const seed = baseActivities[(lessonNumber + index) % baseActivities.length];

    if (level.startsWith('Kids')) {
      const mode = KIDS_FUN_MODES[(lessonNumber + index) % KIDS_FUN_MODES.length];
      return `${seed} Turn it into a ${mode} so everyone speaks, moves, or creates something.`;
    }

    return `${seed} Push students to connect the topic to real situations, choices, or consequences.`;
  });
}

function buildWrapup(title, lessonNumber) {
  const profile = getThemeProfile(title);
  const prompt = profile.wrapups[lessonNumber % profile.wrapups.length];
  return `${prompt} Tie it back to ${title.toLowerCase()}.`;
}

function buildTeacherTips(title, level) {
  const profile = getThemeProfile(title);

  if (level.startsWith('Kids')) {
    return [
      profile.teacherTips[0],
      'Keep transitions fast and playful so children stay active and curious.',
      'Use props, gestures, sound effects, or quick drawings to make the topic feel alive.',
    ];
  }

  return profile.teacherTips;
}

function buildLesson(levelConfig, title, lessonNumber, usedVocabulary, usedIdioms) {
  const focus = LESSON_FOCUSES[(lessonNumber - 1) % LESSON_FOCUSES.length];

  return {
    id: `${slugify(levelConfig.level)}-${String(lessonNumber).padStart(3, '0')}`,
    level: levelConfig.level,
    topic: title,
    title,
    sequence: lessonNumber,
    sequenceLabel: `Lesson ${lessonNumber}`,
    audience: levelConfig.audience,
    objective: `Explore ${title.toLowerCase()} while ${focus}.`,
    warmup: buildWarmup(title, lessonNumber, levelConfig.level),
    vocabulary: buildVocabulary(title, lessonNumber, usedVocabulary),
    idioms: buildIdioms(title, lessonNumber, usedIdioms),
    grammar: buildGrammar(title, lessonNumber),
    activities: buildActivities(title, lessonNumber, levelConfig.level),
    wrapup: buildWrapup(title, lessonNumber),
    teacherTips: buildTeacherTips(title, levelConfig.level),
  };
}

const usedVocabulary = new Set();
const usedIdioms = new Set();

const lessons = LEVEL_CONFIGS.flatMap((levelConfig) =>
  levelConfig.lessonTitles.map((title, index) =>
    buildLesson(levelConfig, title, index + 1, usedVocabulary, usedIdioms),
  ),
);

export const curriculum = LEVEL_CONFIGS.map((levelConfig) => ({
  level: levelConfig.level,
  audience: levelConfig.audience,
  lessonCount: levelConfig.lessonTitles.length,
}));

export default lessons;