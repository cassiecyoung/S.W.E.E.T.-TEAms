let teamAScore = 0;
let teamBScore = 0;

/* ================= QUESTIONS ================= */

const questions = {
   middle: {
    selfEsteem: [
      "What is something you are proud of about yourself?",
      "What is one thing you are good at?",
      "Who is someone that believes in you?",
      "What is a positive word you would use to describe yourself?",
      "What is something you have improved at over time?",
      "What makes you unique?",
      "What is something kind you did recently?",
      "What is one goal you have for yourself?",
      "What do you like about your personality?",
      "What is something you’ve worked hard to achieve?",
      "What is one strength you have?",
      "What makes you feel confident?",
      "What is something you like about the way you think?",
      "What is one challenge you’ve overcome?",
      "What does self-respect mean to you?",
      "What is something you would tell a younger version of yourself?",
      "What is one compliment you’ve received that meant a lot?",
      "How do you show confidence?",
      "What helps you believe in yourself?",
      "What is something you want to keep getting better at?",
      "What makes you feel proud at school or home?",
      "What is one thing you like about your effort?",
      "How do you remind yourself you matter?",
      "What does being confident look like to you?",
      "What makes you feel successful?"
    ],

    wellBalanced: [
      "How do you relax when you feel stressed?",
      "What helps you calm down?",
      "Why is sleep important?",
      "What is a healthy habit you have?",
      "How do you balance school and fun?",
      "What helps you focus?",
      "Why is taking breaks important?",
      "What do you do when you feel overwhelmed?",
      "How do you take care of your body?",
      "What is something you do for fun?",
      "Why is eating healthy important?",
      "How do you manage your time?",
      "What helps you feel balanced?",
      "How do you know when you need a break?",
      "What does self-care mean to you?",
      "Why is exercise important?",
      "How do you manage screen time?",
      "What helps you recharge?",
      "How do you stay organized?",
      "Why is mental health important?",
      "What is something that helps you feel peaceful?",
      "How do you balance responsibilities?",
      "What is one healthy choice you make?",
      "How do you deal with stress?",
      "What helps you feel your best?"
    ],

    empathetic: [
      "How do you know when someone is upset?",
      "Why is it important to listen to others?",
      "How can you show kindness to someone?",
      "How would you feel if you were in their place?",
      "Why is empathy important?",
      "What can you do if a friend is sad?",
      "How do words affect others?",
      "How can you be supportive?",
      "Why should we respect feelings?",
      "How do you show compassion?",
      "What does it mean to care?",
      "How can you help someone feel included?",
      "Why is kindness important?",
      "How do you respond to someone struggling?",
      "What does empathy look like?",
      "How can you show understanding?",
      "Why should we think before speaking?",
      "How do you show respect?",
      "What helps you understand others?",
      "Why is helping others important?",
      "How can you be a good friend?",
      "What does being caring mean?",
      "How can you support someone?",
      "Why is listening important?",
      "How do you treat others fairly?"
    ],

    empowered: [
      "What does being responsible mean?",
      "How do you make good choices?",
      "What does it mean to stand up for yourself?",
      "How do you solve problems?",
      "What does being confident mean?",
      "How do you handle mistakes?",
      "What helps you make decisions?",
      "Why is accountability important?",
      "How do you set goals?",
      "What helps you stay motivated?",
      "How do you advocate for yourself?",
      "Why is effort important?",
      "How do you take responsibility?",
      "What does leadership mean?",
      "How do you learn from mistakes?",
      "What helps you feel capable?",
      "How do you overcome challenges?",
      "Why is perseverance important?",
      "How do you use your voice?",
      "What does independence mean?",
      "How do you take initiative?",
      "Why is confidence important?",
      "How do you handle pressure?",
      "What helps you believe in yourself?",
      "How do you grow from challenges?"
    ],

    teamPlayer: [
      "What makes a good teammate?",
      "How do you support others?",
      "Why is cooperation important?",
      "How do you handle disagreements?",
      "Why is teamwork important?",
      "How do you contribute to a group?",
      "What does respect look like?",
      "How do you encourage others?",
      "Why is communication important?",
      "How do you share responsibility?",
      "What makes a team successful?",
      "How do you handle conflict?",
      "Why is trust important?",
      "How do you listen to teammates?",
      "What does collaboration mean?",
      "How do you include others?",
      "Why is compromise important?",
      "How do you help a team succeed?",
      "What does leadership mean in a team?",
      "How do you accept feedback?",
      "Why is fairness important?",
      "How do you work with different personalities?",
      "What makes you a good team member?",
      "How do you show respect in a group?",
      "Why is teamwork valuable?"
    ],

    gettingToKnowMe: [
      "What is your favorite hobby?",
      "What is your favorite food?",
      "What is your favorite music?",
      "What is your favorite movie?",
      "What is your favorite color?",
      "What do you like to do after school?",
      "What is your favorite subject?",
      "What makes you laugh?",
      "What is your favorite place?",
      "What is your favorite sport or game?",
      "What is your favorite holiday?",
      "What is your favorite snack?",
      "What is something you enjoy learning?",
      "What is your favorite book?",
      "What is your favorite animal?",
      "What do you like to do on weekends?",
      "What is your favorite season?",
      "What is your favorite memory?",
      "What is something fun about you?",
      "What is your favorite TV show?",
      "What is something you are curious about?",
      "What is your favorite dessert?",
      "What do you enjoy doing with friends?",
      "What is something you’re good at?",
      "What makes you happy?"
    ],

    competitive: [
      "What is my favorite color?",
      "What is my favorite food?",
      "What is my favorite music?",
      "What is my favorite hobby?",
      "What is my favorite sport?",
      "What is my favorite movie?",
      "What is my favorite snack?",
      "What is my favorite subject?",
      "What is my favorite animal?",
      "What is my favorite season?",
      "What is my favorite holiday?",
      "What is my favorite game?",
      "What is my favorite drink?",
      "What is my favorite dessert?",
      "What is my favorite place?",
      "What is my favorite TV show?",
      "What is my favorite song?",
      "What is my favorite activity?",
      "What is my favorite color combination?",
      "What is my favorite fast food?",
      "What is my favorite restaurant?",
      "What is my favorite ice cream flavor?",
      "What is my favorite way to relax?",
      "What is my favorite thing to do with friends?",
      "What is my favorite thing about school?"
    ]
  },

  high: {
    selfEsteem: [
      "What is one strength you bring to a group?",
      "What achievement are you most proud of?",
      "How do you define self-worth?",
      "What does confidence mean to you?",
      "What is something you’ve grown in?",
      "How do you handle self-doubt?",
      "What motivates you?",
      "What makes you feel capable?",
      "How do you recognize your value?",
      "What does self-respect look like?",
      "What is something you do well?",
      "How do you respond to failure?",
      "What personal quality do you value?",
      "How do you celebrate success?",
      "What makes you resilient?",
      "What does believing in yourself mean?",
      "How do you show self-confidence?",
      "What is one personal goal you have?",
      "How do you handle criticism?",
      "What helps you feel proud?",
      "How do you recognize your growth?",
      "What makes you feel accomplished?",
      "How do you build confidence?",
      "What is one thing you admire about yourself?",
      "How do you define success?"
    ],

    wellBalanced: [
      "How do you manage stress?",
      "Why is balance important?",
      "How do you prioritize responsibilities?",
      "What does self-care look like?",
      "How do you maintain mental health?",
      "Why is rest important?",
      "How do you avoid burnout?",
      "What helps you stay grounded?",
      "How do you balance school and life?",
      "Why is time management important?",
      "How do you manage pressure?",
      "What healthy habits support balance?",
      "How do you recharge?",
      "Why is mindfulness important?",
      "How do you manage emotions?",
      "What helps you stay organized?",
      "How do you handle overload?",
      "What role does sleep play?",
      "How do you maintain focus?",
      "Why is reflection important?",
      "How do you stay balanced socially?",
      "What helps you feel stable?",
      "How do you manage commitments?",
      "Why is balance important long-term?",
      "How do you reset when overwhelmed?"
    ],

    empathetic: [
      "How do you show empathy to others?",
      "Why is empathy important in relationships?",
      "How do you listen actively?",
      "How do you respond to others’ emotions?",
      "Why is understanding important?",
      "How do you show compassion?",
      "How do you support someone struggling?",
      "What does empathy look like in action?",
      "Why is perspective important?",
      "How do words impact others?",
      "How do you respond to conflict empathetically?",
      "Why is kindness important?",
      "How do you practice respect?",
      "How do you understand different viewpoints?",
      "Why is emotional awareness important?",
      "How do you validate others?",
      "What does being considerate mean?",
      "How do you build trust?",
      "Why is empathy essential for teamwork?",
      "How do you communicate care?",
      "How do you support inclusion?",
      "What role does empathy play in leadership?",
      "How do you show patience?",
      "Why is compassion important in society?",
      "How do you promote understanding?"
    ],

    empowered: [
      "What does empowerment mean to you?",
      "How do you take ownership of decisions?",
      "How do you advocate for yourself?",
      "What does leadership look like?",
      "How do you handle responsibility?",
      "How do you overcome obstacles?",
      "What motivates action?",
      "How do you build confidence?",
      "What does accountability mean?",
      "How do you make informed choices?",
      "How do you use your voice effectively?",
      "What does resilience mean?",
      "How do you handle setbacks?",
      "Why is independence important?",
      "How do you set meaningful goals?",
      "How do you develop self-discipline?",
      "What does initiative mean?",
      "How do you handle challenges?",
      "How do you influence positive change?",
      "Why is responsibility empowering?",
      "How do you stay motivated?",
      "What does self-efficacy mean?",
      "How do you make ethical decisions?",
      "How do you grow as a leader?",
      "What empowers you to succeed?"
    ],

    teamPlayer: [
      "What makes effective teamwork?",
      "How do you handle group conflict?",
      "Why is collaboration important?",
      "How do you contribute positively?",
      "What does leadership mean in a team?",
      "How do you handle disagreements?",
      "Why is communication critical?",
      "How do you respect differences?",
      "What builds trust in teams?",
      "How do you support teammates?",
      "Why is accountability important?",
      "How do you manage group roles?",
      "What does compromise look like?",
      "How do you encourage participation?",
      "Why is inclusion important?",
      "How do you accept feedback?",
      "What makes a team successful?",
      "How do you resolve conflict respectfully?",
      "Why is reliability important?",
      "How do you build team morale?",
      "How do you handle group pressure?",
      "What does shared responsibility mean?",
      "How do you work with diverse personalities?",
      "Why is cooperation essential?",
      "How do you strengthen team relationships?"
    ],

    gettingToKnowMe: [
      "What motivates you?",
      "What is your favorite way to relax?",
      "What are your interests?",
      "What is something important to you?",
      "What do you value most?",
      "What inspires you?",
      "What is your favorite music genre?",
      "What do you enjoy doing in your free time?",
      "What is a goal you’re working toward?",
      "What is your favorite subject?",
      "What makes you feel fulfilled?",
      "What is your favorite hobby?",
      "What do you enjoy learning about?",
      "What is something you’re passionate about?",
      "What do you value in friendships?",
      "What is your favorite movie or show?",
      "What is your favorite food?",
      "What do you like about school?",
      "What makes you happy?",
      "What is something unique about you?",
      "What are your strengths?",
      "What do you enjoy doing with friends?",
      "What is your favorite place?",
      "What is something you’re proud of?",
      "What do you enjoy doing most?"
    ],

    competitive: [
      "What is my favorite color?",
      "What is my favorite food?",
      "What is my favorite music genre?",
      "What is my favorite hobby?",
      "What is my favorite movie?",
      "What is my favorite sport?",
      "What is my favorite snack?",
      "What is my favorite subject?",
      "What is my favorite season?",
      "What is my favorite holiday?",
      "What is my favorite TV show?",
      "What is my favorite drink?",
      "What is my favorite dessert?",
      "What is my favorite activity?",
      "What is my favorite place to go?",
      "What is my favorite way to relax?",
      "What is my favorite social activity?",
      "What is my favorite artist or band?",
      "What is my favorite fast food?",
      "What is my favorite restaurant?",
      "What is my favorite memory?",
      "What is my favorite game?",
      "What is my favorite thing to do with friends?",
      "What is my favorite weekend activity?",
      "What is my favorite school-related activity?"
    ]
  }
};

/* ================= LOGIC ================= */

function handleCategoryChange() {
  const category = document.getElementById("category").value;
  const competitiveSection = document.getElementById("competitiveSection");

  if (category === "competitive") {
    competitiveSection.style.display = "block";
    resetScores();
  } else {
    competitiveSection.style.display = "none";
  }
}

function getQuestion() {
  const age = document.getElementById("ageLevel").value;
  const category = document.getElementById("category").value;
  const number = Number(document.getElementById("numberInput").value);
  const box = document.getElementById("questionBox");

  if (!category || number < 1 || number > 25) {
    box.innerText = "Please select a category and enter a number between 1 and 25.";
    return;
  }

  box.innerText = questions[age][category][number - 1];
}

/* ================= SCORING ================= */

function addPoint(team) {
  if (team === "A") {
    teamAScore++;
    document.getElementById("teamAScore").innerText = teamAScore;
  } else {
    teamBScore++;
    document.getElementById("teamBScore").innerText = teamBScore;
  }
}

function resetScores() {
  teamAScore = 0;
  teamBScore = 0;
  document.getElementById("teamAScore").innerText = 0;
  document.getElementById("teamBScore").innerText = 0;
}
