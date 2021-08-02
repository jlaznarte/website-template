angular.module("templates.xpl.search").run(["$templateCache", function($templateCache) {$templateCache.put("search/results/result.html","<div class=\"pure-g\">\n	<div class=\"pure-u-1-24\">\n		<input type=\"checkbox\" class=\"search-results-group\" ng-if=\"::record.showCheckbox\" ng-checked=\"isSelected()\" ng-click=\"toggleSelect()\" aria-label=\"Select search result\">\n	</div>\n	<div class=\"pure-u-22-24\" xpl-displayer>\n		<h2>\n			<span ng-if=\"::record.ephemera\" xpl-highlight ng-bind-html=\"::record.title\" mathjax-bind></span>\n			<a ng-if=\"::(!(record.ephemera))\" href=\"{{::record.documentLink}}{{::record.documentLink.indexOf(\'articleDetails.jsp\') > -1 ? \'&amp;\' + (queryString|correctlyEncodeForwardSlash) : \'\'}}\" xpl-highlight ng-bind-html=\"::record.title.replace(\'Redline\',\'<font color=\\\'red\\\'>Redline</font>\')\" mathjax-bind></a>\n		</h2>\n		<p class=\"author\" ng-if=\"::user.showMeta\">\n			<span ng-repeat=\"author in ::record.authors\">\n				<a ng-href=\"{{::author.searchablePreferredName | authorSearchLink}}\" xpl-highlight><span ng-bind-html=\"::author.preferredName\"></span><span ng-if=\"::author.nativeName\"> (<span ng-bind-html=\"::author.nativeName\"></span>)</span></a><span ng-if=\"::(($index + 1) !== record.authors.length)\">; </span>\n			</span>\n		</p>\n		<div class=\"description u-mb-1\">\n			<a ng-if=\"::user.showMeta\" ng-href=\"{{::record.publicationLink}}\" xpl-highlight ng-hide=\"::record.handleProduct\" ng-bind-html=\"::record.displayPublicationTitle\"></a>\n			<div ng-if=\"::((record.publicationYear || record.volume || record.issue) && user.showMeta && !record.vj)\" ng-hide=\"::record.handleProduct\">\n				<span ng-if=\"::record.publicationYear\" xpl-highlight>Year: {{::record.publicationYear}}</span><span ng-if=\"::record.affirmedDate\" xpl-highlight> | Reaffirmed: {{::record.affirmedDate}}</span><span ng-if=\"::record.volume\" xpl-highlight><span ng-if=\"::record.publicationYear\">, </span>Volume: {{::record.volume}}</span><span ng-if=\"::record.issue\"><span ng-if=\"::record.volume\">, </span><a ng-href=\"/xpl/tocresult.jsp?isnumber={{::record.isNumber}}\">Issue: <span xpl-highlight>{{::record.issue}}</span></a></span>\n			</div>\n			<div ng-if=\"::((record.externalId || record.startPage || record.endPage || record.doi) && user.showMeta)\" ng-hide=\"::record.handleProduct\">\n				<span ng-if=\"::record.externalId\">Article Sequence Number: {{::record.externalId}}</span><span ng-if=\"::!record.externalId\"><span ng-if=\"::(record.startPage || record.endPage)\">Page<span ng-if=\"::record.endPage\">s</span>:</span> <span ng-if=\"::record.startPage\" xpl-highlight>{{::record.startPage}}</span><span ng-if=\"::(record.startPage && record.endPage)\"> - </span><span ng-if=\"::record.endPage\" xpl-highlight>{{::record.endPage}}</span></span>\n			</div>\n\n			<div ng-show=\"::(record.virtualJournals && user.showMeta)\">\n				Referenced in: <span class=\"list-comma\" ng-repeat=\"vj_pub in record.virtualJournals\">\n					<a xpl-highlight ng-href=\"{{::vj_pub.homePageLink}}\">{{::vj_pub.title}}</a></span>\n			</div>\n			<div ng-if=\"::((record.citationCount || record.patentCitationCount) && user.showMeta)\" ng-hide=\"::record.handleProduct\">\n				Cited by:\n				<span ng-if=\"::record.citationCount\">\n					<a ng-href=\"{{::record.citationsLink}}\" xpl-highlight>\n						Papers ({{::record.citationCount}})\n					</a>\n				</span>\n				<span ng-if=\"::(record.citationCount && record.patentCitationCount)\"> | </span>\n				<span ng-if=\"::record.patentCitationCount\">\n					<a ng-href=\"{{::record.patentCitationsLink}}\" xpl-highlight>\n						Patents ({{::record.patentCitationCount}})\n					</a>\n				</span>\n			</div>\n			<div xpl-highlight>\n				<strong>{{::record.docIdentifier}}</strong> <span class=\"redline-stamp\" ng-if=\"::record.redline\">Redline Version</span>\n				</span>\n			</div>\n		</div>\n		<ul class=\"List List--horizontal\" ng-if=\"::!record.vj\"​>\n			<li class=\"List-item u-mr-2\" ng-if=\"::(record.abstract && !record.ephemera)\">\n				<a class=\"js-displayer-control abstract-control\" ng-class=\"{\'active\': user.openAbstract}\">\n					<i class=\"icon-caret-abstract\"></i><span>Abstract</span>\n				</a>\n			</li>\n			<li class=\"List-item u-mr-2\" ng-if=\"::record.showHtml\">\n				<a href=\"{{::record.htmlLink}}\" data-artnum=\"{{::record.articleNumber}}\" ng-attr-data-bkn=\"{{::record.articleContentType === \'Books\' ? record.publicationNumber : false}}\" data-url=\"{{::record.htmlLink}}\" class=\"icon-html\" ng-class=\"{\'open-html\': record.accessType.type === \'file-cabinet\'}\"></a>\n			</li>\n			<li class=\"List-item u-mr-2\" ng-if=\"::record.pdfLink\" ng-hide=\"::record.handleProduct\">\n				<div class=\"u-flex-display-flex u-flex-align-items-center\" ng-if=\"::record.pdfLinkLabel\">\n					<a class=\"non-icon-pdf\" ng-click=\"pdfPopup(record.pdfLink,\'Access ACM\')\">{{::record.pdfLinkLabel}}</a>\n				</div>\n				<div class=\"u-flex-display-flex u-flex-align-items-center\" ng-if=\"::(!record.pdfLinkLabel)\">\n					<a href=\"{{::record.pdfLink}}\" data-artnum=\"{{::record.articleNumber}}\" ng-attr-data-bkn=\"{{::record.articleContentType === \'Books\' ? record.publicationNumber : false}}\" class=\"icon-pdf\" ng-class=\"{\'open-pdf\': record.accessType.type === \'file-cabinet\'}\" ng-if=\"::record.pdfLink\" aria-label=\"PDF\"></a>\n					<span class=\"pdf-size-display\" ng-if=\"::record.pdfSize\">({{::record.pdfSize}} Kb)</span>\n				</div>\n			</li>\n			<li class=\"List-item u-mr-2\" ng-if=\"::record.course\">\n				<a href=\"{{::record.documentLink}}\" class=\"icon-access_course\" title=\"Access Course\"></a>\n			</li>\n			<li class=\"List-item u-mr-2 stats-SearchResults_DocResult_Exit_ReqPermission\" ng-if=\"::record.rightslinkFlag\">\n				<a class=\"icon-copyright\" ng-click=\"pdfPopup(record.rightsLink,\'RightsLink\')\" title=\"Request permission for commercial reuse\"></a>\n			</li>\n			<li class=\"List-item u-mr-2\" ng-if=\"::!record.rightslinkFlag && !record.vj\">\n				<i class=\"icon-copyright inactive\" title=\"IEEE is not the copyright holder of this material\"></i>\n			</li>\n			<li class=\"List-item u-mr-2 stats-SearchResults_DocResult_ViewMedia\" ng-if=\"::record.multiMediaLink\">\n				<a class=\"search-result-link media\" href=\"{{::record.multiMediaLink}}\" title=\"Media\">\n					<i class=\"search-result-link-icon-media\"></i>Media\n				</a>\n			</li>\n			<li class=\"List-item\" ng-if=\"::record.showAlgorithm\">\n				<a class=\"search-result-algorithm-link\" ng-href=\"{{::record.documentLink}}algorithms\">\n					<i class=\"icon-results-algorithm\"></i>Code\n				</a>\n			</li>\n		</ul>\n		<div class=\"js-displayer-content u-mt-1 stats-SearchResults_DocResult_ViewMore\" ng-class=\"{\'hide\': !user.openAbstract}\" ng-if=\"::(record.abstract && !record.ephemera)\" xpl-highlight>\n			<span ng-bind-html=\"::record.abstract\"></span>\n			<a ng-href=\"{{::record.documentLink}}\">View more</a>\n		</div>\n	</div>\n	<div class=\"pure-u-1-24\">\n		<span class=\"icon-access-{{::record.accessType.type}}\" title=\"{{::record.accessType.message}}\"></span>\n		<span>\n			<a ng-href=\"{{::record.openUrlLink}}\" target=\"_blank\" ng-if=\"::record.openUrlLink\">\n				<img class=\"openurl-img\" width=\"60\" height=\"20\" alt=\"{{::record.openUrlTxt}}\" title=\"{{::record.openUrlTxt}}\" ng-src=\"{{::record.openUrlImgLoc}}\" />\n			</a>\n		</span>\n	</div>\n</div>\n");
$templateCache.put("search/results/results-actions.component.html","<div class=\"results-actions\">\r\n	<label class=\"results-actions-selectall\" tabindex=\"0\">\r\n		<input type=\"checkbox\" class=\"results-actions-selectall-checkbox\" ng-checked=\"$ctrl.allSelected()\" ng-click=\"$ctrl.toggleSelection()\">\r\n		<span>Select All on Page</span>\r\n	</label>\r\n\r\n	<xpl-filter-popover ng-if=\"$ctrl.totalRecords > 1\" total-records=\"$ctrl.totalRecords\" service-name=\"SortByFilterService\" label=\"Sort By\"></xpl-filter-popover>\r\n</div>");
$templateCache.put("search/results/results-component.html","<main class=\"search-results pure-g\" id=\"xplMainContent\">\n	<xpl-cmpt-dashboard class=\"Dashboard pure-u-1-1 Dashboard--results\" breadcrumbs=\"vm.breadcrumbs\" end-record=\"vm.data.endRecord\" loading=\"vm.loading\" start-record=\"vm.data.startRecord\" terms=\"vm.searchTerms\" total-records=\"vm.data.totalRecords\" content-type-facet=\"vm.contentTypeFacet\">\n		<xpl-cmpt-action-bar ng-if=\"vm.data.totalRecords >= 1\" records=\"vm.data.records\" user=\"vm.user\" selected-items=\"vm.selectedItems\" bulk-selected-items=\"vm.bulkSelectedItems\" total-records=\"vm.data.totalRecords\"></xpl-cmpt-action-bar>\n	</xpl-cmpt-dashboard>\n	<section class=\"pure-u-5-24 u-printing-invisible-ff\">\n		<xpl-cmpt-facets loading=\"vm.loading\" error=\"vm.error\" facets=\"vm.facets\" result-length=\"vm.data.records.length\"></xpl-cmpt-facets>\n	</section>\n	<section class=\"pure-u-14-24 u-printing-display-inline-ff\">\n		<xpl-cmpt-results-actions ng-if=\"!vm.loading && vm.data.totalRecords >= 1\" records=\"vm.data.records\" selected-items=\"vm.selectedItems\" bulk-selected-items=\"vm.bulkSelectedItems\" total-records=\"vm.data.totalRecords\"></xpl-cmpt-results-actions>\n		<xpl-cmpt-result-list class=\"article-list\" xpl-lazy-load=\"vm.appendRecords()\" error=\"vm.error\" loading=\"vm.loading\" length=\"vm.data.records.length\" suggestions=\"vm.data.suggestions\" terms=\"vm.searchTerms\">\n			<div class=\"List-results-items\" ng-repeat=\"record in vm.records track by record.articleNumber\">\n				<xpl-result record=\"::record\" records=\"::vm.data.records\" user=\"::vm.user\" selected-items=\"vm.selectedItems\" bulk-selected-items=\"vm.bulkSelectedItems\"></xpl-result>\n			</div>\n		</xpl-cmpt-result-list>\n		<xpl-pagination ng-model=\"vm.page\" total-items=\"vm.data.totalRecords\" items-per-page=\"vm.rowCount\" ng-change=\"vm.changePage()\" ng-if=\"!vm.loading && vm.data.records\"></xpl-pagination>\n	</section>\n	<section class=\"pure-u-5-24 u-align-center u-printing-invisible-ff\">\n		<xpl-customer-survey user=\"vm.user\"></xpl-customer-survey>\n		<xpl-cmpt-ads-sidebar loading=\"vm.loading\" google-ad-targeting=\"vm.googleAdTargeting\"></xpl-cmpt-ads-sidebar>\n		<xpl-standards-dictionary class=\"u-align-left\" ng-if=\"!vm.loading\" listing=\"vm.standardsDictionaryTerms\"></xpl-standards-dictionary>\n	</section>\n</main>\n");
$templateCache.put("search/standards-dictionary/standards-dictionary.html","<section class=\"StandardDictionary\" ng-if=\"listing\">\r\n	<h1>\r\n		Standards Dictionary Terms\r\n		<a class=\"icon icon-help-white\" title=\"Top 25 dictionary terms sorted by relevancy based on your keywords\" href=\"/Xplorehelp/Help_StandardsDictionary.html\"></a>\r\n	</h1>\r\n	<ul class=\"StandardDictionary-list\">\r\n		<li ng-repeat=\"term in listing.children | limitTo: 25\">\r\n			<a href=\"/xpls/dictionary.jsp?stdDict=match_keyword&def_term={{term.name}}\">\r\n				{{term.name}}\r\n			</a>\r\n		</li>\r\n	</ul>\r\n	<div class=\"StandardDictionary-browse\">\r\n		<a href=\"/xpls/dictionary.jsp\">\r\n			Browse &raquo;\r\n		</a>\r\n	</div>\r\n</section>\r\n");}]);