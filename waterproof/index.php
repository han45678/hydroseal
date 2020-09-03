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
                <li class="reservation"><a href="../simulation">現場施作模擬</a></li>
                <li class="waterproof active"><a href="javascript:void(0)">施作建築防水觀念教學</a></li>
            </ul>
        </div>
        <div id="owner_banner">
            <div class="text">
                <div class="content">
                    <h3>施作建築防水觀念教學</h3>
                    <h4>有鑒於 防水觀念參差不齊 系統性講解</h4>
                    <p>即刻預約專屬於企業的產品簡報服務（*僅開放已簽約廠商）</p>
                    <!-- <div class="owner_drop_down">
                        <div class="title">預約產品簡報服務</div>
                        <ul>
                            <li><a href="../reservation">預約產品簡報服務</a></li>
                            <li><a href="../simulation">現場施作模擬</a></li>
                            <li><a href="../waterproof">施作建築防水觀念教學</a></li>
                        </ul>
                    </div> -->
                    <a class="reservation_button active" href="../simulation/">
                        預約
                    </a>
                </div>
            </div>
            <div class="photo">
                <div class="item_left imgLiquidCC">
                    <img src="../image/shutterstock_296369054.jpg" alt="">
                </div>
                <div class="item_right imgLiquidCT">
                    <img src="../image/shutterstock_1131557555.jpg" alt="">
                </div>
            </div>
        </div>
        <div id="owner_title">
            <div class="background slideRight wow" data-wow-delay="1s" data-wow-offset:"100">
                <h3>防水觀念教學內容</h3>
            </div>
        </div>
        <div class="content">
            <div class="wrapper">
                <div class="item">
                    <div class="text slideLeft wow" data-wow-delay="1s" data-wow-offset:"100">
                        <h4>1. 公司介紹</h4>
                        <p>
                            簡單介紹易兆企業在工程界的業務範疇跟能力。
                        </p>
                    </div>
                    <div class="video slideUp wow" data-wow-delay="1s" data-wow-offset:"100">
                        <img src="../image/818.jpg" alt="video">
                        <video controls>
                            <source src="../video/videoplayback.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
                <div class="item">
                    <div class="text slideLeft wow" data-wow-delay="1s" data-wow-offset:"100">
                        <h4>2. 建築防水施作細節分享</h4>
                        <p>
                            20年經驗，不管在土木或是建築方面，提供有效防水施工工法。
                        </p>
                    </div>
                    <div class="video slideUp wow" data-wow-delay="1s" data-wow-offset:"100">
                        <img src="../image/818.jpg" alt="video">
                        <video controls>
                            <source src="../video/videoplayback.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
                <div class="item">
                    <div class="text slideLeft wow" data-wow-delay="1s" data-wow-offset:"100">
                        <h4>3. 案例分享</h4>
                        <p>書本知識跟實際操作有一定落差，我們如何找出平衡點，並完成防水施工。</p>
                    </div>
                    <div class="video slideUp wow" data-wow-delay="1s" data-wow-offset:"100">
                        <img src="../image/818.jpg" alt="video">
                        <video controls>
                            <source src="../video/videoplayback.mp4" type="video/mp4">
                        </video>
                    </div>
                </div>
                <div class="item">
                    <div class="text slideLeft wow" data-wow-delay="1s" data-wow-offset:"100">
                        <h4>4. 現場Q&A</h4>
                        <p>施工經驗互相交流，往上一層樓。</p>
                    </div>
                    <div class="video slideUp wow" data-wow-delay="1s" data-wow-offset:"100">
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