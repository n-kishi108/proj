<?php
function read_file_to_array($path) {
    $response = array();
        //大学のサーバーにアップロードしたデータ(txt)を参照する
        $file = fopen('http://www.cc.kyoto-su.ac.jp/~g1744366/img_list.txt', 'r');
        if($file) {
            while($line = fgets($file)) {
                $line = str_replace(array("\r\n", "\r", "\n"), '', $line);
                array_push($response, $line);
            }
            fclose($file);
        }
    return $response;
}