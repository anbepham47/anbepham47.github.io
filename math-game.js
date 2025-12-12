// Language data - Lazy loading approach
let currentLanguage = localStorage.getItem("mathGameLanguage") || "vi";
let currentTranslations = null; // Cached current language translations

// Translation factory - loads only the requested language
const getTranslations = (lang) => {
  const translationsData = {
    en: {
      title1: "Welcome 🦄 to the",
      title2: "Math Speed Game",
      howToPlay: "🎯 How to Play:",
      instructions: [
        "Each game set has 15 questions",
        "Choose your mode: multiplication/division or addition/subtraction",
        "Numbers will be between 2 and 9",
        "Answer as quickly as you can!",
        "Faster answers = More points!",
        "Get bonus points for speed:",
        "Under 3 seconds: 100 points",
        "Under 5 seconds: 50 points",
        "Under 10 seconds: 25 points",
        "Over 10 seconds: 10 points",
        "Complete the set to see your results and feedback!",
      ],
      startGame: "Start Game!",
      viewLeaderboard: "View Leaderboard",
      developedBy: "Special developed by Chiêu Quân's daddy",
      selectMode: "🎮 Select Game Mode",
      addSubMode: "➕➖ Addition & Subtraction",
      addSubDesc: "Random + and - with numbers (2-9)",
      multDivMode: "✖➗ Multiplication & Division",
      multDivDesc: "Random x and ÷ with numbers (2-9)",
      practiceMode: "🎯 Multiplication & Division Practice",
      practiceDesc: "Choose a specific number to practice (2-9)",
      geometryMode: "📐 Geometry: Perimeter & Area",
      geometryDesc: "Calculate perimeter and area of rectangles & squares",
      selectNumber: "Select number to practice:",
      backToMenu: "Back to Menu",
      question: "Question",
      of: "of",
      score: "Score",
      correct: "Correct",
      total: "Total",
      time: "Time",
      yourAnswer: "Your answer",
      enter: "Enter",
      newGame: "New Game",
      playAnother: "Play Another Set!",
      leaderboardTitle: "🏆 Leaderboard - Top 3",
      historyTitle: "📜 Game History - Last 10 Games",
      noScores: "No scores yet. Play your first game!",
      noHistory: "No game history yet. Play your first game!",
      clearLeaderboard: "Clear Leaderboard",
      clearHistory: "Clear History",
      clearConfirm: "Are you sure you want to clear the leaderboard?",
      clearHistoryConfirm: "Are you sure you want to clear the history?",
      correctFeedback: "🎉 Correct!",
      incorrectFeedback: "❌ Oops! The answer was",
      points: "points!",
      outstanding: "Outstanding!",
      outstandingMsg:
        "You're a math superstar! Your speed and accuracy are incredible. Keep up the amazing work!",
      excellent: "Excellent work!",
      excellentMsg:
        "You did really well! With a bit more practice, you'll be perfect. Keep going!",
      goodJob: "Good job!",
      goodJobMsg:
        "You're doing great! Try to answer a bit faster next time to earn more points.",
      keepPracticing: "Keep practicing!",
      keepPracticingMsg:
        "You're getting better! Focus on accuracy first, then work on your speed.",
      greatEffort: "Great effort!",
      greatEffortMsg:
        "Everyone starts somewhere! Take your time and practice more. You'll improve with each game!",
      scoreLabel: "Score:",
      correctLabel: "Correct:",
      playerName: "Player",
      editName: "Edit Name",
      enterName: "Enter your name:",
      save: "Save",
      cancel: "Cancel",
      storageFull: "Unable to save score. Storage may be full.",
    },
    vi: {
      title1: "Chào mừng 🦄 đến với",
      title2: "Trò Chơi Toán Nhanh",
      howToPlay: "🎯 Cách Chơi:",
      instructions: [
        "Mỗi ván có 15 câu hỏi",
        "Chọn chế độ: nhân/chia hoặc cộng/trừ",
        "Các số từ 2 đến 9",
        "Trả lời càng nhanh càng tốt!",
        "Trả lời nhanh = Điểm cao hơn!",
        "Điểm thưởng theo tốc độ:",
        "Dưới 3 giây: 100 điểm",
        "Dưới 5 giây: 50 điểm",
        "Dưới 10 giây: 25 điểm",
        "Trên 10 giây: 10 điểm",
        "Hoàn thành để xem kết quả và phản hồi!",
      ],
      startGame: "Bắt Đầu Chơi!",
      viewLeaderboard: "Xem Bảng Xếp Hạng",
      developedBy: "Đặc biệt phát triển bởi Ba của Chiêu Quân",
      selectMode: "🎮 Chọn Chế Độ Chơi",
      addSubMode: "➕➖ Cộng & Trừ",
      addSubDesc: "Ngẫu nhiên + và - với số (2-9)",
      multDivMode: "✖➗ Nhân & Chia",
      multDivDesc: "Ngẫu nhiên x và ÷ với số (2-9)",
      practiceMode: "🎯 Luyện Tập Nhân & Chia",
      practiceDesc: "Chọn một số cụ thể để luyện tập (2-9)",
      geometryMode: "📐 Hình Học: Chu Vi & Diện Tích",
      geometryDesc: "Tính chu vi và diện tích hình chữ nhật & hình vuông",
      selectNumber: "Chọn số để luyện tập:",
      backToMenu: "Về Menu",
      question: "Câu",
      of: "trên",
      score: "Điểm",
      correct: "Đúng",
      total: "Tổng",
      time: "Thời gian",
      yourAnswer: "Câu trả lời",
      enter: "Nhập",
      newGame: "Ván Mới",
      playAnother: "Chơi Tiếp!",
      leaderboardTitle: "🏆 Bảng Xếp Hạng - Top 3",
      historyTitle: "📜 Lịch Sử Chơi - 10 Ván Gần Nhất",
      noScores: "Chưa có điểm nào. Chơi ván đầu tiên!",
      noHistory: "Chưa có lịch sử. Chơi ván đầu tiên!",
      clearLeaderboard: "Xóa Bảng Xếp Hạng",
      clearHistory: "Xóa Lịch Sử",
      clearConfirm: "Bạn có chắc muốn xóa bảng xếp hạng?",
      clearHistoryConfirm: "Bạn có chắc muốn xóa lịch sử?",
      correctFeedback: "🎉 Chính xác!",
      incorrectFeedback: "❌ Ối! Đáp án là",
      points: "điểm!",
      outstanding: "Xuất sắc!",
      outstandingMsg:
        "Con là ngôi sao toán học! Tốc độ và độ chính xác tuyệt vời. Tiếp tục phát huy nhé!",
      excellent: "Làm tốt lắm!",
      excellentMsg:
        "Con làm rất tốt! Luyện tập thêm một chút nữa là hoàn hảo. Cố lên!",
      goodJob: "Làm tốt!",
      goodJobMsg:
        "Con đang làm rất tốt! Lần sau thử trả lời nhanh hơn để được nhiều điểm hơn nhé.",
      keepPracticing: "Tiếp tục luyện tập!",
      keepPracticingMsg:
        "Con đang tiến bộ! Tập trung vào độ chính xác trước, rồi sau đó tăng tốc độ.",
      greatEffort: "Cố gắng tuyệt vời!",
      greatEffortMsg:
        "Ai cũng có lúc bắt đầu! Từ từ thôi và luyện tập nhiều hơn. Con sẽ tiến bộ sau mỗi ván chơi!",
      scoreLabel: "Điểm:",
      correctLabel: "Đúng:",
      playerName: "Người chơi",
      editName: "Đổi Tên",
      enterName: "Nhập tên của bạn:",
      save: "Lưu",
      cancel: "Hủy",
      storageFull: "Không thể lưu điểm. Bộ nhớ có thể đã đầy.",
    },
  };
  return translationsData[lang] || translationsData.vi;
};

// Load initial language translations
currentTranslations = getTranslations(currentLanguage);

let score = 0;
let correctAnswers = 0;
let totalQuestions = 0;
let currentAnswer = 0;
let startTime = 0;
let timerInterval = null;
let questionsInSet = 0;
let maxPossibleScore = 0;
let gameMode = "random";
let fixedNumber = null;
let playerName = localStorage.getItem("mathGamePlayerName") || "";

// Cache DOM elements for better performance
const DOM = {
  answer: null,
  question: null,
  feedback: null,
  timer: null,
  progress: null,
  score: null,
  correct: null,
  total: null,
  screens: {},
  init() {
    this.answer = document.getElementById("answer");
    this.question = document.getElementById("question");
    this.feedback = document.getElementById("feedback");
    this.timer = document.getElementById("timer");
    this.progress = document.getElementById("progress");
    this.score = document.getElementById("score");
    this.correct = document.getElementById("correct");
    this.total = document.getElementById("total");
    this.screens = {
      start: document.querySelector(".start-screen"),
      mode: document.querySelector(".mode-screen"),
      game: document.querySelector(".game-screen"),
      results: document.querySelector(".results-screen"),
      leaderboard: document.querySelector(".leaderboard-screen"),
    };
  },
};

// Cleanup function to prevent memory leaks
function cleanup() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

// Add cleanup on page unload
window.addEventListener("beforeunload", cleanup);

// Leaderboard functions
function saveScore(score, maxScore, correct, total, percentage) {
  try {
    // Save to history first
    saveToHistory(score, maxScore, correct, total, percentage);

    // Then update leaderboard (top 3)
    const scores = getLeaderboard();
    const newScore = {
      score: score,
      maxScore: maxScore,
      correct: correct,
      total: total,
      percentage: percentage,
      date: new Date().toLocaleString(),
      timestamp: Date.now(),
      playerName: playerName || getText("playerName"),
    };

    // Remove any existing scores with the same score value (keep latest)
    const filteredScores = scores.filter((s) => s.score !== score);

    // Add new score
    filteredScores.unshift(newScore);

    // Sort by score descending
    filteredScores.sort((a, b) => b.score - a.score);

    // Keep only top 3
    const topScores = filteredScores.slice(0, 3);

    localStorage.setItem("mathGameLeaderboard", JSON.stringify(topScores));
    displayLeaderboard();
  } catch (error) {
    console.error("Failed to save score:", error);
    alert(
      getText("storageFull") || "Unable to save score. Storage may be full."
    );
  }
}

function getLeaderboard() {
  try {
    const stored = localStorage.getItem("mathGameLeaderboard");
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to load leaderboard:", error);
    return [];
  }
}

function displayLeaderboard() {
  const scores = getLeaderboard();
  const list = document.getElementById("leaderboardList");
  const clearBtn = document.getElementById("clearBtn");

  if (scores.length === 0) {
    list.innerHTML = `<li class="no-scores">${getText("noScores")}</li>`;
    clearBtn.style.display = "none";
    return;
  }

  clearBtn.style.display = "block";

  list.innerHTML = scores
    .map((item, index) => {
      const rank = index + 1;
      let rankClass = "";
      let medal = "";

      if (rank === 1) {
        rankClass = "top1";
        medal = "🥇 ";
      } else if (rank === 2) {
        rankClass = "top2";
        medal = "🥈 ";
      } else if (rank === 3) {
        rankClass = "top3";
        medal = "🥉 ";
      }

      const displayName = item.playerName || getText("playerName");
      return `
        <li class="leaderboard-item ${rankClass}">
          <span class="leaderboard-rank">${medal}#${rank}</span>
          <div class="leaderboard-info">
            <div class="leaderboard-score">${displayName}: ${item.score} / ${item.maxScore} (${item.percentage}%)</div>
            <div class="leaderboard-details">${item.correct}/${item.total} correct • ${item.date}</div>
          </div>
        </li>
      `;
    })
    .join("");
}

function clearLeaderboard() {
  if (confirm(currentTranslations.clearConfirm || getText("clearConfirm"))) {
    localStorage.removeItem("mathGameLeaderboard");
    displayLeaderboard();
  }
}

// History board functions
function saveToHistory(score, maxScore, correct, total, percentage) {
  try {
    const history = getHistory();
    const newEntry = {
      score: score,
      maxScore: maxScore,
      correct: correct,
      total: total,
      percentage: percentage,
      date: new Date().toLocaleString(),
      timestamp: Date.now(),
      playerName: playerName || getText("playerName"),
    };

    history.unshift(newEntry); // Add to beginning

    // Keep only last 10
    if (history.length > 10) {
      history.pop();
    }

    localStorage.setItem("mathGameHistory", JSON.stringify(history));
    displayHistory();
  } catch (error) {
    console.error("Failed to save history:", error);
  }
}

function getHistory() {
  try {
    const stored = localStorage.getItem("mathGameHistory");
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to load history:", error);
    return [];
  }
}

function displayHistory() {
  const history = getHistory();
  const list = document.getElementById("historyList");
  const clearBtn = document.getElementById("clearHistoryBtn");

  if (!list) return; // Guard clause if element doesn't exist yet

  if (history.length === 0) {
    list.innerHTML = `<li class="no-scores">${getText("noHistory")}</li>`;
    if (clearBtn) clearBtn.style.display = "none";
    return;
  }

  if (clearBtn) clearBtn.style.display = "block";

  list.innerHTML = history
    .map((item, index) => {
      const displayName = item.playerName || getText("playerName");
      return `
        <li class="history-item">
          <span class="history-number">#${index + 1}</span>
          <div class="history-info">
            <div class="history-score">${displayName}: ${item.score} / ${
        item.maxScore
      } (${item.percentage}%)</div>
            <div class="history-details">${item.correct}/${
        item.total
      } correct • ${item.date}</div>
          </div>
        </li>
      `;
    })
    .join("");
}

function clearHistory() {
  if (
    confirm(
      currentTranslations.clearHistoryConfirm || getText("clearHistoryConfirm")
    )
  ) {
    localStorage.removeItem("mathGameHistory");
    displayHistory();
  }
}

function switchLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("mathGameLanguage", lang);
  // Lazy load the new language translations
  currentTranslations = getTranslations(lang);
  updateAllText();
  updateLanguageButtons();
}

function updateLanguageButtons() {
  document
    .getElementById("langEn")
    .classList.toggle("active", currentLanguage === "en");
  document
    .getElementById("langVi")
    .classList.toggle("active", currentLanguage === "vi");
}

function editPlayerName() {
  const newName = prompt(getText("enterName"), playerName || "");
  if (newName !== null && newName.trim() !== "") {
    playerName = newName.trim();
    localStorage.setItem("mathGamePlayerName", playerName);
    updatePlayerNameDisplay();
  }
}

function updatePlayerNameDisplay() {
  const displayName = playerName || getText("playerName");
  const titleElement = document.querySelectorAll("h1")[0];
  if (playerName) {
    titleElement.textContent = getText("title1").replace("🦄", displayName);
  } else {
    editPlayerName();
  }
}

function getText(key) {
  return currentTranslations[key] || key;
}

function updateAllText() {
  // Update title with player name
  updatePlayerNameDisplay();
  document.querySelectorAll("h1")[1].textContent = getText("title2");

  // Update instructions
  const instructionsTitle = document.querySelector(".instructions h2");
  if (instructionsTitle) {
    instructionsTitle.textContent = getText("howToPlay");
  }

  const instructionsList = document.querySelector(".instructions ul");
  if (instructionsList) {
    const instructions = getText("instructions");
    instructionsList.innerHTML = instructions
      .map((item, index) => {
        if (index === 5) {
          // "Get bonus points for speed:" with nested list
          return `<li>${item}<ul>
              <li>${instructions[6]}</li>
              <li>${instructions[7]}</li>
              <li>${instructions[8]}</li>
              <li>${instructions[9]}</li>
            </ul></li>`;
        } else if (index > 5 && index < 10) {
          return ""; // Skip these as they're nested
        }
        return `<li>${item}</li>`;
      })
      .join("");
  }

  // Update buttons on start screen
  document.querySelectorAll(
    ".start-screen .button-group button"
  )[0].textContent = getText("startGame");
  document.querySelectorAll(
    ".start-screen .button-group button"
  )[1].textContent = getText("viewLeaderboard");

  document.querySelectorAll(".instructions h2")[1].textContent =
    getText("developedBy");

  // Update mode selection
  document.querySelector(".mode-selection h2").textContent =
    getText("selectMode");

  const modeButtons = document.querySelectorAll(".mode-btn");
  if (modeButtons[0]) {
    modeButtons[0].querySelector(".mode-title").textContent =
      getText("addSubMode");
    modeButtons[0].querySelector(".mode-desc").textContent =
      getText("addSubDesc");
  }
  if (modeButtons[1]) {
    modeButtons[1].querySelector(".mode-title").textContent =
      getText("multDivMode");
    modeButtons[1].querySelector(".mode-desc").textContent =
      getText("multDivDesc");
  }
  if (modeButtons[2]) {
    modeButtons[2].querySelector(".mode-title").textContent =
      getText("practiceMode");
    modeButtons[2].querySelector(".mode-desc").textContent =
      getText("practiceDesc");
  }
  if (modeButtons[3]) {
    modeButtons[3].querySelector(".mode-title").textContent =
      getText("geometryMode");
    modeButtons[3].querySelector(".mode-desc").textContent =
      getText("geometryDesc");
  }

  document.querySelector("#fixedModeSelector h3").textContent =
    getText("selectNumber");

  // Update stat labels
  document.querySelectorAll(".stat-label")[0].textContent = getText("score");
  document.querySelectorAll(".stat-label")[1].textContent = getText("correct");
  document.querySelectorAll(".stat-label")[2].textContent = getText("total");

  // Update input placeholder
  document.getElementById("answer").placeholder = getText("yourAnswer");

  // Update submit button
  document.querySelector(".submit-btn").textContent = getText("enter");

  // Update game screen buttons
  document.querySelector(".game-screen > button").textContent =
    getText("newGame");

  // Update results screen buttons
  const resultsButtons = document.querySelectorAll(
    ".results-screen .button-group button"
  );
  if (resultsButtons[0]) {
    resultsButtons[0].textContent = getText("playAnother");
  }
  if (resultsButtons[1]) {
    resultsButtons[1].textContent = getText("viewLeaderboard");
  }

  // Update back to menu buttons
  document
    .querySelectorAll('button[onclick="backToStart()"]')
    .forEach((btn) => {
      btn.textContent = getText("backToMenu");
    });

  // Update leaderboard
  document.querySelector(".leaderboard h3").textContent =
    getText("leaderboardTitle");
  document.querySelector(".clear-leaderboard").textContent =
    getText("clearLeaderboard");

  // Update history board
  const historyTitle = document.querySelector(".history-board h3");
  if (historyTitle) {
    historyTitle.textContent = getText("historyTitle");
  }
  const clearHistoryBtn = document.querySelector(".clear-history");
  if (clearHistoryBtn) {
    clearHistoryBtn.textContent = getText("clearHistory");
  }

  // Update edit name button
  document.getElementById("editNameText").textContent = getText("editName");

  // Update progress if in game
  if (totalQuestions < questionsInSet) {
    updateProgress();
  }

  // Refresh leaderboard and history display
  displayLeaderboard();
  displayHistory();
}

function inputNumber(num) {
  const answerInput = DOM.answer || document.getElementById("answer");
  answerInput.value += num;
}

function backspace() {
  const answerInput = DOM.answer || document.getElementById("answer");
  answerInput.value = answerInput.value.slice(0, -1);
}

function showModeSelection() {
  // Hide language selector and edit name button
  document.querySelector(".language-selector").style.display = "none";
  document.querySelector(".edit-name-btn").style.display = "none";

  if (DOM.screens.start) {
    DOM.screens.start.classList.remove("active");
    DOM.screens.mode.classList.add("active");
  } else {
    document.querySelector(".start-screen").classList.remove("active");
    document.querySelector(".mode-screen").classList.add("active");
  }
}

function showFixedModeSelection() {
  document.getElementById("fixedModeSelector").style.display = "block";
}

function startGame(mode = "random", fixedNum = null) {
  cleanup();
  gameMode = mode;
  fixedNumber = fixedNum;

  // Hide language selector and edit name button
  document.querySelector(".language-selector").style.display = "none";
  document.querySelector(".edit-name-btn").style.display = "none";

  if (DOM.screens.start) {
    DOM.screens.start.classList.remove("active");
    DOM.screens.mode.classList.remove("active");
    DOM.screens.results.classList.remove("active");
    DOM.screens.game.classList.add("active");
  } else {
    document.querySelector(".start-screen").classList.remove("active");
    document.querySelector(".mode-screen").classList.remove("active");
    document.querySelector(".results-screen").classList.remove("active");
    document.querySelector(".game-screen").classList.add("active");
  }
  resetGame();
}

function backToStart() {
  cleanup();
  // Show language selector and edit name button
  document.querySelector(".language-selector").style.display = "flex";
  document.querySelector(".edit-name-btn").style.display = "flex";

  if (DOM.screens.start) {
    DOM.screens.results.classList.remove("active");
    DOM.screens.leaderboard.classList.remove("active");
    DOM.screens.mode.classList.remove("active");
    DOM.screens.game.classList.remove("active");
    DOM.screens.start.classList.add("active");
  } else {
    document.querySelector(".results-screen").classList.remove("active");
    document.querySelector(".leaderboard-screen").classList.remove("active");
    document.querySelector(".mode-screen").classList.remove("active");
    document.querySelector(".game-screen").classList.remove("active");
    document.querySelector(".start-screen").classList.add("active");
  }
  document.getElementById("fixedModeSelector").style.display = "none";
}

function showLeaderboard() {
  // Hide language selector and edit name button
  document.querySelector(".language-selector").style.display = "none";
  document.querySelector(".edit-name-btn").style.display = "none";

  if (DOM.screens.start) {
    DOM.screens.start.classList.remove("active");
    DOM.screens.results.classList.remove("active");
    DOM.screens.leaderboard.classList.add("active");
  } else {
    document.querySelector(".start-screen").classList.remove("active");
    document.querySelector(".results-screen").classList.remove("active");
    document.querySelector(".leaderboard-screen").classList.add("active");
  }
  displayLeaderboard();
}

function resetGame() {
  score = 0;
  correctAnswers = 0;
  totalQuestions = 0;
  questionsInSet = 15; // Fixed 15 questions
  maxPossibleScore = 0;
  updateStats();
  updateProgress();
  generateQuestion();
}

function updateProgress() {
  const progressEl = DOM.progress || document.getElementById("progress");
  progressEl.textContent = `${getText("question")} ${
    totalQuestions + 1
  } ${getText("of")} ${questionsInSet}`;
}

function generateGeometryQuestion() {
  // Clear feedback and input
  const feedbackEl = DOM.feedback || document.getElementById("feedback");
  const answerEl = DOM.answer || document.getElementById("answer");
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  answerEl.value = "";
  answerEl.focus();

  const questionEl = DOM.question || document.getElementById("question");
  let questionText = "";

  // Ngẫu nhiên chọn hình vuông hoặc hình chữ nhật
  const isSquare = Math.random() < 0.5;
  const shapePrefix =
    currentLanguage === "vi"
      ? isSquare
        ? "Cho hình vuông: "
        : "Cho hình chữ nhật: "
      : isSquare
      ? "Given a square: "
      : "Given a rectangle: ";

  if (isSquare) {
    // Hình vuông: cạnh từ 2-9
    const side = Math.floor(Math.random() * 8) + 2; // 2-9

    // Chọn ngẫu nhiên tham số cần tìm
    const params = [
      {
        type: "side",
        question:
          currentLanguage === "vi"
            ? `Chu vi = ${4 * side}cm. Tìm cạnh?`
            : `Perimeter = ${4 * side}cm. Find side?`,
        answer: side,
      },
      {
        type: "sideFromArea",
        question:
          currentLanguage === "vi"
            ? `Diện tích = ${side * side}cm². Tìm cạnh?`
            : `Area = ${side * side}cm². Find side?`,
        answer: side,
      },
      {
        type: "perimeter",
        question:
          currentLanguage === "vi"
            ? `Cạnh = ${side}cm. Tìm chu vi?`
            : `Side = ${side}cm. Find perimeter?`,
        answer: 4 * side,
      },
      {
        type: "semiPerimeter",
        question:
          currentLanguage === "vi"
            ? `Cạnh = ${side}cm. Tìm nửa chu vi?`
            : `Side = ${side}cm. Find semi-perimeter?`,
        answer: 2 * side,
      },
      {
        type: "area",
        question:
          currentLanguage === "vi"
            ? `Cạnh = ${side}cm. Tìm diện tích?`
            : `Side = ${side}cm. Find area?`,
        answer: side * side,
      },
    ];

    const selected = params[Math.floor(Math.random() * params.length)];
    questionText = shapePrefix + selected.question;
    currentAnswer = selected.answer;
  } else {
    // Hình chữ nhật: chiều dài từ 3-9, chiều rộng từ 2-8 (rộng < dài)
    const length = Math.floor(Math.random() * 7) + 3; // 3-9
    const width = Math.floor(Math.random() * Math.min(7, length - 1)) + 2; // 2-8, nhưng < length

    // Chọn ngẫu nhiên tham số cần tìm
    const params = [
      {
        type: "length",
        question:
          currentLanguage === "vi"
            ? `Chiều rộng = ${width}cm, Chu vi = ${
                2 * (length + width)
              }cm. Tìm chiều dài?`
            : `Width = ${width}cm, Perimeter = ${
                2 * (length + width)
              }cm. Find length?`,
        answer: length,
      },
      {
        type: "width",
        question:
          currentLanguage === "vi"
            ? `Chiều dài = ${length}cm, Chu vi = ${
                2 * (length + width)
              }cm. Tìm chiều rộng?`
            : `Length = ${length}cm, Perimeter = ${
                2 * (length + width)
              }cm. Find width?`,
        answer: width,
      },
      {
        type: "perimeter",
        question:
          currentLanguage === "vi"
            ? `Chiều dài = ${length}cm, Chiều rộng = ${width}cm. Tìm chu vi?`
            : `Length = ${length}cm, Width = ${width}cm. Find perimeter?`,
        answer: 2 * (length + width),
      },
      {
        type: "semiPerimeter",
        question:
          currentLanguage === "vi"
            ? `Chiều dài = ${length}cm, Chiều rộng = ${width}cm. Tìm nửa chu vi?`
            : `Length = ${length}cm, Width = ${width}cm. Find semi-perimeter?`,
        answer: length + width,
      },
      {
        type: "area",
        question:
          currentLanguage === "vi"
            ? `Chiều dài = ${length}cm, Chiều rộng = ${width}cm. Tìm diện tích?`
            : `Length = ${length}cm, Width = ${width}cm. Find area?`,
        answer: length * width,
      },
      {
        type: "lengthFromArea",
        question:
          currentLanguage === "vi"
            ? `Chiều rộng = ${width}cm, Diện tích = ${
                length * width
              }cm². Tìm chiều dài?`
            : `Width = ${width}cm, Area = ${length * width}cm². Find length?`,
        answer: length,
      },
      {
        type: "widthFromArea",
        question:
          currentLanguage === "vi"
            ? `Chiều dài = ${length}cm, Diện tích = ${
                length * width
              }cm². Tìm chiều rộng?`
            : `Length = ${length}cm, Area = ${length * width}cm². Find width?`,
        answer: width,
      },
    ];

    const selected = params[Math.floor(Math.random() * params.length)];
    questionText = shapePrefix + selected.question;
    currentAnswer = selected.answer;
  }

  questionEl.textContent = questionText;

  // Track maximum possible score (if answered within 3 seconds)
  maxPossibleScore += 100;

  // Start timer
  startTime = Date.now();
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 100);
}

function generateQuestion() {
  // Check if geometry mode
  if (gameMode === "geometry") {
    generateGeometryQuestion();
    return;
  }

  // Clear feedback and input
  const feedbackEl = DOM.feedback || document.getElementById("feedback");
  const answerEl = DOM.answer || document.getElementById("answer");
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  answerEl.value = "";
  answerEl.focus();

  // Generate random numbers between 2 and 9
  let num1, num2;

  if (gameMode === "fixed" && fixedNumber) {
    // Fixed mode: second operand is always the fixed number
    num1 = Math.floor(Math.random() * 8) + 2;
    num2 = fixedNumber;
  } else {
    // Random mode: both numbers are random
    num1 = Math.floor(Math.random() * 8) + 2;
    num2 = Math.floor(Math.random() * 8) + 2;
  }

  // Choose operations based on game mode
  let operations, operation;
  if (gameMode === "addsub") {
    // Addition and subtraction mode
    operations = ["+", "-"];
  } else {
    // Default multiplication and division mode
    operations = ["×", "÷"];
  }
  operation = operations[Math.floor(Math.random() * operations.length)];

  let questionText = "";

  if (operation === "×") {
    currentAnswer = num1 * num2;
    questionText = `${num1} × ${num2} = ?`;
  } else if (operation === "÷") {
    // For division, ensure we get a whole number result
    currentAnswer = num1;
    const dividend = num2 * num1;
    questionText = `${dividend} ÷ ${num2} = ?`;
  } else if (operation === "+") {
    currentAnswer = num1 + num2;
    questionText = `${num1} + ${num2} = ?`;
  } else if (operation === "-") {
    currentAnswer = num1;
    const subtrahend = num2 + num1;
    questionText = `${subtrahend} - ${num2} = ?`;
  }

  const questionEl = DOM.question || document.getElementById("question");
  questionEl.textContent = questionText;

  // Track maximum possible score (if answered within 3 seconds)
  maxPossibleScore += 100;

  // Start timer
  startTime = Date.now();
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 100);
}

function updateTimer() {
  const elapsed = (Date.now() - startTime) / 1000;
  const timerEl = DOM.timer || document.getElementById("timer");
  timerEl.textContent = `${getText("time")}: ${elapsed.toFixed(1)}s`;
}

function checkAnswer() {
  const answerInput = DOM.answer || document.getElementById("answer");
  const userAnswer = parseInt(answerInput.value);

  // Validate input
  if (isNaN(userAnswer)) {
    answerInput.classList.add("error");
    setTimeout(() => answerInput.classList.remove("error"), 300);
    return;
  }

  // Prevent negative numbers or answers that are too large
  if (userAnswer < 0 || userAnswer > 999) {
    answerInput.classList.add("error");
    setTimeout(() => answerInput.classList.remove("error"), 300);
    return;
  }

  answerInput.classList.remove("error");

  // Stop timer
  clearInterval(timerInterval);
  const timeTaken = (Date.now() - startTime) / 1000;

  totalQuestions++;
  const feedback = DOM.feedback || document.getElementById("feedback");

  if (userAnswer === currentAnswer) {
    correctAnswers++;

    // Calculate points based on speed
    let points = 10;
    if (timeTaken < 3) {
      points = 100;
    } else if (timeTaken < 5) {
      points = 50;
    } else if (timeTaken < 10) {
      points = 25;
    }

    score += points;

    feedback.textContent = `${getText("correctFeedback")} +${points} ${getText(
      "points"
    )} (${timeTaken.toFixed(1)}s)`;
    feedback.className = "feedback correct";
  } else {
    feedback.textContent = `${getText("incorrectFeedback")} ${currentAnswer}`;
    feedback.className = "feedback incorrect";
  }

  updateStats();
  updateProgress();

  // Check if game set is complete
  if (totalQuestions >= questionsInSet) {
    setTimeout(showResults, 2000);
  } else {
    // Generate next question after a short delay
    setTimeout(generateQuestion, 2000);
  }
}

function showResults() {
  cleanup();
  if (DOM.screens.game) {
    DOM.screens.game.classList.remove("active");
    DOM.screens.results.classList.add("active");
  } else {
    document.querySelector(".game-screen").classList.remove("active");
    document.querySelector(".results-screen").classList.add("active");
  }

  const percentage = Math.round((score / maxPossibleScore) * 100);
  const accuracy = Math.round((correctAnswers / totalQuestions) * 100);

  // Save to leaderboard
  saveScore(
    score,
    maxPossibleScore,
    correctAnswers,
    totalQuestions,
    percentage
  );

  document.getElementById("percentage").textContent = `${percentage}%`;
  document.getElementById("resultsStats").innerHTML =
    `📊 <strong>${getText(
      "scoreLabel"
    )}</strong> ${score} / ${maxPossibleScore}<br>` +
    `✅ <strong>${getText(
      "correctLabel"
    )}</strong> ${correctAnswers} / ${totalQuestions} (${accuracy}%)`;

  // Determine feedback based on percentage
  let emoji, message;
  if (correctAnswers < totalQuestions) {
    if (percentage >= 50) {
      emoji = "💪";
      message = `<strong>${getText("keepPracticing")}</strong> ${getText(
        "keepPracticingMsg"
      )}`;
    } else {
      emoji = "🌱";
      message = `<strong>${getText("greatEffort")}</strong> ${getText(
        "greatEffortMsg"
      )}`;
    }
  } else {
    if (percentage >= 90) {
      emoji = "🏆";
      message = `<strong>${getText("outstanding")}</strong> ${getText(
        "outstandingMsg"
      )}`;
    } else if (percentage >= 70) {
      emoji = "🌟";
      message = `<strong>${getText("excellent")}</strong> ${getText(
        "excellentMsg"
      )}`;
    } else {
      emoji = "👍";
      message = `<strong>${getText("goodJob")}</strong> ${getText(
        "goodJobMsg"
      )}`;
    }
  }

  document.getElementById("resultsEmoji").textContent = emoji;
  document.getElementById("feedbackMessage").innerHTML = message;
}

function updateStats() {
  if (DOM.score) {
    DOM.score.textContent = score;
    DOM.correct.textContent = correctAnswers;
    DOM.total.textContent = totalQuestions;
  } else {
    document.getElementById("score").textContent = score;
    document.getElementById("correct").textContent = correctAnswers;
    document.getElementById("total").textContent = totalQuestions;
  }
}

// Focus management and initialization
document.addEventListener("DOMContentLoaded", function () {
  // Initialize DOM cache for better performance
  DOM.init();

  // Keep focus visible but prevent physical keyboard input
  if (DOM.answer) {
    DOM.answer.addEventListener("focus", function () {
      this.setAttribute("readonly", "readonly");
    });

    // Add keyboard support for Enter key
    DOM.answer.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        checkAnswer();
      }
    });
  }

  // Load language and update text
  updateAllText();
  updateLanguageButtons();

  // Load leaderboard and history on start
  displayLeaderboard();
  displayHistory();
});
