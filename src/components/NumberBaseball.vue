<script setup>
import { onMounted, reactive, ref, watch } from 'vue'
import { useModalStore } from '../stores/modal'
import { useRestartStore } from '../stores/restart'

const correctAnswer = ref([])
// 동적 div를 저장할 배열
const dynamicDivs = ref([])

const modal = useModalStore()
const restart = useRestartStore()

watch(restart, () => {
  if (restart.getState()) {
    initCorrectAnswer()
    dynamicDivs.value = []
    restart.restartChange()
  }
})

const checkDuplication = (num) => {
  let value = num
  for (let i = 0; i < correctAnswer.value.length; i++) {
    if (num === correctAnswer.value[i]) {
      value = checkDuplication(Math.floor(Math.random() * 10))
      break
    }
  }
  return value
}

function initCorrectAnswer() {
  correctAnswer.value[0] = Math.floor(Math.random() * 10)
  correctAnswer.value[1] = checkDuplication(Math.floor(Math.random() * 10))
  correctAnswer.value[2] = checkDuplication(Math.floor(Math.random() * 10))
  correctAnswer.value[3] = checkDuplication(Math.floor(Math.random() * 10))
  console.log(correctAnswer.value)
}
onMounted(() => {
  initCorrectAnswer()
})

const inputBox = reactive({
  first: '',
  second: '',
  third: '',
  forth: '',
  index: 0
})

const compColor = ref(['', '', '', ''])
const compResult = ref([0, 0])

const keys = Object.keys(inputBox)

const inputKeypad = (value) => {
  if (value === 'delete') {
    if (inputBox.index > 0) {
      inputBox.index--
      inputBox[keys[inputBox.index]] = ''
    }
  } else if (value === 'enter') {
    if (
      inputBox.first === '' ||
      inputBox.second === '' ||
      inputBox.third === '' ||
      inputBox.forth === ''
    ) {
      return alert('4자리 숫자 다 채우세요~~~~~~~~~~~~~~~~')
    }
    addDiv()
    if (compResult.value[0] === 4) {
      modal.showChange()
    }
    inputBox.index = 0
    inputBox.first = ''
    inputBox.second = ''
    inputBox.third = ''
    inputBox.forth = ''
    compResult.value[0] = 0
    compResult.value[1] = 0
  } else {
    if (inputBox.index < 4) {
      inputBox[keys[inputBox.index]] = value
      inputBox.index++
    }
  }
  console.log(inputBox)
}
function checkprops() {
  for (let i = 0; i < 4; i++) {
    console.log(inputBox[keys[i]])
    console.log(correctAnswer.value)
    console.log(correctAnswer.value.includes(Number(inputBox[keys[i]])))
    if (inputBox[keys[i]] == correctAnswer.value[i]) {
      compColor.value[i] = 'green'
      compResult.value[0]++
    } else if (correctAnswer.value.includes(Number(inputBox[keys[i]]))) {
      compColor.value[i] = 'yellow'
      compResult.value[1]++
    } else {
      compColor.value[i] = 'red'
    }
  }
  console.log(compColor.value)
  console.log(compResult.value)
}
// 함수를 통해 동적 div를 추가합니다
function addDiv() {
  checkprops()
  const newDiv = `<div class="result-box" style="background: ${compColor.value[0]}">${inputBox.first}</div>
                  <div class="result-box" style="background: ${compColor.value[1]}">${inputBox.second}</div>
                  <div class="result-box" style="background: ${compColor.value[2]}">${inputBox.third}</div>
                  <div class="result-box" style="background: ${compColor.value[3]}">${inputBox.forth}</div>
                  <div class="answer">${compResult.value[0]}S ${compResult.value[1]}B</div>`
  dynamicDivs.value.push(newDiv)
}
</script>

<template>
  <div class="keypad_container">
    <div class="keypad">
      <button class="key" @click="inputKeypad('1')">1</button>
      <button class="key" @click="inputKeypad('2')">2</button>
      <button class="key" @click="inputKeypad('3')">3</button>
      <button class="key" @click="inputKeypad('4')">4</button>
      <button class="key" @click="inputKeypad('5')">5</button>
      <button class="key" @click="inputKeypad('6')">6</button>
      <button class="key" @click="inputKeypad('7')">7</button>
      <button class="key" @click="inputKeypad('8')">8</button>
      <button class="key" @click="inputKeypad('9')">9</button>
      <button class="key" @click="inputKeypad('delete')">delete</button>
      <button class="key" @click="inputKeypad('0')">0</button>
      <button class="key" @click="inputKeypad('enter')">enter</button>
    </div>
  </div>
  <div>
    <div class="display_container">
      <div class="display">
        <div class="display-box">{{ inputBox.first }}</div>
        <div class="display-box">{{ inputBox.second }}</div>
        <div class="display-box">{{ inputBox.third }}</div>
        <div class="display-box">{{ inputBox.forth }}</div>
      </div>
    </div>
    <!-- 여기에서 동적으로 생성된 div들을 렌더링합니다 -->
    <div class="result">
      <div
        v-for="(div, index) in dynamicDivs"
        :key="index"
        v-html="div"
        style="display: flex"
      ></div>
    </div>
  </div>
</template>

<style>
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #ffffff;
}

.display_container {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: red;
}
.keypad_container {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.display {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 100%;
}

.display-box {
  width: 80px;
  height: 100px;
  background-color: #f8f7f7;
  border-radius: 5px;
  margin: 5px;
  border: solid black 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: xxx-large;
  font-weight: 900;
  color: black;
}

.keypad {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding: 10px;
  background: beige;
}

.key {
  width: 80px;
  height: 80px;
  background-color: #ddd;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.key:hover {
  background-color: #ccc;
}

.result {
  width: 100%;
}

.result-box {
  width: 60px;
  height: 80px;
  background-color: #f8f7f7;
  border: solid black 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: xxx-large;
  font-weight: 900;
  color: black;
}
.answer {
  font-size: 30px;
  font-weight: 900;
  color: blue;
  display: flex;
  align-items: center;
  margin-left: 20px;
}
</style>
