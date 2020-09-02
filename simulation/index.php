<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "../includes/head.php"; ?>
</head>

<body>
    <?php include "../includes/header.php"; ?>
    <main id="owner" class="reservation">
        <h2>業主服務項目</h2>
        <div id="owner_menu">
            <ul>
                <li class="reservation"><a href="../reservation">預約產品簡報服務</a></li>
                <li class="simulation active"><a href="javascript:void(0)">現場施作模擬</a></li>
                <li class="waterproof"><a href="../waterproof">施作建築防水觀念教學</a></li>
            </ul>
        </div>
        <div id="owner_banner">
            <div class="text">
                <div class="content">
                    <h3>現場施作模擬</h3>
                    <h4>更詳細的產品現場施作及專人講解</h4>
                    <p>即刻預約專屬於企業的產品簡報服務（*僅開放已簽約廠商）</p>
                    <div class="owner_drop_down">
                        <div class="title">預約產品簡報服務</div>
                        <ul>
                            <li><a href="../reservation">預約產品簡報服務</a></li>
                            <li><a href="../simulation">現場施作模擬</a></li>
                            <li><a href="../waterproof">施作建築防水觀念教學</a></li>
                        </ul>
                    </div>
                    <a class="reservation_button" href="../simulation/">
                        預約
                    </a>
                </div>
            </div>
            <div class="photo">
                <div class="item_left imgLiquidCC">
                    <img src="../image/shutterstock_2963690544.jpg" alt="">
                </div>
                <div class="item_right imgLiquidCT">
                    <img src="../image/shutterstock_19884131557555.jpg" alt="">
                </div>
            </div>
        </div>
        <div id="owner_title">
            <div class="background">
                <h3>現場施作內容</h3>
            </div>
        </div>
        <div class="content">
            <div class="wrapper">
                <div class="item">
                    <div class="text">
                        <h4>1. 一般地面施作</h4>
                        <p>
                            現場人員噴塗拜鐵膜平面施作示範。
                        </p>
                    </div>
                    <div class="video">
                        <img src="../image/818.jpg" alt="video">
                        <video controls>
                            <source src="../video/videoplayback.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
                <div class="item">
                    <div class="text">
                        <h4>2. 立面施作</h4>
                        <p>現場人員噴塗拜鐵膜立面施作示範</p>
                    </div>
                    <div class="video">
                        <img src="../image/818.jpg" alt="video">
                        <video controls>
                            <source src="../video/videoplayback.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
                <div class="item">
                    <div class="text">
                        <h4>3. L型鐵施作</h4>
                        <p>現場人員噴塗拜鐵膜L型鐵施作示範</p>
                    </div>
                    <div class="video">
                        <img src="../image/818.jpg" alt="video">
                        <video controls>
                            <source src="../video/videoplayback.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
                <div class="item">
                    <div class="text">
                        <h4>4. 搭接施作</h4>
                        <p>現場人員噴塗拜鐵膜搭接施作作示範</p>
                    </div>
                    <div class="video">
                        <img src="../image/818.jpg" alt="video">
                        <video controls>
                            <source src="../video/videoplayback.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
                <div class="item">
                    <div class="text">
                        <h4>5. 填補施作</h4>
                        <p>現場人員噴塗拜鐵膜搭接施作作示範</p>
                    </div>
                    <div class="video">
                        <img src="../image/818.jpg" alt="video">
                        <video controls>
                            <source src="../video/videoplayback.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
            </div>
        </div>
        <div id="customer_profile">
            <div class="wrapper">
                <form class="jsb df">
                    <div class="pc100">
                        <p class="prompt">*為必填項目</p>
                    </div>
                    <div class="pc50">
                        <input required type="text" placeholder="貴公司名稱*">
                        <input required type="name" placeholder="貴公司聯絡人名字*">
                        <input required type="text" placeholder="貴公司聯絡人職稱*">
                        <input required type="tel" placeholder="聯絡電話*">
                        <input required type="email" placeholder="信箱*">
                    </div>
                    <div class="pc50">
                        <input required type="text" placeholder="國家">
                        <select name="TimePeriod">
                            　<option value="1">早上</option>
                            　<option value="2">下午</option>
                            　<option value="3">晚上</option>
                            　<option value="4">凌晨</option>
                        </select>
                        <select name="TimePeriod">
                            　<option value="1">預約項目：拜鐵膜簡報服務</option>
                        </select>
                        <div class="df">
                            <div class="pc50">
                                <input required type="text" placeholder="驗證碼*">
                                <span class="refresh">刷新驗證碼</span>
                            </div>
                            <div class="pc50">
                                <img src="../image/code.jpg" alt="">
                            </div>
                        </div>
                    </div>
                    <div class="pc100 tc">
                        <button id="send" type="submit">預約工程</button>
                    </div>
                </form>
            </div>
        </div>
    </main>
    <?php include "../includes/fotter.php"; ?>
    <?php include "../includes/fotter_js.php"; ?>
</body>

</html>