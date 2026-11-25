(function () {
  "use strict";

  var QUIZ = window.SOUL_QUIZ;
  if (!QUIZ) {
    throw new Error("题目数据未能加载，请确认与 index.html 放在同一目录。");
  }

  var QUESTIONS = QUIZ.QUESTIONS;
  var TOTAL = QUESTIONS.length;
  var KEYS = ["甲", "乙", "丙", "丁"];

  var state = {
    screen: "home",
    index: 0,
    answers: [],
    result: null,
    animating: false,
    advanceTimer: null
  };

  var els = {};

  function $(id) {
    return document.getElementById(id);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function showScreen(name) {
    state.screen = name;
    ["home", "quiz", "result"].forEach(function (key) {
      var node = els[key];
      if (!node) return;
      var on = key === name;
      node.classList.toggle("is-active", on);
      node.hidden = !on;
    });
    window.scrollTo(0, 0);
  }

  function startQuiz() {
    state.index = 0;
    state.answers = [];
    state.result = null;
    showScreen("quiz");
    renderQuestion(false);
  }

  function retake() {
    state.index = 0;
    state.answers = [];
    state.result = null;
    showScreen("home");
  }

  function renderQuestion(animate) {
    var q = QUESTIONS[state.index];

    function paint() {
      els.progressLabel.textContent = "第 " + (state.index + 1) + " / " + TOTAL + " 题";
      els.progressFill.style.width = (((state.index + 1) / TOTAL) * 100) + "%";
      els.backBtn.disabled = state.index === 0;
      els.questionText.textContent = q.text;
      els.questionText.classList.remove("is-leaving", "is-entering");
      renderOptions(q);
    }

    if (animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      state.animating = true;
      els.questionText.classList.remove("is-entering");
      els.questionText.classList.add("is-leaving");
      window.setTimeout(function () {
        els.questionText.classList.remove("is-leaving");
        els.questionText.classList.add("is-entering");
        paint();
        state.animating = false;
      }, 220);
    } else {
      paint();
      state.animating = false;
    }
  }

  function renderOptions(q) {
    var current = state.answers[state.index];
    els.options.innerHTML = q.options
      .map(function (opt, i) {
        var selected = current === i ? " is-selected" : "";
        return (
          '<button type="button" class="option' + selected + '" data-index="' + i + '">' +
            '<span class="option-key">' + KEYS[i] + "</span>" +
            "<span>" + escapeHtml(opt.text) + "</span>" +
          "</button>"
        );
      })
      .join("");
  }

  function choose(index) {
    if (state.animating) return;
    state.animating = true;
    var buttons = els.options.querySelectorAll(".option");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.toggle("is-selected", i === index);
    }
    state.answers[state.index] = index;

    window.clearTimeout(state.advanceTimer);
    state.advanceTimer = window.setTimeout(function () {
      if (state.index >= TOTAL - 1) {
        state.animating = false;
        finish();
      } else {
        state.index += 1;
        renderQuestion(true);
      }
    }, 280);
  }

  function goBack() {
    if (state.index <= 0) return;
    window.clearTimeout(state.advanceTimer);
    state.animating = false;
    state.index -= 1;
    renderQuestion(true);
  }

  function finish() {
    els.progressFill.style.width = "100%";
    var ranked = QUIZ.rankCharacters(QUIZ.scoresFromAnswers(state.answers));
    state.result = ranked[0].character;
    renderResult(state.result);
    showScreen("result");
  }

  function renderResult(ch) {
    els.resultName.textContent = ch.name;
    els.resultType.textContent = ch.typeLabel;
    els.sealText.textContent = ch.type;
    els.tagline.textContent = "「" + ch.tagline + "」";
    els.traits.textContent = ch.traits;
    els.reason.textContent = ch.reason;
    els.strength.textContent = ch.strength;
    els.easter.textContent = ch.easter;
  }

  function bind() {
    els.home = $("screen-home");
    els.quiz = $("screen-quiz");
    els.result = $("screen-result");
    els.progressLabel = $("progress-label");
    els.progressFill = $("progress-fill");
    els.questionText = $("question-text");
    els.options = $("options");
    els.backBtn = $("back-btn");
    els.resultName = $("result-name");
    els.resultType = $("result-type");
    els.sealText = $("seal-text");
    els.tagline = $("tagline");
    els.traits = $("result-traits");
    els.reason = $("result-reason");
    els.strength = $("result-strength");
    els.easter = $("result-easter");

    $("start-btn").addEventListener("click", startQuiz);
    $("retake-btn").addEventListener("click", retake);
    els.backBtn.addEventListener("click", goBack);
    els.options.addEventListener("click", function (ev) {
      var btn = ev.target.closest(".option");
      if (!btn || !els.options.contains(btn)) return;
      choose(Number(btn.getAttribute("data-index")));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
