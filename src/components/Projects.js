import React from 'react'
import img_article_1 from '../assets/images/article-image-1.png'
import img_article_2 from '../assets/images/article-image-2.png'
import img_article_3 from '../assets/images/article-image-3.png'
import img_article_4 from '../assets/images/article-image-4.png'

const Projects = () => {
  return (
    <section class="projects">
        <div class="projects-title">
            <div class="red-tag">Project & Case Studies</div>
            <h2>Let's Looks Our Global Projects</h2>
        </div>
        <div class="projects-cases container">
            <a href="@" class="projects-item">
                <img src={img_article_1} alt="A man reading a business magazine" />
                <h3>Grow your business</h3>
                <div class="read-more">Read More<i class="fa-light fa-arrow-up-right"></i></div>

            </a>
            <a href="@" class="projects-item">
                <img src={img_article_2} alt="Pink Apple products on a desk" />
                <h3>Why your client needs a responsive website</h3>
                <div class="read-more">Read More<i class="fa-light fa-arrow-up-right"></i></div>
            </a>
            <a href="@" class="projects-item">
                <img src={img_article_3} alt="Office supplies on a desk" />
                <h3>Educate your employess to get better results</h3>
                <div class="read-more">Read More<i class="fa-light fa-arrow-up-right"></i></div>
            </a>
            <a href="@" class="projects-item">
                <img src={img_article_4} alt="A desk with a laptop showing financial metrics" />
                <h3>Business Insights is a important piece of your business</h3>
                <div class="read-more">Read More<i class="fa-light fa-arrow-up-right"></i></div>
            </a>
        </div>
        <div class="center-content">
            <a href="projects.html" class="rounded-button black-button">All Recent Projects<i
                    class="fa-light fa-arrow-up-right"></i></a>
        </div>
    </section>
  )
}

export default Projects