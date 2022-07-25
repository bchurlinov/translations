export default {
	'dateFormatter': date => date ? `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}` : ' - ',
    'dateFormatter.shortDate': date => date ? `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}` : ' - ',
    'monthFormatter': date => date ? date.toLocaleString('fr-FR', {year: 'numeric', month: 'long'}) : ' - ', // November 2021
    'weekFormatter': date => date ? `S${getWeek(date)} ${date.getFullYear()}` : ' - ', // S28 2021
    'priceFormatter': (price, currency) => currency ? price.toLocaleString('fr-FR', {style: 'currency', currency}) : price.toLocaleString('fr-FR', {minimumFractionDigits: 2, maximumFractionDigits: 2}),
    'numberFormatter': (number) => number ? number.toLocaleString('fr-FR', {minimumFractionDigits: 0, maximumFractionDigits: 0}):0,
    'twoDigitFormatter': (number) => number ? number.toLocaleString('fr-FR', {minimumFractionDigits: 2, maximumFractionDigits: 2}):0,
	'loadingDictionaries': 'Métadonnées en cours de chargement',
	'loadingDictionariesFailed': 'Échec du chargement des métadonnées',
	'loadingPermissions': 'Autorisations en cours de chargement',
	'loadingPermissionsFailed': 'Échec du chargement des autorisations',
	'login': 'Connexion',
	'loginFailed': 'Échec de la connexion',
	'logout': 'Déconnexion',
	'email': 'E-mail',
	'username': 'Identifiant',
	'password': 'Mot de passe',
	'register': 'Inscription',
	'forgotPassword': 'Mot de passe oublié?',
	'resetPassword': 'Réinitialisation du mot de passe',
	'authentication.description':
		'Avez-vous déjà un compte d’utilisateur? Alors saisissez vos données de connexion ou inscrivez-vous.',
	'authentication.initializationError': `Une erreur est survenue lors de l'initialisation du processus d'authentification`,
	'home': 'Accueil',
	'dateRange': 'Plage de dates',
	'organizationStructure': 'Structure organisationnelle',
	'proAnalytics': 'ProAnalytics',
	'proAnalytics.title': 'ProAnalytics',
	'proAnalytics.dashboard': 'ProAnalytics Dashboard',
	'proAnalytics.selectOrganisationNodeRequest': `Veuillez d'abord mettre le filtre Structure organisationnelle`,
	'proAnalytics.jobCountStatistics': 'Nombre de postes',
	'proAnalytics.jobCountStatistics.average': (value) =>
		`${Number(value).toLocaleString('fr-CH', { maximumFractionDigits: 2 })} Postes vacants en moyenne/jour`,
	'proAnalytics.performanceStatistics': 'Performance',
	'proAnalytics.performanceStatisticsActionType': `Type d'action`,
	'proAnalytics.viewBy.fieldOfActivity': 'Catégorie professionnelle',
	'proAnalytics.careerCenterStatisticsActionType': `Type d'action`,
	'proAnalytics.careerCenterStatistics': `Votre marché de l'emploi`,
	'proAnalytics.careerCenterStatisticsUtm': 'Consultations de postes selon UTM',
	'proAnalytics.careerCenterStatisticsSearch': 'Mots-clés',
	'proAnalytics.careerCenterStatisticsSelection': 'Filtres',
	'proAnalytics.careerCenterStatisticsJobabos': 'Alertes emploi',
	'proAnalytics.careerCenterStatisticsPrevPeriod': '% période précédente',
	'proAnalytics.careerCenterStatisticsSearchWeb': 'Recherches web',
	'proAnalytics.careerCenterStatisticsSearchIntranet': 'Recherches Intranet',
	'proAnalytics.careerCenterStatisticsRank': 'Rang',
	'proAnalytics.careerCenterStatisticsFilter': 'Filtre',
	'proAnalytics.careerCenterStatisticsElement': 'Élément',
	'proAnalytics.careerCenterStatisticsViews': 'Consultations',
	'proAnalytics.careerCenterStatisticsIntranet': 'Intranet',
	'proAnalytics.careerCenterStatisticsInternet': 'Internet',
	'proAnalytics.careerCenterStatisticsStelle': 'Poste',
	'proAnalytics.careerCenterStatisticsTotal': 'Total',
	'proAnalytics.careerCenterStatisticsFacebook': 'Facebook',
	'proAnalytics.careerCenterStatisticsGoogle': 'Google',
	'proAnalytics.careerCenterStatisticsLinkedIn': 'LinkedIn',
	'proAnalytics.careerCenterStatisticsDirectLink': 'Lien direct',
	'proAnalytics.careerCenterStatisticsNoUTM': 'Pas de UTM',
	'proAnalytics.careerCenterStatisticsOther': 'autres',
	'proAnalytics.performanceStatisticsActionType.clicks': 'Clicks',
	'proAnalytics.performanceStatisticsActionType.views': 'Views',
	'proAnalytics.performanceStatisticsActionType.applications': 'Applications',
	'proAnalytics.careerCenterStatisticsActionType.utm': 'UTM',
	'proAnalytics.careerCenterStatisticsActionType.search': 'RECHERCHE',
	'proAnalytics.careerCenterStatisticsActionType.selection': 'CHOIX',
	'proAnalytics.viewBy.jobs': 'Postes',
	'proAnalytics.candidateJourneyStatistics': 'Candidate Journey',
	'proAnalytics.costsStatistics': 'Coûts',
	'proAnalytics.costsProApplication': 'Coût par demande',
	'proAnalytics.costsProMedium': 'Coûts par canal',
	'proAnalytics.costsPerMediumStatistics': 'Coûts par canal statistiques',
	'proAnalytics.costsProView': 'Coût par consultation',
	'proAnalytics.costsProClick': 'Coût par clic',
	'proAnalytics.publicationsPerMedium': 'Publications par canal',
	'proAnalytics.viewsPerOnlineDay': 'Consultations/jour en ligne',
	'proAnalytics.clicksPerOnlineDay': 'Clic de candidat/jour en ligne',
	'proAnalytics.applicationsPerOnlineDay': 'Candidatures/jour en ligne',
	'proAnalytics.applications': 'Applications',
	'proAnalytics.clicks': 'Clics',
	'proAnalytics.deviceRatio': '% web|mob',
	'proAnalytics.search': 'Recherche',
	'proAnalytics.search.placeholder': 'Intitulé du poste, recruteur, numéro du mandat, de publication ou du poste',
	'proAnalytics.search.recruiterKeyword': 'Recruteur',
	'proAnalytics.search.termEverywhere': ({ searchTerm, hitCount }) =>
		`Résultats pour '${searchTerm}') ${hitCount === undefined ? '' : `(${hitCount})`}`,
	'proAnalytics.search.termInColumn': ({ searchTerm, fieldName, hitCount }) =>
		`Résultats pour '${searchTerm}' dans ${fieldName} (${hitCount})`,
	'proAnalytics.search.resultInfo': ({ searchTerm, fieldName, hitCount }) =>
		`${hitCount} ${hitCount === 1 ? 'Résultat' : 'Résultats'} pour ${searchTerm} dans ${fieldName}`,
	'proAnalytics.search.jobTitle': (jobTitle) => `Intitulé du poste: '${jobTitle}'`,
	'proAnalytics.search.externalJobTitle': (jobTitle) => `Intitulé externe du poste: '${jobTitle}'`,
	'proAnalytics.search.postingId': (id) => `Numéro du poste: '${id}'`,
	'proAnalytics.search.publicationId': (id) => `Numéro de publication: '${id}'`,
	'proAnalytics.search.orderId': (id) => `Numéro du mandat: '${id}'`,
	'proAnalytics.dateRange.autoCorrectionWarning': ({ start, end }) =>
		`Les données des deux dernières années sont disponibles. Votre filtre a été adapté en conséquence.`,
	'proAnalytics.dictionaries.error': ({ logNumber }) =>
		`Le filtre des dictionaries n'a pas pu être mis à jour. Vous trouverez des détails techniques dans le Log #${logNumber}.`,
	'proAnalytics.search.error': ({ logNumber }) =>
		`La recherche a échoué. Vous trouverez des détails techniques dans le Log #${logNumber}.`,
	'proAnalytics.jobCount.error': ({ logNumber }) =>
		`Le nombre de postes n'a pas pu être chargé. Vous trouverez des détails techniques dans le Log#${logNumber}.`,
	'proAnalytics.performance.error': ({ logNumber }) =>
		`Les données de performance n'ont pas pu être chargées. Vous trouverez des détails techniques dans le Log #${logNumber}.`,
	'proAnalytics.candidateJourney.error': ({ logNumber }) =>
		`Les données de candidate journey n'ont pas pu être chargées. Vous trouverez des détails techniques dans le Log #${logNumber}.`,
	'proAnalytics.costs.error': ({ logNumber }) =>
		`Les données de coûts n'ont pas pu être chargées. Vous trouverez des détails techniques dans le Log #${logNumber}.`,
	'proAnalytics.careerCenter.error': ({ logNumber }) =>
		`Les statistiques du marché de l'emploi n'ont pas pu être chargées. Vous trouverez des détails techniques dans le Log #${logNumber}.`,
	'proAnalytics.moreFilters': 'Plus de filtres',
	'proAnalytics.lessFilters': 'Moins de filtres',
	'proAnalytics.resetFilters': 'Réinitialiser tout',
	'proAnalytics.maxDatasetsNumberInfo': (maxDatasetsNumber) =>
		`Vous pouvez afficher un maximum de ${maxDatasetsNumber} datasets.`,
	'proAnalytics.view.byJobAd': 'par poste',
	'proAnalytics.view.byMedium': 'par canal de communication',
	'proAnalytics.view.byFieldOfActivity': 'par catégorie professionnelle',
	'proAnalytics.candidateJourney.trackingViewsWarning':
		'Pour certains canaux de communications, les consultations ne peuvent pas être mesurées',
	'proAnalytics.candidateJourney.trackingClicksWarning':
		'Pour certains canaux de communications, les clics ne peuvent pas être mesurés',
	'proAnalytics.candidateJourney.trackingApplicationsWarning':
		'Pour certains canaux de communications, les candidatures ne peuvent pas être mesurées',
	'proAnalytics.candidateJourney.trackingViewsInfo': 'La statistique affichée présente les nombres corrects.',
	'proAnalytics.candidateJourney.trackingClicksInfo': 'La statistique affichée présente les nombres corrects.',
	'proAnalytics.candidateJourney.trackingApplicationsInfo':
		'La statistique affichée présente les nombres corrects.',
	'proAnalytics.mediaTrackingInfo': 'Infos sur le tracking du canal',
	'proAnalytics.loadingDictionaries': 'Les dictionaries sont chargés',
	'proAnalytics.rangePickerFormat': 'DD/MM/YYYY',
	'posting.create': 'Créer une nouvelle offre',
	'order': 'Mandat',
	'orderId': 'ID du mandat',
	'posting': 'Offre',
	'postingId': `ID de l'offre`,
	'publication': 'Publication',
	'publications': 'Publications',
	'publicationId': 'ID de publication',
	'cockpit': 'Cockpit',
	'jobs': 'Postes',
	'company': 'Entreprise',
	'companyName': `Nom de l'entreprise`,
	'country': 'Pays',
	'country.usa': 'États-Unis',
	'country.greatBritain': 'Grande-Bretagne',
	'country.unitedKingdom': 'Grande-Bretagne',
	'country.germany': 'Allemagne',
	'country.austria': 'Autriche',
	'country.france': 'France',
	'country.italy': 'Italie',
	'country.switzerland': 'Suisse',
	'language': 'Langue',
	'language.english': 'Anglais',
	'language.german': 'Allemand',
	'language.french': 'Français',
	'language.italian': 'Italien',
	'language.swissGerman': 'Suisse allemand',
	'settings': 'Réglages',
	'help': 'Aide',
	'cancel': 'Annuler',
	'timePeriod': 'Période',
	'dateFrom': 'De',
	'dateTo': 'À',
	'yesterday': 'Hier',
	'currentMonth': 'Mois en cours',
	'lastMonth': 'Mois dernier',
	'currentYear': 'Année en cours',
	'lastYear': 'Année dernière',
	'recruiter': 'Recruteur',
	'recruiterId': 'ID du recruteur',
	'recruiterName': 'Nom du recruteur',
	'recruiters': 'Recruteur',
	'allRecruiters': 'Tous les recruteurs',
	'medium': 'Media',
	'mediumId': 'ID du canal',
	'media': 'Canaux de communication',
	'media.online': 'En ligne',
	'media.print': 'Print',
	'media.ppp': 'PPP',
	'media.ppd': 'PPD',
	'media.private': 'Privé',
	'mediaType': 'Type de canaux',
	'allMedia': 'Tous les canaux',
	'fieldOfActivity': 'Catégorie professionnelle',
	'allFieldsOfActivity': 'Toutes les catégories professionnelles',
	'industry': 'Secteur',
	'allIndustries': 'Tous les secteurs',
	'atsId': 'ID interne ou ID ATS',
	'apply': 'Appliquer',
	'validator.username.required': `Veuillez indiquer votre nom d'utilisateur.`,
	'validator.password.required': 'Veuillez saisir votre mot de passe.',
	'validator.email.required': 'Veuillez saisir votre adresse e-mail.',
	'validator.email.format': `L'adresse e-mail saisie est incorrecte`,
	'all': 'Tous',
	'total': 'Total',
	'cost': 'Coûts',
	'date': 'Date',
	'other': (count) => (count !== undefined ? `Autres (${count})` : 'Autres'),
	'showMore': 'Plus',
	'showLess': 'Moins',
	'state': 'État',
	'overview': 'Aperçu',
	'noData': 'Pas de données',
	'applications': 'Candidatures',
	'clicks': 'Clics',
	'views': 'Consultations',
	'jobAd': 'Poste',
	'jobId': 'Poste ID',
	'jobAd.internalTitle': 'Intitulé (interne)',
	'jobAd.externalTitle': 'Intitulé (externe)',
	'jobAd.title': 'Intitulé',
	'kpiStatistics.stellen': 'Postes',
	'kpiStatistics.publications': 'Publications',
	'kpiStatistics.costs': 'Coûts',
	'checkLog': (logNumber) => `Vous trouverez des détails techniques dans le Log #${logNumber}`,
	'unexpectedError': ({ logNumber }) =>
		`Quelque chose s'est mal passé. Vous trouverez des détails techniques dans le Log #${logNumber}.`,
	'refreshRequest': `Veuillez charger de nouveau l'application ou réessayer plus tard.`,
	'recentlyUsed': 'Utilisé dernièrement',
	'information': 'Information',
	'webMobile': 'Distribution Web-Mobile',
	'back': 'Retour'
}
