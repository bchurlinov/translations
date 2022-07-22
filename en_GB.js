export default {
dateFormatter: date => date ? `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}` : ' - ', 
dateFormatter.shortDate: date => date ? `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getFullYear()}` : ' - ', 
monthFormatter: date => date ? date.toLocaleString('de-DE', {year: 'numeric', month: 'long'}) : ' - ', 
weekFormatter: date => date ? `W${getWeek(date)} ${date.getFullYear()}` : ' - ', 
priceFormatter: (price, currency) => currency ? price.toLocaleString('de-DE', {style: 'currency', currency}) : price.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2}), 
numberFormatter: (number) => number ? number.toLocaleString('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}):0, 
twoDigitFormatter: (number) => number ? number.toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2}):0, 
'loadingDictionaries': 'Metadaten werden geladen', 
'loadingDictionariesFailed': 'Laden der Metadaten ist fehlgeschlagen', 
'loadingPermissions': 'Berechtigungen werden geladen', 
'loadingPermissionsFailed': 'Laden der Berechtigungen ist fehlgeschlagen', 
'login': 'Anmelden', 
'loginFailed': 'Einloggen ist fehlgeschlagen', 
'logout': 'Abmelden', 
'email': 'E-Mail', 
'name': 'Name', 
'username': 'Benutzername', 
'password': 'Passwort', 
'currentPassword': 'Aktuelles Passwort', 
'newPassword': 'Neues Passwort', 
'repeatNewPassword': 'Neues Passwort wiederholen', 
'changePassword': 'Passwort �ndern', 
'incorrectPassword': 'Passwort ist nicht korrekt.', 
passwordValidationRules: minLength => `Passwort muss mindestens ${minLength} Zeichen lang sein und aus Gross-, Kleinbuchstaben, Zahlen und einem Sonderzeichen bestehen.`, 
passwordLengthError: (minLength, maxLength) => `Passwort muss mindestens ${minLength} Zeichen lang sein.`, 
'repeatedPasswordMismatchError': 'Neues Passwort stimmt nicht �berein.', 
'passwordSpecialCharacterError': 'Passwort muss mindestens ein Sonderzeichen enthalten.', 
'passwordUpperCaseLetterError': 'Passwort muss mindestens einen Grossbuchstaben enthalten.', 
'passwordLowerCaseLetterError': 'Passwort muss mindestens einen Kleinbuchstaben enthalten.', 
'passwordDigitError': 'Passwort muss mindestens eine Zahl enthalten.', 
'currentPasswordIsRequiredError': 'Um ein neues Passwort zu setzen, geben Sie bitte das Aktuelle auch ein.', 
'newPasswordIsRequiredError': 'Neues Passwort ist ein Pflichtfeld.', 
'passwordConfirmationIsRequiredError': 'Bitte geben Sie das neue Password nochmal ein.', 
'applyNewPassword': 'Neues Passwort �bernehmen', 
'passwordChangeRequestFailed': 'Beim Speichern des neuen Passworts auf dem Server ist ein Fehler aufgetreten.', 
'passwordChangeSuccess': 'Passwort wurde aktualisiert.', 
'register': 'Registrieren', 
'forgotPassword': 'Passwort vergessen?', 
'resetPassword': 'Passwort zur�cksetzen', 
'authentication.description': 'Haben Sie bereits ein Login? Dann geben Sie Ihre Anmeldedaten ein oder registrieren Sie sich.', 
'authentication.initializationError': 'Bei der Initialisierung des Authentifizierungsprozesses ist ein Fehler aufgetreten.', 
'insufficientPermissions': 'Unzureichende Berechtigungen', 
'home': 'Home', 
'dateRange': 'Laufzeit', 
'organizationStructure': 'Organisationsstruktur', 
'proAnalytics': 'ProAnalytics', 
'proAnalytics.title': 'ProAnalytics', 
'proAnalytics.dashboard': 'ProAnalytics Dashboard', 
'proAnalytics.selectOrganisationNodeRequest': 'Bitte setzen Sie zuerst den Filter Organisationsstruktur ein.', 
'proAnalytics.jobCountStatistics': 'Anzahl Stellen', 
proAnalytics.jobCountStatistics.average: (value) =>
		`${Number(value).toLocaleString(de-CH, { maximumFractionDigits: 2 })} Offene Stellen im Durchschnitt/Tag`, 
'proAnalytics.performanceStatistics': 'Performance', 
'proAnalytics.performanceStatisticsActionType': 'AktionsTyp', 
'proAnalytics.viewBy.fieldOfActivity': 'Berufsgruppe', 
'proAnalytics.careerCenterStatisticsActionType': 'AktionsTyp', 
'proAnalytics.careerCenterStatistics': 'Ihr Stellenmarkt', 
'proAnalytics.careerCenterStatisticsUtm': 'Stellenaufrufe nach UTM', 
'proAnalytics.careerCenterStatisticsSearch': 'Suchbegriffe', 
'proAnalytics.careerCenterStatisticsSelection': 'Filter', 
'proAnalytics.careerCenterStatisticsJobabos': 'Jobabos', 
'proAnalytics.careerCenterStatisticsPrevPeriod': '% Vorperiode', 
'proAnalytics.careerCenterStatisticsSearchWeb': 'Suchanfragen Internet', 
'proAnalytics.careerCenterStatisticsSearchIntranet': 'Suchanfragen Intranet', 
'proAnalytics.careerCenterStatisticsRank': 'Rang', 
'proAnalytics.careerCenterStatisticsFilter': 'Filter', 
'proAnalytics.careerCenterStatisticsElement': 'Element', 
'proAnalytics.careerCenterStatisticsViews': 'Anfragen', 
'proAnalytics.careerCenterStatisticsIntranet': 'Intranet', 
'proAnalytics.careerCenterStatisticsInternet': 'Internet', 
'proAnalytics.careerCenterStatisticsStelle': 'Stelle', 
'proAnalytics.careerCenterStatisticsTotal': 'Total', 
'proAnalytics.careerCenterStatisticsFacebook': 'Facebook', 
'proAnalytics.careerCenterStatisticsGoogle': 'Google', 
'proAnalytics.careerCenterStatisticsLinkedIn': 'LinkedIn', 
'proAnalytics.careerCenterStatisticsDirectLink': 'Direktlink', 
'proAnalytics.careerCenterStatisticsNoUTM': 'kein UTM', 
'proAnalytics.careerCenterStatisticsOther': 'weitere', 
'proAnalytics.performanceStatisticsActionType.clicks': 'Klicks', 
'proAnalytics.performanceStatisticsActionType.views': 'Views', 
'proAnalytics.performanceStatisticsActionType.applications': 'Bewerbungen', 
'proAnalytics.careerCenterStatisticsActionType.utm': 'UTM', 
'proAnalytics.careerCenterStatisticsActionType.search': 'SUCHE', 
'proAnalytics.careerCenterStatisticsActionType.selection': 'AUSWAHL', 
'proAnalytics.viewBy.jobs': 'Stellen', 
'proAnalytics.candidateJourneyStatistics': 'Candidate Journey', 
'proAnalytics.costsStatistics': 'Kosten', 
'proAnalytics.costsProApplication': 'Kosten pro Bewerbung', 
'proAnalytics.costsProMedium': 'Kosten pro Medium', 
'proAnalytics.costsPerMediumStatistics': 'Kosten pro medium statistics', 
'proAnalytics.costsProView': 'Kosten pro View', 
'proAnalytics.costsProClick': 'Kosten pro Klick', 
'proAnalytics.publicationsPerMedium': 'Publikationen pro Medium', 
'proAnalytics.viewsPerOnlineDay': 'Views/OT', 
'proAnalytics.clicksPerOnlineDay': 'Bewerberklicks/OT', 
'proAnalytics.applicationsPerOnlineDay': 'Bewerbungen/OT', 
'proAnalytics.applications': 'Bewerbungen', 
'proAnalytics.clicks': 'Bewerberklicks', 
'proAnalytics.deviceRatio': '% web|mob', 
'proAnalytics.activeJobAds': 'Aktive Stellen', 
'proAnalytics.pits': 'Pits', 
'proAnalytics.web': 'Web', 
'proAnalytics.mobile': 'Mobile', 
'proAnalytics.search': 'Suche', 
'proAnalytics.search.placeholder': 'Stellentitel, Recruiter, Auftrags-, Publikations- oder Stellennummer', 
'proAnalytics.search.recruiterKeyword': 'Recruiter', 
proAnalytics.search.termEverywhere: ({ searchTerm, hitCount }) =>
		`Ergebnisse f�r '${searchTerm}' ${hitCount === undefined ? '' : `(${hitCount})`}`, 
proAnalytics.search.termInColumn: ({ searchTerm, fieldName, hitCount }) =>
		`Ergebnisse f�r '${searchTerm}' in ${fieldName} (${hitCount})`, 
proAnalytics.search.resultInfo: ({ searchTerm, fieldName, hitCount }) =>
		`${hitCount} ${hitCount === 1 ? Ergebnis : Ergebnisse} f�r ${searchTerm} in ${fieldName}`, 
proAnalytics.search.jobTitle: (jobTitle) => `Job-Titel: '${jobTitle}'`, 
proAnalytics.search.externalJobTitle: (jobTitle) => `Externer Job-Titel: '${jobTitle}'`, 
proAnalytics.search.postingId: (id) => `Stellennummer: '${id}'`, 
proAnalytics.search.publicationId: (id) => `Publikationsnummer: '${id}'`, 
proAnalytics.search.orderId: (id) => `Auftragsnummer: '${id}'`, 
proAnalytics.dateRange.autoCorrectionWarning: ({ start, end }) =>
		`Es stehen Daten der letzten zwei Jahre zur Verf�gung. Ihr Filter wurde dementsprechend angepasst.`, 
proAnalytics.dictionaries.error: ({ logNumber }) =>
		Filter Dictionaries konnte nicht aktualisiert werden. Technische Details finden Sie im Log #${logNumber}., 
proAnalytics.search.error: ({ logNumber }) =>
		`Die Suche ist fehlgeschlagen. Technische Details finden Sie im Log #${logNumber}.`, 
proAnalytics.jobCount.error: ({ logNumber }) =>
		`Anzahl Stellen konnte nicht geladen werden. Technische Details finden Sie im Log #${logNumber}.`, 
proAnalytics.performance.error: ({ logNumber }) =>
		`Daten von Performance konnten nicht geladen werden. Technische Details finden Sie im Log #${logNumber}.`, 
proAnalytics.candidateJourney.error: ({ logNumber }) =>
		`Daten von Candidate Journey konnten nicht geladen werden. Technische Details finden Sie im Log #${logNumber}.`, 
proAnalytics.costs.error: ({ logNumber }) =>
		`Kostendaten konnten nicht geladen werden. Technische Details finden Sie im Log #${logNumber}.`, 
proAnalytics.kpi.error: ({ logNumber }) =>
		`KPI-Daten konnten nicht geladen werden. Technische Details finden Sie im Log #${logNumber}.`, 
proAnalytics.careerCenter.error: ({ logNumber }) =>
		`Stellenmarktstatistiken konnten nicht geladen werden. Technische Details finden Sie im Log #${logNumber}.`, 
'proAnalytics.moreFilters': 'Mehr Filter', 
'proAnalytics.lessFilters': 'Weniger Filter', 
'proAnalytics.resetFilters': 'Alle zur�cksetzen', 
proAnalytics.maxDatasetsNumberInfo: (maxDatasetsNumber) =>
		`Sie k�nnen maximal ${maxDatasetsNumber} Datasets anzeigen.`, 
'proAnalytics.view.byJobAd': 'nach Stelle', 
'proAnalytics.view.byMedium': 'nach Medium', 
'proAnalytics.view.byFieldOfActivity': 'nach Berufsgruppe', 
'proAnalytics.candidateJourney.trackingViewsWarning': 'F�r manche Medien k�nnen keine Aufrufe gemessen werden.', 
'proAnalytics.candidateJourney.trackingClicksWarning': 'F�r manche Medien k�nnen keine Klicks gemessen werden.', 
'proAnalytics.candidateJourney.trackingApplicationsWarning': 'F�r manche Medien k�nnen keine Bewerbungen gemessen werden.', 
'proAnalytics.candidateJourney.trackingViewsInfo': 'Die ausgewiesene Statistik weist die korrekten Zahlen auf.', 
'proAnalytics.candidateJourney.trackingClicksInfo': 'Die ausgewiesene Statistik weist die korrekten Zahlen auf.', 
'proAnalytics.candidateJourney.trackingApplicationsInfo': 'Die ausgewiesene Statistik weist die korrekten Zahlen auf.', 
'proAnalytics.mediaTrackingInfo': 'Medium-Tracking-Infos', 
'proAnalytics.loadingDictionaries': 'Dictionaries werden geladen', 
'proAnalytics.insufficientPermissions': 'Sie haben keine Berechtigungen um auf das ProAnalytics Modul zuzugreifen', 
'proAnalytics.rangePickerFormat': 'DD.MM.YYYY', 
'proAnalytics.loadingCustomerConfig': 'Kundenkonfiguration wird geladen.', 
'proAnalytics.reports.insufficientPermissions': 'Sie haben keine Berechtigungen um auf das ProAnalytics Modul zuzugreifen.', 
'posting.create': 'Neues Inserat erstellen', 
'order': 'Auftrag', 
'orderId': 'Auftrags-ID', 
'posting': 'Stelle', 
'postingId': 'Stelle-ID', 
'publication': 'Publikation', 
'publications': 'Publikationen', 
'publicationId': 'Publikation ID', 
'cockpit': 'Cockpit', 
'cockpit.myJobs': 'Meine Stellen', 
'jobs': 'Stellen', 
'company': 'Firma', 
'companyName': 'Firmenname', 
'country': 'Land', 
'country.usa': 'USA', 
'country.greatBritain': 'Grossbritannien', 
'country.unitedKingdom': 'Grossbritannien', 
'country.germany': 'Deutschland', 
'country.austria': '�sterreich', 
'country.france': 'Frankreich', 
'country.italy': 'Italien', 
'country.switzerland': 'Schweiz', 
'language': 'Sprache', 
'language.english': 'Englisch', 
'language.german': 'Deutsch', 
'language.french': 'Franz�sisch', 
'language.italian': 'Italienisch', 
'language.swissGerman': 'Schweizerdeutsch', 
'settings': 'Einstellungen', 
'settings.manageMediaList': 'Medienliste verwalten', 
'settings.displayOnProfile': 'Anzeige in meinem Profil', 
'settings.mediaLists': 'Medienlisten', 
'settings.preferences': 'Einstellungen', 
'settings.yourAccessData': 'Ihre Zugangsdaten f�r den JobBooster', 
'settings.password.title': 'Login & Passwort', 
'help': 'Hilfe', 
'cancel': 'Abbrechen', 
'timePeriod': 'Zeitraum', 
'dateFrom': 'Von', 
'dateTo': 'Bis', 
'yesterday': 'Gestern', 
'currentMonth': 'Laufender Monat', 
'lastMonth': 'Letzter Monat', 
'currentYear': 'Laufendes Jahr', 
'lastYear': 'Letztes Jahr', 
'recruiter': 'Recruiter', 
'recruiterId': 'Recruiter-ID', 
'recruiterName': 'Recruiter-Name', 
'recruiters': 'Recruiter', 
'allRecruiters': 'Alle Recruiter', 
'medium': 'Medium', 
'mediumId': 'Medium-ID', 
'media': 'Medien', 
'media.online': 'Online', 
'media.print': 'Print', 
'media.ppp': 'PPP', 
'media.ppd': 'PPD', 
'media.private': 'Privat', 
'mediaType': 'Medientyp', 
'allMedia': 'Alle Medien', 
'fieldOfActivity': 'Berufsgruppe', 
'allFieldsOfActivity': 'Alle Berufsgruppen', 
'industry': 'Branche', 
'allIndustries': 'Alle Branchen', 
'atsId': 'Interne ID oder ATS-ID', 
'apply': '�bernehmen', 
'validator.username.required': 'Bitte geben Sie Ihren Benutzernamen an.', 
'validator.password.required': 'Bitte geben Sie Ihr Passwort an.', 
'validator.email.required': 'Bitte geben Sie die E-Mail-Adresse an.', 
'validator.email.format': 'Eingegebene E-Mail-Adresse ist nicht korrekt', 
'all': 'Alle test', 
'total': 'Total', 
'cost': 'Kosten', 
'date': 'Datum', 
other: (count) => (count !== undefined ? `Andere (${count})` : Andere), 
'showMore': 'Mehr', 
'showLess': 'Weniger', 
'state': 'Zustand', 
'overview': '�bersicht', 
'noData': 'Keine Daten', 
'applications': 'Bewerbungen', 
'clicks': 'Bewerberklicks', 
'views': 'Views', 
'jobAd': 'Stelle', 
'jobId': 'Stelle ID', 
'jobAd.internalTitle': 'Titel (intern)', 
'jobAd.externalTitle': 'Titel (extern)', 
'jobAd.title': 'Titel', 
'kpiStatistics.stellen': 'Stellen', 
'kpiStatistics.publications': 'Publikationen', 
'kpiStatistics.costs': 'Kosten', 
'search': 'Suchen', 
checkLog: (logNumber) => `Technische Details finden Sie im Log #${logNumber}.`, 
unexpectedError: ({ logNumber }) =>
		`Etwas ist schiefgelaufen. Technische Details finden Sie im Log #${logNumber}.`, 
'refreshRequest': 'Bitte laden Sie die Applikation neu oder versuchen Sie es sp�ter nochmals.', 
'recentlyUsed': 'Zuletzt benutzt', 
'information': 'Information', 
'webMobile': 'Verteilung Web-Mobile', 
'back': 'Zur�ck', 
'passwordChangeFailed': '''', 
'error': '''', 
}