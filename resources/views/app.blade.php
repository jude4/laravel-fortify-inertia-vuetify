<!doctype html>
<html lang="en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale-1.0"> 
        <meta head-key="description" name="description" content="This is the default description" />

        <link rel="stylesheet" href="{{ mix('css/app.css') }}">
        <script type="text/javascript" src="{{ mix('js/app.js') }}" defer></script>
           @routes
    </head>
    <body>
        @inertia
    </body>
</html>