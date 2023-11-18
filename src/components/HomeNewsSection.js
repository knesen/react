import React from 'react'
import img_news_1 from '../assets/images/news-1.jpg'
import img_news_2 from '../assets/images/news-2.jpg'
import img_news_3 from '../assets/images/news-3.jpg'



const News = () => {
  return (
    <section className="news container">
        <div className="red-tag">Article & News</div>
        <div className="news-title">
            <h2>Get Every Single Articles & News</h2>
            <button className="rounded-button">
                Browse Articles
                <i className="fa-light fa-arrow-up-right"></i>
            </button>
        </div>
        <div className="news-articles">
            <a href="@" className="news-item">
                <div className="date-box">
                    <strong>25</strong>
                    <p>Mar</p>
                </div>
                <img src={img_news_1} alt="Woman sitting at a desk" />
                <p className="news-category">Business</p>
                <h3>How To Use Digitalization In The classroom</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </a>
            <a href="@" className="news-item">
                <div className="date-box">
                    <strong>17</strong>
                    <p>Mar</p>
                </div>
                <img src={img_news_2} alt="Lists of ChatGPT examples, capabilities and limitations" />
                <p className="news-category">Business</p>
                <h3>How To Implement Chat GPT In Your Projects</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
            </a>
            <a href="@" className="news-item">
                <div className="date-box">
                    <strong>13</strong>
                    <p>Mar</p>
                </div>
                <img src={img_news_3} alt="A smartphone lying on a stack of books about programming" />
                <p className="news-category">Business</p>
                <h3>The Guide To Support Modern CSS Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>

            </a>
        </div>
        <div className="gallery-icon">
            <i className="fa-sharp fa-solid fa-circle-small gallery-current"></i>
            <i className="fa-sharp fa-solid fa-circle-small"></i>
            <i className="fa-sharp fa-solid fa-circle-small"></i>
            <i className="fa-sharp fa-solid fa-circle-small"></i>
            <i className="fa-sharp fa-solid fa-circle-small"></i>
        </div>
    </section>
  )
}

export default News