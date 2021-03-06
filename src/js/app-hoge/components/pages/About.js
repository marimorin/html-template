import React, { Component } from 'react'
import Articles from '../organisms/Articles'

const About = (props) => {
  let articleData = {
    items: [
      {
        title: 'あああああああああああ',
        content: '今日はああけけけえけけｋふううあふぁｋｊｌｋｓふぁ...',
        image: 'url(/assets/images/photo-2.jpg)',
        label: 'Hoge',
        url: '/post/2',
        author: 'うま・たろう',
        authorThumb: 'url(/assets/images/author-1.png)',
        date: '2018-01-22',
      },
      {
        title: 'Aポッドキャスト忘年会、2017年の振り返り',
        content: 'さて、前回の記事では前回の記事では前回の記事ではVVV前回の記事ではVue.JSの基本的な動作を管理画面で実装する例をお見せしたが、今回は次のような...',
        image: 'url(/assets/images/photo-1.jpg)',
        label: 'Podcast',
        url: '/post/1',
        author: 'ほげ・たろう',
        authorThumb: 'url(/assets/images/author-1.png)',
        date: '2018-01-18',
      },
      {
        title: 'Aポッドキャスト忘年会、2017年の振り返り',
        content: 'さて、前回の記事では前回の記事では前回の記事ではVVV前回の記事ではVue.JSの基本的な動作を管理画面で実装する例をお見せしたが、今回は次のような...',
        image: 'url(/assets/images/photo-1.jpg)',
        label: 'Podcast',
        url: '/post/1',
        author: 'ほげ・たろう',
        authorThumb: 'url(/assets/images/author-1.png)',
        date: '2018-01-18',
      },
      {
        title: 'Aポッドキャスト忘年会、2017年の振り返り',
        content: 'さて、前回の記事では前回の記事では前回の記事ではVVV前回の記事ではVue.JSの基本的な動作を管理画面で実装する例をお見せしたが、今回は次のような...',
        image: 'url(/assets/images/photo-1.jpg)',
        label: 'Podcast',
        url: '/post/1',
        author: 'ほげ・たろう',
        authorThumb: 'url(/assets/images/author-1.png)',
        date: '2018-01-18',
      },
    ]
  }
  return (
    <section className="p-about-main">
      <section className="p-about-recent">
        <h2 className="a-title-front-main">Recent</h2>
        <Articles {...articleData} />
      </section>
    </section>
  )
}

export default About
