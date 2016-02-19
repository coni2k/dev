<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>angularUtils disqus directive fix</title>
    <base href="/dirDisqusFix/" />

    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-route.js"></script>
    <script src="dirDisqus.js"></script>
    <script src="main.js"></script>
</head>
<body ng-app="dirDisqusFix">
    <h1>DateTime</h1>
    <div ng-controller="MainController">
        Choose a view:
        <a href="home">Home</a> |
        <a href="view1">View 1</a> |
        <a href="view2">View 2</a>

        <div ng-view></div>

        <div>
            <hr />
            <dir-disqus disqus-shortname="{{ disqusShortname }}"
                        disqus-identifier="{{ disqusId }}"
                        disqus-url="{{ disqusUrl }}"
                        ready-to-bind="{{ disqusLoadedOn }}"><!--Uses datetime parameter-->
            </dir-disqus>
        </div>
    </div>
</body>
</html>
