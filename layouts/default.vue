<template>
  <div>
    <div class="parent">
      <div class="header">
        <div class="title">Y<span></span>o<span></span>k<span></span>i</div>
        <div class="user">
          <div class="user-name">こんにちは Ryota さん</div>
          <div class="user-icon-pink"></div>
          <div class="user-icon-red"></div>
        </div>
      </div>
      <div class="header_line"></div>
      <div class="main">
        <div class="menu">
          <div>
            <div>最近</div>
            <div>ここ1ヶ月</div>
            <div>期間指定</div>
          </div>
        </div>
        <div class="menu_line"></div>
        <div class="inside">
          <div class=graph>
            <div class="graph-a">
              <div>
              <img src="../static/graph_sample_a.png">
              </div>
            </div>
            <div class="graph-b">
              <div>
              <img src="../static/graph_sample_b.png">
              </div>
            </div>
          </div>
          <div class="graph_line"></div>
          <div>
            <div class="posts">
              <div class="message-date">今日
              </div>
              <div class="post">
                <span class="message-icon">
                  <img src="../static/graph_sample_user_icon.png">
                </span>
                <div class="post-message">
                  <input type="text" id="post-message" v-model="content" placeholder="今日はどんな一日でしたか? ">
                  <button class="post-button" @click="insert">投<span></span>稿</button>
                </div>
              </div>
            </div>
            <div class="messages">
              <div v-for="(item, index) in messages" :key="index">
                <!--日付-->
                <div v-if="index == 0 && compDate != messages[index].created.replace(/^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2}).*/, '$2$3')" class="message-date">{{ messages[index].created.replace(/^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2}).*/, '$2月$3日') }}
                </div>
                <div v-else-if="index > 0 && messages[index - 1].created.replace(/^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2}).*/, '$2$3') != messages[index].created.replace(/^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2}).*/, '$2$3')" class="message-date">{{ messages[index].created.replace(/^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2}).*/, '$2月$3日') }}
                </div>

                <div class="message">
                  <span class="message-icon">
                    <img src="../static/graph_sample_user_icon.png">
                  </span>
                  <span class="message-text">
                    {{ item.content }}
                  <span class="message-datetime">-{{ messages[index].created.replace(/^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})/, '$2月$3日') }}</span>
                  </span>
                </div>
              </div>
            </div>

<!-- 雛形 -->
<!--
            <div class="messages">
              <div class="message-date">11月27日
              </div>
              <div class="message">
                <span class="message-icon">
                  <img src="../static/graph_sample_user_icon.png">
                </span>
                <span class="message-text">
                  演技教室で、思いのたけをアウトプットできた
                <span class="message-datetime">-11月27日 18:10</span>
                </span>
              </div>
              <div class="message">
                <span class="message-icon">
                  <img src="../static/graph_sample_user_icon.png">
                </span>
                <span class="message-text">
                  インドカレーがうまかった。
                <span class="message-datetime">-11月27日 15:09</span>
                </span>
              </div>
            </div>
            <div class="messages">
              <div class="message-date">11月26日
              </div>
              <div class="message">
                <span class="message-icon">
                  <img src="../static/graph_sample_user_icon.png">
                </span>
                <span class="message-text">
                  丹沢の不老山に登り癒やされた
                <span class="message-datetime">-11月26日 15:09</span>
                </span>
              </div>
            </div>
-->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleHeader from '~/components/SimpleHeader.vue'
import {mapState} from 'vuex';

export default {
  // html head の記述
  head: {
    title: 'Yoki',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'description' },
    ],
    script: [
      {
        // sample
        src: "https://code.jquery.com/jquery-3.5.1.min.js",
      }
    ],
    link: [
      // sample
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
      {
        rel: 'stylesheet',
        href: '/css/default_vw.css'
      }
    ],
  },  

  
  name: 'default',
  components: {
    // sample 今のところ使ってない
    SimpleHeader
  },

  data: function() {
    return { 
      content
    }
  },
  computed: {
    ...mapState(['messages']),
    compDate: function() {
      var d = new Date();
      return ('00' + (d.getMonth() + 1)).slice(-2)
        + ('00' + d.getDate()).slice(-2);
    }
  },
  methods: {
    // onclick 時の処理 
    insert: function() {
      if(this.content != ''){
        this.$store.commit(
          'insert', 
          {
            content: this.content
          });
        this.content = '';
      }
    }
  }
}
</script>

<style>


/*
@media screen and (min-width:321px) {
}

@media screen and (max-width:320px) {
 
}
*/
</style>