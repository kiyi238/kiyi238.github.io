---
layout: default
---

<div class="row">
  <div class="column">Test</div>
  <div class="column">Test</div>
</div>

.column {
  float: left;
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
