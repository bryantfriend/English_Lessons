import lessonOverrides from './lessonOverrides.js';

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

const LESSON_OVERRIDES = lessonOverrides;

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

const GRAMMAR_DETAILS = {
  'present perfect for experience': {
    structure: 'have/has + past participle',
    explanation:
      'Use the present perfect to talk about life experiences, recent events, or unfinished time periods when the exact past time is not important. It helps students sound natural when they connect past experience to the present moment.',
    teacherNote:
      'Teachers can contrast this with the past simple: use the present perfect for experience in general, and the past simple when students mention the exact time or date.',
    examples: [
      'I have visited three different countries in Asia.',
      'She has never tried street food in Bangkok.',
      'We have learned a lot from traveling alone.',
    ],
  },
  'comparatives and superlatives': {
    structure: 'adjective + -er / more + adjective / the + adjective + -est / the most + adjective',
    explanation:
      'Use comparatives to compare two things and superlatives to show the highest or lowest point in a group. This grammar is useful when students evaluate ideas, people, places, or choices.',
    teacherNote:
      'Remind students to notice short and long adjectives, and encourage full comparison sentences rather than one-word answers.',
    examples: [
      'Living in the city is faster than living in the countryside.',
      'This route is more convenient than the old one.',
      'It is the most practical solution for our school.',
    ],
  },
  'first conditional': {
    structure: 'if + present simple, will + base verb',
    explanation:
      'Use the first conditional for real and possible future situations. It helps students talk about consequences, choices, warnings, and plans in a clear logical way.',
    teacherNote:
      'Encourage students to think in cause-and-effect chains so they produce meaningful future predictions instead of random examples.',
    examples: [
      'If we leave now, we will catch the early train.',
      'If people recycle more, the city will produce less waste.',
      'If she studies online tonight, she will finish the course on time.',
    ],
  },
  'reported speech': {
    structure: 'say/tell + changed tense, pronouns, or time expression when needed',
    explanation:
      'Use reported speech to share what another person said without repeating the exact original words. It is especially useful for summarizing conversations, news, advice, or opinions.',
    teacherNote:
      'Students often need help shifting pronouns and time expressions, so model one direct sentence and one reported version side by side.',
    examples: [
      'He said that the lesson was harder than he expected.',
      'She told me that she wanted to study abroad.',
      'They said that the meeting had started earlier than usual.',
    ],
  },
  'modal verbs for advice and obligation': {
    structure: 'should / ought to / must / have to / must not',
    explanation:
      'Use modal verbs to give advice, show necessity, or explain rules and responsibilities. This grammar helps students sound clear when recommending actions or setting limits.',
    teacherNote:
      'Draw attention to the difference between strong obligation and softer advice so students can choose the right tone.',
    examples: [
      'You should take regular breaks when you study online.',
      'Students must submit the form before Friday.',
      'We do not have to agree, but we should listen respectfully.',
    ],
  },
  'passive voice': {
    structure: 'be + past participle',
    explanation:
      'Use the passive voice when the action is more important than the person doing it, or when the doer is unknown, obvious, or less important. It is common in formal explanations, processes, and news-style language.',
    teacherNote:
      'Students should practice changing active sentences into passive ones so they understand how focus shifts in the sentence.',
    examples: [
      'New software is used in many schools today.',
      'The results were announced this morning.',
      'Plastic bottles are recycled in this factory.',
    ],
  },
  'relative clauses': {
    structure: 'who / which / that / where + extra information',
    explanation:
      'Use relative clauses to add more detail about a person, thing, place, or idea without starting a completely new sentence. This makes speaking and writing more connected and precise.',
    teacherNote:
      'Model how relative clauses let students sound more advanced by combining short simple ideas into one stronger sentence.',
    examples: [
      'The teacher who helped me most was very patient.',
      'This is the app that saves me the most time.',
      'It is a city where public transport works well.',
    ],
  },
  'present perfect continuous': {
    structure: 'have/has been + verb-ing',
    explanation:
      'Use the present perfect continuous to emphasize duration or ongoing activity that started in the past and continues now, or has only recently stopped. It is useful when students describe effort, habits, and continuing situations.',
    teacherNote:
      'This pattern works well when students explain long-term change, repeated effort, or ongoing stress.',
    examples: [
      'I have been working on this project for three weeks.',
      'She has been learning English since last year.',
      'They have been discussing the same problem all morning.',
    ],
  },
  'second conditional': {
    structure: 'if + past simple, would + base verb',
    explanation:
      'Use the second conditional for imaginary, unlikely, or hypothetical situations. It helps students explore ideas, dreams, and what-if scenarios in a more flexible way.',
    teacherNote:
      'Encourage creative answers, but remind students that the grammar still needs a clear condition and result.',
    examples: [
      'If I had more free time, I would learn another language.',
      'If the city were quieter, more people would walk to work.',
      'She would travel more if flights were cheaper.',
    ],
  },
  'discourse markers for opinion': {
    structure: 'phrases such as in my opinion, however, on the other hand, for example, as a result',
    explanation:
      'Discourse markers organize ideas, show contrast, add examples, and make spoken answers sound more structured. They are especially helpful when students give opinions or build longer answers.',
    teacherNote:
      'Push students to use at least two markers in every extended answer so their ideas feel connected instead of abrupt.',
    examples: [
      'In my opinion, online learning is useful; however, it can reduce motivation.',
      'For example, many students focus better in shorter lessons.',
      'As a result, schools need more flexible teaching methods.',
    ],
  },
};

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

const DISCUSSION_LENSES = [
  'a surprising real-life example',
  'a difficult choice someone might face',
  'a moment of conflict or tension',
  'a creative solution to a problem',
  'a personal memory or dream',
  'a social impact people often ignore',
  'a future possibility that feels exciting or worrying',
  'a hidden challenge behind the topic',
];

const ROLEPLAY_ROLES = [
  ['a student', 'a teacher'],
  ['a parent', 'a child'],
  ['a journalist', 'an expert'],
  ['a customer', 'a manager'],
  ['a traveler', 'a local guide'],
  ['a coach', 'a player'],
  ['a designer', 'a client'],
  ['a team leader', 'a teammate'],
];

const CREATIVE_OUTPUTS = [
  'poster',
  'voice note',
  'mini campaign',
  'podcast idea',
  'classroom pitch',
  'comic strip',
  'storyboard',
  'social post',
];

const KIDS_ROLEPLAY_PAIRS = [
  ['a shopkeeper', 'a customer'],
  ['a team captain', 'a new player'],
  ['a zookeeper', 'a curious visitor'],
  ['a class leader', 'a helper'],
  ['a story hero', 'a sidekick'],
  ['a weather reporter', 'a camera buddy'],
  ['a birthday host', 'a party guest'],
  ['an explorer', 'a map maker'],
];

const KIDS_CREATIONS = [
  'treasure map',
  'hero badge',
  'mini stage scene',
  'mystery clue card',
  'magic machine sketch',
  'class mascot poster',
  'funny menu board',
  'story path comic',
];

const KIDS_GAME_STYLES = [
  'freeze-and-say game',
  'relay race',
  'memory flip challenge',
  'spin-and-speak game',
  'dice mission',
  'clue hunt',
  'pass-and-say circle',
  'point-and-run challenge',
];

const KIDS_STAGE_PROMPTS = {
  Starter: 'Keep the speaking short, visual, and easy to repeat.',
  Explorer: 'Add simple pair talk and silly problem-solving.',
  Champions: 'Push for bigger imagination, teamwork, and fuller speaking turns.',
};

const KIDS_THEME_MISSIONS = {
  family: ['missing family photo', 'mixed-up family dinner plan', 'surprise home celebration'],
  education: ['mixed-up timetable', 'mystery backpack', 'super-student mission'],
  colors: ['rainbow rescue', 'color thief mystery', 'paint-powered hero quest'],
  animals: ['lost zoo helper mission', 'pet parade challenge', 'jungle rescue adventure'],
  food: ['funny cafe opening', 'mystery lunchbox challenge', 'chef showdown'],
  toys: ['toy rescue mission', 'secret game rules challenge', 'build-a-toy contest'],
  weather: ['stormy day rescue', 'weather report emergency', 'sunshine celebration plan'],
  playground: ['recess game invention', 'playground safety mission', 'tag championship'],
  feelings: ['mood detective mission', 'kindness rescue', 'brave choices challenge'],
  hobbies: ['club fair quest', 'weekend talent show', 'hobby badge challenge'],
  friends: ['friendship fix-it mission', 'team helper challenge', 'kindness chain game'],
  birthday: ['party countdown', 'gift mystery challenge', 'cake disaster rescue'],
  travel: ['ticket-to-adventure quest', 'imaginary airport mission', 'map mystery'],
  sports: ['champion teamwork test', 'coach whistle challenge', 'crazy sports cup'],
  story: ['story maze mission', 'character rescue quest', 'cliffhanger challenge'],
  science: ['young inventor lab', 'prediction puzzle', 'rocket launch countdown'],
  dreams: ['dream job parade', 'future hero mission', 'wish map adventure'],
  technology: ['young inventor fair', 'robot helper mission', 'gadget design challenge'],
};

const FALLBACK_THEME = {
  warmups: [
    'What makes this topic interesting in real life?',
    'Where do you notice this topic around you?',
    'What is one strong opinion you already have about this topic?',
  ],
  vocabulary: ['insight', 'choice', 'challenge', 'pattern', 'detail', 'impact'],
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
    vocabulary: ['tradition', 'sibling', 'routine', 'home', 'memory', 'snapshot'],
    idioms: ['home is where the heart is', 'all in the family', 'stick together through thick and thin', 'lend a hand at home'],
    warmups: ['Who makes your home feel fun, calm, or interesting?', 'What is one family habit you would never want to lose?'],
    kidsActivities: ['Students build a paper family tree and introduce one person with a fun fact.', 'Pairs use puppets or toy voices to act out a family conversation.'],
  }),
  education: themeProfile({
    vocabulary: ['routine', 'project', 'homework', 'reading', 'classroom', 'memory'],
    idioms: ['learn the ropes', 'top of the class', 'hit the books', 'pass with flying colors'],
    warmups: ['What part of the school day feels fastest and what part feels slowest?', 'If you could redesign one classroom rule, what would it be?'],
    kidsActivities: ['Run a pretend teacher game where students give funny but clear classroom instructions.', 'Teams race to organize picture cards into a perfect school day order.'],
  }),
  colors: themeProfile({
    vocabulary: ['color', 'rainbow', 'paint', 'pattern', 'hue', 'shade'],
    idioms: ['paint the town red', 'green with envy', 'see life in color', 'true colors'],
    kidsActivities: ['Play a color hunt where children race to point at objects around the room.', 'Students invent a superhero whose powers come from one color.'],
  }),
  animals: themeProfile({
    vocabulary: ['shelter', 'jungle', 'trick', 'habitat', 'paw', 'safari'],
    idioms: ['busy as a bee', 'copycat', 'let the cat out of the bag', 'eagle eye'],
    kidsActivities: ['Students do animal walks across the room and classmates guess the animal.', 'Play a sound-and-motion challenge using pets, farm animals, and jungle animals.'],
  }),
  food: themeProfile({
    vocabulary: ['snack', 'flavor', 'recipe', 'spice', 'meal', 'kitchen'],
    idioms: ['piece of cake', 'spill the beans', 'full of beans', 'bring home the bacon'],
    warmups: ['What food instantly changes your mood?', 'What meal tells a story about your family or culture?'],
    adultActivities: ['Students design a dream menu for a themed restaurant and explain every choice.', 'Pairs compare two food traditions and decide which would surprise a visitor more.'],
    kidsActivities: ['Create a pretend restaurant with silly menu items and roleplay customer orders.', 'Use picture cards to build the funniest balanced lunchbox possible.'],
  }),
  toys: themeProfile({
    vocabulary: ['toy', 'blocks', 'puzzle', 'gadget', 'quest', 'rules'],
    idioms: ['level up', 'in the game', 'play it by ear', 'move the pieces'],
    kidsActivities: ['Students invent a brand-new toy and give it powers, rules, and a name.', 'Play a mystery toy bag game using clues before the reveal.'],
  }),
  weather: themeProfile({
    vocabulary: ['rain', 'storm', 'sunshine', 'wind', 'forecast', 'umbrella'],
    idioms: ['come rain or shine', 'under the weather', 'weather the storm', 'brighten the day'],
    adultActivities: ['Students plan an event that must survive wild weather changes.', 'Pairs compare how weather affects mood, energy, and plans in different places.'],
    kidsActivities: ['Do a weather dance where each movement matches sun, rain, wind, or snow.', 'Students become TV weather reporters and present a funny forecast.'],
  }),
  playground: themeProfile({
    vocabulary: ['slide', 'swing', 'tag', 'cheer', 'playground', 'recess'],
    idioms: ['jump right in', 'take turns', 'play fair', 'keep the game going'],
    kidsActivities: ['Children invent a brand-new playground game and teach the class the rules.', 'Use cones or paper markers for a mini obstacle course speaking challenge.'],
  }),
  feelings: themeProfile({
    vocabulary: ['joy', 'calm', 'nervous', 'brave', 'kindness', 'mood'],
    idioms: ['on cloud nine', 'butterflies in your stomach', 'keep your chin up', 'heart full of joy'],
    kidsActivities: ['Students pull an emotion card and act it out with face, voice, and movement.', 'Create an emotions wheel and spin it to tell a short story.'],
    teacherTips: ['Name and model feelings clearly, then let students copy the sentence pattern.', 'Use drawings, faces, and movement so children connect words to emotion quickly.', 'Celebrate small answers so shy students feel safe joining in.'],
  }),
  hobbies: themeProfile({
    vocabulary: ['hobby', 'project', 'practice', 'weekend', 'outdoors', 'skill'],
    idioms: ['have a blast', 'find your groove', 'do your own thing', 'keep the fun rolling'],
    kidsActivities: ['Children set up a mini hobby fair and invite classmates to join their favorite club.', 'Students mime after-school activities and ask follow-up questions to guess the hobby.'],
  }),
  friends: themeProfile({
    vocabulary: ['trust', 'handshake', 'loyalty', 'joke', 'kindness', 'friendship'],
    idioms: ['stick together', 'have each other’s back', 'meet halfway', 'break the ice'],
    kidsActivities: ['Pairs create a friendship badge and explain what makes a great teammate.', 'Play a compliment toss game with a soft ball or paper ball.'],
  }),
  birthday: themeProfile({
    vocabulary: ['party', 'wish', 'surprise', 'cake', 'guest', 'gift'],
    idioms: ['the life of the party', 'make a wish', 'light up the room', 'save the best for last'],
    kidsActivities: ['Students plan the funniest birthday party theme and present it like a TV ad.', 'Run a party invitation roleplay with secret surprise rules.'],
  }),
  travel: themeProfile({
    vocabulary: ['journey', 'passport', 'custom', 'window', 'route', 'adventure'],
    idioms: ['hit the road', 'off the beaten path', 'catch the travel bug', 'pack light, dream big'],
    warmups: ['What place changed the way you see the world?', 'What kind of trip creates the best stories later?'],
    adultActivities: ['Students compare two trip plans and defend which would create better memories.', 'Pairs roleplay a traveler convincing a skeptical friend to join an unusual journey.'],
    kidsActivities: ['Turn the room into an airport or train station and roleplay a mini trip.', 'Children create a map to an imaginary place and explain what happens there.'],
  }),
  sports: themeProfile({
    vocabulary: ['teamwork', 'streak', 'practice', 'fairness', 'strategy', 'whistle'],
    idioms: ['keep your eye on the ball', 'in the running', 'step up to the plate', 'play your heart out'],
    kidsActivities: ['Students invent a crazy new sport with three funny rules and one challenge.', 'Use a soft ball for a quick question-and-catch speaking game.'],
  }),
  story: themeProfile({
    vocabulary: ['plot', 'character', 'cliffhanger', 'magic', 'clue', 'hero'],
    idioms: ['turn the page', 'happy ending', 'steal the scene', 'tell the whole story'],
    adultActivities: ['Students retell a short story from the villain’s point of view.', 'Pairs build a three-part story using random prompts and one required emotion.'],
    kidsActivities: ['Story circle: each child adds one silly sentence to continue the adventure.', 'Students draw a mystery character and invent the character’s secret mission.'],
  }),
  science: themeProfile({
    vocabulary: ['rocket', 'discovery', 'question', 'magnet', 'reaction', 'science'],
    idioms: ['light-bulb moment', 'blast off', 'test the waters', 'spark an idea'],
    kidsActivities: ['Do a prediction game before a simple science demo or pretend experiment.', 'Students become young scientists and explain a funny invention.'],
  }),
  dreams: themeProfile({
    vocabulary: ['dream', 'future', 'goal', 'courage', 'wish', 'plan'],
    idioms: ['reach for the stars', 'follow your dream', 'aim high', 'make it happen'],
    kidsActivities: ['Children draw their dream future and present it like a mini parade float.', 'Students pull a dream job or adventure card and act it out with one brave detail.'],
  }),
  health: themeProfile({
    vocabulary: ['energy', 'sleep', 'health', 'stress', 'balance', 'movement'],
    idioms: ['back on your feet', 'feel in top shape', 'listen to your body', 'keep balance'],
    warmups: ['What healthy habit actually feels realistic in a busy week?', 'When does self-care feel easy, and when does it feel hard?'],
  }),
  jobs: themeProfile({
    vocabulary: ['career', 'leader', 'skill', 'interview', 'office', 'responsibility'],
    idioms: ['climb the ladder', 'learn the ropes', 'call the shots', 'wear many hats'],
  }),
  entertainment: themeProfile({
    vocabulary: ['audience', 'scene', 'backstage', 'soundtrack', 'theory', 'spotlight'],
    idioms: ['in the spotlight', 'steal the show', 'set the scene', 'raise the curtain'],
  }),
  shopping: themeProfile({
    vocabulary: ['bargain', 'budget', 'receipt', 'price', 'wishlist', 'display'],
    idioms: ['shop around', 'cost an arm and a leg', 'worth every penny', 'window shopping'],
  }),
  technology: themeProfile({
    vocabulary: ['device', 'screen', 'shortcut', 'privacy', 'innovation', 'notification'],
    idioms: ['change the game', 'push the button', 'stay one step ahead', 'plug into the future'],
    warmups: ['What piece of technology quietly shapes your routine the most?', 'Where is technology helping us, and where is it getting too close?'],
    kidsActivities: ['Students become inventors and pitch a gadget that solves a funny classroom problem.', 'Teams build a pretend robot helper and explain its buttons, sounds, and special job.'],
  }),
  media: themeProfile({
    vocabulary: ['headline', 'bias', 'reaction', 'viral', 'source', 'attention'],
    idioms: ['read between the lines', 'make headlines', 'frame the story', 'shift the narrative'],
  }),
  culture: themeProfile({
    vocabulary: ['ritual', 'symbol', 'custom', 'festival', 'norm', 'heritage'],
    idioms: ['small world', 'walk in someone else’s shoes', 'cross a bridge', 'open a new door'],
  }),
  environment: themeProfile({
    vocabulary: ['climate', 'cleanup', 'recycling', 'coastline', 'plastic', 'energy'],
    idioms: ['go green', 'tip of the iceberg', 'turn the tide', 'leave a lighter footprint'],
  }),
  money: themeProfile({
    vocabulary: ['budget', 'saving', 'expense', 'investment', 'income', 'finance'],
    idioms: ['save for a rainy day', 'make ends meet', 'money talks', 'stretch your budget'],
  }),
  city: themeProfile({
    vocabulary: ['skyline', 'square', 'traffic', 'suburb', 'corner', 'city'],
    idioms: ['a city that never sleeps', 'move with the crowd', 'find your corner', 'build from the ground up'],
  }),
  psychology: themeProfile({
    vocabulary: ['motivation', 'pattern', 'trigger', 'response', 'mindset', 'focus'],
    idioms: ['mind over matter', 'change your tune', 'get inside your own head', 'see the bigger picture'],
  }),
  ethics: themeProfile({
    vocabulary: ['ethics', 'choice', 'trust', 'principle', 'justice', 'consequence'],
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

  if (/\b(family|parent|home)\b/.test(normalized)) return 'family';
  if (/\b(hobby|hobbies)\b|free time/.test(normalized)) return 'hobbies';
  if (/\b(school|classroom|education|learning|student)\b/.test(normalized)) return 'education';
  if (/\b(color|colors|paint)\b/.test(normalized)) return 'colors';
  if (/\b(animal|animals|pet|pets|jungle)\b/.test(normalized)) return 'animals';
  if (/\b(food|snack|snacks|meal|cuisine|restaurant)\b/.test(normalized)) return 'food';
  if (/\b(toy|toys)\b/.test(normalized)) return 'toys';
  if (/\b(weather|storm|sunny|rain)\b/.test(normalized)) return 'weather';
  if (/\b(playground|recess)\b/.test(normalized)) return 'playground';
  if (/\b(feeling|feelings|emotion|emotions|happy|sad|fear|stress|mindfulness|motivation|confidence|brave|courage)\b|mental health/.test(normalized)) return 'feelings';
  if (/\b(friend|friends|trust|relationship|relationships|communication|helping|kindness)\b/.test(normalized)) return 'friends';
  if (/\b(birthday|party|parties)\b/.test(normalized)) return 'birthday';
  if (/\b(travel|trip|transportation|tourism)\b|space tourism/.test(normalized)) return 'travel';
  if (/\b(sport|sports|teamwork|gaming)\b|e sports/.test(normalized)) return 'sports';
  if (/\b(science|robot|robots|technology|digital|privacy|automation|invention|inventions)\b|artificial intelligence/.test(normalized)) return 'technology';
  if (/\b(story|stories|movie|movies|cinema|book|books|music|art|fashion)\b/.test(normalized)) return 'story';
  if (/\b(dream|dreams|goal|goals|wish)\b/.test(normalized)) return 'dreams';
  if (/\b(job|jobs|career|work|entrepreneurship|leadership)\b|gig economy/.test(normalized)) return 'jobs';
  if (/\b(media|news|influencers|advertising|misinformation)\b/.test(normalized)) return 'media';
  if (/\b(culture|festival|festivals|tradition|traditions|language|globalization|stereotypes|taboos)\b/.test(normalized)) return 'culture';
  if (/\b(climate|environment|plastic|energy|sustainability)\b/.test(normalized)) return 'environment';
  if (/\b(finance|consumerism|poverty|inequality)\b/.test(normalized)) return 'money';
  if (/\b(city|cities|urban|rural|development)\b/.test(normalized)) return 'city';
  if (/\b(psychology|decision|growth|resilience|success|discipline)\b/.test(normalized)) return 'psychology';
  if (/\b(ethic|ethics|moral|censorship|freedom|crime|punishment|vaccines)\b/.test(normalized)) return 'ethics';
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

function stripUnitNumber(title) {
  return title.replace(/\s+\d+$/, '');
}

function getTopicAnchors(title) {
  const keywords = [...new Set(extractKeywords(title))];
  return {
    topic: stripUnitNumber(title),
    anchor: keywords[0] ?? 'topic',
    accent: keywords[1] ?? keywords[0] ?? 'idea',
    detail: keywords[2] ?? keywords[1] ?? keywords[0] ?? 'experience',
  };
}

function buildLessonAngle(title, lessonNumber) {
  const { topic, anchor, accent } = getTopicAnchors(title);
  const lens = DISCUSSION_LENSES[(lessonNumber - 1) % DISCUSSION_LENSES.length];
  return `${topic.toLowerCase()} through ${lens}, especially around ${anchor} and ${accent}`;
}

function getDistinctTopicWords(title) {
  return [...new Set(extractKeywords(title))].slice(0, 3);
}

const VOCABULARY_DEFINITIONS = {
  adventure: 'An exciting or unusual experience.',
  blocks: 'Toy pieces used to build things.',
  brave: 'Showing courage even when something feels scary.',
  cake: 'A sweet baked food often eaten at celebrations.',
  calm: 'Peaceful and not excited, angry, or nervous.',
  career: 'A long-term path of work and professional growth.',
  challenge: 'Something difficult that tests your ability.',
  character: 'A person in a story, movie, or play.',
  cheer: 'A shout or sound that shows happiness or support.',
  choice: 'A decision between two or more possibilities.',
  classroom: 'A room where students learn with a teacher.',
  cliffhanger: 'An ending that leaves the audience waiting to know what happens next.',
  clue: 'A piece of information that helps solve a mystery or problem.',
  color: 'The appearance of something such as red, blue, or green.',
  custom: 'A common way of behaving in a culture or group.',
  detail: 'A small but important part of something.',
  device: 'A piece of technology made for a particular purpose.',
  discovery: 'Something learned or found for the first time.',
  fairness: 'The quality of treating people in a just and equal way.',
  flavor: 'The particular taste of a food or drink.',
  forecast: 'A statement about what the weather is expected to be like.',
  friendship: 'A close relationship based on liking and trust.',
  gadget: 'A small useful tool or piece of equipment, often electronic.',
  gift: 'Something given to someone without payment.',
  guest: 'A person who is invited to a place or event.',
  habitat: 'The natural home of an animal or plant.',
  handshake: 'A greeting in which two people hold and shake hands.',
  hero: 'A person admired for courage, kindness, or great actions.',
  home: 'The place where a person lives.',
  homework: 'School work that students do at home.',
  hue: 'A particular shade or variety of a color.',
  impact: 'A strong effect or influence on something.',
  innovation: 'A new idea, method, or invention.',
  insight: 'A clear and deep understanding of something.',
  interview: 'A formal meeting in which questions are asked and answered.',
  joke: 'Something said or done to make people laugh.',
  journey: 'An act of traveling from one place to another.',
  joy: 'A feeling of great happiness.',
  jungle: 'A tropical area with many trees and thick plants.',
  kindness: 'The quality of being caring, friendly, and helpful.',
  kitchen: 'A room where food is prepared and cooked.',
  leader: 'A person who guides or directs others.',
  loyalty: 'Strong support or faithfulness to a person, group, or cause.',
  magic: 'Special power that seems impossible or beyond normal explanation.',
  meal: 'The food eaten at one time, such as breakfast, lunch, or dinner.',
  memory: 'Something remembered from the past, or the ability to remember.',
  mood: 'The feeling a person has at a particular time.',
  nervous: 'Worried or slightly afraid about what may happen.',
  notification: 'A message or alert that gives new information.',
  office: 'A place where people do business or professional work.',
  paint: 'Colored liquid used to cover and decorate a surface.',
  party: 'A social event where people gather to celebrate.',
  passport: 'An official document that allows a person to travel to other countries.',
  pattern: 'A repeated design, action, or way in which something happens.',
  paw: 'The foot of an animal such as a dog or cat.',
  playground: 'An outdoor area where children play.',
  plot: 'The main events of a story.',
  practice: 'Repeated work done to improve a skill.',
  privacy: 'The right to keep personal life or information from others.',
  project: 'A planned piece of work or activity done over time.',
  puzzle: 'A game or problem that tests thinking and problem-solving.',
  quest: 'A long search for something important.',
  rain: 'Water that falls from clouds.',
  rainbow: 'A curved band of colors seen in the sky after rain.',
  reading: 'The activity of looking at and understanding written words.',
  recess: 'A short break from lessons, especially at school.',
  recipe: 'A set of instructions for preparing a dish.',
  responsibility: 'A duty or task that someone is expected to take care of.',
  route: 'The way or direction taken to get from one place to another.',
  routine: 'The usual way in which daily activities are done.',
  rules: 'Instructions that say what is allowed or required.',
  safari: 'A trip to see or watch wild animals, especially in nature.',
  screen: 'The flat part of a phone, computer, or television that shows images and words.',
  shade: 'A particular form of a color, or a cooler darker area out of direct light.',
  shelter: 'A place that gives protection from danger or bad weather.',
  shortcut: 'A quicker way to do something or reach a place.',
  sibling: 'A brother or sister.',
  skill: 'The ability to do something well.',
  slide: 'A smooth playground structure children move down for fun.',
  snack: 'A small amount of food eaten between meals.',
  snapshot: 'A quick photograph or a brief picture of a moment.',
  spice: 'A strong-flavored substance used to season food.',
  storm: 'Weather with strong wind, rain, thunder, or snow.',
  strategy: 'A careful plan for reaching a goal or winning.',
  streak: 'A continued series of similar events or successes.',
  sunshine: 'The light and warmth that come from the sun.',
  surprise: 'Something unexpected that was not known before.',
  swing: 'A seat hanging by ropes or chains that moves back and forth.',
  tag: 'A game in which players chase and touch each other.',
  teamwork: 'The act of working well together with others.',
  toy: 'An object made for children to play with.',
  tradition: 'A custom or belief passed down over time.',
  trick: 'A clever action done to entertain, surprise, or deceive.',
  trust: 'Belief that someone is honest, reliable, or safe.',
  umbrella: 'A folding object used to protect you from rain or sun.',
  whistle: 'A high sound made with the mouth or a small instrument.',
  wind: 'Moving air.',
  window: 'An opening with glass in a wall that lets in light or air.',
  wish: 'A strong desire for something to happen.',
  attention: 'The act of watching, listening to, or thinking about something carefully.',
  audience: 'The group of people watching or listening to a performance or presentation.',
  backstage: 'The area behind the stage where performers prepare.',
  balance: 'A state in which different parts are even, steady, or in the right amount.',
  bargain: 'Something sold at a lower price than usual or something worth the money.',
  bias: 'A preference or opinion that unfairly affects judgment.',
  budget: 'A plan for how money will be spent.',
  city: 'A large town where many people live and work.',
  cleanup: 'The act of making a place clean and tidy.',
  climate: 'The usual weather conditions in a place over a long time.',
  coastline: 'The land along the edge of the sea or ocean.',
  consequence: 'A result that follows from an action or decision.',
  corner: 'The point where two lines, walls, or streets meet.',
  courage: 'The ability to face fear or difficulty bravely.',
  display: 'An arrangement of objects made so people can look at them.',
  dream: 'A strong hope or wish for the future, or the images seen while sleeping.',
  energy: 'The strength or power needed for activity.',
  ethics: 'Ideas about what is right and wrong.',
  expense: 'Money spent on something.',
  festival: 'A special event or celebration, often with music, food, or traditions.',
  finance: 'The management of money.',
  focus: 'Special attention given to one thing.',
  future: 'The time that is still to come.',
  goal: 'Something you are trying to achieve.',
  headline: 'The title of a news story or article.',
  health: 'The condition of a person’s body and mind.',
  heritage: 'The traditions, culture, and history passed down from earlier generations.',
  hobby: 'An activity done for enjoyment in free time.',
  income: 'Money received from work or other sources.',
  investment: 'Money, time, or effort put into something to gain a benefit later.',
  justice: 'Fair treatment according to what is right.',
  magnet: 'An object that pulls iron or steel toward it.',
  mindset: 'A person’s usual way of thinking.',
  motivation: 'The reason or energy that makes someone want to act.',
  movement: 'The act of changing position or the activity of moving.',
  norm: 'A usual or expected way of behaving in a group or society.',
  outdoors: 'The open air outside buildings.',
  plan: 'A set of steps decided in advance.',
  plastic: 'A light material used to make many everyday objects.',
  price: 'The amount of money needed to buy something.',
  principle: 'A basic rule or belief that guides behavior.',
  question: 'Words used to ask for information.',
  reaction: 'Something said, felt, or done in response to something else.',
  receipt: 'A paper or digital record showing that something was bought or paid for.',
  recycling: 'The process of using old materials again to make new things.',
  response: 'An answer or reaction.',
  ritual: 'A repeated action or ceremony that has special meaning.',
  rocket: 'A vehicle or device that is driven forward by a powerful engine.',
  saving: 'Money that is kept for future use.',
  scene: 'A part of a play, movie, or story that happens in one place or time.',
  science: 'The study of the natural world through observation and testing.',
  skyline: 'The outline of buildings and structures seen against the sky.',
  sleep: 'The natural state of rest for the body and mind.',
  soundtrack: 'The recorded music used in a film, show, or game.',
  source: 'The place, person, or thing something comes from.',
  spotlight: 'A strong light used to focus attention on a person or area.',
  square: 'An open area in a town or city, often surrounded by buildings.',
  stress: 'Worry or pressure caused by difficulties.',
  suburb: 'An area where people live outside the center of a city.',
  symbol: 'A sign, shape, or object used to represent an idea.',
  theory: 'An idea or explanation based on thought or evidence.',
  traffic: 'The movement of vehicles on roads.',
  trigger: 'Something that causes an event, feeling, or reaction to begin.',
  viral: 'Spreading very quickly from person to person, especially online.',
  weekend: 'The days at the end of the week, usually Saturday and Sunday.',
  wishlist: 'A list of things someone hopes to have or do.',
};

function getVocabularyDefinition(word, title) {
  const key = word.toLowerCase();
  const definition = VOCABULARY_DEFINITIONS[key];

  if (!definition) {
    throw new Error(`Missing vocabulary definition for "${word}" in lesson "${title}".`);
  }

  return definition;
}

function buildVocabularyExample(word, title) {
  const topic = stripUnitNumber(title).toLowerCase();
  return `In this lesson, "${word.toLowerCase()}" fits a real idea, person, object, or action connected to ${topic}.`;
}

function buildVocabularyQuestion(word, title, level) {
  const topic = stripUnitNumber(title).toLowerCase();

  if (level.startsWith('Kids')) {
    return `Can you say one short sentence about ${topic} using the word "${word.toLowerCase()}"?`;
  }

  return `What is one real example of "${word.toLowerCase()}" in a conversation about ${topic}?`;
}

function enrichVocabularyItem(item, title, level) {
  return {
    ...item,
    example: item.example ?? buildVocabularyExample(item.word, title),
    question: item.question ?? buildVocabularyQuestion(item.word, title, level),
  };
}

function buildVocabulary(title, lessonNumber) {
  const profile = getThemeProfile(title);
  const pool = profile.vocabulary;

  return Array.from({ length: 3 }, (_, index) => {
    const word = pool[(lessonNumber + index - 1) % pool.length];

    return {
      word: toTitleCase(word),
      definition: getVocabularyDefinition(word, title),
      example: buildVocabularyExample(word, title),
      question: buildVocabularyQuestion(word, title, 'General'),
    };
  });
}

function buildIdioms(title, lessonNumber) {
  const profile = getThemeProfile(title);
  const { anchor, accent } = getTopicAnchors(title);
  const pool = profile.idioms;

  return Array.from({ length: 2 }, (_, index) => {
    const idiom = pool[(lessonNumber + index - 1) % pool.length];

    return {
      idiom: toTitleCase(idiom),
      meaning: `An idiom that fits discussion about ${stripUnitNumber(title).toLowerCase()}.`,
      example: `Use "${idiom}" when talking about ${anchor}, ${accent}, or a realistic situation connected to the topic.`,
      question: `When would "${idiom}" sound natural in a real conversation about ${stripUnitNumber(title).toLowerCase()}?`,
    };
  });
}

function buildGrammar(title, lessonNumber) {
  const profile = getThemeProfile(title);
  const pool = profile.grammar ?? DEFAULT_GRAMMAR;
  const grammarTitle = pool[(lessonNumber - 1) % pool.length];
  const { anchor, detail } = getTopicAnchors(title);
  const grammarInfo = GRAMMAR_DETAILS[grammarTitle] ?? {
    structure: 'standard sentence pattern',
    explanation:
      'This grammar pattern helps students explain ideas more clearly and connect their answers with stronger detail.',
    teacherNote:
      'Model the pattern, highlight one key rule, and then let students reuse it in short speaking tasks.',
    examples: ['Students can use this structure to give clearer answers about the lesson topic.'],
  };

  return {
    title: toTitleCase(grammarTitle),
    explanation: `${grammarInfo.explanation} In this lesson, students apply it to ${stripUnitNumber(title).toLowerCase()} so their answers sound more precise and more connected.`,
    structure: grammarInfo.structure,
    teachingTip: grammarInfo.teacherNote,
    examples: [
      ...grammarInfo.examples,
      `Topic example: Students explain how ${anchor} can shape ${detail} while using ${grammarTitle}.`,
    ],
    question: `Can you build two strong sentences about ${stripUnitNumber(title).toLowerCase()} using ${grammarTitle}?`,
  };
}

function buildWarmup(title, lessonNumber, level) {
  const profile = getThemeProfile(title);
  const prompt = profile.warmups[lessonNumber % profile.warmups.length];
  const angle = buildLessonAngle(title, lessonNumber);

  if (level.startsWith('Kids')) {
    return `${prompt} Make it playful by acting out or drawing one part of ${stripUnitNumber(title).toLowerCase()}.`;
  }

  return `${prompt} Focus on ${angle} instead of giving only a general opinion.`;
}

function getKidsStage(level) {
  if (level.includes('Starter')) return 'Starter';
  if (level.includes('Explorer')) return 'Explorer';
  return 'Champions';
}

function buildKidsActivities(title, lessonNumber, level) {
  const profile = getThemeProfile(title);
  const themeKey = inferThemeKey(title);
  const topic = stripUnitNumber(title).toLowerCase();
  const words = getDistinctTopicWords(title);
  const { anchor, accent, detail } = getTopicAnchors(title);
  const [firstWord = anchor, secondWord = accent, thirdWord = detail] = words;
  const cueWords = [...new Set([firstWord, secondWord, thirdWord])].join(', ');
  const starter = profile.kidsActivities[(lessonNumber - 1) % profile.kidsActivities.length];
  const playMode = KIDS_FUN_MODES[(lessonNumber - 1) % KIDS_FUN_MODES.length];
  const gameStyle = KIDS_GAME_STYLES[(lessonNumber - 1) % KIDS_GAME_STYLES.length];
  const creation = KIDS_CREATIONS[(lessonNumber - 1) % KIDS_CREATIONS.length];
  const stage = getKidsStage(level);
  const stagePrompt = KIDS_STAGE_PROMPTS[stage];
  const missionPool = KIDS_THEME_MISSIONS[themeKey] ?? ['surprise class mission', 'mystery challenge', 'creative speaking quest'];
  const mission = missionPool[(lessonNumber - 1) % missionPool.length];

  switch (themeKey) {
    case 'family':
      return [
        `${starter} End with a ${playMode} where children introduce family members using one funny fact and one kind word. ${stagePrompt}`,
        `Use puppets or paper characters for a home scene where a family must solve a ${mission} before dinner.`,
        `Students make a ${creation} that shows who lives at home, who helps, and one special family tradition.`,
        `Play a ${gameStyle} where children match clues like cousin, grandma, kitchen, or bedtime to the right person or action.`,
        `Finish with a family song, chant, or mini show about helping at home, taking turns, or sharing a happy memory.`,
      ];
    case 'education':
      return [
        `${starter} Add a ${playMode} where children give silly-but-clear classroom instructions and classmates act them out. ${stagePrompt}`,
        `Run a pretend school mission with a ${mission}, such as finding the right books, fixing the schedule, or saving recess.`,
        `Teams build a ${creation} for the perfect classroom and label places for reading, projects, helpers, and quiet work.`,
        `Play a ${gameStyle} where students race to put school-day picture cards in order and explain each step aloud.`,
        `Finish with a one-minute teacher show where children lead the class through the best part of their school day.`,
      ];
    case 'colors':
      return [
        `${starter} Finish with a ${playMode} where children hunt for colors, touch an object, and say a sentence about it. ${stagePrompt}`,
        `Create a ${mission} in which the rainbow is missing colors and teams must earn them by describing clothes, toys, or classroom objects.`,
        `Students design a ${creation} for a color-powered hero and explain what each color can do.`,
        `Play a ${gameStyle} where children react only when they hear the clue words ${cueWords}, then freeze in a matching pose.`,
        `End with a color parade where each child shows a drawing or object and says why that color fits the mood of the day.`,
      ];
    case 'animals':
      return [
        `${starter} Turn it into a ${playMode} with animal moves, sounds, and short clues so the class keeps guessing. ${stagePrompt}`,
        `Run a ${mission} where children help a zookeeper, pet owner, or safari guide match animals to food, homes, and actions.`,
        `Teams create a ${creation} for a make-believe animal and describe its habitat, sound, paws, and favorite trick.`,
        `Play a ${gameStyle} where students sort animal clues into pets, farm animals, jungle animals, or sea animals before acting one out.`,
        `Finish with an animal show in which each child becomes one creature and introduces it to the class.`,
      ];
    case 'food':
      return [
        `${starter} Close with a ${playMode} where children order food, react to silly menu surprises, and use polite restaurant phrases. ${stagePrompt}`,
        `Open a pretend cafe for a ${mission}; teams must build a funny menu, choose healthy snacks, and serve a guest.`,
        `Students make a ${creation} for a dream lunchbox or magical meal, then explain the flavors, colors, and best bite.`,
        `Play a ${gameStyle} where students grab or point to the right food card after hearing clues about taste, meal time, or ingredients.`,
        `Finish with a mini cooking show where children present a simple recipe using actions like mix, cut, taste, and share.`,
      ];
    case 'toys':
      return [
        `${starter} Add a ${playMode} where children describe toy parts, rules, or powers while classmates guess the toy. ${stagePrompt}`,
        `Run a ${mission} in a toy workshop where teams fix a broken game, invent a new gadget, or rescue a missing piece.`,
        `Students design a ${creation} for a new toy and explain how to play, who it is for, and why it is fun.`,
        `Play a ${gameStyle} where children follow clues about shape, movement, color, or rules to find the mystery toy.`,
        `Finish with a toy fair where each team demos its invention and invites the class to try it.`,
      ];
    case 'weather':
      return [
        `${starter} End with a ${playMode} in which children make weather sounds and movements, then say what they need for the day. ${stagePrompt}`,
        `Create a ${mission} where a weather team must help people get ready for rain, wind, sunshine, or a storm.`,
        `Students build a ${creation} for the funniest forecast and present it like a live TV weather report.`,
        `Play a ${gameStyle} where children move to the correct weather corner after hearing clue words like umbrella, wind, or sunshine.`,
        `Finish with a weather dance story that changes every time the teacher calls a new sky surprise.`,
      ];
    case 'playground':
      return [
        `${starter} Add a ${playMode} where children teach one playground action and the class copies it safely. ${stagePrompt}`,
        `Run a ${mission} at recess where teams must create a new game, fix a rule problem, or help everyone join in.`,
        `Students make a ${creation} for the best playground ever and explain where to swing, slide, cheer, and tag.`,
        `Play a ${gameStyle} with movement cards for jump, run, stop, turn, cheer, and tag.`,
        `Finish with a class game show where groups demonstrate their invented recess game and vote for the most fun rules.`,
      ];
    case 'feelings':
      return [
        `${starter} Finish with a ${playMode} where children show a feeling with face, body, and voice, then say when they feel it. ${stagePrompt}`,
        `Use a ${mission} where classmates help a nervous, sad, or brave character choose the kindest next step.`,
        `Students create a ${creation} for a feelings superhero who uses calm words, courage, and kindness to help others.`,
        `Play a ${gameStyle} where children move to an emotion corner and explain why a short situation fits that feeling.`,
        `End with a class kindness circle in which each child gives one supportive sentence to a partner or character card.`,
      ];
    case 'hobbies':
      return [
        `${starter} Add a ${playMode} where children mime favorite hobbies and ask simple questions to guess them. ${stagePrompt}`,
        `Run a ${mission} for a hobby club fair where teams must choose activities, invite friends, and explain why their club is fun.`,
        `Students make a ${creation} that advertises a hobby team, weekend club, or after-school challenge.`,
        `Play a ${gameStyle} where students listen for hobby clues and run to the matching station, picture, or action card.`,
        `Finish with a talent parade where each child shows or describes one skill they want to practice more.`,
      ];
    case 'friends':
      return [
        `${starter} Close with a ${playMode} where children give compliments, greetings, and kind answers to a partner. ${stagePrompt}`,
        `Use a ${mission} where best friends must solve a small problem, such as sharing, apologizing, inviting, or cheering someone up.`,
        `Students create a ${creation} for the perfect friendship team and explain the rules for being kind, fair, and loyal.`,
        `Play a ${gameStyle} where children match social clues to actions like help, listen, share, joke, or say sorry.`,
        `Finish with a friendship celebration in which pairs perform a tiny scene showing trust, teamwork, or kindness.`,
      ];
    case 'birthday':
      return [
        `${starter} End with a ${playMode} where children invite guests, choose party games, and react to funny birthday surprises. ${stagePrompt}`,
        `Run a ${mission} where teams save a birthday party by fixing the cake, replacing a lost gift, or planning a surprise.`,
        `Students design a ${creation} for a dream party and explain the food, music, decorations, and special wish.`,
        `Play a ${gameStyle} with birthday clue cards for guest, candle, cake, invitation, and present.`,
        `Finish with a party commercial where groups sell their birthday plan in the silliest and happiest way possible.`,
      ];
    case 'travel':
      return [
        `${starter} Add a ${playMode} where children pack a bag, show a passport, and say where they are going. ${stagePrompt}`,
        `Run an imaginary trip for a ${mission}; children become ticket helpers, travelers, or map guides moving through the room.`,
        `Teams create a ${creation} for an amazing place to visit and explain the route, the transport, and one surprise there.`,
        `Play a ${gameStyle} where children follow travel clues to reach the right city, station, airport gate, or planet stop.`,
        `Finish with a travel show-and-tell in which each child shares one must-see place from an imaginary map.`,
      ];
    case 'sports':
      return [
        `${starter} Finish with a ${playMode} where children show a move, say the rule, and cheer for a teammate. ${stagePrompt}`,
        `Run a ${mission} in which a team must work together to win a silly sports cup, solve a fairness problem, or teach a new player.`,
        `Students build a ${creation} for a crazy sport and explain the field, the whistle rules, and the winning strategy.`,
        `Play a ${gameStyle} where students react to sports clues with the right motion, team signal, or short coaching phrase.`,
        `Finish with a sports commentary challenge where pairs describe a funny match using teamwork and encouragement words.`,
      ];
    case 'story':
      return [
        `${starter} End with a ${playMode} where children act out characters, settings, or clues before retelling the scene. ${stagePrompt}`,
        `Create a ${mission} where a hero must solve a riddle, rescue a friend, or escape a cliffhanger before the final page.`,
        `Students make a ${creation} for a new story world and explain the main character, the problem, and the magic object.`,
        `Play a ${gameStyle} where children listen for story clue words ${cueWords} and jump to the next part of the plot.`,
        `Finish with a story stage in which groups perform a tiny beginning, middle, and ending with one silly twist.`,
      ];
    case 'science':
    case 'technology':
      return [
        `${starter} Add a ${playMode} where children show what an invention does and classmates guess the problem it solves. ${stagePrompt}`,
        `Run a ${mission} in a young inventor lab where teams test ideas, fix a robot helper, or prepare for an invention fair.`,
        `Students create a ${creation} for a new gadget, machine, or science tool and explain how it works with simple action verbs.`,
        `Play a ${gameStyle} where children sort clues into things that spin, light up, move, float, stick, or blast off.`,
        `Finish with an invention expo where each team presents its model and answers one funny question from the audience.`,
      ];
    case 'dreams':
      return [
        `${starter} Close with a ${playMode} where children act out dream jobs, future places, or brave goals for the class to guess. ${stagePrompt}`,
        `Run a ${mission} where teams help a future hero choose the tools, friends, and plan needed to reach a big dream.`,
        `Students make a ${creation} that shows a dream for the future, then explain the goal, the challenge, and the first step.`,
        `Play a ${gameStyle} where children react to clue words about dreams, wishes, plans, and courage with a matching action.`,
        `Finish with a future parade where each child says, "One day I will..." and adds one exciting detail.`,
      ];
    default:
      return [
        `${starter} End with a ${playMode} so every child gets a lively speaking turn. ${stagePrompt}`,
        `Run a ${mission} connected to ${topic} where children solve a silly problem together.`,
        `Students create a ${creation} about ${topic} and present it using the clue words ${cueWords}.`,
        `Play a ${gameStyle} where children react to clue words about ${topic} with movement, sound, or mime.`,
        `Finish with a chant, mini story, or tiny class performance about ${topic}.`,
      ];
  }
}

function buildActivities(title, lessonNumber, level) {
  const profile = getThemeProfile(title);
  const { topic, anchor, accent, detail } = getTopicAnchors(title);
  const roleA = ROLEPLAY_ROLES[(lessonNumber - 1) % ROLEPLAY_ROLES.length][0];
  const roleB = ROLEPLAY_ROLES[(lessonNumber - 1) % ROLEPLAY_ROLES.length][1];
  const output = CREATIVE_OUTPUTS[(lessonNumber - 1) % CREATIVE_OUTPUTS.length];
  const lens = DISCUSSION_LENSES[(lessonNumber - 1) % DISCUSSION_LENSES.length];

  if (level.startsWith('Kids')) {
    return buildKidsActivities(title, lessonNumber, level);
  }

  return [
    `${profile.adultActivities[lessonNumber % profile.adultActivities.length]} Make students connect it to ${topic.toLowerCase()} through ${lens}.`,
    `Roleplay a conversation between ${roleA} and ${roleB} where they disagree about ${stripUnitNumber(title).toLowerCase()} and must reach a realistic decision.`,
    `Students create a short ${output} that highlights one hidden tension involving ${anchor}, ${accent}, or ${detail}.`,
    `Use a scenario task: something unexpected changes around ${stripUnitNumber(title).toLowerCase()}, and students explain how they would respond and why.`,
    `Finish with a partner interview where students ask one personal question, one practical question, and one big-picture question about ${topic.toLowerCase()}.`,
  ];
}

function buildWrapup(title, lessonNumber) {
  const profile = getThemeProfile(title);
  const prompt = profile.wrapups[lessonNumber % profile.wrapups.length];
  return `${prompt} Tie it back to ${buildLessonAngle(title, lessonNumber)}.`;
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

function getTeacherTimingProfile(level) {
  if (level.startsWith('Kids')) {
    return {
      warmup: '5 min',
      vocabulary: '8 min',
      idioms: '6 min',
      grammar: '8 min',
      activities: '23 min',
      wrapup: '5 min',
      total: '55 min',
    };
  }

  return {
    warmup: '5 min',
    vocabulary: '10 min',
    idioms: '10 min',
    grammar: '10 min',
    activities: '20 min',
    wrapup: '5 min',
    total: '60 min',
  };
}

function buildMaterials(lesson) {
  const themeKey = inferThemeKey(lesson.title);
  const common = ['Whiteboard or projector', 'Markers and note paper', 'Vocabulary display or board space'];
  const kidsCore = ['Picture cards or simple visuals', 'Props for movement, mime, or roleplay'];
  const adultCore = ['Discussion prompts or slides', 'Space for pair and group speaking'];
  const themeExtras = {
    family: ['Paper for a family tree or mini character cards'],
    education: ['School routine picture cards or classroom labels'],
    colors: ['Colored objects, crayons, or sample images'],
    animals: ['Animal picture cards or puppets'],
    food: ['Food flashcards, menus, or pretend order slips'],
    toys: ['A mystery bag and a few toy or block props'],
    weather: ['Weather symbols or forecast cards'],
    playground: ['Movement cards, cones, or floor markers'],
    feelings: ['Emotion cards or emoji faces'],
    hobbies: ['Hobby picture cards or club poster paper'],
    friends: ['Compliment cards or roleplay prompts'],
    birthday: ['Invitation templates or party planning cards'],
    travel: ['Maps, pretend tickets, or passport templates'],
    sports: ['Soft ball, whistle, or rule cards'],
    story: ['Story sequence cards or drawing paper'],
    science: ['Simple demo props or invention sketch sheets'],
    technology: ['Device pictures or invention planning templates'],
    dreams: ['Goal cards, costume props, or dream poster paper'],
  };

  return [
    ...(lesson.level.startsWith('Kids') ? kidsCore : adultCore),
    ...common,
    ...(themeExtras[themeKey] ?? ['A few topic visuals or prompt cards']),
  ];
}

function buildProcedure(lesson) {
  const topic = stripUnitNumber(lesson.title).toLowerCase();

  return [
    `Open with the warm-up and give students 30-60 seconds to think before sharing. Model one strong answer tied to ${topic}.`,
    `Pre-teach the three vocabulary words with quick checks for meaning, then ask students to use each word in a short spoken sentence.`,
    `Introduce the two idioms in context. Contrast literal and figurative meaning, then ask pairs to decide when each idiom would sound natural.`,
    `Teach the grammar focus with the structure, examples, and one guided board model before students produce their own sentences.`,
    `Run the activities from controlled to freer speaking: start with the easiest task, circulate for support, and recycle target language while students speak.`,
    `Close with the wrap-up and a quick reflection so students leave the lesson using at least one vocabulary item, one idiom, or the grammar target.`,
  ];
}

function buildDifferentiation(lesson) {
  const topic = stripUnitNumber(lesson.title).toLowerCase();

  if (lesson.level.startsWith('Kids')) {
    return {
      support: [
        `Pre-teach key words with gestures, visuals, and choral repetition before asking children to speak independently about ${topic}.`,
        'Keep sentence frames visible, such as "I see...", "I feel...", "I want...", or "My favorite... is...".',
        'Let shy learners answer with pointing, drawing, mime, or partner support before full-class speaking.',
      ],
      challenge: [
        `Invite stronger children to add one extra detail, feeling, or reason every time they speak about ${topic}.`,
        'Ask confident learners to lead a roleplay, explain game rules, or help model the target language for the class.',
        'Challenge fast finishers to connect two target words in one sentence or retell the task as a mini story.',
      ],
    };
  }

  return {
    support: [
      `Provide sentence starters and one model response before open discussion so weaker students can speak more confidently about ${topic}.`,
      'Allow preparation time in pairs before students report to the class, and keep useful phrases visible on the board.',
      'Reduce cognitive load by assigning one clear speaking goal per stage: vocabulary, then idioms, then grammar, then freer discussion.',
    ],
    challenge: [
      `Push stronger students to justify opinions, compare perspectives, and extend their answers with a real example connected to ${topic}.`,
      'Ask advanced speakers to paraphrase a partner’s idea, challenge it politely, or reformulate it using the grammar target.',
      'Use follow-up prompts that require nuance, consequence, or evaluation rather than simple personal preference.',
    ],
  };
}

function buildExtensionAndHomework(lesson) {
  const topic = stripUnitNumber(lesson.title).toLowerCase();

  if (lesson.level.startsWith('Kids')) {
    return {
      extension: `Run a fast bonus task where children draw, label, or act out one more idea connected to ${topic}, then present it in under 20 seconds.`,
      homework: `Ask children to bring, draw, or describe one object, picture, or memory connected to ${topic} and prepare one short sentence to share next lesson.`,
    };
  }

  return {
    extension: `Add a follow-up discussion, mini presentation, or poster task where students apply today’s vocabulary, idioms, and grammar to a fresh angle on ${topic}.`,
    homework: `Students write or record a short response about ${topic} using at least two vocabulary words, one idiom, and one example of the grammar focus.`,
  };
}

function buildExitTicket(lesson) {
  const vocabWord = lesson.vocabulary[0]?.word ?? 'one new word';
  const idiom = lesson.idioms[0]?.idiom ?? 'one idiom';

  if (lesson.level.startsWith('Kids')) {
    return `Before leaving, each child says one sentence using "${vocabWord}" or acts out "${idiom}" and explains when it fits.`;
  }

  return `Before leaving, each student gives one spoken sentence using "${vocabWord}" and explains one real situation where "${idiom}" would sound natural.`;
}

function buildTeacherMode(lesson) {
  const timing = getTeacherTimingProfile(lesson.level);
  const followUp = buildExtensionAndHomework(lesson);

  return {
    timing,
    materials: buildMaterials(lesson),
    procedure: buildProcedure(lesson),
    differentiation: buildDifferentiation(lesson),
    extension: followUp.extension,
    homework: followUp.homework,
    exitTicket: buildExitTicket(lesson),
  };
}

function getLessonOverride(level, title) {
  return LESSON_OVERRIDES[level]?.[title] ?? LESSON_OVERRIDES[level]?.[stripUnitNumber(title)] ?? null;
}

function buildLesson(levelConfig, title, lessonNumber) {
  const focus = LESSON_FOCUSES[(lessonNumber - 1) % LESSON_FOCUSES.length];
  const angle = buildLessonAngle(title, lessonNumber);
  const override = getLessonOverride(levelConfig.level, title);

  const rawVocabulary = override?.vocabulary ?? buildVocabulary(title, lessonNumber);
  const lesson = {
    id: `${slugify(levelConfig.level)}-${String(lessonNumber).padStart(3, '0')}`,
    level: levelConfig.level,
    topic: title,
    title,
    sequence: lessonNumber,
    sequenceLabel: `Lesson ${lessonNumber}`,
    audience: levelConfig.audience,
    objective: override?.objective ?? `Explore ${angle} while ${focus}.`,
    warmup: override?.warmup ?? buildWarmup(title, lessonNumber, levelConfig.level),
    vocabulary: rawVocabulary.map((item) => enrichVocabularyItem(item, title, levelConfig.level)),
    idioms: override?.idioms ?? buildIdioms(title, lessonNumber),
    grammar: buildGrammar(title, lessonNumber),
    activities: override?.activities ?? buildActivities(title, lessonNumber, levelConfig.level),
    wrapup: buildWrapup(title, lessonNumber),
    teacherTips: buildTeacherTips(title, levelConfig.level),
  };

  lesson.teacherMode = buildTeacherMode(lesson);

  return lesson;
}

const lessons = LEVEL_CONFIGS.flatMap((levelConfig) =>
  levelConfig.lessonTitles.map((title, index) => buildLesson(levelConfig, title, index + 1)),
);

const PLACEHOLDER_DEFINITION_PATTERNS = [/^A useful word for talking about/i];

function assertVocabularyDefinitions(lessonList) {
  const invalidDefinitions = lessonList.flatMap((lesson) => {
    return lesson.vocabulary
      .filter((item) => PLACEHOLDER_DEFINITION_PATTERNS.some((pattern) => pattern.test(item.definition)))
      .map((item) => `${lesson.level} - ${lesson.title}: ${item.word} -> ${item.definition}`);
  });

  if (invalidDefinitions.length > 0) {
    throw new Error(
      `Found placeholder vocabulary definitions in curated lessons:\n${invalidDefinitions.join('\n')}`,
    );
  }
}

assertVocabularyDefinitions(lessons);

export const curriculum = LEVEL_CONFIGS.map((levelConfig) => ({
  level: levelConfig.level,
  audience: levelConfig.audience,
  lessonCount: levelConfig.lessonTitles.length,
}));

export default lessons;
