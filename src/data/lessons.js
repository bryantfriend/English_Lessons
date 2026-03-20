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

const LESSON_OVERRIDES = {
  Intermediate: {
    'Travel experiences': {
      objective: 'Explore memorable travel experiences through vivid stories, practical problems, and personal reflection.',
      warmup: 'Tell your partner about one trip that surprised you, challenged you, or changed your opinion about a place.',
      vocabulary: [
        { word: 'Itinerary', definition: 'A plan of places, activities, and times during a trip.' },
        { word: 'Souvenir', definition: 'An object you keep to remember a place you visited.' },
        { word: 'Delay', definition: 'Extra waiting time before a journey continues.' },
      ],
      idioms: [
        {
          idiom: 'Hit the road',
          meaning: 'To begin a journey.',
          example: 'We decided to hit the road before sunrise to avoid traffic.',
          question: 'When is the best time to hit the road for a long trip?',
        },
        {
          idiom: 'Off the beaten path',
          meaning: 'Away from the most common or touristy places.',
          example: 'The best cafe we found was off the beaten path in a quiet neighborhood.',
          question: 'Would you rather visit famous landmarks or go off the beaten path?',
        },
      ],
      activities: [
        'Students tell a two-minute travel story with one problem, one surprise, and one lesson they learned.',
        'Pairs roleplay a traveler and a hotel receptionist solving a booking mistake late at night.',
        'Small groups choose between three trip plans and defend which one would create the best memories.',
        'Scenario task: your passport is missing at the airport. Explain your next five steps calmly and clearly.',
        'Partner interview: ask about dream destinations, worst travel moments, and what makes a trip unforgettable.',
      ],
    },
    'Cultural traditions': {
      objective: 'Discuss cultural traditions with empathy, comparison, and real examples from family or society.',
      warmup: 'What tradition from your family, city, or country feels most meaningful to you, and why?',
      vocabulary: [
        { word: 'Ritual', definition: 'A repeated action or ceremony that has special meaning.' },
        { word: 'Heritage', definition: 'The traditions, values, and history passed down through generations.' },
        { word: 'Custom', definition: 'A common way of behaving in a particular culture or group.' },
      ],
      idioms: [
        {
          idiom: 'Walk in someone else’s shoes',
          meaning: 'To imagine life from another person’s point of view.',
          example: 'Before judging another culture, try to walk in someone else’s shoes.',
          question: 'Why is it important to walk in someone else’s shoes when talking about traditions?',
        },
        {
          idiom: 'Pass down',
          meaning: 'To give something such as stories, values, or traditions to a younger generation.',
          example: 'Many families pass down holiday recipes from grandparents to children.',
          question: 'What is one tradition you would like to pass down in the future?',
        },
      ],
      activities: [
        'Students compare two cultural traditions and explain what values each one seems to celebrate.',
        'Pairs roleplay a teenager and a grandparent discussing whether an old tradition should change or stay the same.',
        'Small groups design a short cultural festival introduction for foreign visitors and explain the key rules.',
        'Scenario task: a school wants to celebrate a tradition from another culture respectfully. What should they do first?',
        'Interview circle: ask classmates which traditions feel joyful, outdated, meaningful, or misunderstood.',
      ],
    },
    'Music and emotions': {
      objective: 'Explore how music affects mood, memory, identity, and emotional expression.',
      warmup: 'What song instantly changes your mood, and what does it make you feel?',
      vocabulary: [
        { word: 'Melody', definition: 'The main tune of a song that people often remember.' },
        { word: 'Lyrics', definition: 'The words of a song.' },
        { word: 'Mood', definition: 'The emotional feeling created by music or an experience.' },
      ],
      idioms: [
        {
          idiom: 'Strike a chord',
          meaning: 'To create a strong emotional response.',
          example: 'That song about growing up really struck a chord with the audience.',
          question: 'What kind of music usually strikes a chord with you?',
        },
        {
          idiom: 'Face the music',
          meaning: 'To accept the results of a decision or action.',
          example: 'After missing rehearsal, the singer had to face the music.',
          question: 'Can music help people face the music during difficult times?',
        },
      ],
      activities: [
        'Students describe three songs for three different moods: celebration, heartbreak, and motivation.',
        'Pairs compare whether lyrics or melody have a stronger emotional effect and support their view with examples.',
        'Roleplay a film director and a composer choosing music for a tense final scene.',
        'Scenario task: your friend is feeling low. What type of music would you recommend, and why?',
        'Mini reflection: explain how music can shape memory, identity, or healing in everyday life.',
      ],
    },
    'Dream jobs': {
      objective: 'Talk about dream jobs in a concrete way by connecting ambition, skills, lifestyle, and real trade-offs.',
      warmup: 'What job looked exciting to you as a child, and what job seems exciting to you now?',
      vocabulary: [
        { word: 'Career', definition: 'A long-term path of work and professional growth.' },
        { word: 'Qualification', definition: 'A skill, degree, or experience needed for a job.' },
        { word: 'Promotion', definition: 'A move to a higher position with more responsibility.' },
      ],
      idioms: [
        {
          idiom: 'Climb the ladder',
          meaning: 'To move upward in your career.',
          example: 'She wants to climb the ladder in the design industry.',
          question: 'Is climbing the ladder always the best goal at work?',
        },
        {
          idiom: 'Wear many hats',
          meaning: 'To do many different jobs or roles.',
          example: 'In a small company, you often have to wear many hats.',
          question: 'Would you enjoy a job where you wear many hats?',
        },
      ],
      activities: [
        'Students describe their dream job using work tasks, schedule, salary, lifestyle, and personal meaning.',
        'Pairs roleplay an interviewer and a candidate discussing why a dream job is realistic or unrealistic.',
        'Small groups rank job features such as money, purpose, freedom, and stability from most important to least important.',
        'Scenario task: your dream job pays well but leaves no free time. Do you accept it? Explain your reasoning.',
        'Partner interview: ask about backup plans, role models, and skills each person still needs to develop.',
      ],
    },
    'Education systems': {
      objective: 'Compare education systems thoughtfully by discussing fairness, pressure, opportunity, and student experience.',
      warmup: 'What is one thing your education system does well, and one thing it should improve?',
      vocabulary: [
        { word: 'Curriculum', definition: 'The subjects and content taught in a school or program.' },
        { word: 'Assessment', definition: 'A way of checking what students have learned.' },
        { word: 'Discipline', definition: 'Control, order, or punishment within a school setting.' },
      ],
      idioms: [
        {
          idiom: 'Learn the ropes',
          meaning: 'To understand how something works through experience.',
          example: 'New teachers need time to learn the ropes in a busy school.',
          question: 'How can students learn the ropes faster in a new school?',
        },
        {
          idiom: 'Top of the class',
          meaning: 'Better than others in performance or quality.',
          example: 'That school is considered top of the class in science education.',
          question: 'What makes a school top of the class in your opinion?',
        },
      ],
      activities: [
        'Students compare two school systems and decide which one prepares young people better for adult life.',
        'Pairs roleplay a principal and a parent discussing homework pressure and student wellbeing.',
        'Small groups design an ideal school week and justify every subject and rule they include.',
        'Scenario task: a school removes exams for one year. What improves, and what becomes harder?',
        'Discussion carousel: move between topics such as discipline, creativity, teacher authority, and equal opportunity.',
      ],
    },
    'Technology in daily life': {
      objective: 'Examine how technology shapes routines, attention, convenience, and human relationships.',
      warmup: 'What everyday habit would change the most if your phone disappeared for one week?',
      vocabulary: [
        { word: 'Device', definition: 'A piece of technology used for a practical purpose.' },
        { word: 'Convenience', definition: 'The quality of making life easier or quicker.' },
        { word: 'Distraction', definition: 'Something that takes attention away from what matters.' },
      ],
      idioms: [
        {
          idiom: 'At your fingertips',
          meaning: 'Available immediately and easily.',
          example: 'With maps and banking apps, almost everything is at your fingertips.',
          question: 'What useful services are now at your fingertips because of technology?',
        },
        {
          idiom: 'Change the game',
          meaning: 'To completely improve or transform a situation.',
          example: 'Online translation tools changed the game for many travelers.',
          question: 'What technology has changed the game in your daily life?',
        },
      ],
      activities: [
        'Students map one normal weekday and explain exactly where technology saves time and where it wastes time.',
        'Pairs debate whether convenience has made people more efficient or simply more distracted.',
        'Roleplay a parent and a teenager negotiating healthy screen rules at home.',
        'Scenario task: your city loses internet access for 24 hours. How does daily life immediately change?',
        'Partner interview: ask about digital habits, useful apps, and one device each person could live without.',
      ],
    },
    'Artificial intelligence': {
      objective: 'Discuss artificial intelligence in a grounded way by focusing on real use cases, risks, ethics, and future impact.',
      warmup: 'Where have you already seen artificial intelligence help people, and where does it make you uncomfortable?',
      vocabulary: [
        { word: 'Algorithm', definition: 'A set of rules a computer follows to solve a problem or make a decision.' },
        { word: 'Automation', definition: 'The use of technology to do work with less human effort.' },
        { word: 'Bias', definition: 'An unfair pattern in judgment or decision-making.' },
      ],
      idioms: [
        {
          idiom: 'One step ahead',
          meaning: 'Better prepared than others for what is coming next.',
          example: 'Companies using AI effectively try to stay one step ahead of competitors.',
          question: 'Can AI help people stay one step ahead, or does it create new risks too?',
        },
        {
          idiom: 'A double-edged sword',
          meaning: 'Something that has both benefits and dangers.',
          example: 'Artificial intelligence is a double-edged sword in education and hiring.',
          question: 'Why is AI often described as a double-edged sword?',
        },
      ],
      activities: [
        'Students list real uses of AI in healthcare, education, work, and entertainment, then rank them by value.',
        'Pairs roleplay a company manager and an employee discussing whether AI should replace part of a job.',
        'Small groups examine one AI dilemma such as bias, privacy, or deepfakes and propose two practical rules.',
        'Scenario task: your school introduces an AI tutor for every student. What could improve, and what could go wrong?',
        'Interview task: ask whether AI should assist, advise, or decide in important areas of life.',
      ],
    },
    'Climate change': {
      objective: 'Talk about climate change with concrete examples, realistic responsibility, and practical responses.',
      warmup: 'What signs of climate change have people in your country or city already started noticing?',
      vocabulary: [
        { word: 'Emission', definition: 'Gas or pollution released into the air.' },
        { word: 'Drought', definition: 'A long period with very little rain.' },
        { word: 'Sustainability', definition: 'Using resources in a way that can continue long into the future.' },
      ],
      idioms: [
        {
          idiom: 'Go green',
          meaning: 'To make choices that are better for the environment.',
          example: 'Many businesses are trying to go green by reducing waste and energy use.',
          question: 'What is one realistic way for your community to go green?',
        },
        {
          idiom: 'Turn the tide',
          meaning: 'To change a situation in a positive direction.',
          example: 'People wonder whether new policies can turn the tide on climate damage.',
          question: 'What kinds of action could turn the tide on climate change?',
        },
      ],
      activities: [
        'Students compare individual action, business action, and government action and decide which matters most.',
        'Pairs roleplay a mayor and a citizen discussing a new climate policy that changes daily life.',
        'Small groups design a local climate action plan for transport, waste, and energy use.',
        'Scenario task: extreme heat becomes common in your city. What should schools, homes, and workplaces change first?',
        'Partner interview: ask what environmental habits people keep, avoid, or find difficult to maintain.',
      ],
    },
    'Social media influence': {
      objective: 'Analyze how social media shapes opinion, identity, attention, and behavior in everyday life.',
      warmup: 'When does social media feel useful, and when does it start influencing people too much?',
      vocabulary: [
        { word: 'Influencer', definition: 'A person who affects others’ opinions, tastes, or buying choices online.' },
        { word: 'Trend', definition: 'A style or idea that becomes popular for a period of time.' },
        { word: 'Engagement', definition: 'Likes, comments, shares, and other audience interaction online.' },
      ],
      idioms: [
        {
          idiom: 'Read between the lines',
          meaning: 'To understand the hidden meaning behind something.',
          example: 'Smart users read between the lines when a post looks too perfect or too dramatic.',
          question: 'Why should people read between the lines on social media?',
        },
        {
          idiom: 'Make headlines',
          meaning: 'To attract a lot of public attention.',
          example: 'One viral video can make headlines in just a few hours.',
          question: 'What kinds of posts usually make headlines online?',
        },
      ],
      activities: [
        'Students examine how social media influences fashion, news, self-image, and political opinion.',
        'Pairs roleplay an influencer and a follower discussing responsibility, honesty, and sponsored content.',
        'Small groups rank online problems such as addiction, misinformation, pressure, and privacy by seriousness.',
        'Scenario task: a false rumor spreads quickly online about your school or workplace. What should happen next?',
        'Interview task: ask whether social media mostly connects people, distracts people, or pressures people.',
      ],
    },
    'Future of transportation': {
      objective: 'Imagine the future of transportation by discussing speed, safety, sustainability, and access.',
      warmup: 'What kind of transport do you think will look completely different in twenty years?',
      vocabulary: [
        { word: 'Infrastructure', definition: 'The basic systems and structures needed for transport to function.' },
        { word: 'Commute', definition: 'The regular journey between home and work or school.' },
        { word: 'Autonomous', definition: 'Able to operate without direct human control.' },
      ],
      idioms: [
        {
          idiom: 'In the fast lane',
          meaning: 'Living or moving in a very active, rapid way.',
          example: 'Future transport may push city life even further into the fast lane.',
          question: 'Do you think living in the fast lane is always a good thing?',
        },
        {
          idiom: 'Hit the brakes',
          meaning: 'To slow down or stop something suddenly.',
          example: 'Governments may need to hit the brakes if new transport technology is not safe enough.',
          question: 'When should society hit the brakes on new transport ideas?',
        },
      ],
      activities: [
        'Students compare flying cars, high-speed rail, electric buses, and self-driving taxis by usefulness and realism.',
        'Pairs roleplay a city planner and a resident debating how a transport budget should be spent.',
        'Small groups design the ideal future transport system for a crowded city and explain their priorities.',
        'Scenario task: self-driving buses arrive in your city next year. What benefits and fears would people have?',
        'Partner interview: ask how people want transport to become faster, cheaper, greener, or safer.',
      ],
    },
    'Healthy lifestyle habits': {
      objective: 'Discuss healthy lifestyle habits in a realistic way by connecting routines, motivation, and everyday choices.',
      warmup: 'Which healthy habit is easiest for you to keep, and which one is hardest to maintain?',
      vocabulary: [
        { word: 'Routine', definition: 'A regular way of doing things in daily life.' },
        { word: 'Nutrition', definition: 'The food and drink your body needs to stay healthy.' },
        { word: 'Hydration', definition: 'Having enough water in your body.' },
      ],
      idioms: [
        {
          idiom: 'Back on your feet',
          meaning: 'Recovered and active again after difficulty or illness.',
          example: 'After a few healthy changes, she felt back on her feet again.',
          question: 'What helps people get back on their feet after a stressful period?',
        },
        {
          idiom: 'In good shape',
          meaning: 'Healthy and physically fit.',
          example: 'He stays in good shape by walking every day and sleeping well.',
          question: 'What habits help someone stay in good shape over time?',
        },
      ],
      activities: [
        'Students describe one realistic healthy day and one unhealthy day, then compare the long-term results of each.',
        'Pairs roleplay a doctor and a patient discussing stress, sleep, food, and exercise habits.',
        'Small groups create a simple weekly lifestyle plan for someone with very little free time.',
        'Scenario task: your friend wants to become healthier but keeps giving up after three days. What advice would you give?',
        'Partner interview: ask which health habits feel easy, difficult, expensive, or enjoyable in real life.',
      ],
    },
    'Food and global cuisines': {
      objective: 'Explore food and global cuisines through taste, culture, identity, and social habits.',
      warmup: 'What dish best represents your culture, family, or childhood memories?',
      vocabulary: [
        { word: 'Cuisine', definition: 'A style of cooking connected to a place or culture.' },
        { word: 'Ingredient', definition: 'One of the foods used to make a dish.' },
        { word: 'Flavor', definition: 'The taste and character of food.' },
      ],
      idioms: [
        {
          idiom: 'Spice things up',
          meaning: 'To make something more exciting or interesting.',
          example: 'Traveling abroad can spice things up when you are tired of the same meals.',
          question: 'How can trying new cuisines spice things up in daily life?',
        },
        {
          idiom: 'Full of beans',
          meaning: 'Energetic and lively.',
          example: 'After a good breakfast, the kids were full of beans.',
          question: 'What kinds of food leave you full of beans and ready for the day?',
        },
      ],
      activities: [
        'Students compare three cuisines and explain how history, climate, or geography may have shaped them.',
        'Pairs roleplay a food traveler and a skeptical friend discussing whether unusual dishes are worth trying.',
        'Small groups design a menu for an international food festival and explain every choice.',
        'Scenario task: a foreign guest visits your city for one day. Which local foods should they try first, and why?',
        'Partner interview: ask about comfort food, food memories, eating habits, and the role of food in identity.',
      ],
    },
    'Movies and storytelling': {
      objective: 'Discuss movies and storytelling by focusing on emotion, structure, meaning, and audience impact.',
      warmup: 'What movie scene has stayed in your mind for a long time, and why?',
      vocabulary: [
        { word: 'Plot', definition: 'The main series of events in a story.' },
        { word: 'Character', definition: 'A person in a story, film, or play.' },
        { word: 'Suspense', definition: 'A feeling of excitement or tension about what will happen next.' },
      ],
      idioms: [
        {
          idiom: 'Steal the show',
          meaning: 'To attract the most attention and admiration.',
          example: 'The supporting actor stole the show in the final scene.',
          question: 'What kind of character usually steals the show in a movie?',
        },
        {
          idiom: 'Set the scene',
          meaning: 'To create the background and mood for what follows.',
          example: 'The opening music helped set the scene for the whole film.',
          question: 'How important is it to set the scene well at the start of a story?',
        },
      ],
      activities: [
        'Students explain what makes a story memorable: plot, characters, visuals, dialogue, or message.',
        'Pairs roleplay a film director and a screenwriter arguing about how to improve a weak ending.',
        'Small groups rewrite the ending of a well-known movie and defend why their version works better.',
        'Scenario task: you only have one minute to convince someone to watch your favorite film. What do you say?',
        'Partner interview: ask about favorite genres, unforgettable scenes, and what ruins a good story.',
      ],
    },
    'Online learning': {
      objective: 'Examine online learning through motivation, flexibility, discipline, and access to knowledge.',
      warmup: 'What is the biggest advantage and biggest problem of studying online?',
      vocabulary: [
        { word: 'Flexibility', definition: 'The ability to change or adapt easily.' },
        { word: 'Deadline', definition: 'The latest time by which something must be completed.' },
        { word: 'Engagement', definition: 'Active attention and participation in learning.' },
      ],
      idioms: [
        {
          idiom: 'Learn the ropes',
          meaning: 'To understand how to do something through experience.',
          example: 'It takes time to learn the ropes in a fully online course.',
          question: 'What helps students learn the ropes in online learning faster?',
        },
        {
          idiom: 'Keep up',
          meaning: 'To continue at the same speed or level as others or as required.',
          example: 'Some students struggle to keep up when lessons are fully independent.',
          question: 'What makes it easier to keep up with an online class?',
        },
      ],
      activities: [
        'Students compare online learning and classroom learning for focus, freedom, cost, and social connection.',
        'Pairs roleplay a teacher and a student discussing why motivation has dropped in an online course.',
        'Small groups design the ideal online class, including lesson length, homework style, and interaction tools.',
        'Scenario task: your internet fails during an important online exam. What should happen next, and what would be fair?',
        'Partner interview: ask about procrastination, self-discipline, digital tools, and the best ways to stay focused online.',
      ],
    },
    'Space exploration': {
      objective: 'Discuss space exploration through curiosity, cost, risk, science, and the future of humanity.',
      warmup: 'Do you think humans should invest more money in space exploration, or focus more on Earth first?',
      vocabulary: [
        { word: 'Orbit', definition: 'The curved path of one object around another object in space.' },
        { word: 'Astronaut', definition: 'A person trained to travel and work in space.' },
        { word: 'Mission', definition: 'An important planned journey or task with a clear purpose.' },
      ],
      idioms: [
        {
          idiom: 'Reach for the stars',
          meaning: 'To aim for something ambitious or difficult.',
          example: 'Space programs encourage people to reach for the stars in science and technology.',
          question: 'When is it inspiring to reach for the stars, and when is it unrealistic?',
        },
        {
          idiom: 'Out of this world',
          meaning: 'Extremely impressive or amazing.',
          example: 'The images from deep space were out of this world.',
          question: 'What part of space exploration feels truly out of this world to you?',
        },
      ],
      activities: [
        'Students discuss whether space exploration is mainly about science, survival, business, or human curiosity.',
        'Pairs roleplay a scientist and a taxpayer debating whether a costly space mission should go ahead.',
        'Small groups plan a future space mission and explain its goal, risks, and possible benefits.',
        'Scenario task: humans are preparing to live on Mars. What social, physical, and emotional challenges will matter most?',
        'Partner interview: ask whether people would travel to space, work in the space industry, or support spending on exploration.',
      ],
    },
    'Hobbies and free time': {
      objective: 'Talk about hobbies and free time by connecting enjoyment, identity, balance, and personal growth.',
      warmup: 'Which hobby gives you the most energy, and which one helps you relax the most?',
      vocabulary: [
        { word: 'Leisure', definition: 'Free time when you are not working or studying.' },
        { word: 'Creativity', definition: 'The ability to produce original ideas or make something new.' },
        { word: 'Routine', definition: 'A regular pattern of activity.' },
      ],
      idioms: [
        {
          idiom: 'Have a blast',
          meaning: 'To enjoy yourself very much.',
          example: 'We had a blast trying a new board game last weekend.',
          question: 'What kind of hobby helps you have a blast without spending much money?',
        },
        {
          idiom: 'Kill time',
          meaning: 'To spend time in a relaxed or unimportant way while waiting.',
          example: 'Some people scroll online to kill time, while others choose more active hobbies.',
          question: 'What is your favorite way to kill time on a quiet day?',
        },
      ],
      activities: [
        'Students explain whether hobbies should be relaxing, challenging, social, productive, or all of these at once.',
        'Pairs roleplay two friends trying to choose a new hobby they can both enjoy.',
        'Small groups design a perfect free-time weekend for someone who wants fun, rest, and personal growth.',
        'Scenario task: your schedule becomes much busier next month. Which hobby do you keep, and which do you give up first?',
        'Partner interview: ask about guilty pleasures, creative hobbies, childhood hobbies, and skills people still want to learn.',
      ],
    },
    'Urban vs. rural living': {
      objective: 'Compare urban and rural living in a balanced way through lifestyle, opportunity, pace, and community.',
      warmup: 'If you had to choose only one, would you rather live in a busy city or a quiet rural area for the next ten years?',
      vocabulary: [
        { word: 'Commute', definition: 'The regular journey between home and work or school.' },
        { word: 'Crowding', definition: 'A situation where too many people are in the same place.' },
        { word: 'Isolation', definition: 'A state of being separated from other people or places.' },
      ],
      idioms: [
        {
          idiom: 'A breath of fresh air',
          meaning: 'Something pleasantly different, refreshing, or relieving.',
          example: 'Moving from a noisy city to a village felt like a breath of fresh air.',
          question: 'What kinds of places feel like a breath of fresh air to you?',
        },
        {
          idiom: 'In the middle of nowhere',
          meaning: 'Far from cities, towns, or other busy places.',
          example: 'Some people love living in the middle of nowhere, but others find it too lonely.',
          question: 'Would you enjoy living in the middle of nowhere for a while?',
        },
      ],
      activities: [
        'Students compare city and rural life for work, safety, social life, cost, and mental wellbeing.',
        'Pairs roleplay a city resident and a rural resident trying to convince a third person where to live.',
        'Small groups design the ideal place to live by combining the best features of urban and rural life.',
        'Scenario task: your company offers two jobs with the same salary, one in a capital city and one in a small town. Which do you choose?',
        'Partner interview: ask where people feel more free, more connected, and more stressed in daily life.',
      ],
    },
    'Friendship and trust': {
      objective: 'Explore friendship and trust through loyalty, honesty, support, and disappointment.',
      warmup: 'What qualities make someone easy to trust, and what behaviors damage trust quickly?',
      vocabulary: [
        { word: 'Loyalty', definition: 'Strong support and faithfulness toward a person or group.' },
        { word: 'Honesty', definition: 'The quality of telling the truth and being sincere.' },
        { word: 'Betrayal', definition: 'An act that breaks trust or harms a relationship deeply.' },
      ],
      idioms: [
        {
          idiom: 'Have someone’s back',
          meaning: 'To support and protect someone.',
          example: 'A real friend has your back when things go wrong.',
          question: 'What are simple ways to show that you have someone’s back?',
        },
        {
          idiom: 'Through thick and thin',
          meaning: 'In both good times and bad times.',
          example: 'Their friendship survived through thick and thin.',
          question: 'Why do some friendships last through thick and thin while others fade?',
        },
      ],
      activities: [
        'Students discuss whether trust is built slowly, tested suddenly, or lost in one moment.',
        'Pairs roleplay two friends after one has shared a private secret with others.',
        'Small groups rank friendship qualities such as loyalty, humor, honesty, and reliability from most important to least important.',
        'Scenario task: your close friend asks you to lie for them. What do you do, and how do you explain your choice?',
        'Partner interview: ask about friendship boundaries, forgiveness, support, and the difference between close friends and casual friends.',
      ],
    },
    'Relationships and communication': {
      objective: 'Discuss relationships and communication by focusing on listening, misunderstanding, conflict, and emotional clarity.',
      warmup: 'What communication habit improves relationships most: honesty, patience, listening, or timing?',
      vocabulary: [
        { word: 'Misunderstanding', definition: 'A situation in which people understand something in the wrong way.' },
        { word: 'Compromise', definition: 'An agreement in which both sides accept less than they originally wanted.' },
        { word: 'Boundary', definition: 'A limit that protects your comfort, needs, or values in a relationship.' },
      ],
      idioms: [
        {
          idiom: 'On the same page',
          meaning: 'Thinking in the same way or sharing the same understanding.',
          example: 'Good communication helps couples stay on the same page.',
          question: 'How can people make sure they are on the same page during difficult conversations?',
        },
        {
          idiom: 'Clear the air',
          meaning: 'To talk openly in order to remove tension or misunderstanding.',
          example: 'They met for coffee to clear the air after the argument.',
          question: 'When is it better to clear the air immediately, and when is it better to wait?',
        },
      ],
      activities: [
        'Students discuss common communication mistakes that damage relationships at home, work, or school.',
        'Pairs roleplay two people trying to resolve a misunderstanding without becoming defensive.',
        'Small groups create a short guide called “How to disagree without damaging the relationship.”',
        'Scenario task: one message in a chat is misunderstood and causes tension. What should happen next?',
        'Partner interview: ask about listening habits, apology styles, boundaries, and conflict resolution.',
      ],
    },
    'Dealing with stress': {
      objective: 'Discuss stress in a practical way by focusing on causes, coping habits, pressure, and emotional balance.',
      warmup: 'What causes everyday stress most often in your life: work, study, family, money, or time pressure?',
      vocabulary: [
        { word: 'Pressure', definition: 'The feeling of stress caused by demands, expectations, or responsibility.' },
        { word: 'Burnout', definition: 'Extreme mental or physical exhaustion caused by long-term stress.' },
        { word: 'Coping', definition: 'The way a person deals with stress or difficulty.' },
      ],
      idioms: [
        {
          idiom: 'Under pressure',
          meaning: 'Experiencing stress because of difficult demands or expectations.',
          example: 'She works well under pressure, but she still needs time to rest.',
          question: 'Do you think people can stay productive for long when they are under pressure?',
        },
        {
          idiom: 'Take it easy',
          meaning: 'To relax and avoid stress or unnecessary effort.',
          example: 'After the exam, everyone wanted to take it easy for a few hours.',
          question: 'What helps you take it easy after a stressful day?',
        },
      ],
      activities: [
        'Students compare healthy and unhealthy ways of dealing with stress and explain which methods actually work long-term.',
        'Pairs roleplay a stressed employee or student asking a friend for realistic advice.',
        'Small groups create a “stress survival guide” for busy weeks with practical habits and warning signs.',
        'Scenario task: you have three major deadlines in the same week. How do you organize your time and protect your energy?',
        'Partner interview: ask about personal stress triggers, calming routines, and what kind of support feels most helpful.',
      ],
    },
    'Personal growth': {
      objective: 'Explore personal growth through habits, self-awareness, setbacks, and long-term change.',
      warmup: 'What is one way you think you have changed for the better in the last few years?',
      vocabulary: [
        { word: 'Mindset', definition: 'A person’s general way of thinking about life, challenges, or success.' },
        { word: 'Progress', definition: 'Improvement or movement toward a goal.' },
        { word: 'Reflection', definition: 'Careful thought about your actions, feelings, or experiences.' },
      ],
      idioms: [
        {
          idiom: 'Turn over a new leaf',
          meaning: 'To start behaving in a better or more positive way.',
          example: 'After a difficult year, he decided to turn over a new leaf.',
          question: 'What helps someone truly turn over a new leaf?',
        },
        {
          idiom: 'Grow as a person',
          meaning: 'To become more mature, wise, or self-aware.',
          example: 'Traveling alone helped her grow as a person.',
          question: 'What experiences help people grow as a person?',
        },
      ],
      activities: [
        'Students describe one personal weakness they improved and explain what made the change possible.',
        'Pairs roleplay an older self giving advice to a younger self about growth and mistakes.',
        'Small groups create a “personal growth map” with habits, challenges, and milestones.',
        'Scenario task: you fail at something important but still want to improve. What do you do next?',
        'Partner interview: ask about lessons learned, turning points, and what growth means beyond success.',
      ],
    },
    'Courage and fear': {
      objective: 'Discuss courage and fear in a thoughtful way by exploring risk, vulnerability, action, and self-control.',
      warmup: 'What is the difference between being brave and simply pretending not to be afraid?',
      vocabulary: [
        { word: 'Fear', definition: 'A strong feeling caused by danger, pain, or uncertainty.' },
        { word: 'Risk', definition: 'The possibility of something unpleasant or harmful happening.' },
        { word: 'Courage', definition: 'The ability to act even when you feel afraid.' },
      ],
      idioms: [
        {
          idiom: 'Face your fears',
          meaning: 'To confront the things that frighten you.',
          example: 'She finally faced her fears and spoke in front of the whole class.',
          question: 'When is it important to face your fears directly?',
        },
        {
          idiom: 'Take the plunge',
          meaning: 'To make a bold decision after hesitation.',
          example: 'He took the plunge and applied for the scholarship.',
          question: 'What kinds of situations require people to take the plunge?',
        },
      ],
      activities: [
        'Students compare physical fear, social fear, and emotional fear and decide which is hardest to manage.',
        'Pairs roleplay a friend encouraging another friend to do something they are nervous about.',
        'Small groups discuss whether courage means feeling no fear or acting despite fear.',
        'Scenario task: you have one chance to do something important, but you feel terrified. What helps you move forward?',
        'Partner interview: ask about childhood fears, current fears, and moments that required real courage.',
      ],
    },
    'Time management': {
      objective: 'Examine time management through priorities, deadlines, distraction, and personal discipline.',
      warmup: 'Do you usually have too little time, or do you sometimes lose time without noticing?',
      vocabulary: [
        { word: 'Priority', definition: 'Something that is more important than other things and should be done first.' },
        { word: 'Deadline', definition: 'The latest time by which something must be finished.' },
        { word: 'Distraction', definition: 'Something that takes your attention away from your task.' },
      ],
      idioms: [
        {
          idiom: 'Against the clock',
          meaning: 'With very little time left to finish something.',
          example: 'We were working against the clock before the final presentation.',
          question: 'How do people usually behave when they are against the clock?',
        },
        {
          idiom: 'Run out of time',
          meaning: 'To have no time left to do something.',
          example: 'She planned well, but still ran out of time at the end.',
          question: 'Why do people run out of time even with good intentions?',
        },
      ],
      activities: [
        'Students analyze a busy weekly schedule and decide what should be cut, delayed, or delegated.',
        'Pairs roleplay a manager and an employee discussing missed deadlines and better planning habits.',
        'Small groups create a “perfect study day” or “perfect work day” with realistic time blocks.',
        'Scenario task: you have five urgent tasks and only three hours. How do you decide what comes first?',
        'Partner interview: ask about procrastination, focus habits, and the biggest time-wasters in daily life.',
      ],
    },
    'Public speaking': {
      objective: 'Discuss public speaking by focusing on confidence, structure, fear, audience connection, and preparation.',
      warmup: 'What makes a speaker memorable: confidence, clarity, humor, emotion, or strong ideas?',
      vocabulary: [
        { word: 'Audience', definition: 'The people listening to a speech or presentation.' },
        { word: 'Confidence', definition: 'A belief in your own ability or value.' },
        { word: 'Delivery', definition: 'The way a speaker presents ideas using voice, timing, and body language.' },
      ],
      idioms: [
        {
          idiom: 'Break the ice',
          meaning: 'To make people feel more relaxed at the beginning of an interaction.',
          example: 'A short joke helped the speaker break the ice.',
          question: 'What is a good way to break the ice in a speech?',
        },
        {
          idiom: 'Find your voice',
          meaning: 'To become confident in expressing yourself.',
          example: 'With practice, she found her voice as a speaker.',
          question: 'How can shy students find their voice in public speaking?',
        },
      ],
      activities: [
        'Students discuss what causes public speaking fear and which techniques reduce it most effectively.',
        'Pairs roleplay a nervous speaker and a coach preparing for an important presentation.',
        'Small groups build a one-minute speech opening designed to capture audience attention immediately.',
        'Scenario task: your presentation technology fails in front of a large audience. How do you continue confidently?',
        'Partner interview: ask about speech anxiety, memorable speakers, and what makes an audience trust a speaker.',
      ],
    },
    'Personal finance basics': {
      objective: 'Talk about personal finance basics through budgeting, saving, spending, and financial decision-making.',
      warmup: 'What is harder for most people: earning more money, spending less money, or planning better?',
      vocabulary: [
        { word: 'Budget', definition: 'A plan for how money will be earned, spent, and saved.' },
        { word: 'Savings', definition: 'Money kept for future needs or emergencies.' },
        { word: 'Expense', definition: 'Money spent on something.' },
      ],
      idioms: [
        {
          idiom: 'Save for a rainy day',
          meaning: 'To keep money for future problems or emergencies.',
          example: 'My parents always taught me to save for a rainy day.',
          question: 'Why is it difficult for many people to save for a rainy day?',
        },
        {
          idiom: 'Live within your means',
          meaning: 'To spend only what you can realistically afford.',
          example: 'Living within your means is easier to say than to do.',
          question: 'What habits help people live within their means?',
        },
      ],
      activities: [
        'Students compare three monthly budgets and decide which person is making the smartest financial choices.',
        'Pairs roleplay a parent and a teenager discussing saving, spending, and impulse buying.',
        'Small groups create a beginner financial plan for someone starting their first job.',
        'Scenario task: you suddenly receive extra money. Do you save it, invest it, spend it, or share it? Explain why.',
        'Partner interview: ask about money habits, financial goals, and common mistakes young adults make.',
      ],
    },
    'Cultural differences in communication': {
      objective: 'Explore cultural differences in communication through tone, directness, respect, and misunderstanding.',
      warmup: 'Do you think clear communication always means direct communication?',
      vocabulary: [
        { word: 'Tone', definition: 'The attitude or feeling expressed in the way someone speaks or writes.' },
        { word: 'Gesture', definition: 'A movement of the body, especially the hands, used to communicate meaning.' },
        { word: 'Context', definition: 'The situation and background that help explain meaning.' },
      ],
      idioms: [
        {
          idiom: 'Get wires crossed',
          meaning: 'To misunderstand each other.',
          example: 'People from different cultures can easily get their wires crossed.',
          question: 'Why do people get their wires crossed in cross-cultural communication?',
        },
        {
          idiom: 'Read the room',
          meaning: 'To notice the mood and social signals in a situation.',
          example: 'Good communicators know how to read the room before they speak.',
          question: 'Why is it important to read the room in intercultural communication?',
        },
      ],
      activities: [
        'Students compare direct and indirect communication styles and discuss the strengths of each.',
        'Pairs roleplay two coworkers from different cultures trying to avoid misunderstanding during a meeting.',
        'Small groups list communication habits that can seem polite in one culture and rude in another.',
        'Scenario task: a message meant to sound helpful sounds rude instead. How do you repair the situation?',
        'Partner interview: ask about eye contact, silence, politeness, and the hidden rules of communication in different places.',
      ],
    },
    'Work-life balance': {
      objective: 'Discuss work-life balance through energy, ambition, boundaries, and long-term wellbeing.',
      warmup: 'How can someone know when hard work becomes too much work?',
      vocabulary: [
        { word: 'Balance', definition: 'A healthy relationship between different parts of life.' },
        { word: 'Boundary', definition: 'A limit that protects time, energy, or personal wellbeing.' },
        { word: 'Burnout', definition: 'Extreme exhaustion caused by too much work or stress over time.' },
      ],
      idioms: [
        {
          idiom: 'Take a step back',
          meaning: 'To pause and look at a situation more calmly or from a wider perspective.',
          example: 'Sometimes you need to take a step back and rethink your schedule.',
          question: 'When should people take a step back from work?',
        },
        {
          idiom: 'On the go',
          meaning: 'Busy and active all the time.',
          example: 'She is always on the go and rarely truly rests.',
          question: 'Is being on the go a sign of success or a warning sign?',
        },
      ],
      activities: [
        'Students discuss whether work-life balance means equal time, equal energy, or simply sustainable living.',
        'Pairs roleplay an employee and a manager discussing overtime, boundaries, and flexibility.',
        'Small groups design a healthy weekly schedule for a busy professional with family responsibilities.',
        'Scenario task: you get a promotion, but it destroys your free time. Do you accept it?',
        'Partner interview: ask about rest, ambition, guilt, and how people disconnect from work mentally.',
      ],
    },
    'Remote work culture': {
      objective: 'Examine remote work culture through flexibility, productivity, isolation, trust, and communication.',
      warmup: 'Would you rather work from home, in an office, or in a hybrid system, and why?',
      vocabulary: [
        { word: 'Flexibility', definition: 'The ability to adapt easily to different situations or schedules.' },
        { word: 'Isolation', definition: 'The state of being alone or separated from others.' },
        { word: 'Productivity', definition: 'The ability to produce good results efficiently.' },
      ],
      idioms: [
        {
          idiom: 'Touch base',
          meaning: 'To make brief contact in order to share updates or stay connected.',
          example: 'Remote teams need to touch base regularly to avoid confusion.',
          question: 'How often should remote coworkers touch base?',
        },
        {
          idiom: 'In the loop',
          meaning: 'Included in what is happening or being informed about it.',
          example: 'Good managers keep remote workers in the loop.',
          question: 'Why is it easy for remote workers to feel out of the loop?',
        },
      ],
      activities: [
        'Students compare remote work and office work for focus, teamwork, trust, and mental health.',
        'Pairs roleplay a remote employee and a manager discussing miscommunication and online meeting overload.',
        'Small groups create rules for a healthy and effective remote team culture.',
        'Scenario task: your team works in three time zones and communication keeps breaking down. What changes first?',
        'Partner interview: ask about loneliness, freedom, focus, and what people miss most from physical workplaces.',
      ],
    },
    'Leadership styles': {
      objective: 'Discuss leadership styles by comparing authority, empathy, decision-making, and team trust.',
      warmup: 'What makes people respect a leader more: strength, fairness, expertise, or emotional intelligence?',
      vocabulary: [
        { word: 'Authority', definition: 'The power or right to make decisions and give orders.' },
        { word: 'Vision', definition: 'A clear idea of what you want to achieve in the future.' },
        { word: 'Delegation', definition: 'Giving responsibility or tasks to other people.' },
      ],
      idioms: [
        {
          idiom: 'Call the shots',
          meaning: 'To be the person in control who makes decisions.',
          example: 'Some leaders like to call the shots on every detail.',
          question: 'Is it effective when one leader always calls the shots?',
        },
        {
          idiom: 'Lead by example',
          meaning: 'To show others what to do through your own behavior.',
          example: 'The best managers often lead by example under pressure.',
          question: 'Why does leading by example build trust?',
        },
      ],
      activities: [
        'Students compare strict, democratic, and supportive leadership styles and discuss where each works best.',
        'Pairs roleplay a team leader and a frustrated employee discussing trust and decision-making.',
        'Small groups analyze a crisis situation and choose the best leadership style for it.',
        'Scenario task: your team is failing, and morale is low. What should a good leader do first?',
        'Partner interview: ask about memorable leaders, bad leadership habits, and what makes people want to follow someone.',
      ],
    },
    'Teamwork and collaboration': {
      objective: 'Explore teamwork and collaboration through trust, communication, shared goals, and conflict management.',
      warmup: 'What usually causes teamwork to fail: poor communication, weak leadership, lack of trust, or unclear goals?',
      vocabulary: [
        { word: 'Collaboration', definition: 'The act of working together to achieve something.' },
        { word: 'Coordination', definition: 'The organized management of different people or tasks.' },
        { word: 'Accountability', definition: 'Being responsible for your actions and duties.' },
      ],
      idioms: [
        {
          idiom: 'Pull your weight',
          meaning: 'To do your fair share of the work.',
          example: 'A team becomes frustrated when some members do not pull their weight.',
          question: 'How can a team respond when one person is not pulling their weight?',
        },
        {
          idiom: 'On the same page',
          meaning: 'Sharing the same understanding or plan.',
          example: 'Good collaboration starts when everyone is on the same page.',
          question: 'How do teams make sure everyone is on the same page from the start?',
        },
      ],
      activities: [
        'Students discuss what good teamwork requires beyond simply dividing tasks.',
        'Pairs roleplay two teammates after one person misses an important part of the project.',
        'Small groups design the ideal team for a difficult project and explain what role each person should play.',
        'Scenario task: your group has one week left, but half the work is unfinished. How do you recover together?',
        'Partner interview: ask about trust, conflict, shared responsibility, and the best team experience each person has had.',
      ],
    },
    'Creativity and innovation': {
      objective: 'Discuss creativity and innovation through problem-solving, originality, experimentation, and practical change.',
      warmup: 'Do the best ideas usually come from talent, pressure, teamwork, or repeated practice?',
      vocabulary: [
        { word: 'Innovation', definition: 'A new idea, method, or product that improves something.' },
        { word: 'Prototype', definition: 'An early model used to test an idea before the final version.' },
        { word: 'Inspiration', definition: 'A feeling or idea that gives you the desire to create something.' },
      ],
      idioms: [
        {
          idiom: 'Think outside the box',
          meaning: 'To think in a creative and unusual way.',
          example: 'The team had to think outside the box to solve the problem quickly.',
          question: 'What situations really force people to think outside the box?',
        },
        {
          idiom: 'Come up with',
          meaning: 'To think of or produce an idea or solution.',
          example: 'She came up with a simple idea that saved the company time and money.',
          question: 'How do people usually come up with their best ideas?',
        },
      ],
      activities: [
        'Students discuss whether creativity is more important in art, business, science, or daily life.',
        'Pairs roleplay two coworkers trying to invent a better solution for a common everyday problem.',
        'Small groups design a simple innovative product and explain what problem it solves and for whom.',
        'Scenario task: your team has no money, little time, and one big problem to solve. What creative approach do you take?',
        'Partner interview: ask about original ideas, failed experiments, and where creativity is most useful in real life.',
      ],
    },
    'The meaning of success': {
      objective: 'Examine the meaning of success through ambition, values, comparison, and personal definition.',
      warmup: 'When people say someone is successful, what do they usually mean, and do you agree with it?',
      vocabulary: [
        { word: 'Achievement', definition: 'Something important that has been accomplished through effort.' },
        { word: 'Fulfillment', definition: 'A feeling of deep satisfaction and meaning.' },
        { word: 'Ambition', definition: 'A strong desire to achieve something important.' },
      ],
      idioms: [
        {
          idiom: 'Make it',
          meaning: 'To become successful or achieve your goal.',
          example: 'Some people think you have only made it if you are rich or famous.',
          question: 'What does it really mean to make it in life?',
        },
        {
          idiom: 'On top of the world',
          meaning: 'Extremely happy and confident.',
          example: 'After reaching her goal, she felt on top of the world.',
          question: 'Do people always feel on top of the world after success?',
        },
      ],
      activities: [
        'Students compare external success such as money or status with internal success such as peace or fulfillment.',
        'Pairs roleplay two friends with very different views of success and lifestyle.',
        'Small groups rank life goals such as family, wealth, health, impact, and freedom from most important to least important.',
        'Scenario task: you can choose a high-paying career you dislike or a meaningful career with less status. What do you do?',
        'Partner interview: ask how success changes with age, culture, and personal experience.',
      ],
    },
    'Failure and resilience': {
      objective: 'Discuss failure and resilience through recovery, mindset, learning, and emotional strength.',
      warmup: 'What teaches people more in the long run: success or failure?',
      vocabulary: [
        { word: 'Resilience', definition: 'The ability to recover and keep going after difficulty.' },
        { word: 'Setback', definition: 'A problem or delay that makes progress harder.' },
        { word: 'Recovery', definition: 'The process of returning to a normal or stronger state after difficulty.' },
      ],
      idioms: [
        {
          idiom: 'Bounce back',
          meaning: 'To recover quickly from a failure or problem.',
          example: 'Some people bounce back faster because they focus on what they can still do.',
          question: 'What helps people bounce back after failure?',
        },
        {
          idiom: 'Learn the hard way',
          meaning: 'To learn something through a difficult or painful experience.',
          example: 'He learned the hard way that preparation really matters.',
          question: 'Is learning the hard way sometimes the best kind of lesson?',
        },
      ],
      activities: [
        'Students discuss whether failure should be hidden, accepted, or openly talked about as part of growth.',
        'Pairs roleplay a mentor and a student after a major disappointment or mistake.',
        'Small groups create a short “resilience guide” with attitudes and actions that help people recover.',
        'Scenario task: you fail publicly at something important. How do you respond in the first 24 hours?',
        'Partner interview: ask about setbacks, recovery, and what separates resilient people from others.',
      ],
    },
    'Self-discipline': {
      objective: 'Explore self-discipline through habit, temptation, routine, and long-term focus.',
      warmup: 'Is self-discipline mostly about saying no to things, or about saying yes to the right things?',
      vocabulary: [
        { word: 'Discipline', definition: 'The ability to control yourself and stay focused on a goal.' },
        { word: 'Temptation', definition: 'Something attractive that makes you want to do what may be unhelpful.' },
        { word: 'Consistency', definition: 'The quality of doing something in a steady and regular way.' },
      ],
      idioms: [
        {
          idiom: 'Stick to it',
          meaning: 'To continue doing something without giving up.',
          example: 'Improvement comes slowly, so you have to stick to it.',
          question: 'Why is it hard for people to stick to it when progress is slow?',
        },
        {
          idiom: 'Stay on track',
          meaning: 'To continue moving toward a goal in the right way.',
          example: 'A daily routine helps many people stay on track.',
          question: 'What habits help someone stay on track?',
        },
      ],
      activities: [
        'Students compare motivation and discipline and decide which matters more over time.',
        'Pairs roleplay a coach and a student discussing why good habits keep breaking down.',
        'Small groups design a 30-day challenge that is difficult but realistic enough to complete.',
        'Scenario task: you keep getting distracted from an important long-term goal. What changes first?',
        'Partner interview: ask about routines, excuses, weak points, and what makes discipline sustainable.',
      ],
    },
    'Motivation and inspiration': {
      objective: 'Discuss motivation and inspiration through purpose, emotion, action, and long-term effort.',
      warmup: 'What pushes people to act more strongly: fear, hope, pressure, or inspiration?',
      vocabulary: [
        { word: 'Motivation', definition: 'The reason or energy behind an action or effort.' },
        { word: 'Purpose', definition: 'A clear reason for doing something.' },
        { word: 'Drive', definition: 'Strong inner energy to achieve something.' },
      ],
      idioms: [
        {
          idiom: 'Light a fire under someone',
          meaning: 'To make someone feel motivated to act quickly.',
          example: 'That conversation really lit a fire under him.',
          question: 'What kinds of situations light a fire under people?',
        },
        {
          idiom: 'Keep going',
          meaning: 'To continue despite difficulty or low energy.',
          example: 'Strong motivation helps people keep going in hard times.',
          question: 'What helps people keep going when motivation is low?',
        },
      ],
      activities: [
        'Students compare short-term motivation with deeper long-term inspiration and discuss the difference.',
        'Pairs roleplay a discouraged friend and a friend trying to motivate them honestly.',
        'Small groups create a list of things that motivate people at school, at work, and in personal life.',
        'Scenario task: you lose interest halfway through an important project. How do you restart your energy?',
        'Partner interview: ask what inspires people, what kills motivation, and how goals stay meaningful over time.',
      ],
    },
    'Influencers and fame': {
      objective: 'Analyze influencers and fame through image, pressure, attention, and public influence.',
      warmup: 'Why are so many people interested in fame, even when they know it can be stressful?',
      vocabulary: [
        { word: 'Fame', definition: 'The state of being widely known by many people.' },
        { word: 'Image', definition: 'The impression a person gives to the public.' },
        { word: 'Attention', definition: 'Notice or interest from other people.' },
      ],
      idioms: [
        {
          idiom: 'In the spotlight',
          meaning: 'Receiving a lot of public attention.',
          example: 'Life in the spotlight can be exciting but exhausting.',
          question: 'Why do some people enjoy being in the spotlight while others avoid it?',
        },
        {
          idiom: 'Steal the spotlight',
          meaning: 'To attract more attention than everyone else.',
          example: 'One influencer can steal the spotlight with a single viral post.',
          question: 'Is it healthy to always want to steal the spotlight?',
        },
      ],
      activities: [
        'Students discuss whether influencers deserve their fame and what responsibilities come with it.',
        'Pairs roleplay an influencer and a manager discussing image, stress, and audience expectations.',
        'Small groups compare traditional fame with internet fame and decide which is harder to manage.',
        'Scenario task: you become famous online overnight. What changes in your life first, and what worries you most?',
        'Partner interview: ask about role models, performative behavior, and the hidden cost of public attention.',
      ],
    },
    'Online privacy': {
      objective: 'Discuss online privacy through data sharing, convenience, trust, and digital responsibility.',
      warmup: 'How much privacy do people give away online without really thinking about it?',
      vocabulary: [
        { word: 'Privacy', definition: 'The right to keep personal information and actions private.' },
        { word: 'Consent', definition: 'Permission given freely and clearly.' },
        { word: 'Tracking', definition: 'The collection of information about someone’s online behavior.' },
      ],
      idioms: [
        {
          idiom: 'Keep under wraps',
          meaning: 'To keep something secret or private.',
          example: 'Most people want to keep their personal messages under wraps.',
          question: 'What kinds of information should always be kept under wraps online?',
        },
        {
          idiom: 'Out in the open',
          meaning: 'Visible or known by everyone.',
          example: 'Some people do not realize how much of their data is already out in the open.',
          question: 'Why is it risky when personal information ends up out in the open?',
        },
      ],
      activities: [
        'Students discuss what privacy means today and whether convenience has made people too careless online.',
        'Pairs roleplay a user and a tech company representative arguing about data collection.',
        'Small groups create a simple online privacy guide for teenagers or first-time internet users.',
        'Scenario task: one of your private photos or messages is leaked online. What should happen next?',
        'Partner interview: ask about passwords, data trust, app permissions, and what people would never share online.',
      ],
    },
    'The power of storytelling': {
      objective: 'Explore the power of storytelling through persuasion, memory, emotion, and human connection.',
      warmup: 'Why do people remember stories more easily than facts or instructions?',
      vocabulary: [
        { word: 'Narrative', definition: 'A story or account of connected events.' },
        { word: 'Emotion', definition: 'A strong feeling such as joy, fear, sadness, or hope.' },
        { word: 'Message', definition: 'The main idea or meaning communicated by a story.' },
      ],
      idioms: [
        {
          idiom: 'Tell the whole story',
          meaning: 'To explain everything, not just part of it.',
          example: 'Numbers alone do not tell the whole story behind a social issue.',
          question: 'Why is it important to tell the whole story?',
        },
        {
          idiom: 'Paint a picture',
          meaning: 'To describe something clearly and vividly.',
          example: 'A strong speaker can paint a picture with only a few details.',
          question: 'How do good storytellers paint a picture for their audience?',
        },
      ],
      activities: [
        'Students discuss why stories influence people in advertising, politics, education, and personal life.',
        'Pairs roleplay a speaker and an editor deciding how to make a true story more powerful without losing honesty.',
        'Small groups transform a dry set of facts into a short story with emotion and meaning.',
        'Scenario task: you want people to care about a serious issue. Do you start with data or with one personal story?',
        'Partner interview: ask about memorable stories, persuasive storytelling, and why some stories stay with people for years.',
      ],
    },
    'Art and creativity': {
      objective: 'Discuss art and creativity through expression, interpretation, originality, and social value.',
      warmup: 'What makes something art: skill, originality, emotion, effort, or the reaction it creates?',
      vocabulary: [
        { word: 'Expression', definition: 'The act of showing thoughts, feelings, or ideas.' },
        { word: 'Imagination', definition: 'The ability to create images or ideas in the mind.' },
        { word: 'Interpretation', definition: 'A personal understanding or explanation of something.' },
      ],
      idioms: [
        {
          idiom: 'Draw a blank',
          meaning: 'To fail to think of something or produce an idea.',
          example: 'Even creative people sometimes draw a blank under pressure.',
          question: 'What helps artists when they draw a blank?',
        },
        {
          idiom: 'Works of art',
          meaning: 'Beautiful or highly skillful creations.',
          example: 'Some people see old buildings as works of art, not just useful spaces.',
          question: 'Can everyday objects become works of art?',
        },
      ],
      activities: [
        'Students discuss whether art should be beautiful, challenging, political, personal, or all of these things.',
        'Pairs roleplay an artist and a critic who disagree about the meaning of a new piece of work.',
        'Small groups design a public art project and explain what feeling or message it should create.',
        'Scenario task: a controversial artwork makes people angry. Should it be protected, moved, explained, or removed?',
        'Partner interview: ask about creative habits, favorite forms of art, and whether art should always have a purpose.',
      ],
    },
    'Fashion and identity': {
      objective: 'Explore fashion and identity through self-expression, image, social pressure, and cultural meaning.',
      warmup: 'Do clothes mostly reflect identity, or do they mainly respond to trends and social pressure?',
      vocabulary: [
        { word: 'Style', definition: 'A personal way of dressing or presenting yourself.' },
        { word: 'Trend', definition: 'Something that becomes popular for a period of time.' },
        { word: 'Identity', definition: 'The qualities and beliefs that make a person who they are.' },
      ],
      idioms: [
        {
          idiom: 'Dress to impress',
          meaning: 'To wear clothes intended to create a strong positive impression.',
          example: 'Some people dress to impress at every public event.',
          question: 'When do people usually feel pressure to dress to impress?',
        },
        {
          idiom: 'Follow the crowd',
          meaning: 'To do what most other people are doing.',
          example: 'Fashion can encourage people to follow the crowd instead of choosing their own style.',
          question: 'Is it easy to avoid following the crowd in fashion?',
        },
      ],
      activities: [
        'Students discuss whether fashion is a form of art, communication, business, or social pressure.',
        'Pairs roleplay a teenager and a parent arguing about clothing, self-expression, and social judgment.',
        'Small groups compare fashion as identity in different ages, cultures, or social groups.',
        'Scenario task: your workplace or school introduces a stricter dress code. What reactions would people have?',
        'Partner interview: ask about confidence, style, trends, and whether clothing changes how people are treated.',
      ],
    },
    'Gender equality': {
      objective: 'Discuss gender equality through fairness, opportunity, stereotypes, and everyday social expectations.',
      warmup: 'Where do you still see gender expectations influencing people’s choices or opportunities?',
      vocabulary: [
        { word: 'Equality', definition: 'A situation in which people have the same rights, chances, and respect.' },
        { word: 'Stereotype', definition: 'A fixed and often unfair idea about a type of person.' },
        { word: 'Bias', definition: 'An unfair preference for or against something or someone.' },
      ],
      idioms: [
        {
          idiom: 'Break the mold',
          meaning: 'To do something in a new way that challenges expectations.',
          example: 'Many leaders break the mold by succeeding in roles once seen as unusual for them.',
          question: 'Who do you think has helped break the mold in society?',
        },
        {
          idiom: 'Level the playing field',
          meaning: 'To create fairer conditions for everyone.',
          example: 'Better policies can help level the playing field in education and work.',
          question: 'What changes would help level the playing field in your society?',
        },
      ],
      activities: [
        'Students discuss where gender equality has improved and where unfair expectations still remain strongest.',
        'Pairs roleplay two coworkers discussing unequal expectations or treatment in the workplace.',
        'Small groups compare education, family, media, and employment to decide where change is most urgent.',
        'Scenario task: a school wants to reduce gender stereotypes in career advice. What should it change first?',
        'Partner interview: ask about stereotypes, fairness, role models, and how equality should look in practice.',
      ],
    },
    'Education reform': {
      objective: 'Examine education reform by discussing what schools should teach, how they should teach it, and how success should be measured.',
      warmup: 'If you could change one major part of the education system immediately, what would it be?',
      vocabulary: [
        { word: 'Reform', definition: 'A change made to improve a system or institution.' },
        { word: 'Assessment', definition: 'A way of measuring what students know or can do.' },
        { word: 'Policy', definition: 'An official plan or set of rules used to guide decisions.' },
      ],
      idioms: [
        {
          idiom: 'Shake things up',
          meaning: 'To make big changes to the usual way of doing something.',
          example: 'Some teachers believe schools need to shake things up completely.',
          question: 'When is it wise to shake things up in education?',
        },
        {
          idiom: 'Back to the drawing board',
          meaning: 'To start again because a plan did not work well enough.',
          example: 'If reforms fail to help students, policymakers may need to go back to the drawing board.',
          question: 'What would send education reform back to the drawing board?',
        },
      ],
      activities: [
        'Students discuss whether schools should prioritize exams, life skills, creativity, or emotional development.',
        'Pairs roleplay a teacher and a policymaker debating a new school reform plan.',
        'Small groups design one realistic reform that could improve student motivation and learning outcomes.',
        'Scenario task: exams are reduced, but parents worry standards will fall. How do you respond?',
        'Partner interview: ask what schools teach too much, too little, or in the wrong way.',
      ],
    },
    'The role of media': {
      objective: 'Discuss the role of media through influence, responsibility, trust, and public opinion.',
      warmup: 'Should media mainly inform people, entertain people, challenge people, or all three?',
      vocabulary: [
        { word: 'Coverage', definition: 'The reporting and discussion of an event in the media.' },
        { word: 'Narrative', definition: 'A particular story or version of events that people are encouraged to believe.' },
        { word: 'Credibility', definition: 'The quality of being trusted and believed.' },
      ],
      idioms: [
        {
          idiom: 'Make the news',
          meaning: 'To appear in media reports because something is important or unusual.',
          example: 'Even a small local event can make the news if the story spreads widely.',
          question: 'What kinds of events deserve to make the news most?',
        },
        {
          idiom: 'Spin a story',
          meaning: 'To present information in a way that makes people see it differently.',
          example: 'Politicians and news outlets can spin a story in very different ways.',
          question: 'Why is it important to notice when someone is spinning a story?',
        },
      ],
      activities: [
        'Students discuss whether media shapes opinion more than it reflects public opinion.',
        'Pairs roleplay a journalist and an editor disagreeing over how to present a sensitive story.',
        'Small groups compare serious news, entertainment media, and social media for impact and responsibility.',
        'Scenario task: a major story is reported too quickly and key facts are wrong. What should the media do next?',
        'Partner interview: ask about trust in media, media influence, and how people decide what to believe.',
      ],
    },
    'Mental health awareness': {
      objective: 'Discuss mental health awareness with sensitivity by focusing on stigma, support, prevention, and everyday wellbeing.',
      warmup: 'Why do many people find it easier to talk about physical health than mental health?',
      vocabulary: [
        { word: 'Stigma', definition: 'A negative social attitude that creates shame around something.' },
        { word: 'Anxiety', definition: 'A feeling of worry or fear that can become strong or persistent.' },
        { word: 'Support', definition: 'Help, care, or encouragement given to someone.' },
      ],
      idioms: [
        {
          idiom: 'Open up',
          meaning: 'To begin talking honestly about personal feelings or problems.',
          example: 'Some people need a safe environment before they can open up.',
          question: 'What helps people feel safe enough to open up?',
        },
        {
          idiom: 'Reach out',
          meaning: 'To contact someone for help, support, or connection.',
          example: 'It is important to reach out before stress becomes overwhelming.',
          question: 'Why do many people still find it hard to reach out for help?',
        },
      ],
      activities: [
        'Students discuss how schools, families, and workplaces can support mental health more effectively.',
        'Pairs roleplay a friend noticing warning signs and trying to offer help without judging.',
        'Small groups create a short awareness campaign with practical messages that reduce stigma.',
        'Scenario task: someone says mental health struggles are “just weakness.” How do you respond respectfully but clearly?',
        'Partner interview: ask about stress culture, support systems, and what real awareness should lead to.',
      ],
    },
    'Travel dreams': {
      objective: 'Explore travel dreams through imagination, priorities, values, and personal meaning.',
      warmup: 'If money, time, and visas were no problem, where would you go first and why?',
      vocabulary: [
        { word: 'Destination', definition: 'The place someone is traveling to.' },
        { word: 'Adventure', definition: 'An exciting and sometimes unusual experience.' },
        { word: 'Escape', definition: 'A break from normal routine or pressure.' },
      ],
      idioms: [
        {
          idiom: 'Catch the travel bug',
          meaning: 'To develop a strong desire to travel often.',
          example: 'After one backpacking trip, she caught the travel bug.',
          question: 'What kinds of experiences make people catch the travel bug?',
        },
        {
          idiom: 'See the world',
          meaning: 'To travel widely and experience different places.',
          example: 'Many people dream of seeing the world before settling down.',
          question: 'Why do so many people want to see the world?',
        },
      ],
      activities: [
        'Students explain whether travel dreams are more about relaxation, self-discovery, adventure, or status.',
        'Pairs roleplay two friends planning a dream trip with very different budgets and priorities.',
        'Small groups design the perfect once-in-a-lifetime journey and justify every stop and activity.',
        'Scenario task: you can take only one big trip in the next five years. How do you choose where to go?',
        'Partner interview: ask about dream destinations, travel values, and what makes a place unforgettable.',
      ],
    },
    'Personal heroes': {
      objective: 'Discuss personal heroes by exploring admiration, values, influence, and the difference between fame and respect.',
      warmup: 'What makes someone a hero in your eyes: sacrifice, talent, courage, kindness, or something else?',
      vocabulary: [
        { word: 'Heroism', definition: 'Great bravery or noble action, especially in difficult situations.' },
        { word: 'Integrity', definition: 'Strong moral principles and honesty.' },
        { word: 'Influence', definition: 'The power to affect how people think or act.' },
      ],
      idioms: [
        {
          idiom: 'Look up to',
          meaning: 'To admire and respect someone.',
          example: 'Many children look up to people who help others quietly.',
          question: 'What qualities make someone easy to look up to?',
        },
        {
          idiom: 'Go above and beyond',
          meaning: 'To do much more than what is required.',
          example: 'The nurse went above and beyond for her patients.',
          question: 'Why do people remember those who go above and beyond?',
        },
      ],
      activities: [
        'Students compare everyday heroes with famous heroes and discuss which kind matters more.',
        'Pairs roleplay a journalist interviewing someone about the person they admire most.',
        'Small groups create a “hero profile” that explains the actions, values, and influence of a chosen figure.',
        'Scenario task: someone is widely admired but later disappoints the public. Can they still be a hero?',
        'Partner interview: ask about role models, disappointment, and the traits that deserve deep respect.',
      ],
    },
    'Learning a new language': {
      objective: 'Explore language learning through motivation, identity, difficulty, and long-term practice.',
      warmup: 'What is the hardest part of learning a new language: grammar, vocabulary, speaking, listening, or confidence?',
      vocabulary: [
        { word: 'Fluency', definition: 'The ability to speak or write smoothly and naturally.' },
        { word: 'Pronunciation', definition: 'The way words are spoken.' },
        { word: 'Immersion', definition: 'Learning by being fully surrounded by the language.' },
      ],
      idioms: [
        {
          idiom: 'Pick up',
          meaning: 'To learn something gradually or informally.',
          example: 'Some people pick up a language faster when they live abroad.',
          question: 'What helps learners pick up a language naturally?',
        },
        {
          idiom: 'Tongue-tied',
          meaning: 'Unable to speak easily because you are nervous or unsure.',
          example: 'Even advanced learners can feel tongue-tied in real conversations.',
          question: 'Why do people become tongue-tied when speaking a new language?',
        },
      ],
      activities: [
        'Students discuss why some people learn languages successfully while others lose motivation quickly.',
        'Pairs roleplay a language tutor and a learner discussing mistakes, confidence, and speaking practice.',
        'Small groups design the ideal language-learning plan for a busy adult with limited time.',
        'Scenario task: you understand a language well, but panic when you need to speak it. What should you change?',
        'Partner interview: ask about language goals, embarrassing mistakes, and how language learning changes identity.',
      ],
    },
    'Volunteering and community service': {
      objective: 'Discuss volunteering and community service through empathy, responsibility, impact, and motivation.',
      warmup: 'Do people volunteer mostly to help others, to grow personally, or to feel part of something bigger?',
      vocabulary: [
        { word: 'Volunteer', definition: 'A person who offers help willingly without being paid.' },
        { word: 'Community', definition: 'A group of people connected by place, identity, or shared life.' },
        { word: 'Impact', definition: 'A strong effect or influence on a person or situation.' },
      ],
      idioms: [
        {
          idiom: 'Lend a hand',
          meaning: 'To help someone.',
          example: 'Even small actions can lend a hand to people in difficulty.',
          question: 'What are simple ways to lend a hand in your community?',
        },
        {
          idiom: 'Give back',
          meaning: 'To help others or support society after receiving benefits yourself.',
          example: 'Many people volunteer because they want to give back.',
          question: 'Why is giving back important to some people?',
        },
      ],
      activities: [
        'Students discuss whether volunteering should be encouraged, required, or left completely personal.',
        'Pairs roleplay a volunteer coordinator and a new volunteer choosing where help is needed most.',
        'Small groups design a realistic community project and explain its goal, cost, and likely impact.',
        'Scenario task: your town has a limited budget but many social needs. Where should volunteers focus first?',
        'Partner interview: ask about service, empathy, motivation, and whether community work changes the volunteer too.',
      ],
    },
    'Environmental protection': {
      objective: 'Discuss environmental protection through responsibility, policy, habit change, and long-term survival.',
      warmup: 'What is one environmental problem people can see clearly in daily life where you live?',
      vocabulary: [
        { word: 'Pollution', definition: 'Damage to air, water, or land caused by harmful substances or waste.' },
        { word: 'Conservation', definition: 'The protection of nature and natural resources.' },
        { word: 'Ecosystem', definition: 'A community of living things interacting with each other and their environment.' },
      ],
      idioms: [
        {
          idiom: 'Go green',
          meaning: 'To choose habits or systems that are better for the environment.',
          example: 'Some companies go green only in public messages, not in real action.',
          question: 'What does it really mean to go green in everyday life?',
        },
        {
          idiom: 'Do your part',
          meaning: 'To take personal responsibility for helping.',
          example: 'Recycling alone is not enough, but everyone should still do their part.',
          question: 'What does doing your part look like in environmental protection?',
        },
      ],
      activities: [
        'Students compare individual responsibility with government and corporate responsibility in protecting the environment.',
        'Pairs roleplay a local activist and a business owner discussing environmental rules and economic pressure.',
        'Small groups create an environmental protection plan for a school, office, or neighborhood.',
        'Scenario task: a popular local business is harming the environment but also provides jobs. What should happen?',
        'Partner interview: ask about habits, environmental guilt, realistic solutions, and what change is possible now.',
      ],
    },
    'Plastic pollution': {
      objective: 'Examine plastic pollution through habit, convenience, waste systems, and environmental consequence.',
      warmup: 'Why is plastic so hard for society to reduce even when everyone knows the problem is serious?',
      vocabulary: [
        { word: 'Waste', definition: 'Unwanted material that is thrown away.' },
        { word: 'Packaging', definition: 'Materials used to wrap or protect products.' },
        { word: 'Microplastic', definition: 'A very small piece of plastic that can pollute water, food, and nature.' },
      ],
      idioms: [
        {
          idiom: 'Throw away',
          meaning: 'To get rid of something as waste.',
          example: 'People often throw away plastic after only a few minutes of use.',
          question: 'Why do we throw away so much plastic so quickly?',
        },
        {
          idiom: 'Pile up',
          meaning: 'To increase and collect in large amounts.',
          example: 'Plastic waste continues to pile up in rivers and landfills.',
          question: 'Where do you think plastic waste is piling up most dangerously?',
        },
      ],
      activities: [
        'Students discuss why plastic remains so convenient even when people know it causes harm.',
        'Pairs roleplay a shop owner and a customer discussing a move away from single-use plastic.',
        'Small groups compare bans, taxes, reusable alternatives, and consumer education as solutions.',
        'Scenario task: your city wants to reduce plastic waste by half in two years. What measures would work best?',
        'Partner interview: ask about daily plastic use, realistic alternatives, and who should carry the biggest responsibility.',
      ],
    },
    'Renewable energy': {
      objective: 'Explore renewable energy through cost, innovation, public policy, and long-term environmental benefit.',
      warmup: 'If your city had to invest heavily in one energy source for the next twenty years, what should it choose and why?',
      vocabulary: [
        { word: 'Renewable', definition: 'Able to be replaced naturally or used again without running out quickly.' },
        { word: 'Grid', definition: 'The system that delivers electricity from producers to homes and businesses.' },
        { word: 'Storage', definition: 'The process of saving energy for use at a later time.' },
      ],
      idioms: [
        {
          idiom: 'Blow hot and cold',
          meaning: 'To keep changing between support and opposition.',
          example: 'Some governments blow hot and cold on renewable energy when prices or politics shift.',
          question: 'Why do leaders sometimes blow hot and cold on clean energy projects?',
        },
        {
          idiom: 'On the horizon',
          meaning: 'Likely to happen soon.',
          example: 'New battery technologies are on the horizon for homes and electric vehicles.',
          question: 'What renewable energy changes do you think are on the horizon in your region?',
        },
      ],
      activities: [
        'Students compare solar, wind, hydro, and nuclear power and decide which mix makes the most sense for one country.',
        'Pairs roleplay an energy minister and a skeptical taxpayer debating whether a large wind farm should be funded.',
        'Small groups design a five-year clean energy plan for a town and explain how they would handle cost, jobs, and public opinion.',
        'Scenario task: a school wants to cut its energy bill and carbon footprint. Which renewable solution would you recommend first?',
        'Partner interview: ask about energy habits, public responsibility, and whether people accept inconvenience for long-term benefit.',
      ],
    },
    Globalization: {
      objective: 'Discuss globalization through trade, culture, opportunity, inequality, and changing local identity.',
      warmup: 'Do you feel globalization has improved everyday life more than it has damaged local culture? Why?',
      vocabulary: [
        { word: 'Trade', definition: 'The buying and selling of goods and services between people, companies, or countries.' },
        { word: 'Outsource', definition: 'To send work to another company or country instead of doing it locally.' },
        { word: 'Market', definition: 'A system or place where products and services are bought and sold.' },
      ],
      idioms: [
        {
          idiom: 'A small world',
          meaning: 'Used when people or places seem more connected than expected.',
          example: 'Online business and travel have made the world feel like a small world.',
          question: 'In what ways has your life become part of a small world?',
        },
        {
          idiom: 'Cross borders',
          meaning: 'To move between countries or spread internationally.',
          example: 'Music, food, and fashion trends now cross borders in just a few hours online.',
          question: 'What ideas or products cross borders most quickly today?',
        },
      ],
      activities: [
        'Students discuss whether globalization creates more opportunity or more dependency for ordinary people.',
        'Pairs roleplay a local shop owner and an international company representative discussing competition and survival.',
        'Small groups analyze one everyday product and trace how globalization affects its design, price, workers, and customers.',
        'Scenario task: a city becomes economically stronger but loses many small local businesses. Is that a success story?',
        'Partner interview: ask how globalization has changed language use, food choices, fashion, employment, and personal identity.',
      ],
    },
    'Cultural stereotypes': {
      objective: 'Examine cultural stereotypes critically by separating simplification, experience, prejudice, and respectful curiosity.',
      warmup: 'Why are stereotypes often easy to notice in other people but harder to notice in ourselves?',
      vocabulary: [
        { word: 'Stereotype', definition: 'A fixed and often unfair idea about a group of people.' },
        { word: 'Assumption', definition: 'Something believed without having enough proof.' },
        { word: 'Prejudice', definition: 'An unfair negative opinion formed before knowing the facts.' },
      ],
      idioms: [
        {
          idiom: 'Put someone in a box',
          meaning: 'To limit someone by a narrow or unfair label.',
          example: 'Cultural stereotypes can put people in a box before they even speak.',
          question: 'How does society put people in a box through cultural stereotypes?',
        },
        {
          idiom: 'Judge a book by its cover',
          meaning: 'To form an opinion based only on appearance or first impression.',
          example: 'When we judge a book by its cover, we miss the real person behind the image.',
          question: 'Why is it so easy to judge a book by its cover in cross-cultural situations?',
        },
      ],
      activities: [
        'Students discuss where cultural stereotypes come from and why some survive even when people know they are inaccurate.',
        'Pairs roleplay two coworkers from different backgrounds resolving a misunderstanding caused by assumptions.',
        'Small groups examine several common stereotypes and rewrite them as more accurate, respectful observations or questions.',
        'Scenario task: a traveler makes an awkward stereotype-based comment at a host family dinner. How should people respond?',
        'Partner interview: ask about first impressions, unfair labels, and what helps people move from stereotype to understanding.',
      ],
    },
    'Crime and punishment': {
      objective: 'Explore crime and punishment through justice, prevention, rehabilitation, fear, and public trust.',
      warmup: 'What should matter more in punishment: fairness, deterrence, protection, or rehabilitation?',
      vocabulary: [
        { word: 'Justice', definition: 'Fair treatment according to law and moral right.' },
        { word: 'Sentence', definition: 'An official punishment given by a court.' },
        { word: 'Rehabilitation', definition: 'The process of helping someone return to a better and lawful life.' },
      ],
      idioms: [
        {
          idiom: 'Do the time',
          meaning: 'To accept punishment for a crime.',
          example: 'Some people believe that if you commit a crime, you should do the time without excuses.',
          question: 'Is doing the time enough, or should punishment also change behavior?',
        },
        {
          idiom: 'Take the law into your own hands',
          meaning: 'To act as judge or punisher instead of using legal authorities.',
          example: 'Public anger rises when people feel tempted to take the law into their own hands.',
          question: 'Why is it dangerous when people take the law into their own hands?',
        },
      ],
      activities: [
        'Students compare prison, fines, community service, and rehabilitation programs as responses to different crimes.',
        'Pairs roleplay a judge and a community advocate discussing the best sentence for a young first-time offender.',
        'Small groups debate whether harsh punishment reduces crime or simply creates more damage in the long term.',
        'Scenario task: a city faces rising theft but has limited money. Should it fund police, youth programs, or job support first?',
        'Partner interview: ask about fear of crime, fairness in sentencing, second chances, and trust in legal systems.',
      ],
    },
    'Freedom of speech': {
      objective: 'Discuss freedom of speech by balancing rights, harm, responsibility, and public debate.',
      warmup: 'Should freedom of speech protect ideas that many people find offensive or dangerous? Why or why not?',
      vocabulary: [
        { word: 'Liberty', definition: 'The freedom to think, speak, or act without unnecessary control.' },
        { word: 'Censorship', definition: 'The suppression or control of speech, writing, or other expression.' },
        { word: 'Platform', definition: 'A place or system where people can share ideas with an audience.' },
      ],
      idioms: [
        {
          idiom: 'Speak your mind',
          meaning: 'To say your opinion openly and honestly.',
          example: 'A healthy democracy should allow people to speak their mind without fear.',
          question: 'When is it valuable to speak your mind, and when should people be more careful?',
        },
        {
          idiom: 'Cross the line',
          meaning: 'To go beyond what is acceptable.',
          example: 'Some people argue that speech crosses the line when it directly encourages hatred or violence.',
          question: 'Where do you think speech crosses the line in public life?',
        },
      ],
      activities: [
        'Students discuss whether free speech should have clear limits in schools, workplaces, online spaces, or politics.',
        'Pairs roleplay a university speaker organizer and a protest leader negotiating whether an event should go ahead.',
        'Small groups analyze several controversial statements and decide which should be protected, challenged, or removed.',
        'Scenario task: a social media company must choose whether to ban a famous account after repeated harmful posts. What should it do?',
        'Partner interview: ask about public debate, social pressure, online speech, and the difference between disagreement and harm.',
      ],
    },
    'Internet addiction': {
      objective: 'Examine internet addiction through habit, reward, loneliness, distraction, and self-control.',
      warmup: 'At what point does heavy internet use stop being a habit and start becoming an addiction?',
      vocabulary: [
        { word: 'Compulsion', definition: 'A strong urge that feels difficult to resist.' },
        { word: 'Scroll', definition: 'To move through content on a screen, often continuously.' },
        { word: 'Dependency', definition: 'A state of relying too heavily on something.' },
      ],
      idioms: [
        {
          idiom: 'Lose track of time',
          meaning: 'To stop noticing how much time has passed.',
          example: 'Many people lose track of time when they start scrolling late at night.',
          question: 'What kinds of online activity make people lose track of time most easily?',
        },
        {
          idiom: 'Hooked on',
          meaning: 'Strongly and sometimes unhealthily attached to something.',
          example: 'Teenagers are often described as hooked on short-form videos and endless notifications.',
          question: 'Why do some platforms make users feel hooked on them so quickly?',
        },
      ],
      activities: [
        'Students discuss whether internet addiction is mainly a personal weakness or a design problem created by digital platforms.',
        'Pairs roleplay a student and a concerned parent trying to agree on healthier screen boundaries.',
        'Small groups map a typical day of screen use and identify where attention is most often lost or manipulated.',
        'Scenario task: a school notices students are exhausted because of late-night online habits. What policy or support would help most?',
        'Partner interview: ask about boredom, habits, reward systems, and what makes digital self-control difficult.',
      ],
    },
    'Digital detox': {
      objective: 'Explore digital detox as a practical response to overload, distraction, burnout, and attention recovery.',
      warmup: 'Would a weekend without screens feel relaxing, stressful, boring, or impossible for you?',
      vocabulary: [
        { word: 'Detox', definition: 'A period of avoiding something unhealthy or overwhelming.' },
        { word: 'Boundary', definition: 'A limit that protects time, energy, or wellbeing.' },
        { word: 'Focus', definition: 'The ability to give full attention to one thing.' },
      ],
      idioms: [
        {
          idiom: 'Switch off',
          meaning: 'To stop thinking about work, devices, or pressure for a while.',
          example: 'Many people find it hard to switch off even after they put their phone away.',
          question: 'What helps you truly switch off from digital noise?',
        },
        {
          idiom: 'Take a break',
          meaning: 'To stop an activity for a short time in order to rest or reset.',
          example: 'A successful digital detox often starts with the simple decision to take a break from constant notifications.',
          question: 'When is the best moment to take a break from screens during the day?',
        },
      ],
      activities: [
        'Students compare strict digital detox plans with lighter habits such as notification limits, phone-free meals, or app timers.',
        'Pairs roleplay two friends planning a weekend trip where one person wants a full detox and the other wants to stay online.',
        'Small groups create a seven-day digital detox challenge for busy adults, students, or families and justify each rule.',
        'Scenario task: your team at work is exhausted but must stay connected. How can you reduce digital overload without hurting communication?',
        'Partner interview: ask about attention, rest, boredom, sleep, and what a realistic detox would actually look like.',
      ],
    },
    'Mindfulness and meditation': {
      objective: 'Discuss mindfulness and meditation through attention, emotional regulation, routine, and personal skepticism.',
      warmup: 'Do you see mindfulness as a useful skill, a trend, or something in between?',
      vocabulary: [
        { word: 'Awareness', definition: 'The state of noticing what is happening inside and around you.' },
        { word: 'Breathing', definition: 'The act of taking air in and out, often used as a focus point in meditation.' },
        { word: 'Stillness', definition: 'A calm state with little movement or noise.' },
      ],
      idioms: [
        {
          idiom: 'In the moment',
          meaning: 'Fully focused on what is happening now.',
          example: 'Mindfulness trains people to stay in the moment instead of racing ahead mentally.',
          question: 'What activities help you stay in the moment most naturally?',
        },
        {
          idiom: 'Clear your head',
          meaning: 'To relax and reduce mental confusion or stress.',
          example: 'Some people meditate for ten minutes in the morning to clear their head before work.',
          question: 'What helps you clear your head when life feels crowded or noisy?',
        },
      ],
      activities: [
        'Students discuss whether mindfulness should be taught in schools, workplaces, hospitals, or only practiced privately.',
        'Pairs roleplay a doctor and a stressed patient discussing whether meditation could realistically help in daily life.',
        'Small groups compare meditation apps, silent breathing, mindful walking, and journaling as different ways to train attention.',
        'Scenario task: a company wants to introduce mindfulness sessions, but some employees see them as superficial. How should the idea be presented?',
        'Partner interview: ask about stress, routine, skepticism, and whether mindfulness works better as habit, emergency tool, or lifestyle.',
      ],
    },
    'Happiness and life satisfaction': {
      objective: 'Examine happiness and life satisfaction through values, expectations, comparison, and everyday meaning.',
      warmup: 'What is the difference between a happy day and a satisfying life?',
      vocabulary: [
        { word: 'Fulfillment', definition: 'A deep feeling of satisfaction and meaning.' },
        { word: 'Contentment', definition: 'A calm sense of enoughness and peace with what you have.' },
        { word: 'Purpose', definition: 'A clear reason for doing something or living in a certain way.' },
      ],
      idioms: [
        {
          idiom: 'On top of the world',
          meaning: 'Extremely happy and confident.',
          example: 'People can feel on top of the world after success but still question their deeper life direction.',
          question: 'What kinds of moments make people feel on top of the world?',
        },
        {
          idiom: 'Count your blessings',
          meaning: 'To remember the good things in your life and feel grateful.',
          example: 'When life becomes stressful, some people try to count their blessings instead of comparing themselves to others.',
          question: 'Does counting your blessings genuinely increase life satisfaction?',
        },
      ],
      activities: [
        'Students compare pleasure, success, stability, love, and purpose as different foundations for a satisfying life.',
        'Pairs roleplay two friends in very different life situations discussing whether happiness is about attitude or circumstances.',
        'Small groups create a model of a balanced life and explain how time, work, relationships, rest, and meaning fit together.',
        'Scenario task: someone has a high salary and social status but feels empty. What should they change first?',
        'Partner interview: ask about gratitude, ambition, comparison, routine, and what makes life feel rich rather than just busy.',
      ],
    },
    'Body image and confidence': {
      objective: 'Explore body image and confidence through media pressure, self-perception, comparison, and self-respect.',
      warmup: 'How much do social media and advertising shape the way people feel about their bodies?',
      vocabulary: [
        { word: 'Appearance', definition: 'The way someone or something looks.' },
        { word: 'Confidence', definition: 'A feeling of trust in your own value or ability.' },
        { word: 'Comparison', definition: 'The act of measuring yourself against other people or things.' },
      ],
      idioms: [
        {
          idiom: 'In your own skin',
          meaning: 'Comfortable with yourself and your body.',
          example: 'Real confidence often grows when people feel comfortable in their own skin.',
          question: 'What helps someone feel more comfortable in their own skin?',
        },
        {
          idiom: 'Keep up appearances',
          meaning: 'To try to look successful, attractive, or fine even when reality is different.',
          example: 'Many people keep up appearances online while privately struggling with insecurity.',
          question: 'How does social media encourage people to keep up appearances?',
        },
      ],
      activities: [
        'Students discuss how beauty standards are created and why they affect some people more strongly than others.',
        'Pairs roleplay a teenager and a trusted adult discussing pressure from photos, comments, and unrealistic body ideals.',
        'Small groups evaluate messages from advertising, fitness culture, and social media and decide which ones build or damage confidence.',
        'Scenario task: a school wants to run a body-confidence campaign that avoids clichés. What should it include?',
        'Partner interview: ask about self-image, public pressure, confidence-building habits, and what respectful support sounds like.',
      ],
    },
    'Social inequality': {
      objective: 'Examine social inequality through access, power, opportunity, and the different realities people are born into.',
      warmup: 'When people say society offers equal opportunity, do you think that is mostly true, partly true, or mostly false?',
      vocabulary: [
        { word: 'Privilege', definition: 'An unearned advantage that makes life easier for some people than for others.' },
        { word: 'Barrier', definition: 'Something that blocks or makes progress much harder.' },
        { word: 'Opportunity', definition: 'A fair chance to do something, succeed, or improve your life.' },
      ],
      idioms: [
        {
          idiom: 'An uneven playing field',
          meaning: 'A situation in which people do not start with the same chances.',
          example: 'Education can become an uneven playing field when resources depend on where a child lives.',
          question: 'Where do you see an uneven playing field in modern society?',
        },
        {
          idiom: 'Left behind',
          meaning: 'Ignored or not allowed to progress with others.',
          example: 'Whole communities can be left behind when growth only benefits the wealthy.',
          question: 'Who is most often left behind when societies change quickly?',
        },
      ],
      activities: [
        'Students compare how income, neighborhood, education, and social connections shape a person’s chances in life.',
        'Pairs roleplay a policymaker and a community organizer debating which inequality problem should be addressed first.',
        'Small groups design one realistic policy to reduce inequality and explain who would benefit, who would resist it, and why.',
        'Scenario task: a city receives extra funding but can only choose one area to improve: housing, schools, healthcare, or transport. What should come first?',
        'Partner interview: ask about fairness, hidden advantages, responsibility, and whether equality of outcome matters as much as equality of opportunity.',
      ],
    },
    'Poverty and education': {
      objective: 'Discuss poverty and education through access, childhood pressure, school quality, and long-term mobility.',
      warmup: 'Can education truly break the cycle of poverty, or is that idea often too simple?',
      vocabulary: [
        { word: 'Tuition', definition: 'Money paid for teaching or study at a school, college, or university.' },
        { word: 'Dropout', definition: 'A person who leaves school or a course before finishing.' },
        { word: 'Mobility', definition: 'The ability to move to a better social or economic position.' },
      ],
      idioms: [
        {
          idiom: 'Make ends meet',
          meaning: 'To have just enough money to cover basic living costs.',
          example: 'Many families struggle to make ends meet while still trying to support their children’s education.',
          question: 'How does trying to make ends meet affect children’s learning opportunities?',
        },
        {
          idiom: 'Break the cycle',
          meaning: 'To stop a repeating negative pattern.',
          example: 'People often hope that education can break the cycle of poverty across generations.',
          question: 'What helps education truly break the cycle of poverty?',
        },
      ],
      activities: [
        'Students discuss which matters most for disadvantaged students: funding, teacher quality, nutrition, safety, or family support.',
        'Pairs roleplay a school principal and a parent discussing why a talented student may still be at risk of leaving school early.',
        'Small groups compare scholarships, free meals, technology access, and after-school programs as ways to improve educational fairness.',
        'Scenario task: a rural school has limited resources and high dropout rates. What should be done first to keep students engaged?',
        'Partner interview: ask about hidden education costs, student pressure, motivation, and whether equal access is enough without wider social support.',
      ],
    },
    'Immigration and diversity': {
      objective: 'Explore immigration and diversity through identity, belonging, integration, fear, and the value of social variety.',
      warmup: 'What makes it easier for newcomers to feel they belong in a new society?',
      vocabulary: [
        { word: 'Migrant', definition: 'A person who moves from one place to another, often for work, safety, or a better life.' },
        { word: 'Integration', definition: 'The process of becoming part of a community while adapting to it.' },
        { word: 'Diversity', definition: 'The presence of many different backgrounds, cultures, or identities in one place.' },
      ],
      idioms: [
        {
          idiom: 'Melt into the crowd',
          meaning: 'To become unnoticeable or blend in with others.',
          example: 'Some immigrants want to melt into the crowd, while others want to preserve a strong cultural identity.',
          question: 'Should immigrants be expected to melt into the crowd, or should societies celebrate visible difference?',
        },
        {
          idiom: 'Find your feet',
          meaning: 'To become confident in a new situation.',
          example: 'Newcomers often need time, language support, and community ties to find their feet.',
          question: 'What helps immigrants and refugees find their feet most quickly?',
        },
      ],
      activities: [
        'Students discuss the benefits and tensions that diversity can bring to schools, neighborhoods, and workplaces.',
        'Pairs roleplay a recent immigrant and a local resident discussing language, customs, and community expectations.',
        'Small groups design a welcome program for newcomers and explain how it would build both support and mutual respect.',
        'Scenario task: a town is receiving many new families from abroad, but local residents are worried about change. How should leaders respond?',
        'Partner interview: ask about belonging, language, prejudice, cultural exchange, and what real integration should look like.',
      ],
    },
    'Ethics in technology': {
      objective: 'Examine ethics in technology through data, power, convenience, bias, and unintended consequences.',
      warmup: 'Do tech companies create tools first and think about ethics later, or is that too harsh?',
      vocabulary: [
        { word: 'Ethics', definition: 'Principles that guide what is right, fair, and responsible.' },
        { word: 'Bias', definition: 'An unfair tendency that affects judgment or results.' },
        { word: 'Surveillance', definition: 'The close watching or tracking of people’s actions or data.' },
      ],
      idioms: [
        {
          idiom: 'Open a can of worms',
          meaning: 'To create a complicated problem that is hard to control.',
          example: 'Facial recognition can open a can of worms when privacy and policing are involved.',
          question: 'What kinds of new technology open a can of worms ethically?',
        },
        {
          idiom: 'The genie is out of the bottle',
          meaning: 'Something powerful has been released and cannot easily be reversed.',
          example: 'Many people feel the genie is out of the bottle once powerful AI systems become widely available.',
          question: 'Which technologies feel like the genie is out of the bottle already?',
        },
      ],
      activities: [
        'Students discuss whether technology should be slowed down when society is not ready for its risks.',
        'Pairs roleplay a software engineer and an ethics officer deciding whether a new tracking feature should be launched.',
        'Small groups evaluate a real or imaginary technology and list the benefits, hidden harms, and people most affected by it.',
        'Scenario task: an app becomes popular because it is useful, but it collects far more user data than expected. What should happen next?',
        'Partner interview: ask about privacy, fairness, accountability, and whether innovation should ever be limited on ethical grounds.',
      ],
    },
    'Robots and automation': {
      objective: 'Discuss robots and automation through efficiency, employment, risk, and changing human roles.',
      warmup: 'Which jobs should never be fully handed over to robots or automated systems?',
      vocabulary: [
        { word: 'Automation', definition: 'The use of machines or software to perform tasks with less human effort.' },
        { word: 'Efficiency', definition: 'The ability to do something well without wasting time, money, or energy.' },
        { word: 'Maintenance', definition: 'The work of keeping a machine or system operating properly.' },
      ],
      idioms: [
        {
          idiom: 'Take over',
          meaning: 'To gain control or replace someone in a role.',
          example: 'Many people worry that robots will take over repetitive jobs first and then move into skilled work.',
          question: 'Which types of work are most likely to be taken over by automation?',
        },
        {
          idiom: 'Run like clockwork',
          meaning: 'To work in a very smooth, reliable way.',
          example: 'Factories want automated systems that run like clockwork, but real life is rarely that simple.',
          question: 'Where does automation truly run like clockwork, and where does it still struggle?',
        },
      ],
      activities: [
        'Students compare the jobs automation can improve with the jobs where empathy, judgment, or creativity still matter most.',
        'Pairs roleplay a factory manager and a longtime worker discussing whether automation is progress or a threat.',
        'Small groups design a workplace where humans and robots cooperate effectively and explain which tasks belong to each.',
        'Scenario task: a hospital can automate several services to save money. Which tasks should stay human-led?',
        'Partner interview: ask about trust in machines, job security, skill changes, and the kind of future people want from automation.',
      ],
    },
    'The gig economy': {
      objective: 'Explore the gig economy through flexibility, insecurity, independence, and platform power.',
      warmup: 'Does gig work offer freedom, exploitation, or a mixture of both?',
      vocabulary: [
        { word: 'Freelance', definition: 'Working independently for different clients instead of one permanent employer.' },
        { word: 'Contract', definition: 'A formal agreement that states the terms of work.' },
        { word: 'Precarity', definition: 'A state of insecurity, especially in work or income.' },
      ],
      idioms: [
        {
          idiom: 'On call',
          meaning: 'Available to work whenever needed.',
          example: 'Many gig workers feel permanently on call because income depends on constant availability.',
          question: 'How does being on call affect a person’s sense of control over life?',
        },
        {
          idiom: 'By the hour',
          meaning: 'Paid according to each hour of work rather than with a stable salary.',
          example: 'Being paid by the hour can sound fair until unpaid waiting time and hidden expenses appear.',
          question: 'What problems come with work that is mainly paid by the hour?',
        },
      ],
      activities: [
        'Students discuss whether gig platforms empower workers or simply shift risk away from companies.',
        'Pairs roleplay a delivery rider and a platform manager negotiating pay, safety, and app-based ratings.',
        'Small groups compare full-time employment, freelance work, and platform jobs from the perspective of freedom, stress, and legal protection.',
        'Scenario task: a government plans a new law for gig workers. Which rights should be guaranteed first?',
        'Partner interview: ask about flexibility, insecurity, hidden costs, and whether gig work is a short-term solution or a long-term model.',
      ],
    },
    Entrepreneurship: {
      objective: 'Discuss entrepreneurship through risk, creativity, leadership, and the challenge of turning ideas into real value.',
      warmup: 'What matters more for a new business: a strong idea, strong timing, or strong execution?',
      vocabulary: [
        { word: 'Venture', definition: 'A new business project that involves risk and ambition.' },
        { word: 'Pitch', definition: 'A short presentation designed to persuade others to support an idea.' },
        { word: 'Revenue', definition: 'Money a business receives from selling goods or services.' },
      ],
      idioms: [
        {
          idiom: 'Take the plunge',
          meaning: 'To make a big decision and finally do something risky.',
          example: 'Many would-be founders never take the plunge because the fear of failure feels too expensive.',
          question: 'What helps people take the plunge and start a business?',
        },
        {
          idiom: 'Think outside the box',
          meaning: 'To use imagination and non-standard ideas.',
          example: 'Successful entrepreneurs often think outside the box, but they also need discipline and timing.',
          question: 'When is thinking outside the box helpful, and when can it become unrealistic?',
        },
      ],
      activities: [
        'Students discuss what separates a real business opportunity from a vague dream or trend.',
        'Pairs roleplay an entrepreneur and an investor in a short pitch meeting focused on risk, audience, and profit.',
        'Small groups build a startup concept around a real problem and explain why people would pay for the solution.',
        'Scenario task: your business idea is popular online but not making money. What should you change first?',
        'Partner interview: ask about risk tolerance, leadership, failure, creativity, and whether entrepreneurship suits everyone.',
      ],
    },
    Consumerism: {
      objective: 'Examine consumerism through desire, identity, convenience, waste, and the culture of constant buying.',
      warmup: 'Why do people keep buying things they do not truly need?',
      vocabulary: [
        { word: 'Consumption', definition: 'The use or buying of goods and services.' },
        { word: 'Impulse', definition: 'A sudden desire to do or buy something without much thought.' },
        { word: 'Brand', definition: 'A product name or company image associated with certain qualities or status.' },
      ],
      idioms: [
        {
          idiom: 'Shop till you drop',
          meaning: 'To spend a lot of time buying many things.',
          example: 'Sales events encourage people to shop till they drop even when they only need one item.',
          question: 'What makes people want to shop till they drop during sales or online events?',
        },
        {
          idiom: 'Keep up with the Joneses',
          meaning: 'To try to match the lifestyle or possessions of other people.',
          example: 'Consumer culture becomes stronger when people want to keep up with the Joneses.',
          question: 'How much does social comparison push people to keep up with the Joneses today?',
        },
      ],
      activities: [
        'Students discuss whether modern consumer culture is driven more by need, status, boredom, or marketing.',
        'Pairs roleplay two roommates with very different spending habits debating whether shopping is a pleasure, a trap, or both.',
        'Small groups analyze a popular product category and identify the emotional messages that encourage people to buy more than necessary.',
        'Scenario task: a city wants to reduce waste from overconsumption without harming local business. What could it do?',
        'Partner interview: ask about impulse buying, brand loyalty, minimalism, and whether buying less actually makes life better.',
      ],
    },
    'Advertising and persuasion': {
      objective: 'Explore advertising and persuasion through emotion, trust, manipulation, and how messages shape decisions.',
      warmup: 'What makes an advertisement persuasive without making it dishonest?',
      vocabulary: [
        { word: 'Persuasion', definition: 'The act of influencing someone’s thoughts or actions.' },
        { word: 'Audience', definition: 'The group of people a message is meant for.' },
        { word: 'Slogan', definition: 'A short and memorable phrase used in advertising.' },
      ],
      idioms: [
        {
          idiom: 'Sell the idea',
          meaning: 'To convince people that something is valuable or worth supporting.',
          example: 'The most successful campaigns do more than show a product; they sell the idea of a lifestyle.',
          question: 'How do advertisers sell the idea behind a product rather than just the product itself?',
        },
        {
          idiom: 'Pull the strings',
          meaning: 'To control events or influence people from behind the scenes.',
          example: 'Algorithms quietly pull the strings by deciding which ads people see and how often.',
          question: 'Who pulls the strings most in modern advertising: brands, influencers, or digital platforms?',
        },
      ],
      activities: [
        'Students compare emotional, logical, and fear-based persuasion and decide which works best for different audiences.',
        'Pairs roleplay a brand manager and an ethics advisor discussing whether a campaign message is persuasive or manipulative.',
        'Small groups create an ad campaign for an ordinary object and explain the language, image, and emotional strategy they chose.',
        'Scenario task: a health product uses exaggerated claims in a very effective ad. Should success excuse the tactics?',
        'Partner interview: ask about trust, hidden influence, online targeting, and the difference between persuasion and manipulation.',
      ],
    },
    'Fake news and misinformation': {
      objective: 'Examine fake news and misinformation through speed, emotion, trust, verification, and public harm.',
      warmup: 'Why do false stories often spread faster than accurate ones?',
      vocabulary: [
        { word: 'Misinformation', definition: 'False or misleading information that is shared, whether by mistake or on purpose.' },
        { word: 'Verification', definition: 'The process of checking whether something is true or accurate.' },
        { word: 'Headline', definition: 'The title of a news story, often designed to attract attention quickly.' },
      ],
      idioms: [
        {
          idiom: 'Spread like wildfire',
          meaning: 'To move very quickly from person to person.',
          example: 'A false rumor can spread like wildfire before journalists or experts correct it.',
          question: 'Why does misinformation spread like wildfire on some platforms?',
        },
        {
          idiom: 'Take something with a grain of salt',
          meaning: 'To be cautious about believing something completely.',
          example: 'People should take dramatic online headlines with a grain of salt until they check the source.',
          question: 'What kinds of stories should people take with a grain of salt immediately?',
        },
      ],
      activities: [
        'Students compare why people share misinformation: fear, anger, carelessness, ideology, humor, or trust in the wrong source.',
        'Pairs roleplay a fact-checker and a social media user discussing whether a viral post should be believed or deleted.',
        'Small groups analyze several sample headlines and rank them from most trustworthy to most suspicious, explaining each clue.',
        'Scenario task: a false local health rumor is spreading online and causing panic. What should schools, media, and officials do first?',
        'Partner interview: ask about trust, digital habits, source-checking, and whether ordinary users carry responsibility when they share news.',
      ],
    },
    'Space tourism': {
      objective: 'Explore space tourism through luxury, innovation, inequality, risk, and the human desire to go beyond Earth.',
      warmup: 'Is space tourism an exciting step forward or an expensive distraction from problems on Earth?',
      vocabulary: [
        { word: 'Orbit', definition: 'The curved path that an object follows around a planet or star.' },
        { word: 'Launch', definition: 'The act of sending a rocket or spacecraft into space.' },
        { word: 'Gravity', definition: 'The force that pulls objects toward the Earth or another body in space.' },
      ],
      idioms: [
        {
          idiom: 'Reach for the stars',
          meaning: 'To aim for something very ambitious.',
          example: 'Private companies claim that space tourism helps humanity reach for the stars in a new way.',
          question: 'Does space tourism really help society reach for the stars, or mostly the wealthy?',
        },
        {
          idiom: 'Out of this world',
          meaning: 'Extremely impressive, unusual, or exciting.',
          example: 'Promoters describe the view from space as an out of this world experience.',
          question: 'What kinds of experiences feel truly out of this world to people on Earth?',
        },
      ],
      activities: [
        'Students debate whether space tourism is a meaningful innovation or a luxury project with weak social value.',
        'Pairs roleplay a space company representative and an environmental critic discussing cost, emissions, and inspiration.',
        'Small groups design a responsible space tourism policy covering safety, environmental impact, and public benefit.',
        'Scenario task: your country can invest in space tourism branding or science education. Which would create more lasting value?',
        'Partner interview: ask about curiosity, status, exploration, inequality, and whether extreme travel changes how humans see themselves.',
      ],
    },
    'Human relationships in the digital era': {
      objective: 'Discuss human relationships in the digital era through intimacy, convenience, distance, and changing social habits.',
      warmup: 'Do digital tools help people feel more connected, or do they create a weaker kind of connection?',
      vocabulary: [
        { word: 'Connection', definition: 'A relationship or feeling of closeness between people.' },
        { word: 'Intimacy', definition: 'A close personal bond that involves trust and emotional openness.' },
        { word: 'Presence', definition: 'The feeling of truly being with someone in a moment or place.' },
      ],
      idioms: [
        {
          idiom: 'Drift apart',
          meaning: 'To become less close over time.',
          example: 'Friends can drift apart even while liking each other’s posts every week.',
          question: 'Why do some relationships drift apart despite constant digital contact?',
        },
        {
          idiom: 'Keep in touch',
          meaning: 'To continue communicating with someone.',
          example: 'Messaging apps make it easy to keep in touch, but that does not always mean deeper connection.',
          question: 'What helps people keep in touch in a meaningful way rather than a superficial one?',
        },
      ],
      activities: [
        'Students compare online and offline friendship, dating, and family communication to decide where digital life helps most and hurts most.',
        'Pairs roleplay two friends discussing whether constant messaging is closeness or pressure.',
        'Small groups build a model of a healthy digital relationship and explain the role of honesty, attention, privacy, and boundaries.',
        'Scenario task: a couple argues because one person is always online but rarely emotionally present. How should they address it?',
        'Partner interview: ask about loneliness, convenience, online habits, misunderstandings, and what real connection requires now.',
      ],
    },
    'The psychology of motivation': {
      objective: 'Examine motivation through goals, discipline, reward, identity, and the reasons people keep going or give up.',
      warmup: 'What lasts longer: motivation built from inspiration, fear, habit, or personal meaning?',
      vocabulary: [
        { word: 'Drive', definition: 'A strong internal force that pushes someone to act or persist.' },
        { word: 'Reward', definition: 'Something positive given or experienced after effort or success.' },
        { word: 'Habit', definition: 'A behavior repeated regularly until it becomes natural or automatic.' },
      ],
      idioms: [
        {
          idiom: 'Keep at it',
          meaning: 'To continue working on something without giving up.',
          example: 'People often succeed not because they feel motivated every day, but because they keep at it.',
          question: 'What helps people keep at it when early excitement disappears?',
        },
        {
          idiom: 'Fire in your belly',
          meaning: 'A strong inner passion or determination.',
          example: 'Athletes and founders are often praised for having real fire in their belly.',
          question: 'Can discipline replace fire in your belly, or do people need both?',
        },
      ],
      activities: [
        'Students compare intrinsic motivation, external pressure, rewards, and habit as different engines of long-term action.',
        'Pairs roleplay a coach and a frustrated student discussing why effort has become inconsistent.',
        'Small groups analyze why people abandon goals and design a strategy that could make motivation more sustainable.',
        'Scenario task: someone is talented but rarely finishes anything. What psychological change would help most?',
        'Partner interview: ask about ambition, procrastination, routine, setbacks, and what keeps people moving over the long term.',
      ],
    },
    'Decision-making': {
      objective: 'Explore decision-making through logic, emotion, uncertainty, bias, and the pressure of consequences.',
      warmup: 'Do people usually make their biggest decisions rationally, emotionally, or with a mix of both?',
      vocabulary: [
        { word: 'Judgment', definition: 'The ability to make sensible decisions after careful thought.' },
        { word: 'Outcome', definition: 'The final result of an action or decision.' },
        { word: 'Risk', definition: 'The possibility that something harmful or uncertain may happen.' },
      ],
      idioms: [
        {
          idiom: 'Weigh your options',
          meaning: 'To consider different choices carefully before deciding.',
          example: 'Good leaders weigh their options before acting in uncertain situations.',
          question: 'When do people fail to weigh their options carefully enough?',
        },
        {
          idiom: 'Go with your gut',
          meaning: 'To trust your instinct rather than analysis.',
          example: 'People often go with their gut when facts are incomplete or time is short.',
          question: 'When is it smart to go with your gut, and when is it dangerous?',
        },
      ],
      activities: [
        'Students compare fast decisions with slow decisions and decide which kinds of situations allow intuition to work well.',
        'Pairs roleplay two business partners making a difficult choice under time pressure with incomplete information.',
        'Small groups examine several bad decisions and identify which biases, emotions, or missing facts caused the problems.',
        'Scenario task: you must choose between a safe option and a risky option that could change your future. How do you decide?',
        'Partner interview: ask about regret, instinct, overthinking, pressure, and what helps people trust a difficult decision.',
      ],
    },
    'Conflict resolution': {
      objective: 'Discuss conflict resolution through emotion, communication, power, compromise, and repair.',
      warmup: 'Why do some conflicts become easier to solve once people feel heard, even before the solution is clear?',
      vocabulary: [
        { word: 'Conflict', definition: 'A serious disagreement or struggle between people or groups.' },
        { word: 'Compromise', definition: 'An agreement in which each side gives up something.' },
        { word: 'Mediator', definition: 'A neutral person who helps others resolve a disagreement.' },
      ],
      idioms: [
        {
          idiom: 'Meet halfway',
          meaning: 'To make mutual concessions in order to agree.',
          example: 'Long arguments often improve once both sides are willing to meet halfway.',
          question: 'Why is meeting halfway difficult in emotional conflicts?',
        },
        {
          idiom: 'Smooth things over',
          meaning: 'To reduce tension and restore a more peaceful relationship.',
          example: 'A calm explanation helped smooth things over after the misunderstanding.',
          question: 'What kinds of words or actions can smooth things over after a conflict?',
        },
      ],
      activities: [
        'Students compare direct confrontation, calm dialogue, mediation, and apology as different ways to resolve conflict.',
        'Pairs roleplay two coworkers repairing a tense disagreement that has started affecting the whole team.',
        'Small groups analyze a conflict case and create a step-by-step plan to move from anger to workable agreement.',
        'Scenario task: two friends stop speaking after a public argument. What should happen first if the relationship is to be saved?',
        'Partner interview: ask about pride, listening, blame, forgiveness, and what makes resolution feel sincere rather than forced.',
      ],
    },
    'Cultural taboos': {
      objective: 'Examine cultural taboos through respect, misunderstanding, discomfort, and the invisible rules of society.',
      warmup: 'Why do some taboos feel obvious inside one culture but surprising or unnecessary in another?',
      vocabulary: [
        { word: 'Taboo', definition: 'A subject or behavior that a culture strongly avoids or considers inappropriate.' },
        { word: 'Respect', definition: 'Consideration and care for other people’s feelings, values, or rules.' },
        { word: 'Offense', definition: 'A feeling of hurt or anger caused by something seen as improper or insulting.' },
      ],
      idioms: [
        {
          idiom: 'Step on toes',
          meaning: 'To accidentally upset or offend people.',
          example: 'Travelers can step on toes when they do not realize a topic is culturally sensitive.',
          question: 'How can people avoid stepping on toes in unfamiliar cultural settings?',
        },
        {
          idiom: 'Off limits',
          meaning: 'Not acceptable to discuss or do.',
          example: 'In some places, personal questions that seem normal elsewhere are completely off limits.',
          question: 'Which topics are off limits in some cultures but normal in others?',
        },
      ],
      activities: [
        'Students compare how different societies treat topics such as age, money, religion, gender, death, and public behavior.',
        'Pairs roleplay a host and a visitor navigating an awkward moment caused by an unspoken cultural rule.',
        'Small groups create a guide for respectful curiosity that helps people ask questions without insulting others.',
        'Scenario task: a student makes a joke about a taboo topic during an exchange program. How should classmates and teachers respond?',
        'Partner interview: ask about discomfort, hidden rules, cultural learning, and whether taboos protect people or limit openness.',
      ],
    },
    'Parenting styles': {
      objective: 'Explore parenting styles through discipline, warmth, independence, expectation, and long-term development.',
      warmup: 'What makes a parenting style strong: clear rules, emotional support, freedom, or consistency?',
      vocabulary: [
        { word: 'Discipline', definition: 'Training that teaches children rules, self-control, and acceptable behavior.' },
        { word: 'Boundary', definition: 'A limit that guides behavior and protects wellbeing.' },
        { word: 'Nurture', definition: 'Care and support that help someone grow and develop.' },
      ],
      idioms: [
        {
          idiom: 'Lay down the law',
          meaning: 'To state rules very firmly.',
          example: 'Some parents lay down the law quickly when routines or respect begin to slip.',
          question: 'When is it helpful for parents to lay down the law, and when does it backfire?',
        },
        {
          idiom: 'Learn the hard way',
          meaning: 'To discover something through difficult experience.',
          example: 'Parents disagree about whether children should learn the hard way or be protected from mistakes.',
          question: 'Should children sometimes learn the hard way, or should adults guide them more closely?',
        },
      ],
      activities: [
        'Students compare strict, relaxed, and balanced parenting approaches and discuss what each one teaches children over time.',
        'Pairs roleplay two parents disagreeing about how to respond to a teenager who keeps breaking rules.',
        'Small groups evaluate several family situations and decide which parenting response would build responsibility without damaging trust.',
        'Scenario task: a child is doing well academically but feels under constant pressure at home. What should the parents change?',
        'Partner interview: ask about discipline, affection, independence, pressure, and what good parenting looks like in practice.',
      ],
    },
    'Education vs. experience': {
      objective: 'Discuss education versus experience through knowledge, credibility, skill-building, and real-world readiness.',
      warmup: 'Which teaches people more effectively in adult life: formal education or real experience?',
      vocabulary: [
        { word: 'Expertise', definition: 'High-level knowledge or skill in a particular field.' },
        { word: 'Credential', definition: 'A qualification such as a degree, certificate, or license.' },
        { word: 'Apprenticeship', definition: 'Training in which someone learns by working closely with an experienced person.' },
      ],
      idioms: [
        {
          idiom: 'Learn by doing',
          meaning: 'To gain skill through direct practical experience.',
          example: 'Many workers say they truly learned by doing rather than by reading about the task.',
          question: 'Which professions are best learned by doing?',
        },
        {
          idiom: 'In the real world',
          meaning: 'In practical everyday life rather than in theory.',
          example: 'Some graduates struggle to apply textbook knowledge in the real world.',
          question: 'What important things are only learned in the real world?',
        },
      ],
      activities: [
        'Students compare what school, university, internships, and direct work each teach best.',
        'Pairs roleplay a hiring manager and a candidate debating whether experience should matter more than qualifications.',
        'Small groups create the ideal preparation plan for a profession and decide how much study and how much hands-on practice it needs.',
        'Scenario task: a company must choose between an experienced worker without a degree and a graduate with little practical experience. Who should it hire?',
        'Partner interview: ask about confidence, credibility, mistakes, training, and whether education should change to become more practical.',
      ],
    },
    'Censorship and freedom': {
      objective: 'Examine censorship and freedom through protection, control, expression, and the fear of social or political harm.',
      warmup: 'When people support censorship, are they usually protecting society or protecting power?',
      vocabulary: [
        { word: 'Censorship', definition: 'The restriction or removal of speech, media, or information.' },
        { word: 'Expression', definition: 'The act of showing ideas, feelings, or opinions.' },
        { word: 'Authority', definition: 'The power to make decisions and enforce rules.' },
      ],
      idioms: [
        {
          idiom: 'Silence dissent',
          meaning: 'To stop opposing opinions from being heard.',
          example: 'Critics argue that some governments use censorship to silence dissent rather than keep order.',
          question: 'When does censorship become a tool to silence dissent?',
        },
        {
          idiom: 'A double-edged sword',
          meaning: 'Something that has both benefits and serious risks.',
          example: 'Complete freedom online can be a double-edged sword because it allows both open debate and harmful abuse.',
          question: 'Why is freedom of expression sometimes described as a double-edged sword?',
        },
      ],
      activities: [
        'Students discuss when restricting content protects people and when it becomes unjust control.',
        'Pairs roleplay a government official and a journalist arguing over whether a sensitive article should be published.',
        'Small groups evaluate different censorship cases involving schools, media, governments, and tech platforms.',
        'Scenario task: a controversial public speaker is invited to campus and many students demand cancellation. What should the university do?',
        'Partner interview: ask about harm, liberty, trust in authority, and how societies can defend freedom without ignoring real danger.',
      ],
    },
    'Global health issues': {
      objective: 'Explore global health issues through inequality, prevention, cooperation, and the challenge of protecting large populations.',
      warmup: 'Why do some health problems become global emergencies while others are ignored for years?',
      vocabulary: [
        { word: 'Outbreak', definition: 'A sudden start or rise in cases of a disease.' },
        { word: 'Prevention', definition: 'Action taken to stop something harmful from happening.' },
        { word: 'Access', definition: 'The ability to obtain or use something important, such as healthcare.' },
      ],
      idioms: [
        {
          idiom: 'On the front lines',
          meaning: 'Directly involved in the most difficult or dangerous part of a situation.',
          example: 'Doctors, nurses, and aid workers are often on the front lines during global health crises.',
          question: 'Who is most on the front lines when health systems are under pressure?',
        },
        {
          idiom: 'A wake-up call',
          meaning: 'An event that shows a serious problem and forces attention.',
          example: 'Major epidemics can be a wake-up call about weak health systems and poor international preparation.',
          question: 'Which recent health issues have served as a wake-up call for the world?',
        },
      ],
      activities: [
        'Students compare the global impact of infectious disease, mental health, malnutrition, and limited healthcare access.',
        'Pairs roleplay a public health expert and a government minister deciding how to respond to a growing international health threat.',
        'Small groups design a global health campaign that balances education, funding, local trust, and emergency action.',
        'Scenario task: a low-income country faces a severe health crisis but has limited resources. What kind of international support is most useful?',
        'Partner interview: ask about prevention, fairness, trust, international cooperation, and why global health is also a political issue.',
      ],
    },
    'Vaccines and public trust': {
      objective: 'Examine vaccines and public trust through science, fear, communication, and confidence in health systems.',
      warmup: 'Why do some people trust vaccines immediately while others remain deeply skeptical?',
      vocabulary: [
        { word: 'Vaccine', definition: 'A substance that helps the body protect itself against disease.' },
        { word: 'Trust', definition: 'Confidence that a person, institution, or system is honest and reliable.' },
        { word: 'Immunity', definition: 'Protection against a disease, often developed through vaccination or previous infection.' },
      ],
      idioms: [
        {
          idiom: 'Win people over',
          meaning: 'To gain someone’s trust or support.',
          example: 'Clear communication and local doctors can help win people over when doubt is widespread.',
          question: 'What helps health authorities win people over when public trust is low?',
        },
        {
          idiom: 'On shaky ground',
          meaning: 'Weak, uncertain, or not fully secure.',
          example: 'Public trust becomes on shaky ground when officials speak inconsistently during a health crisis.',
          question: 'When does trust in public health become on shaky ground?',
        },
      ],
      activities: [
        'Students discuss whether vaccine hesitancy is mainly caused by fear, poor communication, political distrust, or misinformation.',
        'Pairs roleplay a doctor and a worried parent discussing vaccine safety with empathy and clear evidence.',
        'Small groups design a public information campaign aimed at rebuilding trust in vaccination without sounding judgmental.',
        'Scenario task: a community has low vaccination rates after a rumor spreads online. What should health leaders do first?',
        'Partner interview: ask about fear, trust in experts, personal responsibility, and why public confidence can be difficult to restore.',
      ],
    },
    'Urban development': {
      objective: 'Discuss urban development through housing, transport, growth, inequality, and the design of everyday life.',
      warmup: 'What makes a city truly well developed: taller buildings, better transport, affordable housing, or quality public space?',
      vocabulary: [
        { word: 'Infrastructure', definition: 'The basic systems and structures a city needs, such as roads, transport, and utilities.' },
        { word: 'Housing', definition: 'Homes and places where people live.' },
        { word: 'Density', definition: 'The number of people or buildings in a particular area.' },
      ],
      idioms: [
        {
          idiom: 'Build from the ground up',
          meaning: 'To create or improve something from the beginning.',
          example: 'Some neighborhoods need to be built from the ground up with residents’ needs in mind.',
          question: 'When should cities build from the ground up instead of patching old systems?',
        },
        {
          idiom: 'Change the face of',
          meaning: 'To transform something greatly.',
          example: 'A single metro line can change the face of a growing city.',
          question: 'What kinds of projects can change the face of a city for better or worse?',
        },
      ],
      activities: [
        'Students compare housing, public transport, green space, and walkability to decide which matters most in urban development.',
        'Pairs roleplay a city planner and a local resident debating a major redevelopment project.',
        'Small groups redesign one part of a city and explain how their plan improves access, safety, and daily life.',
        'Scenario task: a city center is growing fast, but long-time residents can no longer afford to live there. What should leaders do?',
        'Partner interview: ask about congestion, affordability, public space, and what makes a city feel human instead of mechanical.',
      ],
    },
    'The future of cities': {
      objective: 'Explore the future of cities through technology, sustainability, mobility, and changing patterns of human life.',
      warmup: 'What will matter most in future cities: smart technology, climate adaptation, affordability, or community design?',
      vocabulary: [
        { word: 'Mobility', definition: 'The ability to move easily through a city using transport or walkable routes.' },
        { word: 'Resilience', definition: 'The ability to adapt well to stress, danger, or change.' },
        { word: 'Innovation', definition: 'A new idea or method that improves how something works.' },
      ],
      idioms: [
        {
          idiom: 'Around the corner',
          meaning: 'Likely to happen soon.',
          example: 'Driverless public transport may be around the corner in some cities.',
          question: 'What city changes feel just around the corner to you?',
        },
        {
          idiom: 'Ahead of the curve',
          meaning: 'More advanced or prepared than others.',
          example: 'Some cities are ahead of the curve in green transport and digital planning.',
          question: 'What makes a city ahead of the curve in the twenty-first century?',
        },
      ],
      activities: [
        'Students debate whether future cities should focus more on technology or on social and environmental wellbeing.',
        'Pairs roleplay a mayor and a resident discussing whether smart-city systems truly improve life or just collect more data.',
        'Small groups design a future neighborhood with housing, transport, energy, and community needs in balance.',
        'Scenario task: your city must prepare for both climate pressure and rapid population growth. What should it prioritize first?',
        'Partner interview: ask about automation, green design, public space, and what kind of city people would actually want to live in.',
      ],
    },
    'E-sports and gaming': {
      objective: 'Discuss e-sports and gaming through competition, skill, identity, entertainment, and digital culture.',
      warmup: 'Should e-sports be treated like traditional sports, or are they fundamentally different?',
      vocabulary: [
        { word: 'Tournament', definition: 'A series of organized games or matches in which players compete to win.' },
        { word: 'Strategy', definition: 'A careful plan used to achieve success.' },
        { word: 'Reflex', definition: 'A quick physical or mental reaction to something.' },
      ],
      idioms: [
        {
          idiom: 'Raise your game',
          meaning: 'To improve your performance or standard.',
          example: 'Professional teams must constantly raise their game to stay competitive.',
          question: 'What helps players raise their game in e-sports or gaming communities?',
        },
        {
          idiom: 'In the zone',
          meaning: 'Fully focused and performing very well.',
          example: 'Top gamers talk about being in the zone during high-pressure matches.',
          question: 'What helps people get in the zone when competition is intense?',
        },
      ],
      activities: [
        'Students compare e-sports with traditional sports in terms of skill, pressure, teamwork, training, and public respect.',
        'Pairs roleplay a parent and a teenage gamer debating whether professional gaming is a serious path or just entertainment.',
        'Small groups design an e-sports event plan that balances competition, healthy habits, teamwork, and audience experience.',
        'Scenario task: a school wants to launch an e-sports club but worries about screen time and stereotypes. How should it do it well?',
        'Partner interview: ask about discipline, identity, online communities, and why gaming can feel meaningful beyond simple fun.',
      ],
    },
    'Sports and teamwork': {
      objective: 'Explore sports and teamwork through trust, shared goals, pressure, leadership, and collective effort.',
      warmup: 'What matters more in a successful team: talent, trust, discipline, or communication?',
      vocabulary: [
        { word: 'Coordination', definition: 'The ability to work together smoothly and effectively.' },
        { word: 'Captain', definition: 'The player chosen to lead and guide a team.' },
        { word: 'Stamina', definition: 'The physical or mental strength to continue for a long time.' },
      ],
      idioms: [
        {
          idiom: 'Pull together',
          meaning: 'To work with unity toward a common goal.',
          example: 'Teams often win when players pull together during difficult moments.',
          question: 'What helps a team pull together when pressure is high?',
        },
        {
          idiom: 'Pass the baton',
          meaning: 'To hand responsibility to another person.',
          example: 'Strong teams know when to pass the baton and let another player lead the moment.',
          question: 'Why is knowing when to pass the baton important in teamwork?',
        },
      ],
      activities: [
        'Students compare how teamwork works in football, basketball, relay racing, and non-sport settings such as business or medicine.',
        'Pairs roleplay a coach and a team captain deciding how to rebuild trust after several poor performances.',
        'Small groups analyze a team problem and create a recovery plan focused on communication, training, and motivation.',
        'Scenario task: your best player is selfish but talented, and team morale is falling. What should happen next?',
        'Partner interview: ask about pressure, trust, leadership, and whether great teams are built more by attitude than talent.',
      ],
    },
    'Music genres and trends': {
      objective: 'Discuss music genres and trends through identity, taste, innovation, nostalgia, and cultural change.',
      warmup: 'Why do some music genres stay influential for decades while others fade quickly?',
      vocabulary: [
        { word: 'Genre', definition: 'A category of music with its own style and features.' },
        { word: 'Rhythm', definition: 'The pattern of beats or timing in music.' },
        { word: 'Trend', definition: 'A general direction in which taste or style is changing.' },
      ],
      idioms: [
        {
          idiom: 'Strike a chord',
          meaning: 'To create a strong emotional response.',
          example: 'A new artist can strike a chord when their music reflects how a generation feels.',
          question: 'What kinds of songs strike a chord with large audiences today?',
        },
        {
          idiom: 'Blow up',
          meaning: 'To become suddenly very popular.',
          example: 'Some songs blow up online in a week and disappear just as quickly.',
          question: 'Why do some artists blow up so fast in the streaming era?',
        },
      ],
      activities: [
        'Students compare how streaming platforms, social media, and live performance shape which music genres become popular.',
        'Pairs roleplay a music producer and an artist deciding whether to follow a trend or protect a unique sound.',
        'Small groups create a mini radio show introducing three genres and explaining what each one says about its audience or era.',
        'Scenario task: a traditional genre is losing young listeners. How could artists modernize it without losing its identity?',
        'Partner interview: ask about nostalgia, originality, trends, and how music taste becomes part of personal identity.',
      ],
    },
    'Art in modern society': {
      objective: 'Examine art in modern society through expression, criticism, activism, commerce, and public meaning.',
      warmup: 'What role should art play in modern life: beauty, protest, reflection, entertainment, or something else?',
      vocabulary: [
        { word: 'Expression', definition: 'The act of showing thoughts, emotions, or identity through creative work.' },
        { word: 'Audience', definition: 'The people who view, hear, or experience a work of art.' },
        { word: 'Interpretation', definition: 'The meaning that someone gives to a work of art.' },
      ],
      idioms: [
        {
          idiom: 'Make a statement',
          meaning: 'To express a strong opinion or message clearly.',
          example: 'Street art often tries to make a statement about power, identity, or injustice.',
          question: 'What kinds of art make a statement most effectively in public life?',
        },
        {
          idiom: 'Open your eyes',
          meaning: 'To make someone notice something important in a new way.',
          example: 'Powerful art can open your eyes to issues you had ignored before.',
          question: 'Can art open your eyes more effectively than news or debate?',
        },
      ],
      activities: [
        'Students discuss whether art should comfort people, challenge them, or do both at once.',
        'Pairs roleplay an artist and a museum director debating whether controversial work should be publicly displayed.',
        'Small groups choose a social issue and design an art project that would communicate it to the public in a memorable way.',
        'Scenario task: a city funds public art, but many residents say the money should go elsewhere. How should the debate be handled?',
        'Partner interview: ask about taste, meaning, protest, beauty, and whether art still matters in a fast digital culture.',
      ],
    },
    'Cinema and culture': {
      objective: 'Explore cinema and culture through storytelling, national identity, influence, memory, and shared imagination.',
      warmup: 'How does cinema shape the way people see a culture, a country, or a historical moment?',
      vocabulary: [
        { word: 'Narrative', definition: 'The story or way events are presented in a film.' },
        { word: 'Representation', definition: 'The way people, places, or groups are shown in media.' },
        { word: 'Audience', definition: 'The people who watch and respond to a film.' },
      ],
      idioms: [
        {
          idiom: 'Steal the show',
          meaning: 'To attract the most attention and admiration.',
          example: 'A side character can steal the show and change how audiences remember a film.',
          question: 'What elements of a film often steal the show for viewers?',
        },
        {
          idiom: 'Set the scene',
          meaning: 'To create the background or atmosphere for what follows.',
          example: 'Cinema can set the scene for how people imagine an entire culture they have never visited.',
          question: 'How does cinema set the scene for cultural understanding or misunderstanding?',
        },
      ],
      activities: [
        'Students compare how different film industries reflect local values, humor, history, and social tension.',
        'Pairs roleplay a director and a critic discussing whether a film represents a culture honestly or simplistically.',
        'Small groups analyze one well-known movie and explain what it teaches audiences about family, class, gender, or national identity.',
        'Scenario task: a global streaming platform wants a film to appeal internationally, but local creators want cultural authenticity. What should happen?',
        'Partner interview: ask about representation, influence, stereotypes, and whether cinema changes how cultures are remembered.',
      ],
    },
    'Sustainability and lifestyle': {
      objective: 'Discuss sustainability and lifestyle through daily choices, values, sacrifice, convenience, and long-term responsibility.',
      warmup: 'How much should people change their personal lifestyle for sustainability if systems and companies remain the bigger polluters?',
      vocabulary: [
        { word: 'Sustainability', definition: 'Living or acting in a way that can continue long term without causing serious harm.' },
        { word: 'Consumption', definition: 'The use of resources, products, or energy.' },
        { word: 'Footprint', definition: 'The impact that a person or activity has on the environment.' },
      ],
      idioms: [
        {
          idiom: 'Do your bit',
          meaning: 'To make your own contribution to a shared effort.',
          example: 'People are often told to do their bit by recycling, wasting less, and choosing carefully.',
          question: 'What does it realistically mean to do your bit for sustainability?',
        },
        {
          idiom: 'Walk the talk',
          meaning: 'To act in a way that matches what you say you believe.',
          example: 'A sustainable lifestyle matters most when people actually walk the talk rather than posting about it online.',
          question: 'Why is walking the talk difficult when convenience is built into daily life?',
        },
      ],
      activities: [
        'Students compare transport, food, fashion, energy use, and shopping habits to decide which lifestyle changes matter most.',
        'Pairs roleplay two friends with different values debating whether sustainable living is realistic or mostly a privilege.',
        'Small groups create a practical weekly sustainability plan for a household and explain which changes are affordable and which are harder.',
        'Scenario task: your workplace wants to become greener, but staff resist extra effort and cost. What changes would you start with?',
        'Partner interview: ask about habit, guilt, cost, convenience, and whether personal action feels meaningful without wider reform.',
      ],
    },
    'Future of education': {
      objective: 'Explore the future of education through technology, flexibility, human connection, and changing ideas about learning.',
      warmup: 'What should future education protect at all costs even as classrooms and technology change?',
      vocabulary: [
        { word: 'Curriculum', definition: 'The subjects and learning content taught in a course or school.' },
        { word: 'Hybrid', definition: 'Combining two forms, such as online and in-person learning.' },
        { word: 'Mentorship', definition: 'Guidance and support provided by a more experienced person.' },
      ],
      idioms: [
        {
          idiom: 'Learn the ropes',
          meaning: 'To understand how something works through practice and experience.',
          example: 'Students still need teachers to help them learn the ropes even in highly digital classrooms.',
          question: 'What do students still need to learn the ropes in future education systems?',
        },
        {
          idiom: 'A level playing field',
          meaning: 'A fair situation in which everyone has the same chances.',
          example: 'Technology will only help education if it creates a level playing field instead of widening gaps.',
          question: 'How can future education create a level playing field for students from different backgrounds?',
        },
      ],
      activities: [
        'Students debate whether future education should focus more on technology, human mentoring, creativity, or job readiness.',
        'Pairs roleplay a teacher and an education minister discussing what schools should stop doing and start doing in the next decade.',
        'Small groups design a future school model including assessment, classroom format, teacher roles, and life skills.',
        'Scenario task: a school can invest in AI tools or smaller class sizes, but not both. Which choice would improve learning more?',
        'Partner interview: ask about curiosity, access, technology, social skills, and what good education will still mean in the future.',
      ],
    },
    'Cultural festivals': {
      objective: 'Explore cultural festivals through celebration, identity, ritual, memory, and shared public experience.',
      warmup: 'What gives a cultural festival lasting meaning beyond music, food, and entertainment?',
      vocabulary: [
        { word: 'Festival', definition: 'A special event or celebration that often reflects cultural traditions and shared values.' },
        { word: 'Ceremony', definition: 'A formal or symbolic event that follows meaningful customs.' },
        { word: 'Tradition', definition: 'A belief, custom, or practice passed from one generation to another.' },
      ],
      idioms: [
        {
          idiom: 'Bring people together',
          meaning: 'To create connection and unity among different people.',
          example: 'Well-loved festivals can bring people together across generations and backgrounds.',
          question: 'What kinds of festivals bring people together most effectively in your community?',
        },
        {
          idiom: 'In full swing',
          meaning: 'At the busiest or most active stage.',
          example: 'By evening, the whole city was in full swing with music, lights, and crowds.',
          question: 'What happens when a festival is truly in full swing?',
        },
      ],
      activities: [
        'Students compare different festivals and discuss what they reveal about a society’s history, values, and sense of identity.',
        'Pairs roleplay a local organizer and a visitor discussing how to celebrate a festival respectfully without reducing it to entertainment.',
        'Small groups design a festival guide for newcomers that explains rituals, behavior, food, and cultural meaning.',
        'Scenario task: a traditional festival is becoming more commercial each year. How can the community protect its meaning?',
        'Partner interview: ask about belonging, public celebration, cultural memory, and whether festivals strengthen identity or mainly attract tourism.',
      ],
    },
    'Moral dilemmas': {
      objective: 'Examine moral dilemmas through values, consequence, loyalty, honesty, and the difficulty of imperfect choices.',
      warmup: 'When there is no perfect choice, what should guide a person most strongly: principles, consequences, or loyalty?',
      vocabulary: [
        { word: 'Dilemma', definition: 'A difficult situation in which every available choice has serious drawbacks.' },
        { word: 'Conscience', definition: 'The inner sense that helps a person judge right and wrong.' },
        { word: 'Principle', definition: 'A moral rule or belief that guides behavior and decisions.' },
      ],
      idioms: [
        {
          idiom: 'Between a rock and a hard place',
          meaning: 'Stuck between two very difficult options.',
          example: 'Whistleblowers are often between a rock and a hard place when loyalty conflicts with honesty.',
          question: 'What kinds of people often end up between a rock and a hard place morally?',
        },
        {
          idiom: 'Do the right thing',
          meaning: 'To act in a morally correct way, even when it is hard.',
          example: 'People admire characters who do the right thing when it costs them something important.',
          question: 'What makes doing the right thing so difficult in real life?',
        },
      ],
      activities: [
        'Students compare several moral dilemmas and discuss whether intention, outcome, or personal duty matters most.',
        'Pairs roleplay two friends disagreeing about the right response to a difficult ethical situation.',
        'Small groups analyze a moral dilemma from different perspectives and defend the decision they believe is least harmful.',
        'Scenario task: you discover a painful truth that could protect one person but deeply hurt another. What should you do?',
        'Partner interview: ask about guilt, loyalty, honesty, sacrifice, and whether moral clarity is ever as simple as people claim.',
      ],
    },
    'Superstitions around the world': {
      objective: 'Discuss superstitions around the world through belief, tradition, fear, symbolism, and cultural meaning.',
      warmup: 'Why do superstitions survive in modern societies even when many people call themselves rational?',
      vocabulary: [
        { word: 'Superstition', definition: 'A belief that certain actions or signs bring good or bad luck without scientific proof.' },
        { word: 'Luck', definition: 'Good or bad things that seem to happen by chance.' },
        { word: 'Omen', definition: 'A sign believed to predict a future event.' },
      ],
      idioms: [
        {
          idiom: 'Knock on wood',
          meaning: 'Said or done to avoid bad luck after mentioning something positive.',
          example: 'People often say knock on wood after talking about good health or success.',
          question: 'Why do even skeptical people still knock on wood sometimes?',
        },
        {
          idiom: 'Bad omen',
          meaning: 'A sign believed to predict something negative.',
          example: 'In some cultures, certain animals or numbers are treated as a bad omen.',
          question: 'What things are considered a bad omen in different cultures you know?',
        },
      ],
      activities: [
        'Students compare superstitions from different cultures and discuss what fears or hopes they seem to reflect.',
        'Pairs roleplay a traveler and a local resident discussing a superstition that affects everyday behavior.',
        'Small groups create a mini world guide to common lucky and unlucky beliefs and explain the stories behind them.',
        'Scenario task: a company wants to launch a product internationally, but one symbol on the packaging is unlucky in several places. What should it do?',
        'Partner interview: ask about luck, family beliefs, rituals, skepticism, and why symbolic habits can feel emotionally powerful.',
      ],
    },
    'Language and identity': {
      objective: 'Explore language and identity through belonging, heritage, self-expression, power, and social perception.',
      warmup: 'How much of a person’s identity lives inside the language they speak every day?',
      vocabulary: [
        { word: 'Identity', definition: 'A person’s sense of who they are, including culture, values, and background.' },
        { word: 'Accent', definition: 'A particular way of pronouncing a language.' },
        { word: 'Heritage', definition: 'The traditions, language, and history passed down from earlier generations.' },
      ],
      idioms: [
        {
          idiom: 'Find your voice',
          meaning: 'To become confident in expressing yourself.',
          example: 'Many multilingual speakers feel they find their voice differently in each language they use.',
          question: 'How does language help people find their voice socially or personally?',
        },
        {
          idiom: 'Speak volumes',
          meaning: 'To show a great deal without needing many words.',
          example: 'The language people choose in public can speak volumes about identity and belonging.',
          question: 'What can language choice speak volumes about in modern society?',
        },
      ],
      activities: [
        'Students discuss how accent, bilingualism, slang, and mother tongue influence identity and social treatment.',
        'Pairs roleplay a parent and child debating whether heritage language should be preserved at home.',
        'Small groups analyze how language affects belonging in school, work, migration, and online life.',
        'Scenario task: a student feels judged because of the way they speak. What should teachers and classmates do to respond well?',
        'Partner interview: ask about pride, shame, belonging, code-switching, and whether language can shape who a person becomes.',
      ],
    },
    'The future of work': {
      objective: 'Discuss the future of work through flexibility, automation, skills, purpose, and changing career expectations.',
      warmup: 'What will matter most in the future of work: adaptability, technical skill, creativity, or emotional intelligence?',
      vocabulary: [
        { word: 'Automation', definition: 'The use of machines or software to perform tasks that people used to do.' },
        { word: 'Flexibility', definition: 'The ability to adjust easily to different conditions, roles, or schedules.' },
        { word: 'Reskilling', definition: 'Learning new abilities so you can do a different kind of work.' },
      ],
      idioms: [
        {
          idiom: 'Wear many hats',
          meaning: 'To take on many different roles or responsibilities.',
          example: 'Future workers may need to wear many hats as jobs become less fixed and more project-based.',
          question: 'Why might future workers need to wear many hats more often than before?',
        },
        {
          idiom: 'Stay ahead of the game',
          meaning: 'To remain better prepared than others.',
          example: 'Employees who keep learning may stay ahead of the game in fast-changing industries.',
          question: 'What helps people stay ahead of the game in the future job market?',
        },
      ],
      activities: [
        'Students compare how remote work, automation, freelancing, and lifelong learning may change careers over the next decade.',
        'Pairs roleplay an employee and a manager discussing how work should change to stay productive and humane in the future.',
        'Small groups design a future workplace model and explain how it balances technology, wellbeing, collaboration, and skill growth.',
        'Scenario task: your industry is changing quickly and many current jobs may disappear. What should workers and schools do first?',
        'Partner interview: ask about security, meaning, flexibility, retraining, and whether future work will improve life or make it more unstable.',
      ],
    },
    'Digital citizenship': {
      objective: 'Explore digital citizenship through responsibility, respect, privacy, participation, and behavior in online communities.',
      warmup: 'What does it mean to be a good citizen in digital spaces, not just a smart user?',
      vocabulary: [
        { word: 'Privacy', definition: 'The right to control access to your personal information and activity.' },
        { word: 'Respect', definition: 'Consideration for the rights, feelings, and dignity of other people.' },
        { word: 'Responsibility', definition: 'The duty to act carefully and be accountable for your choices.' },
      ],
      idioms: [
        {
          idiom: 'Think before you post',
          meaning: 'To consider the consequences before sharing something online.',
          example: 'Good digital citizenship begins when people think before they post in anger or excitement.',
          question: 'Why is it so important to think before you post?',
        },
        {
          idiom: 'Leave a mark',
          meaning: 'To create a lasting effect or trace.',
          example: 'Everything people share online can leave a mark on their reputation and relationships.',
          question: 'How does online behavior leave a mark long after the moment passes?',
        },
      ],
      activities: [
        'Students discuss what responsible online behavior should look like in schools, workplaces, and public debate.',
        'Pairs roleplay a teacher and a student discussing a harmful post that has affected classmates.',
        'Small groups create a digital citizenship guide covering privacy, respect, misinformation, and responsible participation.',
        'Scenario task: a group chat turns toxic after a rumor spreads. What should a responsible digital citizen do first?',
        'Partner interview: ask about empathy, privacy, reputation, courage, and how people should behave when screens create distance.',
      ],
    },
    'Science and society': {
      objective: 'Examine science and society through discovery, trust, ethics, progress, and the way knowledge changes public life.',
      warmup: 'Why do some scientific breakthroughs inspire hope while others create fear or resistance?',
      vocabulary: [
        { word: 'Evidence', definition: 'Facts or information used to show that something is true.' },
        { word: 'Discovery', definition: 'The act of finding something new or learning something previously unknown.' },
        { word: 'Innovation', definition: 'A new idea, method, or invention that improves how something works.' },
      ],
      idioms: [
        {
          idiom: 'Break new ground',
          meaning: 'To do something innovative that has not been done before.',
          example: 'Scientists break new ground when they solve problems that once seemed impossible.',
          question: 'Which areas of science are breaking new ground most dramatically today?',
        },
        {
          idiom: 'Change the course of',
          meaning: 'To alter the direction or future of something significantly.',
          example: 'Scientific progress can change the course of medicine, energy, communication, and daily life.',
          question: 'What discoveries have changed the course of society most powerfully?',
        },
      ],
      activities: [
        'Students compare how science improves life while also creating new ethical and political questions.',
        'Pairs roleplay a scientist and a community leader discussing whether a major innovation should be adopted quickly.',
        'Small groups analyze one scientific breakthrough and explain how it affects health, economy, education, or public trust.',
        'Scenario task: a powerful new technology is scientifically promising but socially controversial. How should society decide what to do?',
        'Partner interview: ask about trust, risk, evidence, public understanding, and whether science can ever be separated from politics.',
      ],
    },
    'Ethical consumer choices': {
      objective: 'Discuss ethical consumer choices through values, labor, sustainability, price, and the limits of personal responsibility.',
      warmup: 'How much responsibility should ordinary shoppers carry for the hidden impact of what they buy?',
      vocabulary: [
        { word: 'Ethics', definition: 'Principles that guide what is right, fair, and responsible.' },
        { word: 'Supply', definition: 'The process or system through which products are produced and delivered.' },
        { word: 'Label', definition: 'Information attached to a product that tells buyers about its contents or standards.' },
      ],
      idioms: [
        {
          idiom: 'Put your money where your mouth is',
          meaning: 'To act according to what you claim to believe.',
          example: 'Ethical shopping asks people to put their money where their mouth is when values cost more.',
          question: 'Why is it hard to put your money where your mouth is as a consumer?',
        },
        {
          idiom: 'Look beneath the surface',
          meaning: 'To examine what is really happening behind appearances.',
          example: 'Ethical consumers try to look beneath the surface of cheap prices and attractive branding.',
          question: 'What should buyers look beneath the surface of before making ethical choices?',
        },
      ],
      activities: [
        'Students compare price, convenience, sustainability, labor conditions, and brand image when discussing ethical shopping.',
        'Pairs roleplay a shopper and a store manager discussing whether ethical products should cost more.',
        'Small groups evaluate several products and decide which ethical questions buyers should ask before purchasing them.',
        'Scenario task: a popular low-cost brand is accused of unethical labor practices. Should consumers stop buying from it immediately?',
        'Partner interview: ask about guilt, affordability, responsibility, transparency, and whether ethical consumerism can create real change.',
      ],
    },
    'Climate solutions': {
      objective: 'Explore climate solutions through policy, technology, behavior change, and realistic paths toward large-scale impact.',
      warmup: 'Which climate solutions feel most realistic right now: cleaner energy, policy change, innovation, or lifestyle change?',
      vocabulary: [
        { word: 'Mitigation', definition: 'Action taken to reduce the severity or long-term impact of climate change.' },
        { word: 'Emission', definition: 'A gas or substance released into the air, especially one that affects the climate.' },
        { word: 'Adaptation', definition: 'Adjusting to new conditions or environmental changes.' },
      ],
      idioms: [
        {
          idiom: 'Turn the tide',
          meaning: 'To begin changing a difficult situation in a positive direction.',
          example: 'Experts argue that strong policy and technology together could turn the tide on emissions.',
          question: 'What would it take to turn the tide on climate change in a serious way?',
        },
        {
          idiom: 'Move the needle',
          meaning: 'To make a noticeable difference.',
          example: 'Small symbolic actions may raise awareness, but large systemic changes are needed to move the needle.',
          question: 'Which climate actions truly move the needle rather than just sound impressive?',
        },
      ],
      activities: [
        'Students compare renewable energy, transport reform, carbon pricing, reforestation, and consumption changes as climate solutions.',
        'Pairs roleplay a climate scientist and a politician discussing which solution deserves urgent funding and why.',
        'Small groups design a climate plan for a city, school, or company and explain how it balances cost, fairness, and impact.',
        'Scenario task: a government must reduce emissions quickly without causing severe social backlash. Which policies should it choose first?',
        'Partner interview: ask about urgency, sacrifice, innovation, public support, and what gives people real hope about climate solutions.',
      ],
    },
    'Tradition and modern life': {
      objective: 'Discuss tradition and modern life through continuity, change, identity, pressure, and adaptation across generations.',
      warmup: 'How can people respect tradition without feeling trapped by it in modern life?',
      vocabulary: [
        { word: 'Tradition', definition: 'A custom, value, or way of living that is passed down over time.' },
        { word: 'Modernity', definition: 'The conditions and ideas of contemporary life, often linked to change and innovation.' },
        { word: 'Adaptation', definition: 'The process of adjusting something to fit new conditions.' },
      ],
      idioms: [
        {
          idiom: 'Keep up with the times',
          meaning: 'To change in order to stay relevant in a modern world.',
          example: 'Many communities are trying to keep up with the times without losing their roots.',
          question: 'How can traditions keep up with the times without losing their meaning?',
        },
        {
          idiom: 'Hold on to',
          meaning: 'To keep something important instead of letting it disappear.',
          example: 'Families often want to hold on to traditions even when younger generations live very differently.',
          question: 'What traditions are most worth holding on to in modern life?',
        },
      ],
      activities: [
        'Students compare which traditions should be protected, updated, or left behind in a changing society.',
        'Pairs roleplay a grandparent and a young adult discussing whether a family tradition should evolve.',
        'Small groups analyze how technology, migration, and modern values affect customs, roles, and expectations.',
        'Scenario task: a community wants to modernize a long-standing tradition that some people now see as exclusionary. What should happen?',
        'Partner interview: ask about identity, respect, change, generational tension, and whether modern life weakens or reshapes tradition.',
      ],
    },
  },
};

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
  if (/\b(school|classroom|education|learning|student)\b/.test(normalized)) return 'education';
  if (/\b(color|colors|paint)\b/.test(normalized)) return 'colors';
  if (/\b(animal|animals|pet|pets|jungle)\b/.test(normalized)) return 'animals';
  if (/\b(food|snack|snacks|meal|cuisine|restaurant)\b/.test(normalized)) return 'food';
  if (/\b(toy|toys)\b/.test(normalized)) return 'toys';
  if (/\b(weather|storm|sunny|rain)\b/.test(normalized)) return 'weather';
  if (/\b(playground|recess)\b/.test(normalized)) return 'playground';
  if (/\b(feeling|feelings|emotion|emotions|happy|sad|fear|stress|mindfulness|motivation|confidence)\b|mental health/.test(normalized)) return 'feelings';
  if (/\b(hobby|hobbies)\b|free time/.test(normalized)) return 'hobbies';
  if (/\b(friend|friends|trust|relationship|relationships|communication)\b/.test(normalized)) return 'friends';
  if (/\b(birthday|party|parties)\b/.test(normalized)) return 'birthday';
  if (/\b(travel|trip|transportation|tourism)\b|space tourism/.test(normalized)) return 'travel';
  if (/\b(sport|sports|teamwork|gaming)\b|e sports/.test(normalized)) return 'sports';
  if (/\b(science|robot|robots|technology|digital|privacy|automation)\b|artificial intelligence/.test(normalized)) return 'technology';
  if (/\b(story|stories|movie|movies|cinema|book|books|music|art|fashion)\b/.test(normalized)) return 'story';
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

function buildVocabularyContext(title) {
  const words = getDistinctTopicWords(title);
  if (words.length >= 3) {
    return `${words[0]}, ${words[1]}, or ${words[2]}`;
  }
  if (words.length === 2) {
    return `${words[0]} or ${words[1]}`;
  }
  if (words.length === 1) {
    return words[0];
  }
  return stripUnitNumber(title).toLowerCase();
}

function buildVocabulary(title, lessonNumber) {
  const profile = getThemeProfile(title);
  const pool = profile.vocabulary;
  const context = buildVocabularyContext(title);

  return Array.from({ length: 3 }, (_, index) => {
    const word = pool[(lessonNumber + index - 1) % pool.length];

    return {
      word: toTitleCase(word),
      definition: `A useful word for talking about ${stripUnitNumber(title).toLowerCase()}, especially when discussing ${context}.`,
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

function buildActivities(title, lessonNumber, level) {
  const profile = getThemeProfile(title);
  const { topic, anchor, accent, detail } = getTopicAnchors(title);
  const roleA = ROLEPLAY_ROLES[(lessonNumber - 1) % ROLEPLAY_ROLES.length][0];
  const roleB = ROLEPLAY_ROLES[(lessonNumber - 1) % ROLEPLAY_ROLES.length][1];
  const output = CREATIVE_OUTPUTS[(lessonNumber - 1) % CREATIVE_OUTPUTS.length];
  const lens = DISCUSSION_LENSES[(lessonNumber - 1) % DISCUSSION_LENSES.length];

  if (level.startsWith('Kids')) {
    const words = getDistinctTopicWords(title);
    const playMode = KIDS_FUN_MODES[(lessonNumber - 1) % KIDS_FUN_MODES.length];
    const creation = KIDS_CREATIONS[(lessonNumber - 1) % KIDS_CREATIONS.length];
    const gameStyle = KIDS_GAME_STYLES[(lessonNumber - 1) % KIDS_GAME_STYLES.length];
    const [firstWord = anchor, secondWord = accent, thirdWord = detail] = words;
    const cueWords = [...new Set([firstWord, secondWord, thirdWord])].join(', ');
    const roleA = KIDS_ROLEPLAY_PAIRS[(lessonNumber - 1) % KIDS_ROLEPLAY_PAIRS.length][0];
    const roleB = KIDS_ROLEPLAY_PAIRS[(lessonNumber - 1) % KIDS_ROLEPLAY_PAIRS.length][1];

    return [
      `${profile.kidsActivities[(lessonNumber - 1) % profile.kidsActivities.length]} Add a ${playMode} ending so everyone gets one exciting speaking turn.`,
      `Roleplay a mini scene where ${roleA} and ${roleB} need to solve a funny problem connected to ${topic.toLowerCase()} before time runs out.`,
      `Teams create a ${creation} for ${topic.toLowerCase()} and present it using the clue words ${cueWords} plus one silly extra detail.`,
      `Play a ${gameStyle} where children listen for the clue words ${cueWords} and react with the right movement, sound, or action.`,
      `Finish with a class mission: build a tiny story, chant, or performance about ${topic.toLowerCase()} that ends with a surprise twist.`,
    ];
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

function getLessonOverride(level, title) {
  return LESSON_OVERRIDES[level]?.[stripUnitNumber(title)] ?? null;
}

function buildLesson(levelConfig, title, lessonNumber) {
  const focus = LESSON_FOCUSES[(lessonNumber - 1) % LESSON_FOCUSES.length];
  const angle = buildLessonAngle(title, lessonNumber);
  const override = getLessonOverride(levelConfig.level, title);

  return {
    id: `${slugify(levelConfig.level)}-${String(lessonNumber).padStart(3, '0')}`,
    level: levelConfig.level,
    topic: title,
    title,
    sequence: lessonNumber,
    sequenceLabel: `Lesson ${lessonNumber}`,
    audience: levelConfig.audience,
    objective: override?.objective ?? `Explore ${angle} while ${focus}.`,
    warmup: override?.warmup ?? buildWarmup(title, lessonNumber, levelConfig.level),
    vocabulary: override?.vocabulary ?? buildVocabulary(title, lessonNumber),
    idioms: override?.idioms ?? buildIdioms(title, lessonNumber),
    grammar: buildGrammar(title, lessonNumber),
    activities: override?.activities ?? buildActivities(title, lessonNumber, levelConfig.level),
    wrapup: buildWrapup(title, lessonNumber),
    teacherTips: buildTeacherTips(title, levelConfig.level),
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
