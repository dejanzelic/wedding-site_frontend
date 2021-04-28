import supportedLocales from "@/config/supported-locales"

export function supportedLocalesInclude(locale) {
  return Object.keys(supportedLocales).includes(locale)
}

export function supportedReplacmentLocalesInclude(locale) {
	let replacementLocale = false
	Object.keys(supportedLocales).forEach(l => {
		if(supportedLocales[l].replacements){
			if(supportedLocales[l].replacements.includes(locale)){
				replacementLocale = l
			}
			
		}
	});
	return replacementLocale
  }