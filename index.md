---
layout: default
---

<div class="row">
  <div class="column">Mweor acting as <b>Female</b>:<br><br>

  <label for="breed">Breed: </label>
    <select name="breed" id="breed">
      <option value="lesser">Lesser</option>
      <option value="longhair">Longhair</option>
      <option value="munchkin">Munchkin</option>
      <option value="fire">Fire</option>
      <option value="air">Air</option>
      <option value="earth">Earth</option>
      <option value="water">Water</option>
      <option value="lightning">Lightning</option>
      <option value="plant">Plant</option>
      <option value="ice">Ice</option>
    </select><br>
  <label for="base">Base Color: #</label>
    <input type="text" id="base" name="base" maxlength="6" size="6"><br>
  <label for="secondary">Secondary Color: #</label>
    <input type="text" id="secondary" name="secondary" maxlength="6" size="6"><br>
  <label for="tertiary">Tertiary Color: #</label>
    <input type="text" id="tertiary" name="tertiary" maxlength="6" size="6"><br><br>
  <label for="mlf">Number of Markings:</label>
    <input type="text" id="mlf" name="mlf" maxlength="2" size="2">
    <button id="markinglistf" onclick="addFields('mlf','containerf';)">GO</button><br>
    <div id="containerf"></div>
  </div>

  <div class="column">Mweor acting as <b>Male</b>:<br><br>

  <label for="breedm">Breed: </label>
    <select name="breedm" id="breed">
      <option value="lesser">Lesser</option>
      <option value="longhair">Longhair</option>
      <option value="munchkin">Munchkin</option>
      <option value="fire">Fire</option>
      <option value="air">Air</option>
      <option value="earth">Earth</option>
      <option value="water">Water</option>
      <option value="lightning">Lightning</option>
      <option value="plant">Plant</option>
      <option value="ice">Ice</option>
    </select><br>
  <label for="basem">Base Color: #</label>
    <input type="text" id="base" name="base" maxlength="6" size="6"><br>
  <label for="secondarym">Secondary Color: #</label>
    <input type="text" id="secondary" name="secondary" maxlength="6" size="6"><br>
  <label for="tertiarym">Tertiary Color: #</label>
    <input type="text" id="tertiary" name="tertiary" maxlength="6" size="6"><br><br>
  <label for="mlf">Number of Markings:</label>
    <input type="text" id="mlm" name="mlm" maxlength="2" size="2">
    <button id="markinglistm" onclick="addFields('mlm','containerm')';>GO</button><br>
    <div id="containerm"></div>
  </div>
</div>

<div class="container">
  <div class="center">

  <button id="predict" onclick="calculator()">PREDICT</button><br>

  </div>
</div>
