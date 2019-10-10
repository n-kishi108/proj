        <main>
            <div class="information-label">
                <div class="label">
                    <span><?= $file?count($file):0?>件ヒットしました</span>
                    <span>(0.937秒)</span>
                </div>
            </div>
            <div class="wrapper">
                <section class="result">
                    <?php if(true):?>
                    <div class="row">
                        <?php foreach($file as $line):?>
                        <div class="pane col-xs-4 col-sm-3 col-md-2">
                            <article style="background-image: url('<?=base_url().'assets/data/'.$line?>');"></article>
                        </div>
                        <?php endforeach;?>
                    </div>
                    <script>
                        $(window).on('load resize', function() {
                            let width = $('.pane').width();
                            $('.pane').height(width);
                            console.log($(window).width());
                        });
                    </script>
                    <?php else:?>
                    <p class="not-found-message">検索結果がありません</p>
                    <?php endif;?>
                </section>
            </div>
        </main>
    </body>
</html>