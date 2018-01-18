import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="p-front-recent">
          <h2 className="a-title-front-main">About</h2>

          <div className="o-articles">

            <ul className="o-articles__list o-articles__list--grid4">
              <li className="o-articles__item">
                <article className="m-card">
                  <a href="#" className="m-card__wrapper-link">
                    <div className="m-card__image" style={{backgroundImage: "url('/assets/images/photo-5.jpg')" }}>
                      <span className="m-card__label m-card__label--podcast">Podcast</span>
                    </div>
                    <div className="m-card__body">
                      <h3 className="m-card__title">ポッドキャスト忘年会、2017年の振り返り</h3>
                      <p className="m-card__content">さて、前回の記事ではVue.JSの基本的な動作を管理画面で実装する例をお見せしたが、今回は次のような...</p>
                      <div className="m-card__meta">
                        <div className="m-card__thumb" style={{backgroundImage: "url('/assets/images/author-1.png')" }}></div>
                        <div className="m-card__author">ほげ・たろう</div>
                        <div className="m-card__date"><time dateTime="2018-01-18">2018年1月13日</time></div>
                      </div>
                    </div>
                  </a>
                </article>
              </li>

              <li className="o-articles__item">
                <article className="m-card">
                  <a href="#" className="m-card__wrapper-link">
                    <div className="m-card__image" style={{backgroundImage: "url('/assets/images/photo-6.jpg')" }}>
                      <span className="m-card__label m-card__label--podcast">Podcast</span>
                    </div>
                    <div className="m-card__body">
                      <h3 className="m-card__title">ポッドキャスト忘年会、2017年の振り返り</h3>
                      <p className="m-card__content">さて、前回の記事ではVue.JSの基本的な動作を管理画面で実装する例をお見せしたが、今回は次のような...</p>
                      <div className="m-card__meta">
                        <div className="m-card__thumb" style={{backgroundImage: "url('/assets/images/author-1.png')" }}></div>
                        <div className="m-card__author">ほげ・たろう</div>
                        <div className="m-card__date"><time dateTime="2018-01-18">2018年1月13日</time></div>
                      </div>
                    </div>
                  </a>
                </article>
              </li>

              <li className="o-articles__item">
                <article className="m-card">
                  <a href="#" className="m-card__wrapper-link">
                    <div className="m-card__image" style={{backgroundImage: "url('/assets/images/photo-7.jpg')" }}>
                      <span className="m-card__label m-card__label--podcast">Podcast</span>
                    </div>
                    <div className="m-card__body">
                      <h3 className="m-card__title">ポッドキャスト忘年会、2017年の振り返り</h3>
                      <p className="m-card__content">さて、前回の記事ではVue.JSの基本的な動作を管理画面で実装する例をお見せしたが、今回は次のような...</p>
                      <div className="m-card__meta">
                        <div className="m-card__thumb" style={{backgroundImage: "url('/assets/images/author-1.png')" }}></div>
                        <div className="m-card__author">ほげ・たろう</div>
                        <div className="m-card__date"><time dateTime="2018-01-18">2018年1月13日</time></div>
                      </div>
                    </div>
                  </a>
                </article>
              </li>

              <li className="o-articles__item">
                <article className="m-card">
                  <a href="#" className="m-card__wrapper-link">
                    <div className="m-card__image" style={{backgroundImage: "url('/assets/images/photo-1.jpg')" }}>
                      <span className="m-card__label m-card__label--podcast">Podcast</span>
                    </div>
                    <div className="m-card__body">
                      <h3 className="m-card__title">ポッドキャスト忘年会、2017年の振り返り</h3>
                      <p className="m-card__content">さて、前回の記事ではVue.JSの基本的な動作を管理画面で実装する例をお見せしたが、今回は次のような...</p>
                      <div className="m-card__meta">
                        <div className="m-card__thumb" style={{backgroundImage: "url('/assets/images/author-1.png')" }}></div>
                        <div className="m-card__author">ほげ・たろう</div>
                        <div className="m-card__date"><time dateTime="2018-01-18">2018年1月13日</time></div>
                      </div>
                    </div>
                  </a>
                </article>
              </li>
            </ul>

          </div>
        </section>
      </div>
    )
  }
}
