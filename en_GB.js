export default {
	'dateFormatter': date => date ? `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}` : ' - ', // 12/31/2021
    'dateFormatter.shortDate': date => date ? `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}` : ' - ', // 12/31/2021
    'monthFormatter': date => date ? date.toLocaleString('en-US', {year: 'numeric', month: 'long'}) : ' - ', // November 2021
    'weekFormatter': date => date ? `W${getWeek(date)} ${date.getFullYear()}` : ' - ', // W28 2021
    'priceFormatter': (price, currency) => currency ? price.toLocaleString('en-US', {style: 'currency', currency}) : price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}),
    'numberFormatter': (number) => number ? number.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0}):0,
    'twoDigitFormatter': (number) => number ? number.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2}):0,
	'loadingDictionaries': 'Metadata is loading',
	'loadingDictionariesFailed': 'Loading of metadata failed',
	'loadingPermissions': 'Permissions are loading',
	'loadingPermissionsFailed': 'Loading of permissions failed',
	'login': 'Log in',
	'loginFailed': 'Login failed',
	'logout': 'Log out',
	'email': 'Email',
	'name': 'Name',
	'username': 'User name',
	'password': 'Password',
	'currentPassword': 'Current password',
	'newPassword': 'New password',
	'repeatNewPassword': 'Repeat new password',
	'changePassword': 'Change password',
	'incorrectPassword': 'Password is incorrect',
	'passwordValidationRules': minLength => `Password must be at least ${minLength} characters long and must contain uppercase letters, lowercase letters, numbers and a special character.`,
	'passwordLengthError': (minLength, maxLength) => `Password must be at least ${minLength} characters long.`,
	'repeatedPasswordMismatchError': 'New password is not identical.',
	'passwordSpecialCharacterError': 'Password must contain at least one special character.',
	'passwordUpperCaseLetterError': 'Password must contain at least one uppercase letter.',
	'passwordLowerCaseLetterError': 'Password must contain at least one lowercase letter.',
	'passwordDigitError': 'Password must contain at least one number.',
	'currentPasswordIsRequiredError': 'To change your password, please also enter your current password.',
	'passwordConfirmationIsRequiredError': 'New password is a mandatory field.',
	'applyNewPassword': 'Apply new password',
	'passwordChangeFailed': logNumber => `Password could not be changed. Technical details can be found in log #${logNumber}.`,
	'passwordChangeRequestFailed': 'An error occured while saving the new password on the server.',
	'passwordChangeSuccess': 'Password was changed.',
	'register': 'Register',
	'forgotPassword': 'Forgotten password?',
	'resetPassword': 'Reset password',
	"newPasswordIsRequiredError": "New password is required",
	'authentication.description': 'Already have an account? Then enter your login details or register.',
	'authentication.initializationError': `An error occurred when initializing the authentication process`,
	'insufficientPermissions': 'Insufficient permissions',
	'home': 'Home',
	'dateRange': "Date range",
	'organizationStructure': 'Organisational structure',
	"cockpit.myJobs": "My Job ads",
	'proAnalytics': 'ProAnalytics',
	'proAnalytics.title': 'ProAnalytics',
	'proAnalytics.dashboard': 'ProAnalytics dashboard',
	'proAnalytics.selectOrganisationNodeRequest': 'Please set the Organisational structure filter first.',
	'proAnalytics.jobCountStatistics': 'Number of vacancies',
	'proAnalytics.jobCountStatistics.average': (value) =>
		`${Number(value).toLocaleString('de-CH', {maximumFractionDigits: 2})} Vacancies average/per day`,
	'proAnalytics.performanceStatistics': 'Performance',
	'proAnalytics.performanceStatisticsActionType': 'ActionType',
	'proAnalytics.viewBy.fieldOfActivity': 'Field of activity',
	'proAnalytics.careerCenterStatisticsActionType': 'ActionType',
	'proAnalytics.careerCenterStatistics': 'Your jobs board',
	'proAnalytics.careerCenterStatisticsUtm': 'Job views according to UTM',
	'proAnalytics.careerCenterStatisticsSearch': 'Search terms',
	'proAnalytics.careerCenterStatisticsSelection': 'Filters',
	'proAnalytics.careerCenterStatisticsJobabos': 'Job alerts',
	'proAnalytics.careerCenterStatisticsPrevPeriod': '% previous period',
	'proAnalytics.careerCenterStatisticsSearchWeb': 'Web searches',
	'proAnalytics.careerCenterStatisticsSearchIntranet': 'Intranet search queries',
	'proAnalytics.careerCenterStatisticsRank': 'Rang',
	'proAnalytics.careerCenterStatisticsFilter': 'Filter',
	'proAnalytics.careerCenterStatisticsElement': 'Element',
	'proAnalytics.careerCenterStatisticsViews': 'Searches',
	'proAnalytics.careerCenterStatisticsIntranet': 'Intranet',
	'proAnalytics.careerCenterStatisticsInternet': 'Internet',
	'proAnalytics.careerCenterStatisticsStelle': 'Job',
	'proAnalytics.careerCenterStatisticsTotal': 'Total',
	'proAnalytics.careerCenterStatisticsFacebook': 'Facebook',
	'proAnalytics.careerCenterStatisticsGoogle': 'Google',
	'proAnalytics.careerCenterStatisticsLinkedIn': 'LinkedIn',
	'proAnalytics.careerCenterStatisticsDirectLink': 'Direct link',
	"proAnalytics.careerCenterStatisticsNoUTM": "No UTM",
	'proAnalytics.careerCenterStatisticsOther': 'other',
	'proAnalytics.performanceStatisticsActionType.clicks': 'Clicks',
	'proAnalytics.performanceStatisticsActionType.views': 'Views',
	'proAnalytics.performanceStatisticsActionType.applications': 'Applications',
	'proAnalytics.careerCenterStatisticsActionType.utm': 'UTM',
	'proAnalytics.careerCenterStatisticsActionType.search': 'SEARCH',
	'proAnalytics.careerCenterStatisticsActionType.selection': 'SELECTION',
	'proAnalytics.viewBy.jobs': 'Jobs',
	'proAnalytics.candidateJourneyStatistics': 'Candidate Journey',
	'proAnalytics.costsStatistics': 'Costs',
	'proAnalytics.costsProApplication': 'Cost per application',
	'proAnalytics.costsProMedium': 'Cost per medium',
	"proAnalytics.costsPerMediumStatistics": "Cost per medium statistics",
	'proAnalytics.costsProView': 'Cost per view',
	'proAnalytics.costsProClick': 'Cost per click',
	'proAnalytics.publicationsPerMedium': 'Publications per medium',
	'proAnalytics.viewsPerOnlineDay': 'Views/OT',
	'proAnalytics.clicksPerOnlineDay': 'Applicant click/OT',
	'proAnalytics.applicationsPerOnlineDay': 'Applications/OT',
	'proAnalytics.applications': "Applications",
	"proAnalytics.clicks": "Applicant clicks",
	'proAnalytics.deviceRatio': '% web|mob',
	'proAnalytics.activeJobAds': 'Active job ads',
	'proAnalytics.pits': 'Pits',
	'proAnalytics.web': 'Web',
	'proAnalytics.mobile': 'Mobile',
	'proAnalytics.search': 'Search',
	'proAnalytics.search.placeholder': 'job title, recruiter, order number, publication number or job number',
	'proAnalytics.search.recruiterKeyword': 'Recruiter',
	'proAnalytics.search.termEverywhere': ({searchTerm, hitCount}) => `Results for '${searchTerm}' ${hitCount === undefined ? '' : `(${hitCount})`}`,
	'proAnalytics.search.termInColumn': ({searchTerm, fieldName, hitCount}) =>
		`Results for '${searchTerm}' in ${fieldName} (${hitCount})`,
	'proAnalytics.search.resultInfo': ({searchTerm, fieldName, hitCount}) =>
		`${hitCount} ${hitCount === 1 ? 'Result' : 'Results'} for ${searchTerm} in ${fieldName}`,
	'proAnalytics.search.jobTitle': (jobTitle) => `Job-title: '${jobTitle}'`,
	'proAnalytics.search.externalJobTitle': (jobTitle) => `External Job-title: '${jobTitle}'`,
	'proAnalytics.search.postingId': (id) => `Job ID: '${id}'`,
	'proAnalytics.search.publicationId': (id) => `Publication ID: '${id}'`,
	'proAnalytics.search.orderId': (id) => `Order ID: '${id}'`,
	'proAnalytics.dateRange.autoCorrectionWarning': ({start, end}) =>
		`Data from the last two years is available. Your filter was modified accordingly.`,
	'proAnalytics.dictionaries.error': ({logNumber}) =>
		`Filter dictionaries could not be updated. Technical details can be found in log #${logNumber}.`,
	'proAnalytics.search.error': ({logNumber}) =>
		`The search failed. Technical details can be found in log #${logNumber}.`,
	'proAnalytics.jobCount.error': ({logNumber}) =>
		`Number of vacancies could not be loaded. Technical details can be found in log #${logNumber}.`,
	'proAnalytics.performance.error': ({logNumber}) =>
		`Performance data could not be loaded. Technical details can be found in log #${logNumber}.`,
	'proAnalytics.candidateJourney.error': ({logNumber}) =>
		`Candidate journey data could not be loaded. Technical details can be found in log #${logNumber}.`,
	'proAnalytics.costs.error': ({logNumber}) =>
		`Cost data could not be loaded. Technical details can be found in log #${logNumber}.`,
	'proAnalytics.kpi.error': ({logNumber}) =>
		`KPI-data could not be loaded. Technical details can be found in log #${logNumber}.`,
	'proAnalytics.careerCenter.error': ({logNumber}) =>
		`Career center data could not be loaded. Technical details can be found in log #${logNumber}.`,
	'proAnalytics.fieldOfActivityFilterUpdate': language => `The 'Field of activity' filter has been automatically updated, since available options in ${language} are different.`,
	'proAnalytics.moreFilters': 'More filters',
	'proAnalytics.lessFilters': 'Fewer filters',
	'proAnalytics.resetFilters': 'Reset all',
	'proAnalytics.maxDatasetsNumberInfo': (maxDatasetsNumber) =>
		`You can display a maximum of ${maxDatasetsNumber} datasets.`,
	'proAnalytics.view.byJobAd': 'by job',
	'proAnalytics.view.byMedium': 'by medium',
	'proAnalytics.view.byFieldOfActivity': 'by professional category',
	'proAnalytics.candidateJourney.trackingViewsWarning': 'Views cannot be quantified for some media.',
	'proAnalytics.candidateJourney.trackingClicksWarning': 'Clicks cannot be quantified for some media',
	'proAnalytics.candidateJourney.trackingApplicationsWarning': 'Applications cannot be quantified for some media',
	'proAnalytics.candidateJourney.trackingViewsInfo': 'The reported statistics show the correct figures',
	'proAnalytics.candidateJourney.trackingClicksInfo': 'The reported statistics show the correct figures',
	'proAnalytics.candidateJourney.trackingApplicationsInfo': 'The reported statistics show the correct figures',
	'proAnalytics.mediaTrackingInfo': 'Medium Tracking Infos',
	'proAnalytics.loadingDictionaries': 'Dictionaries are loaded',
	"proAnalytics.loadingCustomerConfig": "Loading customer configuration",
	'proAnalytics.insufficientPermissions': 'You have no permissions to access ProAnalytics',
	'proAnalytics.reports.insufficientPermissions': 'You have no permissions to access ProAnalytics reports',
	"proAnalytics.rangePickerFormat": "D/MM/YYYY",
	'posting.create': 'Create new advertisement',
	'order': 'Order',
	'orderId': 'Order ID',
	'posting': 'Posting',
	'postingId': 'Posting ID',
	'publication': 'Publication',
	'publications': 'Publications',
	'publicationId': 'Publication ID',
	'cockpit': 'Cockpit',
	'jobs': 'Jobs',
	"company": "Company",
	'companyName': 'Company name',
	'country': 'Country',
	'country.usa': 'USA',
	'country.greatBritain': 'UK',
	'country.unitedKingdom': 'UK',
	'country.germany': 'Germany',
	'country.austria': 'Austria',
	'country.france': 'France',
	'country.italy': 'Italy',
	'country.switzerland': 'Switzerland',
	'language': 'Language',
	'language.english': 'English',
	'language.german': 'German',
	'language.french': 'French',
	'language.italian': 'Italian',
	'language.swissGerman': 'Swiss German',
	'settings': 'Settings',
	'settings.manageMediaList': "Manage media list",
	'settings.displayOnProfile': 'Display in my profile',
	'settings.mediaLists': 'Media lists',
	'settings.preferences': 'Settings',
	'settings.yourAccessData': 'Your login credentials for JobBooster',
	'settings.password.title':'Login & Password',
	'help': 'Help',
	'cancel': 'Cancel',
	'timePeriod': 'Period',
	'dateFrom': 'From',
	'dateTo': 'To',
	'yesterday': 'Yesterday',
	'currentMonth': 'Current month',
	'lastMonth': 'Last month',
	'currentYear': 'Current year',
	'lastYear': 'Last year',
	'recruiter': 'Recruiter',
	'recruiterId': 'Recruiter ID',
	'recruiterName': 'Recruiter name',
	'recruiters': 'Recruiter',
	'allRecruiters': 'All Recruiters',
	'medium': 'Medium',
	'mediumId': 'Medium ID',
	'media': 'Media',
	'media.online': 'Online',
	'media.print': 'Print',
	'media.ppp': 'PPP',
	'media.ppd': 'PPD',
	'media.private': 'Private',
	'mediaType': 'Media type',
	'allMedia': 'All media',
	'fieldOfActivity': 'Professional category',
	'allFieldsOfActivity': 'All professional categories',
	'industry': 'Sector',
	'allIndustries': 'All sectors',
	'atsId': 'Internal ID or ATS ID',
	'apply': 'Apply',
	'validator.username.required': 'Please enter your user name.',
	'validator.password.required': 'Please enter your password.',
	'validator.email.required': 'Please enter your email address.',
	'validator.email.format': 'Email address entered is not correct',
	'error': 'Error',
	'all': 'All',
	'total': 'Total',
	'cost': 'Costs',
	'date': 'Date',
	'other': (count) => (count !== undefined ? `Other (${count})` : 'Other'),
	'showMore': 'More',
	'showLess': 'Less',
	'state': 'Status',
	'overview': 'Overview',
	'noData': 'No data',
	'applications': 'Applications',
	'clicks': 'Clicks',
	'views': 'Views',
	'search': 'Search',
	'exportError': (logNumber) => `Export failed. Technical details have been saved in log No.${logNumber}`,
	'jobAd': 'Job',
	'jobId': "Job ID",
	'jobAd.internalTitle': 'Title (internal)',
	'jobAd.externalTitle': 'Title (external)',
	'jobAd.title': 'Title',
	'kpiStatistics.stellen': 'Jobs',
	'kpiStatistics.publications': 'Publications',
	'kpiStatistics.costs': 'Costs',
	'checkLog': (logNumber) => `Technical details can be found in log #${logNumber}.`,
	'unexpectedError': ({logNumber}) => `Something went wrong. Technical details can be found in log #${logNumber}.`,
	'refreshRequest': 'Please reload the application or try again later',
	'recentlyUsed': 'Last used',
	'information': 'Information',
	"webMobile": "Web-Mobile Distribution",
	"back": "Back"
}
