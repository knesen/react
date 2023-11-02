import React from 'react'
import img_review_1 from '../../assets/images/review-1.jpg'
import img_review_2 from '../../assets/images/review-2.jpg'
import img_review_3 from '../../assets/images/review-3.jpg'

const Testimonial = () => {
  return (
    <div className="testimonial container">
            <div className="testimonial-title">
                <div className="red-tag">Testimonial</div>
                <h2>What Our Client Says</h2>
            </div>
            <div className="reviews">
                <div className="reviews-item">
                    <div className="stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos
                        velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate</p>
                    <div className="reviews-author">
                        <img src={img_review_1} alt="Reviewer" />
                        <div>
                            <h3>Cassandra Warren</h3>
                            <p className="red-tag">Business Manager, Dorfus</p>
                        </div>
                    </div>
                </div>
                <div className="reviews-item">
                    <div className="stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos
                        velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate</p>
                    <div className="reviews-author">
                        <img src={img_review_2} alt="Reviewer" />
                        <div>
                            <h3>Amanda Tulling</h3>
                            <p className="red-tag">Senior Developer, Square</p>
                        </div>
                    </div>
                </div>
                <div className="reviews-item">
                    <div className="stars">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </div>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos
                        velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate</p>
                    <div className="reviews-author">
                        <img src={img_review_3} alt="Reviewer" />
                        <div>
                            <h3>Jack McDogglas</h3>
                            <p className="red-tag">Key Account Manager, Gobona</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="center-content">
                <button className="rounded-button black-button">
                    All Reviews
                    <i className="fa-light fa-arrow-up-right"></i>
                    </button>
            </div>
        </div>
  )
}

export default Testimonial