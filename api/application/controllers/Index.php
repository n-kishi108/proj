<?php
class Index extends CI_Controller {
    public function __construct() {
        parent::__construct();
    }

    public function index() {
        //適当に作ってみたSQLiteのサンプル

        $this->load->database();  // databaseクラスの呼び出し($this->db->???で使えるようになる)
        $this->db->query('create table if not exists acount (id integer, name varchar)');   //クエリを実行。acount(int id, varchar name)テーブルが存在しなかったら作成する。

        //insert文章の実行
        $this->db->insert('acount', array(
            'id' => 01,
            'name' => 'Tom'
            )
        );

        // select * from acountを出力
        print('<pre>');
        var_dump($this->db->query('select * from acount'));
        print('</pre>');


        /**
         * もっといろんな方法があるみたいです。
         * 
         * 参考文献
         * https://pgmemo.tokyo/data/archives/1077.html
         * https://codeigniter.jp/user_guide/3/database/query_builder.html
         */
        
    }
}
