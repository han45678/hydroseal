<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "../includes/head.php"; ?>
</head>

<body>
    <?php include "../includes/header.php"; ?>
    <main id="achievement" class="bridge">
        <h2>工程實績</h2>
        <?php include "../includes/_achievement_menu.php"; ?>
        <div class="title">
            <h3>依地理位置</h3>
        </div>
        <div id="map">
            <div class="wrapper">
                <img src="../image/map.jpg" alt="">
                <div id="jp" class="item coordinate">
                    <span class="icon"></span>
                    <div class="view">
                        <h4>日本</h4>
                        <p>實績建立 99件</p>
                        <a href="../achievement-planning/">查看實績</a>
                    </div>
                </div>
                <div id="kr" class="item coordinate">
                    <span class="icon"></span>
                    <div class="view">
                        <h4>韓國</h4>
                        <p>實績建立 99件</p>
                        <a href="../achievement-planning/">查看實績</a>
                    </div>
                </div>
                <div id="tw" class="item coordinate">
                    <span class="icon"></span>
                    <div class="view">
                        <h4>台灣</h4>
                        <p>實績建立 99件</p>
                        <a href="../achievement-planning/">查看實績</a>
                    </div>
                </div>
                <div id="cn" class="item coordinate">
                    <span class="icon"></span>
                    <div class="view">
                        <h4>大陸</h4>
                        <p>實績建立 99件</p>
                        <a href="../achievement-planning/">查看實績</a>
                    </div>
                </div>
                <div id="sg" class="item coordinate">
                    <span class="icon"></span>
                    <div class="view">
                        <h4>新加玻</h4>
                        <p>實績建立 99件</p>
                        <a href="../achievement-planning/">查看實績</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <?php include "../includes/fotter.php"; ?>
    <?php include "../includes/fotter_js.php"; ?>
</body>

</html>