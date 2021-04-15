export default function setStyle(clPref) {

	const cssCode = `
		.${clPref}.calm-theme {
		  background-color: #222; }
		  .${clPref}.calm-theme .${clPref}__line-text {
		    color: #eee; }
		    .${clPref}.calm-theme .${clPref}__line-text .comment {
		      color: #777; }
		    .${clPref}.calm-theme .${clPref}__line-text .string {
		      color: #a98; }
		    .${clPref}.calm-theme .${clPref}__line-text .re {
		      color: #78a; }
		    .${clPref}.calm-theme .${clPref}__line-text .slashed {
		      color: #f90; }
		    .${clPref}.calm-theme .${clPref}__line-text .keyword {
		      color: #78a; }
		    .${clPref}.calm-theme .${clPref}__line-text .string_tag {
		      color: #ddc; }
		    .${clPref}.calm-theme .${clPref}__line-text .word {
		      color: #ddc; }
		    .${clPref}.calm-theme .${clPref}__line-text .operator {
		      color: #78a; }
		    .${clPref}.calm-theme .${clPref}__line-text .punctuation {
		      color: #eee; }
		    .${clPref}.calm-theme .${clPref}__line-text .number {
		      color: #f90; }
		    .${clPref}.calm-theme .${clPref}__line-text .bool {
		      color: #f90; }
		    .${clPref}.calm-theme .${clPref}__line-text .sp_const {
		      color: #f90; }
		    .${clPref}.calm-theme .${clPref}__line-text .paren {
		      color: #ddc; }
		    .${clPref}.calm-theme .${clPref}__line-text .curly {
		      color: #ddc; }
		    .${clPref}.calm-theme .${clPref}__line-text .bracket {
		      color: #ddc; }
		    .${clPref}.calm-theme .${clPref}__line-text .f_name {
		      color: #eee;
		      font-weight: bold; }

		.${clPref}.calm-clarified-theme .${clPref}__line .${clPref}__line-number {
		  background-color: #444; }

		.${clPref}.calm-clarified-theme .${clPref}__line-text {
		  color: #eee; }
		  .${clPref}.calm-clarified-theme .${clPref}__line-text .comment {
		    color: #777; }
		  .${clPref}.calm-clarified-theme .${clPref}__line-text .string {
		    color: #b98; }
		  .${clPref}.calm-clarified-theme .${clPref}__line-text .re {
		    color: #78a; }
		  .${clPref}.calm-clarified-theme .${clPref}__line-text .slashed {
		    color: #fb6; }
		  .${clPref}.calm-clarified-theme .${clPref}__line-text .keyword {
		    color: #78a; }
		  .${clPref}.calm-clarified-theme .${clPref}__line-text .string_tag {
		    color: #ddc; }
		  .${clPref}.calm-clarified-theme .${clPref}__line-text .word {
		    color: #ddc; }
		  .${clPref}.calm-clarified-theme .${clPref}__line-text .operator {
		    color: #78a; }
		  .${clPref}.calm-clarified-theme .${clPref}__line-text .punctuation {
		    color: #eee; }
		  .${clPref}.calm-clarified-theme .${clPref}__line-text .number {
		    color: #fb6; }
		  .${clPref}.calm-clarified-theme .${clPref}__line-text .bool {
		    color: #fb6; }
		  .${clPref}.calm-clarified-theme .${clPref}__line-text .sp_const {
		    color: #fb6; }
		  .${clPref}.calm-clarified-theme .${clPref}__line-text .paren {
		    color: #ddc; }
		  .${clPref}.calm-clarified-theme .${clPref}__line-text .curly {
		    color: #ddc; }
		  .${clPref}.calm-clarified-theme .${clPref}__line-text .bracket {
		    color: #ddc; }
		  .${clPref}.calm-clarified-theme .${clPref}__line-text .f_name {
		    color: #eee;
		    font-weight: bold; }

		.${clPref}.monokai-theme {
		  background-color: #333; }
		  .${clPref}.monokai-theme .${clPref}__line-text .comment {
		    color: #888; }
		  .${clPref}.monokai-theme .${clPref}__line-text .string {
		    color: #da5; }
		  .${clPref}.monokai-theme .${clPref}__line-text .re {
		    color: #da5; }
		  .${clPref}.monokai-theme .${clPref}__line-text .slashed {
		    color: #98f; }
		  .${clPref}.monokai-theme .${clPref}__line-text .keyword {
		    color: #e48; }
		  .${clPref}.monokai-theme .${clPref}__line-text .string_tag {
		    color: #eee; }
		  .${clPref}.monokai-theme .${clPref}__line-text .word {
		    color: #eee; }
		  .${clPref}.monokai-theme .${clPref}__line-text .operator {
		    color: #e48; }
		  .${clPref}.monokai-theme .${clPref}__line-text .punctuation {
		    color: #eee; }
		  .${clPref}.monokai-theme .${clPref}__line-text .number {
		    color: #98f; }
		  .${clPref}.monokai-theme .${clPref}__line-text .bool {
		    color: #98f; }
		  .${clPref}.monokai-theme .${clPref}__line-text .sp_const {
		    color: #98f; }
		  .${clPref}.monokai-theme .${clPref}__line-text .paren {
		    color: #eee; }
		  .${clPref}.monokai-theme .${clPref}__line-text .curly {
		    color: #eee; }
		  .${clPref}.monokai-theme .${clPref}__line-text .bracket {
		    color: #eee; }
		  .${clPref}.monokai-theme .${clPref}__line-text .f_name {
		    color: #3bd; }

		.${clPref}.monokai-clarified-theme {
		  background-color: #444; }
		  .${clPref}.monokai-clarified-theme .${clPref}__line .${clPref}__line-number {
		    background-color: #444; }
		  .${clPref}.monokai-clarified-theme .${clPref}__line-text .comment {
		    color: #888; }
		  .${clPref}.monokai-clarified-theme .${clPref}__line-text .string {
		    color: #da5; }
		  .${clPref}.monokai-clarified-theme .${clPref}__line-text .re {
		    color: #da5; }
		  .${clPref}.monokai-clarified-theme .${clPref}__line-text .slashed {
		    color: #98f; }
		  .${clPref}.monokai-clarified-theme .${clPref}__line-text .keyword {
		    color: #e48; }
		  .${clPref}.monokai-clarified-theme .${clPref}__line-text .string_tag {
		    color: #eee; }
		  .${clPref}.monokai-clarified-theme .${clPref}__line-text .word {
		    color: #eee; }
		  .${clPref}.monokai-clarified-theme .${clPref}__line-text .operator {
		    color: #e48; }
		  .${clPref}.monokai-clarified-theme .${clPref}__line-text .punctuation {
		    color: #eee; }
		  .${clPref}.monokai-clarified-theme .${clPref}__line-text .number {
		    color: #98f; }
		  .${clPref}.monokai-clarified-theme .${clPref}__line-text .bool {
		    color: #98f; }
		  .${clPref}.monokai-clarified-theme .${clPref}__line-text .sp_const {
		    color: #98f; }
		  .${clPref}.monokai-clarified-theme .${clPref}__line-text .paren {
		    color: #eee; }
		  .${clPref}.monokai-clarified-theme .${clPref}__line-text .curly {
		    color: #eee; }
		  .${clPref}.monokai-clarified-theme .${clPref}__line-text .bracket {
		    color: #eee; }
		  .${clPref}.monokai-clarified-theme .${clPref}__line-text .f_name {
		    color: #3bd; }

		.${clPref}.t1-theme .${clPref}__line-text .comment {
		  color: #777; }

		.${clPref}.t1-theme .${clPref}__line-text .string {
		  color: #da5; }

		.${clPref}.t1-theme .${clPref}__line-text .re {
		  color: #da5; }

		.${clPref}.t1-theme .${clPref}__line-text .slashed {
		  color: #98f; }

		.${clPref}.t1-theme .${clPref}__line-text .keyword {
		  color: #e48; }

		.${clPref}.t1-theme .${clPref}__line-text .string_tag {
		  color: #eee; }

		.${clPref}.t1-theme .${clPref}__line-text .word {
		  color: #eee; }

		.${clPref}.t1-theme .${clPref}__line-text .operator {
		  color: #3db; }

		.${clPref}.t1-theme .${clPref}__line-text .punctuation {
		  color: #3db; }

		.${clPref}.t1-theme .${clPref}__line-text .number {
		  color: #98f; }

		.${clPref}.t1-theme .${clPref}__line-text .bool {
		  color: #98f; }

		.${clPref}.t1-theme .${clPref}__line-text .sp_const {
		  color: #98f; }

		.${clPref}.t1-theme .${clPref}__line-text .paren {
		  color: #3db; }

		.${clPref}.t1-theme .${clPref}__line-text .curly {
		  color: #3db; }

		.${clPref}.t1-theme .${clPref}__line-text .bracket {
		  color: #3db; }

		.${clPref}.t1-theme .${clPref}__line-text .f_name {
		  color: #3bd; }
	`;

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