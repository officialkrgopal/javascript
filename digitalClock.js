<!DOCTYPE html>
<html>
<head>
    <title>Digital Clock</title>
    <style>
        #clock {
            font-size: 40px;
            font-family: monospace;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h2>Live Digital Clock</h2>
    <div id="clock"></div>

    <script>
        function updateClock() {
            const now = new Date();
            const timeString = now.toLocaleTimeString();
            document.getElementById('clock').innerText = timeString;
        }

        setInterval(updateClock, 1000);
        updateClock(); // Initial call
    </script>
</body>
</html>
