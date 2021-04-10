export default function setStyle(clPref) {

	const cssCode = `
		pre.${clPref}.calm-theme {
		  background-color: #222; }
		  pre.${clPref}.calm-theme .${clPref}__line-text {
		    color: #eee; }
		    pre.${clPref}.calm-theme .${clPref}__line-text .comment {
		      color: #777; }
		    pre.${clPref}.calm-theme .${clPref}__line-text .string {
		      color: #a98; }
		    pre.${clPref}.calm-theme .${clPref}__line-text .re {
		      color: #78a; }
		    pre.${clPref}.calm-theme .${clPref}__line-text .slashed {
		      color: #f90; }
		    pre.${clPref}.calm-theme .${clPref}__line-text .keyword {
		      color: #78a; }
		    pre.${clPref}.calm-theme .${clPref}__line-text .string_tag {
		      color: #ddc; }
		    pre.${clPref}.calm-theme .${clPref}__line-text .word {
		      color: #ddc; }
		    pre.${clPref}.calm-theme .${clPref}__line-text .operator {
		      color: #78a; }
		    pre.${clPref}.calm-theme .${clPref}__line-text .punctuation {
		      color: #eee; }
		    pre.${clPref}.calm-theme .${clPref}__line-text .number {
		      color: #f90; }
		    pre.${clPref}.calm-theme .${clPref}__line-text .bool {
		      color: #f90; }
		    pre.${clPref}.calm-theme .${clPref}__line-text .sp_const {
		      color: #f90; }
		    pre.${clPref}.calm-theme .${clPref}__line-text .paren {
		      color: #ddc; }
		    pre.${clPref}.calm-theme .${clPref}__line-text .curly {
		      color: #ddc; }
		    pre.${clPref}.calm-theme .${clPref}__line-text .bracket {
		      color: #ddc; }
		    pre.${clPref}.calm-theme .${clPref}__line-text .f_name {
		      color: #eee;
		      font-weight: bold; }

		pre.${clPref}.calm-clarified-theme .${clPref}__line .${clPref}__line-number {
		  background-color: #444; }

		pre.${clPref}.calm-clarified-theme .${clPref}__line-text {
		  color: #eee; }
		  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .comment {
		    color: #777; }
		  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .string {
		    color: #b98; }
		  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .re {
		    color: #78a; }
		  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .slashed {
		    color: #fb6; }
		  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .keyword {
		    color: #78a; }
		  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .string_tag {
		    color: #ddc; }
		  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .word {
		    color: #ddc; }
		  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .operator {
		    color: #78a; }
		  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .punctuation {
		    color: #eee; }
		  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .number {
		    color: #fb6; }
		  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .bool {
		    color: #fb6; }
		  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .sp_const {
		    color: #fb6; }
		  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .paren {
		    color: #ddc; }
		  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .curly {
		    color: #ddc; }
		  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .bracket {
		    color: #ddc; }
		  pre.${clPref}.calm-clarified-theme .${clPref}__line-text .f_name {
		    color: #eee;
		    font-weight: bold; }

		pre.${clPref}.monokai-theme {
		  background-color: #333; }
		  pre.${clPref}.monokai-theme .${clPref}__line-text .comment {
		    color: #888; }
		  pre.${clPref}.monokai-theme .${clPref}__line-text .string {
		    color: #da5; }
		  pre.${clPref}.monokai-theme .${clPref}__line-text .re {
		    color: #da5; }
		  pre.${clPref}.monokai-theme .${clPref}__line-text .slashed {
		    color: #98f; }
		  pre.${clPref}.monokai-theme .${clPref}__line-text .keyword {
		    color: #e48; }
		  pre.${clPref}.monokai-theme .${clPref}__line-text .string_tag {
		    color: #eee; }
		  pre.${clPref}.monokai-theme .${clPref}__line-text .word {
		    color: #eee; }
		  pre.${clPref}.monokai-theme .${clPref}__line-text .operator {
		    color: #e48; }
		  pre.${clPref}.monokai-theme .${clPref}__line-text .punctuation {
		    color: #eee; }
		  pre.${clPref}.monokai-theme .${clPref}__line-text .number {
		    color: #98f; }
		  pre.${clPref}.monokai-theme .${clPref}__line-text .bool {
		    color: #98f; }
		  pre.${clPref}.monokai-theme .${clPref}__line-text .sp_const {
		    color: #98f; }
		  pre.${clPref}.monokai-theme .${clPref}__line-text .paren {
		    color: #eee; }
		  pre.${clPref}.monokai-theme .${clPref}__line-text .curly {
		    color: #eee; }
		  pre.${clPref}.monokai-theme .${clPref}__line-text .bracket {
		    color: #eee; }
		  pre.${clPref}.monokai-theme .${clPref}__line-text .f_name {
		    color: #3bd; }

		pre.${clPref}.monokai-clarified-theme {
		  background-color: #444; }
		  pre.${clPref}.monokai-clarified-theme .${clPref}__line .${clPref}__line-number {
		    background-color: #444; }
		  pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .comment {
		    color: #888; }
		  pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .string {
		    color: #da5; }
		  pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .re {
		    color: #da5; }
		  pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .slashed {
		    color: #98f; }
		  pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .keyword {
		    color: #e48; }
		  pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .string_tag {
		    color: #eee; }
		  pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .word {
		    color: #eee; }
		  pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .operator {
		    color: #e48; }
		  pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .punctuation {
		    color: #eee; }
		  pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .number {
		    color: #98f; }
		  pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .bool {
		    color: #98f; }
		  pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .sp_const {
		    color: #98f; }
		  pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .paren {
		    color: #eee; }
		  pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .curly {
		    color: #eee; }
		  pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .bracket {
		    color: #eee; }
		  pre.${clPref}.monokai-clarified-theme .${clPref}__line-text .f_name {
		    color: #3bd; }

		pre.${clPref}.t1-theme .${clPref}__line-text .comment {
		  color: #777; }

		pre.${clPref}.t1-theme .${clPref}__line-text .string {
		  color: #da5; }

		pre.${clPref}.t1-theme .${clPref}__line-text .re {
		  color: #da5; }

		pre.${clPref}.t1-theme .${clPref}__line-text .slashed {
		  color: #98f; }

		pre.${clPref}.t1-theme .${clPref}__line-text .keyword {
		  color: #e48; }

		pre.${clPref}.t1-theme .${clPref}__line-text .string_tag {
		  color: #eee; }

		pre.${clPref}.t1-theme .${clPref}__line-text .word {
		  color: #eee; }

		pre.${clPref}.t1-theme .${clPref}__line-text .operator {
		  color: #3db; }

		pre.${clPref}.t1-theme .${clPref}__line-text .punctuation {
		  color: #3db; }

		pre.${clPref}.t1-theme .${clPref}__line-text .number {
		  color: #98f; }

		pre.${clPref}.t1-theme .${clPref}__line-text .bool {
		  color: #98f; }

		pre.${clPref}.t1-theme .${clPref}__line-text .sp_const {
		  color: #98f; }

		pre.${clPref}.t1-theme .${clPref}__line-text .paren {
		  color: #3db; }

		pre.${clPref}.t1-theme .${clPref}__line-text .curly {
		  color: #3db; }

		pre.${clPref}.t1-theme .${clPref}__line-text .bracket {
		  color: #3db; }

		pre.${clPref}.t1-theme .${clPref}__line-text .f_name {
		  color: #3bd; }

		/*# sourceMappingURL=themes.css.map */
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