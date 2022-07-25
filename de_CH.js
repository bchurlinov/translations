export default {
'dateFormatter.shortDate': date => date ? `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}` : ' - ', 
'monthFormatter': date => date ? date.toLocaleString('de-CH', {year: 'numeric', month: 'long'}) : ' - ', 
'weekFormatter': date => date ? `W${getWeek(date)} ${date.getFullYear()}` : ' - ', 
'priceFormatter': (price, currency) => (currency&&price) ? price.toLocaleString('de-CH', {style: 'currency', currency}) : price ? price.toLocaleString('de-CH', {minimumFractionDigits: 2, maximumFractionDigits: 2}):0, 
'numberFormatter': (number) => number ? number.toLocaleString('de-CH', {minimumFractionDigits: 0, maximumFractionDigits: 0}):0, 
'twoDigitFormatter': (number) => number ? number.toLocaleString('de-CH', {minimumFractionDigits: 2, maximumFractionDigits: 2}):0, 
'passwordValidationRules': minLength => `Passwort muss mindestens ${minLength} Zeichen lang sein und aus Gross-, Kleinbuchstaben, Zahlen und einem Sonderzeichen bestehen.`, 
'passwordLengthError': (minLength, maxLength) => `Passwort muss mindestens ${minLength} Zeichen lang sein.`, 
'passwordChangeFailed': logNumber => `Password konnte nicht aktualisiert werden. Technische Details finden Sie im Log #${logNumber}.`, 
'proAnalytics.jobCountStatistics.average': (value) =>
		`${Number(value).toLocaleString('de-CH', { maximumFractionDigits: 2 })} Offene Stellen im Durchschnitt/Tag`, 
'proAnalytics.search.termEverywhere': ({ searchTerm, hitCount }) =>
		`Ergebnisse für '${searchTerm}' ${hitCount === undefined ? '' : `(${hitCount})`}`, 
'proAnalytics.search.termInColumn': ({ searchTerm, fieldName, hitCount }) =>
		`Ergebnisse für '${searchTerm}' in ${fieldName} (${hitCount})`, 
'proAnalytics.search.resultInfo': ({ searchTerm, fieldName, hitCount }) =>
		`${hitCount} ${hitCount === 1 ? 'Ergebnis' : 'Ergebnisse'} für ${searchTerm} in ${fieldName}`, 
'proAnalytics.search.jobTitle': (jobTitle) => `Job-Titel: '${jobTitle}'`, 
'proAnalytics.search.externalJobTitle': (jobTitle) => `Externer Job-Titel: '${jobTitle}'`, 
'proAnalytics.search.postingId': (id) => `Stellennummer: '${id}'`, 
'proAnalytics.search.publicationId': (id) => `Publikationsnummer: '${id}'`, 
'proAnalytics.search.orderId': (id) => `Auftragsnummer: '${id}'`, 
'proAnalytics.dateRange.autoCorrectionWarning': ({ start, end }) =>
		`Es stehen Daten der letzten zwei Jahre zur Verfügung. Ihr Filter wurde dementsprechend angepasst.`, 
'proAnalytics.dictionaries.error': ({ logNumber }) =>
		'Filter Dictionaries konnte nicht aktualisiert werden. Technische Details finden Sie im Log #${logNumber}.', 
'proAnalytics.search.error': ({ logNumber }) =>
		`Die Suche ist fehlgeschlagen. Technische Details finden Sie im Log #${logNumber}.`, 
'proAnalytics.jobCount.error': ({ logNumber }) =>
		`Anzahl Stellen konnte nicht geladen werden. Technische Details finden Sie im Log #${logNumber}.`, 
'proAnalytics.performance.error': ({ logNumber }) =>
		`Daten von Performance konnten nicht geladen werden. Technische Details finden Sie im Log #${logNumber}.`, 
'proAnalytics.candidateJourney.error': ({ logNumber }) =>
		`Daten von Candidate Journey konnten nicht geladen werden. Technische Details finden Sie im Log #${logNumber}.`, 
'proAnalytics.costs.error': ({ logNumber }) =>
		`Kostendaten konnten nicht geladen werden. Technische Details finden Sie im Log #${logNumber}.`, 
'proAnalytics.kpi.error': ({ logNumber }) =>
		`KPI-Daten konnten nicht geladen werden. Technische Details finden Sie im Log #${logNumber}.`, 
'proAnalytics.careerCenter.error': ({ logNumber }) =>
		`Stellenmarktstatistiken konnten nicht geladen werden. Technische Details finden Sie im Log #${logNumber}.`, 
'proAnalytics.maxDatasetsNumberInfo': (maxDatasetsNumber) =>
		`Sie können maximal ${maxDatasetsNumber} Datasets anzeigen.`, 
'other': (count) => (count !== undefined ? `Andere (${count})` : 'Andere'), 
'checkLog': (logNumber) => `Technische Details finden Sie im Log #${logNumber}.`, 
'unexpectedError': ({ logNumber }) =>
		`Etwas ist schiefgelaufen. Technische Details finden Sie im Log #${logNumber}.`, 
}