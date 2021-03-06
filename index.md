---
layout: default
---

<div class="tab">
  <button class="tablinks" onclick="changeTab(event, 'Mwitt Predictor')" id="defaultOpen">Mwitt Predictor</button>
  <button class="tablinks" onclick="changeTab(event, 'Randomizer')">Randomizer</button>
</div>

<div id="Mwitt Predictor" class="tabcontent">
  <div class="box">
    <div class="row">
      <div class="column"><div class="textblock">Mweor acting as <b>Female</b>:</div><br>

      <label for="breedl">Breed: </label>
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
      <label for="basel">Base Color: #</label>
        <input type="text" id="base" name="base" maxlength="6" size="6"><br>
      <label for="secondaryl">Secondary Color: #</label>
        <input type="text" id="secondary" name="secondary" maxlength="6" size="6"><br>
      <label for="tertiaryl">Tertiary Color: #</label>
        <input type="text" id="tertiary" name="tertiary" maxlength="6" size="6"><br>
      <label for="eyel">Eye Color: #</label>
        <input type="text" id="eye" name="eye" maxlength="6" size="6"><br><br>
      <label for="mlf">Number of Markings:</label>
        <input type="text" id="mlf" name="mlf" maxlength="2" size="2">
        <button id="markinglistf" onclick="addFields('mlf','containerf');">GO</button><br>
        <div id="containerf"></div>
      </div>

      <div class="column"><div class="textblock">Mweor acting as <b>Male</b>:</div><br>

      <label for="breedm">Breed: </label>
        <select name="breedm" id="breedm">
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
      <label for="baseml">Base Color: #</label>
        <input type="text" id="basem" name="basem" maxlength="6" size="6"><br>
      <label for="secondaryml">Secondary Color: #</label>
        <input type="text" id="secondarym" name="secondarym" maxlength="6" size="6"><br>
      <label for="tertiaryml">Tertiary Color: #</label>
        <input type="text" id="tertiarym" name="tertiarym" maxlength="6" size="6"><br>
      <label for="eyel">Eye Color: #</label>
          <input type="text" id="eyem" name="eyem" maxlength="6" size="6"><br><br>
      <label for="mlf">Number of Markings:</label>
        <input type="text" id="mlm" name="mlm" maxlength="2" size="2">
        <button id="markinglistm" onclick="addFields('mlm','containerm');">GO</button><br>
        <div id="containerm"></div>
      </div>
    </div>
    <br><button id="predict" type="button" class="buttonblock" onclick="calculateMwitt()"><b>PREDICT</b></button>
  </div>
  <br>
  <div class="box">
    <div class="row">
      <div class="column">
        <div class="container">
          <div class="textblock"><b>Mwitt Info:</b></div><br>
          <div id="cMwittInfo"></div>
        </div>
      </div>

      <div class="column">
        <div class="textblock"><b>Mwitt Preview:</b></div>
        <canvas id="prevCanvas" width="400" height="300"></canvas>
      </div>
    </div>
  </div>
</div>

<div id="Randomizer" class="tabcontent">
  <div class="box">
    <div class="row">
      <div class="column"><div class="textblock"><b>Mweor Info</b>:</div><br>

      <label for="breedl">Breed: </label>
        <select name="breedr" id="breedr">
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
        </select>
        <input type="checkbox" title="Lock Value" id="breedCheck" name="breedCheck"><br>
      <label for="basel">Base Color: #</label>
        <input type="text" id="baser" name="baser" maxlength="6" size="6">
        <input type="checkbox" title="Lock Value" id="baseCheck" name="baseCheck"><br>
      <label for="secondaryl">Secondary Color: #</label>
        <input type="text" id="secondaryr" name="secondaryr" maxlength="6" size="6">
        <input type="checkbox" title="Lock Value" id="secondaryCheck" name="secondaryCheck"><br>
      <label for="tertiaryl">Tertiary Color: #</label>
        <input type="text" id="tertiaryr" name="tertiaryr" maxlength="6" size="6">
        <input type="checkbox" title="Lock Value" id="tertiaryCheck" name="tertiaryCheck"><br>
      <label for="eyel">Eye Color: #</label>
        <input type="text" id="eyer" name="eyer" maxlength="6" size="6">
        <input type="checkbox" title="Lock Value" id="eyeCheck" name="eyeCheck"><br>
        <input type="checkbox" id="mutCheck" name="mutCheck"> Disable Mutations<br><br>
      <label for="mlr">Number of Markings:</label>
        <input type="text" id="mlr" name="mlr" maxlength="2" size="2">
        <button id="markinglistr" onclick="addFields('mlr','containerr');">GO</button><br>
      <div id="containerr"></div>
      </div>  

      <div class="column"><div class="textblock"><b>Mweor Preview:</b></div>
        <canvas id="randCanvas" width="400" height="300"></canvas>
      </div>

    </div>
    <br><button id="predict" type="button" class="buttonblock" onclick="randomize()"><b>RANDOMIZE</b></button>
  </div>
</div>

<script>
  document.getElementById("defaultOpen").click();
</script>
