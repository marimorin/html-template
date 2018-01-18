import React from 'react'
import Card from '../../components/molecules/Card'

const Articles = (props) => {
  let articleDatas = [
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
      title: 'あああああああああああ',
      content: '今日はああけけけえけけｋふううあふぁｋｊｌｋｓふぁ...',
      image: 'url(/assets/images/photo-2.jpg)',
      label: 'Hoge',
      url: '/post/2',
      author: 'うま・たろう',
      authorThumb: 'url(/assets/images/author-1.png)',
      date: '2018-01-22',
    },
  ]
  let articleItems = articleDatas.map((data, i) => {
    return <li key={`itemKey-${i}`} className="o-articles__item"><Card {...data} /></li>
  })
  return (
    <div className="o-articles">
      <ul className="o-articles__list o-articles__list--grid3">{articleItems}</ul>
    </div>
  )
}

Articles.propTypes = {}

export default Articles
