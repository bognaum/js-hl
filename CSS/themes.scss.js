export default function setStyle(clPref) {

	const cssCode = `.js-hl.calm-theme {
  background-color: #222;
}
.js-hl.calm-theme .js-hl__line-text {
  color: #eee;
}
.js-hl.calm-theme .js-hl__line-text .comment {
  color: #777;
}
.js-hl.calm-theme .js-hl__line-text .string {
  color: #a98;
}
.js-hl.calm-theme .js-hl__line-text .re {
  color: #78a;
}
.js-hl.calm-theme .js-hl__line-text .slashed {
  color: #f90;
}
.js-hl.calm-theme .js-hl__line-text .keyword {
  color: #78a;
}
.js-hl.calm-theme .js-hl__line-text .string_tag {
  color: #ddc;
}
.js-hl.calm-theme .js-hl__line-text .word {
  color: #ddc;
}
.js-hl.calm-theme .js-hl__line-text .operator {
  color: #78a;
}
.js-hl.calm-theme .js-hl__line-text .punctuation {
  color: #eee;
}
.js-hl.calm-theme .js-hl__line-text .number {
  color: #f90;
}
.js-hl.calm-theme .js-hl__line-text .bool {
  color: #f90;
}
.js-hl.calm-theme .js-hl__line-text .sp_const {
  color: #f90;
}
.js-hl.calm-theme .js-hl__line-text .paren {
  color: #ddc;
}
.js-hl.calm-theme .js-hl__line-text .curly {
  color: #ddc;
}
.js-hl.calm-theme .js-hl__line-text .bracket {
  color: #ddc;
}
.js-hl.calm-theme .js-hl__line-text .f_name {
  color: #eee;
  font-weight: bold;
}

.js-hl.calm-clarified-theme .js-hl__line .js-hl__line-number {
  background-color: #444;
}
.js-hl.calm-clarified-theme .js-hl__line-text {
  color: #eee;
}
.js-hl.calm-clarified-theme .js-hl__line-text .comment {
  color: #777;
}
.js-hl.calm-clarified-theme .js-hl__line-text .string {
  color: #b98;
}
.js-hl.calm-clarified-theme .js-hl__line-text .re {
  color: #78a;
}
.js-hl.calm-clarified-theme .js-hl__line-text .slashed {
  color: #fb6;
}
.js-hl.calm-clarified-theme .js-hl__line-text .keyword {
  color: #78a;
}
.js-hl.calm-clarified-theme .js-hl__line-text .string_tag {
  color: #ddc;
}
.js-hl.calm-clarified-theme .js-hl__line-text .word {
  color: #ddc;
}
.js-hl.calm-clarified-theme .js-hl__line-text .operator {
  color: #78a;
}
.js-hl.calm-clarified-theme .js-hl__line-text .punctuation {
  color: #eee;
}
.js-hl.calm-clarified-theme .js-hl__line-text .number {
  color: #fb6;
}
.js-hl.calm-clarified-theme .js-hl__line-text .bool {
  color: #fb6;
}
.js-hl.calm-clarified-theme .js-hl__line-text .sp_const {
  color: #fb6;
}
.js-hl.calm-clarified-theme .js-hl__line-text .paren {
  color: #ddc;
}
.js-hl.calm-clarified-theme .js-hl__line-text .curly {
  color: #ddc;
}
.js-hl.calm-clarified-theme .js-hl__line-text .bracket {
  color: #ddc;
}
.js-hl.calm-clarified-theme .js-hl__line-text .f_name {
  color: #eee;
  font-weight: bold;
}

.js-hl.monokai-theme {
  background-color: #333;
}
.js-hl.monokai-theme .js-hl__line-text .comment {
  color: #888;
}
.js-hl.monokai-theme .js-hl__line-text .string {
  color: #da5;
}
.js-hl.monokai-theme .js-hl__line-text .re {
  color: #da5;
}
.js-hl.monokai-theme .js-hl__line-text .slashed {
  color: #98f;
}
.js-hl.monokai-theme .js-hl__line-text .keyword {
  color: #e48;
}
.js-hl.monokai-theme .js-hl__line-text .string_tag {
  color: #eee;
}
.js-hl.monokai-theme .js-hl__line-text .word {
  color: #eee;
}
.js-hl.monokai-theme .js-hl__line-text .operator {
  color: #e48;
}
.js-hl.monokai-theme .js-hl__line-text .punctuation {
  color: #eee;
}
.js-hl.monokai-theme .js-hl__line-text .number {
  color: #98f;
}
.js-hl.monokai-theme .js-hl__line-text .bool {
  color: #98f;
}
.js-hl.monokai-theme .js-hl__line-text .sp_const {
  color: #98f;
}
.js-hl.monokai-theme .js-hl__line-text .paren {
  color: #eee;
}
.js-hl.monokai-theme .js-hl__line-text .curly {
  color: #eee;
}
.js-hl.monokai-theme .js-hl__line-text .bracket {
  color: #eee;
}
.js-hl.monokai-theme .js-hl__line-text .f_name {
  color: #3bd;
}

.js-hl.monokai-clarified-theme {
  background-color: #444;
}
.js-hl.monokai-clarified-theme .js-hl__line .js-hl__line-number {
  background-color: #444;
}
.js-hl.monokai-clarified-theme .js-hl__line-text .comment {
  color: #888;
}
.js-hl.monokai-clarified-theme .js-hl__line-text .string {
  color: #da5;
}
.js-hl.monokai-clarified-theme .js-hl__line-text .re {
  color: #da5;
}
.js-hl.monokai-clarified-theme .js-hl__line-text .slashed {
  color: #98f;
}
.js-hl.monokai-clarified-theme .js-hl__line-text .keyword {
  color: #e48;
}
.js-hl.monokai-clarified-theme .js-hl__line-text .string_tag {
  color: #eee;
}
.js-hl.monokai-clarified-theme .js-hl__line-text .word {
  color: #eee;
}
.js-hl.monokai-clarified-theme .js-hl__line-text .operator {
  color: #e48;
}
.js-hl.monokai-clarified-theme .js-hl__line-text .punctuation {
  color: #eee;
}
.js-hl.monokai-clarified-theme .js-hl__line-text .number {
  color: #98f;
}
.js-hl.monokai-clarified-theme .js-hl__line-text .bool {
  color: #98f;
}
.js-hl.monokai-clarified-theme .js-hl__line-text .sp_const {
  color: #98f;
}
.js-hl.monokai-clarified-theme .js-hl__line-text .paren {
  color: #eee;
}
.js-hl.monokai-clarified-theme .js-hl__line-text .curly {
  color: #eee;
}
.js-hl.monokai-clarified-theme .js-hl__line-text .bracket {
  color: #eee;
}
.js-hl.monokai-clarified-theme .js-hl__line-text .f_name {
  color: #3bd;
}

.js-hl.t1-theme .js-hl__line-text .comment {
  color: #777;
}
.js-hl.t1-theme .js-hl__line-text .string {
  color: #da5;
}
.js-hl.t1-theme .js-hl__line-text .re {
  color: #da5;
}
.js-hl.t1-theme .js-hl__line-text .slashed {
  color: #98f;
}
.js-hl.t1-theme .js-hl__line-text .keyword {
  color: #e48;
}
.js-hl.t1-theme .js-hl__line-text .string_tag {
  color: #eee;
}
.js-hl.t1-theme .js-hl__line-text .word {
  color: #eee;
}
.js-hl.t1-theme .js-hl__line-text .operator {
  color: #3db;
}
.js-hl.t1-theme .js-hl__line-text .punctuation {
  color: #3db;
}
.js-hl.t1-theme .js-hl__line-text .number {
  color: #98f;
}
.js-hl.t1-theme .js-hl__line-text .bool {
  color: #98f;
}
.js-hl.t1-theme .js-hl__line-text .sp_const {
  color: #98f;
}
.js-hl.t1-theme .js-hl__line-text .paren {
  color: #3db;
}
.js-hl.t1-theme .js-hl__line-text .curly {
  color: #3db;
}
.js-hl.t1-theme .js-hl__line-text .bracket {
  color: #3db;
}
.js-hl.t1-theme .js-hl__line-text .f_name {
  color: #3bd;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlOi8vL0Q6L0dpdEh1Yi1teS9qcy1obC9jc3MvdGhlbWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQzs7QUFDQTtFQUNDOztBQUNBO0VBQWdCOztBQUNoQjtFQUFnQjs7QUFDaEI7RUFBZ0I7O0FBQ2hCO0VBQWdCOztBQUNoQjtFQUFnQjs7QUFDaEI7RUFBZ0I7O0FBQ2hCO0VBQWdCOztBQUNoQjtFQUFnQjs7QUFDaEI7RUFBZ0I7O0FBQ2hCO0VBQWdCOztBQUNoQjtFQUFnQjs7QUFDaEI7RUFBZ0I7O0FBQ2hCO0VBQWdCOztBQUNoQjtFQUFnQjs7QUFDaEI7RUFBZ0I7O0FBQ2hCO0VBQWdCO0VBQWE7OztBQU05QjtFQUNDOztBQUdEO0VBQ0M7O0FBQ0E7RUFBZ0I7O0FBQ2hCO0VBQWdCOztBQUNoQjtFQUFnQjs7QUFDaEI7RUFBZ0I7O0FBQ2hCO0VBQWdCOztBQUNoQjtFQUFnQjs7QUFDaEI7RUFBZ0I7O0FBQ2hCO0VBQWdCOztBQUNoQjtFQUFnQjs7QUFDaEI7RUFBZ0I7O0FBQ2hCO0VBQWdCOztBQUNoQjtFQUFnQjs7QUFDaEI7RUFBZ0I7O0FBQ2hCO0VBQWdCOztBQUNoQjtFQUFnQjs7QUFDaEI7RUFBZ0I7RUFBYTs7O0FBTS9CO0VBQ0M7O0FBRUM7RUFBYzs7QUFDZDtFQUFjOztBQUNkO0VBQWM7O0FBQ2Q7RUFBYzs7QUFDZDtFQUFjOztBQUNkO0VBQWM7O0FBQ2Q7RUFBYzs7QUFDZDtFQUFjOztBQUNkO0VBQWM7O0FBQ2Q7RUFBYzs7QUFDZDtFQUFjOztBQUNkO0VBQWM7O0FBQ2Q7RUFBYzs7QUFDZDtFQUFjOztBQUNkO0VBQWM7O0FBQ2Q7RUFBYzs7O0FBSWhCO0VBQ0M7O0FBQ0E7RUFDQzs7QUFJQTtFQUFjOztBQUNkO0VBQWM7O0FBQ2Q7RUFBYzs7QUFDZDtFQUFjOztBQUNkO0VBQWM7O0FBQ2Q7RUFBYzs7QUFDZDtFQUFjOztBQUNkO0VBQWM7O0FBQ2Q7RUFBYzs7QUFDZDtFQUFjOztBQUNkO0VBQWM7O0FBQ2Q7RUFBYzs7QUFDZDtFQUFjOztBQUNkO0VBQWM7O0FBQ2Q7RUFBYzs7QUFDZDtFQUFjOzs7QUFPZDtFQUFjOztBQUNkO0VBQWM7O0FBQ2Q7RUFBYzs7QUFDZDtFQUFjOztBQUNkO0VBQWM7O0FBQ2Q7RUFBYzs7QUFDZDtFQUFjOztBQUNkO0VBQWM7O0FBQ2Q7RUFBYzs7QUFDZDtFQUFjOztBQUNkO0VBQWM7O0FBQ2Q7RUFBYzs7QUFDZDtFQUFjOztBQUNkO0VBQWM7O0FBQ2Q7RUFBYzs7QUFDZDtFQUFjIiwiZmlsZSI6InRoZW1lcy5zY3NzLmpzIn0= */`.replaceAll(/\bjs-hl/g, clPref);

	const styleClassName = `${clPref}__theme-style`;

	const styleAlreadyExists = [].some.call(
		document.querySelectorAll(`style.${styleClassName}`), 
		(v) => v.textContent === cssCode
	);

	if (! styleAlreadyExists) {
		const style = eHTML(`<style class="${styleClassName}"></style>`);
		style.textContent = cssCode;
		document.head.appendChild(style);
	}
}


function eHTML(code, shell=null) {
	const _shell = 
		! shell                  ? document.createElement("div") :
		typeof shell == "string" ? document.createElement(shell) :
		typeof shell == "object" ? shell :
			null;
	_shell.innerHTML = code;
	return _shell.children[0];
}