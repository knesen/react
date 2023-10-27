import React from 'react'
import img_review_1 from '../../assets/images/review-1.jpg'
import img_review_2 from '../../assets/images/review-2.jpg'
import img_review_3 from '../../assets/images/review-3.jpg'

const Testimonial = () => {
  return (
    <div class="testimonial container">
            <div class="testimonial-title">
                <div class="red-tag">Testimonial</div>
                <h2>What Our Client Says</h2>
            </div>
            <div class="reviews">
                <div class="reviews-item">
                    <div class="stars">
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos
                        velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate</p>
                    <div class="reviews-author">
                        <img src={img_review_1} alt="Reviewer" />
                        <div>
                            <h3>Cassandra Warren</h3>
                            <p class="red-tag">Business Manager, Dorfus</p>
                        </div>
                    </div>
                </div>
                <div class="reviews-item">
                    <div class="stars">
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                    </div>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos
                        velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate</p>
                    <div class="reviews-author">
                        <img src={img_review_2} alt="Reviewer" />
                        <div>
                            <h3>Amanda Tulling</h3>
                            <p class="red-tag">Senior Developer, Square</p>
                        </div>
                    </div>
                </div>
                <div class="reviews-item">
                    <div class="stars">
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                        <i class="fa-sharp fa-solid fa-star"></i>
                    </div>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos
                        velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate</p>
                    <div class="reviews-author">
                        <img src={img_review_3} alt="Reviewer" />
                        <div>
                            <h3>Jack McDogglas</h3>
                            <p class="red-tag">Key Account Manager, Gobona</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="center-content">
                <button class="rounded-button black-button">
                    All Reviews
                    <i class="fa-light fa-arrow-up-right"></i>
                    </button>
            </div>
        </div>
  )
}

export default Testimonial