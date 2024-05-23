<template>
  <!-- <h1>NumberBaseball</h1> -->

  <div class="keypad_container">
    <div class="keypad">
      <button class="key">1</button>
      <button class="key">2</button>
      <button class="key">3</button>
      <button class="key">4</button>
      <button class="key">5</button>
      <button class="key">6</button>
      <button class="key">7</button>
      <button class="key">8</button>
      <button class="key">9</button>
      <button class="key">delete</button>
      <button class="key">0</button>
      <button class="key">enter</button>
    </div>
  </div>
  <div class="display_container">
    <div class="display">
      <div class="display-box"></div>
      <div class="display-box"></div>
      <div class="display-box"></div>
      <div class="display-box"></div>
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
</style>
