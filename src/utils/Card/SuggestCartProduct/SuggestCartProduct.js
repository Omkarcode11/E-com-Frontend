import React from 'react'
import './SuggestCartProduct.css';

export default function SuggestCartProduct() {
  return (
    <div>
        <div class="card text-start">
          <img class="suggested-card-img"src="https://picsum.photos/200/200" alt="Title"/>
          <div class="card-body">
            <h4 class="card-title">Title</h4>
            <p class="card-text">Body</p>
          </div>
        </div>
    </div>
  )
}
