<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>angularUtils disqus directive</title>
    <base href="/dirDisqusFix/" />

    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.5.0/angular-route.js"></script>
    <script src="dirDisqus.js"></script>
    <script src="main.js"></script>
</head>
<body ng-app="dirDisqus">
    <h1>dirDisqus Tester</h1>
    <div ng-controller="MainController">
        Mode: {{ modeText }}
        <hr />
        
        Choose a view:
        <a href="home">Home</a> |
        <a href="view1">View 1</a> |
        <a href="view2">View 2</a>
        <hr />

        <div ng-view></div>

        <div>
            <hr />
            <dir-disqus config="disqusConfig"></dir-disqus>
        </div>
    </div>
</body>
</html>
